## 2025-05-14 - Themed Focus Indicators
**Learning:** For dark-themed portfolios with primary accent colors (like gold), using the primary accent color for `focus-visible` outlines provides a high-contrast yet aesthetically integrated navigation experience.
**Action:** Always check for a `--clr-primary` or equivalent variable to use as the base for custom focus indicators instead of default browser styles.

## 2025-05-15 - Accessible Mobile Menus & Focus Trapping
**Learning:** When implementing a mobile menu as an accessible dialog (`role="dialog"`, `aria-modal="true"`), the trigger button (hamburger) must be included in the focus trap if it remains visible and serves as the primary close mechanism, even if it's outside the menu's DOM container.
**Action:** Cache focusable elements including the trigger when opening a menu and use a `keydown` listener to manage circular Tab navigation.

## 2025-05-15 - Fixed Navbar Click Interception
**Learning:** A fixed navbar can intercept clicks meant for a mobile menu overlay even if it appears visually behind it or transparent. Using `pointer-events: none` on the navbar while the menu is open, and selectively re-enabling it for the logo and toggle, ensures a clean interaction model.
**Action:** Use a `.no-scroll .navbar` CSS selector to manage interactivity states when modal overlays are active.

