

## Plan: Fix 5 Critical Issues

### Root Cause Analysis

**The core problem** behind issues 1 (modal not visible), 3 (header not sticky), and 5 (stuck feel) is the same: In `App.tsx`, the content wrapper div has an `opacity` transition, and `PageTransition.tsx` applies `transform: translateY(0)`. A CSS `transform` on a parent element creates a new **containing block** for `position: fixed` descendants — meaning the Header and AuthModal, which use `position: fixed`, are positioned relative to the PageTransition div instead of the viewport. This breaks both the sticky header and the modal centering.

### Changes

#### 1. Fix Header, Modal, and "Stuck Feel" — `App.tsx` + `PageTransition.tsx`

**App.tsx:**
- Remove the `opacity` transition wrapper around BrowserRouter entirely — set `contentVisible` to directly control `showLoading` without an intermediate opacity fade. The loading screen's own 600ms fade-out is sufficient.
- This eliminates the double-transition "stuck feel" after loading.

**PageTransition.tsx:**
- Replace `transform: translateY(...)` with only `opacity` transition. The `transform` property is what breaks `position: fixed` for Header and AuthModal inside pages.
- Change from `transform + opacity` to `opacity`-only transition.

**AuthModal.tsx:**
- Render the modal via `ReactDOM.createPortal(modalContent, document.body)` so it escapes any stacking context entirely. This guarantees it always appears centered in the viewport regardless of parent transforms.

#### 2. Fix Mobile Sidebar Buttons — `Header.tsx`

- Remove `overflowY: 'auto'` from the panel's root div (line 244) — this causes the entire panel to scroll, pushing buttons off-screen.
- Add `overflow: hidden` to the panel root instead.
- The nav section already has `flexGrow: 1` and `overflowY: auto` — with the panel not scrolling, the nav will scroll internally while buttons stay pinned at the bottom.

#### 3. Fix Contact Form Mobile — `Contact.tsx`

- Reduce form card padding on mobile using `clamp(16px, 3vw, 52px)` for all directions.
- Reduce label `marginBottom` from `2.5` (10px) to `1.5` (6px).
- Reduce `space-y-4` (16px gaps) to `space-y-3` (12px gaps).
- Ensure the two-column layout (`grid-cols-1 lg:grid-cols-2`) stacks properly with appropriate mobile spacing.

#### 4. Remove "Stuck Feel" After Loading — `App.tsx`

- Instead of the current two-phase approach (make content visible → wait for frames → remove loading), simplify: when `onComplete` fires, immediately set `showLoading = false`. The loading screen has already faded out by this point.
- Remove the `contentVisible` state and the opacity wrapper entirely. Content renders immediately (hidden behind the loading screen's z-index 9999).

### Files Modified
- `src/App.tsx` — remove opacity wrapper and contentVisible state
- `src/components/PageTransition.tsx` — remove transform, use opacity only
- `src/components/AuthModal.tsx` — add React portal to document.body
- `src/components/Header.tsx` — fix mobile panel overflow
- `src/pages/Contact.tsx` — compact mobile form spacing

