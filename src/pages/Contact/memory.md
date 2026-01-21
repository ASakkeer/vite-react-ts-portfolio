// Contact page section change log for `src/pages/Contact` (read before modifying files here).

## Purpose of `Contact` section

- Provide a clear, business-focused way for clients and hiring managers to initiate project discussions.
- Collect the minimum structured information needed to quickly understand the problem and follow up with scope and timelines.
- Keep tone professional and neutral, focused on collaboration rather than personal story.
- Serve as the dedicated `/contact` route in the React Router setup, replacing previous scroll-to-contact behavior.

## Decisions made

- Form fields:
  - Name
  - Email
  - Project Type
  - Message (project details)
- CTA and copy:
  - Primary call-to-action button text: “Let’s Work Together”.
  - Supporting copy: “Let’s discuss the problem first. Scope and timelines come next.” to match a senior individual-contributor positioning rather than a sales-heavy flow.
- Layout and behavior:
  - Section uses `page-section`, `max-w-[1200px]`, and `animate-fade-up` to remain consistent with other pages.
  - Form is organized in a two-column layout on desktop and stacked fields on mobile for readability.
  - Uses standard focus states and minimal motion (`pressable` on the submit button) in line with styles guidelines.
  - Current implementation includes a no-op submit handler with a TODO for wiring up to an email or service endpoint.

## Last changes applied

- **2026-01-21**: Created `Contact.tsx` with structured project inquiry form and this `memory.md` documenting fields, CTA, and layout decisions.
- **2026-01-21**: Scroll navigation removed from CTAs across the site; contact is now accessed via the `/contact` route, with header and hero CTAs linking to this page through React Router.
- **2026-01-21**: Simplified the contact form for a senior engineer positioning by removing the budget range field and updating copy to focus first on understanding the problem before discussing scope and timelines.
- **2026-01-21**: Finalized contact form with EmailJS integration. Form fields: Full Name (required), Email Address (required, validated), Project Type (dropdown: Web App, Mobile App, Internal Tool / Dashboard, Other), Message (required). Heading updated to "Let's discuss your project" with subtext "I usually respond within 24 hours." EmailJS configured with service ID, template ID, and public key. Includes loading state, success message ("Message sent successfully. I'll get back to you shortly."), error handling ("Something went wrong. Please try again later."), and form reset on successful submission. Uses existing design system with card-based layout, responsive design, and consistent styling.

