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

## 2025-05-16 - Neutralizing Sticky Hover on Touch
**Learning:** Elements with CSS `transform` on `:hover` (like cards or chips) often remain in their hovered state after a tap on mobile devices. This "sticky hover" can lead to a cluttered or broken-looking interface.
**Action:** Use the `@media (hover: none)` media query to neutralize `transform` and other hover-only effects for touch devices while maintaining focus-visible accessibility.

## 2025-05-16 - Natural Language Clipboard Feedback
**Learning:** Generic clipboard feedback like "Label copied" can sound robotic and repetitive. Refining the announcement to remove action verbs (like "Copy") and adding context ("to clipboard") provides a more human and accessible confirmation.
**Action:** Use string manipulation to clean up button labels before using them in live region announcements for a more polished auditory experience.
