## 2025-05-14 - Themed Focus Indicators
**Learning:** For dark-themed portfolios with primary accent colors (like gold), using the primary accent color for `focus-visible` outlines provides a high-contrast yet aesthetically integrated navigation experience.
**Action:** Always check for a `--clr-primary` or equivalent variable to use as the base for custom focus indicators instead of default browser styles.

## 2025-05-15 - Mobile Menu Accessibility and Interaction
**Learning:** In mobile-first or responsive designs, a menu that is visually hidden but not removed from the tab order can cause confusing keyboard navigation. Background scroll locking is also critical for maintaining context when a modal-like menu is active.
**Action:** Always combine `visibility: hidden` and `pointer-events: none` for inactive overlays, and implement body scroll locking with a `.no-scroll` utility when they are active.

## 2025-05-16 - Comprehensive Mobile Menu Accessibility
**Learning:** Transforming a mobile navigation overlay into a proper accessible dialog requires: 1. Semantic roles (`role="dialog"`, `aria-modal="true"`), 2. Dynamic state feedback (`aria-expanded`, `aria-label`), 3. Manual focus trapping including the toggle button, and 4. Returning focus to the trigger on close. Caching focusable elements when the menu opens prevents redundant DOM lookups during rapid keyboard navigation.
**Action:** Use a consistent focus-trapping utility pattern that includes the trigger button if it remains visible as the "close" mechanism.
