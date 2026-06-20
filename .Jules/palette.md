## 2025-05-14 - Themed Focus Indicators
**Learning:** For dark-themed portfolios with primary accent colors (like gold), using the primary accent color for `focus-visible` outlines provides a high-contrast yet aesthetically integrated navigation experience.
**Action:** Always check for a `--clr-primary` or equivalent variable to use as the base for custom focus indicators instead of default browser styles.

## 2026-06-02 - Synchronizing Hover and Focus States
**Learning:** In highly interactive visual interfaces, keyboard users often miss out on "delight" features (like card lift and border reveals) if they are only bound to `:hover`. Mapping these effects to `:focus-visible` ensures that keyboard navigation feels as premium and responsive as mouse interaction.
**Action:** Always extend `:hover` visual effects to `:focus-visible` for key interactive components to maintain accessibility and UX parity.

## 2025-05-15 - Scroll Progress Feedback
**Learning:** Adding a visual progress indicator to the "Back to Top" button provides non-intrusive feedback on the user's position within long-form content, enhancing the sense of control and orientation.
**Action:** Use SVG with `pathLength="100"` and `stroke-dashoffset` for performant and simple scroll progress indicators.

## 2026-06-12 - Accessible Clipboard Feedback
**Learning:** Providing auditory feedback for clipboard operations requires a combination of `aria-live` regions and temporary `aria-label` updates. To prevent state corruption (stuck labels) during rapid interactions, capture original attribute values outside the event listener scope.
**Action:** Always store original UI states as constants when implementing temporary feedback loops to ensure reliable restoration.

## 2025-02-14 - Floating Button Visibility & Layout Constraints for Tooltips
**Learning:** Floating action buttons with thin progress rings (like "Back to Top") require an explicit background color to maintain visibility across varying section backgrounds. Additionally, contextual tooltips (like "Copied!" badges) fail if parent containers use `overflow: hidden`; layout aesthetics should be maintained via child border-radii instead.
**Action:** Always verify floating UI contrast against all site sections and prefer semantic radius application over overflow clipping when using relative-positioned children.

## 2026-06-18 - Aesthetic Continuity through Scrollbars
**Learning:** For boutique brand portfolios, the browser's default scrollbar can feel like a jarring "default" element in an otherwise bespoke experience. Implementing a subtle, brand-themed scrollbar using `::-webkit-scrollbar` variables (like `--clr-primary`) creates a fully immersive "contained" feel for the user.
**Action:** Consider custom scrollbars as a low-cost, high-impact final polish for single-page visual-heavy portfolios.
