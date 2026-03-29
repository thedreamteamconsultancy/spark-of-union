

## Plan: Fix 6 Issues Across the Site

### 1. Fix Flash After Loading Animation
**Problem**: The loading screen fades out (opacity 0) at 2700ms and calls `onComplete` at 2800ms — only 100ms gap causes a visible flash as the hero images may not yet be ready.
**Fix**: In `App.tsx`, keep the loading screen mounted but invisible for longer. In `LoadingScreen.tsx`, increase the gap between fade-out start and `onComplete` to ~500ms. Also ensure the hero background color matches the loading screen's dark background so there's no white flash.

### 2. Fix "Path to Forever" Circle Clipping
**Problem**: The desktop timeline circles get clipped at the top because the parent container has `overflow: hidden`. The scaled circles (scale 1.12) with outer glow (`0 0 0 8px`) extend beyond the container bounds.
**Fix**: In `HowItWorksSection.tsx`, add top padding to the timeline container (`pt-6` or similar) so the circles and their box-shadow/glow aren't cut off. Remove or adjust the `overflow: hidden` on the parent.

### 3. Fix Contact Page — Form Layout & Dynamic Maps
**Problem A**: Form feels congested on smaller screens.
**Fix**: Add more spacing, larger padding, and breathing room between form fields. Increase border-radius, adjust typography sizing for a more premium feel.

**Problem B**: Clicking different branches always shows the same map.
**Fix**: Add Google Maps embed URLs per branch with their actual coordinates. Store a `mapUrl` per branch. Track selected branch in state, and swap the iframe `src` when a branch card is clicked.

### 4. Add Services Dropdown in Header
**Problem**: No services pages exist yet.
**Fix**:
- Create 4 new pages: `VerifiedProfiles.tsx`, `DedicatedRM.tsx`, `PrivacySettings.tsx`, `SuccessStories.tsx` — each with a premium hero + content layout matching the site's visual identity.
- In `Header.tsx`, add a "Services" nav item with a hover dropdown that reveals the 4 sub-page links. The dropdown will have a glass-morphism dark background with gold accents, smooth fade-in animation.
- Add corresponding routes in `App.tsx`.

### 5. Fix Header & Timeline Responsiveness
**Problem**: Header nav items are congested on medium screens (around 768-1024px). Timeline cards also squeeze.
**Fix**:
- Reduce header nav gap from `48px` to a responsive value using clamp. Reduce font sizes slightly on medium screens.
- For the timeline, use smaller circles and tighter padding on tablet breakpoints, and ensure the cards don't overflow.

### 6. Redesign "Stories That Inspire" — 3D Carousel
**Problem**: Currently shows all 3 stories in a flat grid (desktop) or horizontal scroll (mobile).
**Fix**: Replace with a single-story-at-a-time 3D carousel:
- Show one card centered with rounded corners (square-ish aspect ratio).
- Adjacent cards visible as smaller, rotated, faded previews on left/right (CSS perspective + rotateY transforms).
- Auto-rotate every 5s with smooth CSS transitions.
- Navigation dots + left/right arrows.
- The active card has full opacity and scale, side cards have reduced opacity, smaller scale, and rotateY(±35deg) for 3D depth effect.

### Technical Details

**Files to modify:**
- `src/components/LoadingScreen.tsx` — timing adjustments
- `src/App.tsx` — loading transition, new routes
- `src/components/HowItWorksSection.tsx` — overflow/padding fix, responsive adjustments
- `src/pages/Contact.tsx` — form spacing overhaul, dynamic map per branch
- `src/components/Header.tsx` — Services dropdown, responsive gap/sizing
- `src/components/TestimonialsSection.tsx` — complete rewrite to 3D carousel

**Files to create:**
- `src/pages/VerifiedProfiles.tsx`
- `src/pages/DedicatedRM.tsx`
- `src/pages/PrivacySettings.tsx`
- `src/pages/SuccessStories.tsx`

