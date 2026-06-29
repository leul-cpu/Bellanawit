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

## 2026-06-20 - Staggered Menu Entrance Animations
**Learning:** Entrance animations for mobile menu elements (.mobile-link, .mobile-cta) utilize 'opacity' and 'transform' transitions tied to design tokens like 'var(--transition-smooth)'; staggered delays are achieved by adding the '.stagger' class to children and ensuring 'transition-delay: inherit' is set on the animation reveal state.
**Action:** Use existing staggered delays in the CSS by applying the '.stagger' class to sibling elements and ensuring they inherit transitions for a coordinated reveal.

## 2026-06-25 - Interactive Feedback for Navigation Elements
**Learning:** CSS 'transform' properties on flex children (e.g., the '.logo' in the nav-container) require an explicit 'display: inline-block' or 'display: block' property to ensure scaling transitions and transforms render reliably across browsers.
**Action:** Always ensure target elements for scale transforms have a non-inline display property to maintain visual reliability during interactive states.
