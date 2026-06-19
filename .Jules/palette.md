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

## 2026-02-14 - Focus Redirection in Mobile Navigation
**Learning:** For mobile menu overlays, automatically moving focus to the first interactive link upon opening significantly reduces the number of keystrokes for keyboard and screen reader users. However, a small delay (e.g., 100ms) may be needed to ensure the focus transition doesn't interrupt CSS entrance animations.
**Action:** Implement programmatic focus management for modal-like overlays, ensuring the first meaningful element is focused after a short delay.

## 2026-02-14 - Balancing Focusability and Tab Order
**Learning:** While it is tempting to make all visual chips focusable to show hover effects, adding `tabindex="0"` to non-interactive elements (like skill tags) clutters the tab order and confuses users who expect an action. It is better to reserve focus for truly interactive components while maintaining visual parity via `:focus-within` on parent containers.
**Action:** Avoid making purely decorative or informational elements focusable; use parent container focus states to trigger related visual highlights instead.
