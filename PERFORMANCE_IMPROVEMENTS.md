# Performance Improvements

This document outlines the performance optimizations made to the SanderBreivik.no website.

## Summary of Changes

### 1. Fixed Analytics Initialization (`pages/_app.tsx`)
**Issue:** Analytics were being initialized on every component render, causing unnecessary overhead and potential duplicate tracking events.

**Solution:** Moved `ReactGA.initialize()` and `ReactGA.send()` inside the `useEffect` hook with an empty dependency array to ensure they only run once when the app mounts.

**Impact:** Reduces unnecessary re-initialization of tracking libraries, improving app performance and preventing duplicate analytics events.

### 2. Fixed Memory Leak in Features Component (`components/Features.tsx`)
**Issue:** The cleanup function was calling `clearTimeout()` instead of `clearInterval()`, causing the interval to continue running even after component unmount.

**Solution:** Changed `clearTimeout(intervalId)` to `clearInterval(intervalId)`.

**Impact:** Prevents memory leaks and ensures proper cleanup when the component unmounts.

### 3. Added React.memo to Features Component
**Issue:** The Features component was re-rendering unnecessarily when parent components re-rendered.

**Solution:** Wrapped the component with `React.memo()` to prevent unnecessary re-renders when props haven't changed.

**Impact:** Reduces unnecessary re-renders, improving overall application performance.

### 4. Optimized Sparkle Generation (`pages/sprakles.tsx`)
**Issue:** The sparkle filtering was reading from closure state, causing stale closure issues and potential re-render problems.

**Solution:** Changed to use the functional form of `setSparkles` to access current state, ensuring accurate filtering and preventing unnecessary array operations.

**Impact:** More efficient state updates, prevents stale closures, and reduces unnecessary re-renders.

### 5. Optimized Footer Component (`components/Footer.tsx`)
**Issue:** The large `randomSites` array and helper functions were defined inside the component scope, causing them to be recreated on every render.

**Solution:** Moved the `randomSites` array and `getRandomSite()` function outside the component scope to module level.

**Impact:** Prevents unnecessary array and function recreation on every render, reducing memory allocation.

### 6. Optimized Toggle Function (`pages/index.tsx`)
**Issue:** The `toggleDropdown` function was recreated on every render and didn't use the functional form of state setter.

**Solution:** Used `React.useCallback()` to memoize the function and changed to use the functional form of `setDropdownVisible`.

**Impact:** Prevents function recreation on every render and ensures correct state updates.

### 7. Reduced Code Duplication in CV Pages
**Issue:** Both `CV-en.tsx` and `CV-no.tsx` had duplicate implementations of email decoding and PDF generation logic.

**Solution:** 
- Created `utils/email.ts` with shared `getDecodedEmail()` function
- Created `utils/pdf.ts` with shared `downloadCVAsPDF()` function
- Updated both CV pages to use these utilities
- Added `useCallback` to optimize event handlers

**Impact:** 
- Reduced code duplication by ~50 lines
- Easier maintenance (changes only need to be made once)
- More consistent behavior between English and Norwegian CV pages
- Better error handling in PDF generation
- Improved performance with memoized callbacks

### 8. Installed Sharp for Image Optimization
**Issue:** Next.js build warned about missing 'sharp' package for production image optimization.

**Solution:** Added `sharp` to package dependencies.

**Impact:** Enables Next.js to use the high-performance sharp library for image optimization, resulting in faster image processing and better quality output.

### 9. Updated Browserslist Database
**Issue:** The caniuse-lite database was outdated, potentially causing incorrect browser targeting.

**Solution:** Updated browserslist database to the latest version.

**Impact:** Ensures accurate browser targeting and optimal polyfill selection for better performance and compatibility.

## Performance Metrics

### Bundle Size Impact
- The shared utilities approach reduces overall JavaScript bundle size
- CV pages now share common code instead of duplicating it

### Runtime Performance
- Eliminated unnecessary re-initializations of analytics
- Prevented memory leaks from uncleaned intervals
- Reduced unnecessary component re-renders
- More efficient state updates with functional setters

## Future Optimization Opportunities

1. **Code Splitting**: Consider using dynamic imports for heavy components like the PDF generator
2. **Lazy Loading**: Implement lazy loading for images and components below the fold
3. **Service Worker**: Add a service worker for offline support and faster repeat visits
4. **Prefetching**: Use Next.js link prefetching for faster navigation
5. **Image Optimization**: Consider using next/image for all images, not just the profile picture
6. **Bundle Analysis**: Run webpack-bundle-analyzer to identify large dependencies that could be replaced or lazy-loaded

## Testing Recommendations

When testing these changes, verify:
1. Analytics events are only sent once per page load
2. Features component text transitions work correctly
3. Sparkles animation performs smoothly
4. CV download functionality works in both English and Norwegian versions
5. Email reveal functionality works correctly across all pages
6. No console errors or warnings
7. Memory usage remains stable over time
