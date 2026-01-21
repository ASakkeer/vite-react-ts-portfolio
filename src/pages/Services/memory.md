// Services page section change log for `src/pages/Services` (read before modifying files here).

## Purpose of `Services` sections

- Communicate how frontend React skills map directly to hireable, business-oriented services.
- Make it easy for clients and hiring managers to understand where this expertise fits into their roadmap.
- Keep descriptions concrete, focusing on outcomes and deliverables instead of generic capability lists.
- Act as the main content for the `/services` route in the React Router configuration, with a compact preview used on the home route.

## Decisions made

- Defined six core services:
  1. React Web Application Development
  2. Dashboard & Admin Panels
  3. UI to React Conversion
  4. API Integration
  5. Performance Optimization
  6. Bug Fixing & Maintenance
- Each service card includes:
  - An icon that visually distinguishes the service without relying on personal imagery.
  - A short business outcome description explaining the value of the service.
  - A bulleted list of concrete deliverables for quick scanning.
- Layout and interactions:
  - Cards are arranged in a responsive grid (1 column on small screens, 2 on medium, 3 on large).
  - Uses `hover-elevate` with light borders and no persistent drop shadow so the services section reads as supportive, not visually dominant.
  - Section uses `page-section`, `max-w-[1200px]`, and `animate-fade-up` to stay consistent with layout and animation guidelines.

## Last changes applied

- **2026-01-21**: Created `Services.tsx`, `ServiceCard.tsx`, and initial `memory.md` documenting the six service types, card structure, and layout decisions.
- **2026-01-21**: Scroll navigation removed from the overall app; services are now reached via the `/services` route, with the home page using a separate summary component that links to this route.
- **2026-01-21**: Reduced visual weight of services cards slightly (removed card shadow and softened title weight) to keep them secondary to projects on the home page while preserving layout, spacing, colors, and copy.

