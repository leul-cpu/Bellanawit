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

## 2026-06-21 - Unified Tactile Feedback
**Learning:** Adding a subtle `transform: scale(0.97)` on the `:active` state of all interactive elements (buttons, cards, chips, icons) provides immediate, satisfying feedback that mimics physical interaction, making the interface feel more responsive and high-end.
**Action:** Implement a global `:active` rule for primary interactive components to ensure consistent tactile feedback across the site.

## 2026-06-21 - Decorative Element Hygiene
**Learning:** Visual indicators like status dots or background orbs that lack semantic meaning should be explicitly hidden from screen readers using `aria-hidden="true"`. This prevents assistive technology from focusing on or announcing "empty" visual artifacts, keeping the focus on relevant content like the adjacent availability text.
**Action:** Always audit visual-only elements for `aria-hidden` to ensure a clean, noise-free experience for screen reader users.

## 2027-01-15 - Programmatic Navigation Relationships
**Learning:** For accessible navigation menus, establishing a programmatic connection between the trigger and the container (using `aria-controls` on the button and a matching `id` on the menu) ensures that screen reader users can correctly identify and navigate to the controlled content.
**Action:** Always pair mobile menu triggers with their target containers using `aria-controls` and `id`.

## 2026-07-03 - Robust Temporary UI Feedback
**Learning:** Managing temporary UI states (like clipboard feedback) requires explicit timeout tracking (e.g., using a `Map`) to prevent race conditions or "stuck" states when users interact rapidly. Combined with micro-animations (like a "pop" scale), this makes the interaction feel both robust and delightful.
**Action:** Use a `Map` or similar registry to track and clear pending timeouts for any element-specific temporary UI feedback loops.

## 2027-01-15 - Status as Call-to-Action
**Learning:** Converting status-related badges (like "Available for Work") into functional anchor links that point to relevant CTAs (like a contact section) reduces friction and provides a more intuitive path for users motivated by the status information.
**Action:** Look for opportunities to turn informational status indicators into interactive shortcuts for key user journeys.
