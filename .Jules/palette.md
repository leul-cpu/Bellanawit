## 2025-05-14 - Themed Focus Indicators
**Learning:** For dark-themed portfolios with primary accent colors (like gold), using the primary accent color for `focus-visible` outlines provides a high-contrast yet aesthetically integrated navigation experience.
**Action:** Always check for a `--clr-primary` or equivalent variable to use as the base for custom focus indicators instead of default browser styles.

## 2025-05-15 - Mobile Menu Accessibility & Background Control
**Learning:** Off-screen mobile menus (e.g., using `right: -100%`) remain in the tab order unless explicitly hidden with `visibility: hidden` or `display: none`. Additionally, background scrolling during an active overlay (like a menu) can be disorienting for users.
**Action:** Combine `visibility: hidden` and `pointer-events: none` on inactive overlays to prevent keyboard focus leaks, and always implement a `.no-scroll` class on the body when the menu is active to lock the background.
