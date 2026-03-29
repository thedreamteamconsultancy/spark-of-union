

## Plan: Fix Contact Mobile UI + Loading Stuck Feel

### Issue 1: "Stuck feel" after loading animation

**Root cause:** The LoadingScreen fades out over 600ms (starts at 2700ms), but `onComplete` fires at 3300ms. During the fade, the content behind is already rendered but the PageTransition component's opacity transition creates a perceived delay. The gap between fade-out start and `onComplete` is fine, but the issue is that the content div in `App.tsx` has no explicit background matching the loading screen, so there's a brief moment where the dark background shows with no content visible yet.

**Fix in `App.tsx`:** The current setup is actually clean — `showLoading` is removed when `onComplete` fires. The "stuck feel" is likely caused by the LoadingScreen's 600ms fade overlapping with nothing visible underneath because the page content hasn't painted yet. Reduce the gap: change `setFadeOut(true)` from 2700ms to 2400ms and `onComplete()` from 3300ms to 2800ms in `LoadingScreen.tsx`. This shortens the perceived wait.

### Issue 2: Contact form mobile UI — congested layout

**Fix in `Contact.tsx`:**
- Reduce hero height on mobile: `minHeight: '240px'` and use `clamp(40vh, 45vh, 50vh)` for height
- Reduce `section-padding` to smaller mobile padding by adding inline responsive padding
- Reduce contact info spacing: `space-y-4` instead of `space-y-6`, smaller icon circles (w-11 h-11 instead of w-14 h-14)
- Reduce WhatsApp button height to 48px on mobile
- Reduce `mb-10` gaps to `mb-6` on mobile
- Form card: ensure padding is `clamp(16px, 4vw, 52px)` (already partially done but needs tightening)
- Reduce form `space-y-3` to `space-y-2.5` for tighter field spacing
- Reduce textarea height to 80px on mobile
- Reduce "Office Hours" card padding and margin
- Reduce branch cards section `mt-20` to `mt-12` on mobile
- Use responsive classes: add `px-4 py-10 lg:py-16` to section instead of `section-padding`

### Files to modify
1. **`src/components/LoadingScreen.tsx`** — tighten fade timing (2400ms fade start, 2800ms complete)
2. **`src/pages/Contact.tsx`** — comprehensive mobile spacing reduction

