## 2025-05-14 - Themed Focus Indicators
**Learning:** For dark-themed portfolios with primary accent colors (like gold), using the primary accent color for `focus-visible` outlines provides a high-contrast yet aesthetically integrated navigation experience.
**Action:** Always check for a `--clr-primary` or equivalent variable to use as the base for custom focus indicators instead of default browser styles.

## 2025-05-15 - Mobile Menu Accessibility and Interaction
**Learning:** In mobile-first or responsive designs, a menu that is visually hidden but not removed from the tab order can cause confusing keyboard navigation. Background scroll locking is also critical for maintaining context when a modal-like menu is active.
**Action:** Always combine `visibility: hidden` and `pointer-events: none` for inactive overlays, and implement body scroll locking with a `.no-scroll` utility when they are active.
