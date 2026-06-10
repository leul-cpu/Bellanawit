## 2025-05-14 - Themed Focus Indicators
**Learning:** For dark-themed portfolios with primary accent colors (like gold), using the primary accent color for `focus-visible` outlines provides a high-contrast yet aesthetically integrated navigation experience.
**Action:** Always check for a `--clr-primary` or equivalent variable to use as the base for custom focus indicators instead of default browser styles.

## 2026-06-02 - Synchronizing Hover and Focus States
**Learning:** In highly interactive visual interfaces, keyboard users often miss out on "delight" features (like card lift and border reveals) if they are only bound to `:hover`. Mapping these effects to `:focus-visible` ensures that keyboard navigation feels as premium and responsive as mouse interaction.
**Action:** Always extend `:hover` visual effects to `:focus-visible` for key interactive components to maintain accessibility and UX parity.

## 2025-05-15 - Scroll Progress Feedback
**Learning:** Adding a visual progress indicator to the "Back to Top" button provides non-intrusive feedback on the user's position within long-form content, enhancing the sense of control and orientation.
**Action:** Use SVG with `pathLength="100"` and `stroke-dashoffset` for performant and simple scroll progress indicators.

## 2025-05-16 - Contextual Clipboard Actions
**Learning:** For portfolios where quick contact is key, adding one-click "Copy to Clipboard" buttons next to email and phone links reduces friction. Screen reader users benefit from explicit ARIA labels on these buttons, and all users benefit from immediate visual feedback (e.g., icon swaps and color shifts).
**Action:** Always provide visual and auditory (via ARIA live if needed, or clear labels) feedback for clipboard operations.

## 2025-05-16 - Safe Composite Row Focus
**Learning:** When creating composite interactive rows (like a link followed by a copy button), using `:focus-within` on the parent container ensures the entire row highlights when either element is focused, providing a clearer visual anchor for keyboard users.
**Action:** Use `:focus-within` on wrappers to maintain consistent row styling during nested element interaction.
