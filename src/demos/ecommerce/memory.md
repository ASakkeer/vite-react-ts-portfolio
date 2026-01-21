// E-commerce demo change log for `src/demos/ecommerce` (read before modifying files here).

## Purpose of the demo

- Provide a realistic e-commerce frontend example that demonstrates product browsing, client-side filtering, cart interactions, and a checkout UI flow.
- Show how a senior frontend engineer structures state, components, and data for a small but complete product experience.
- Support the portfolio’s product-focused positioning with a consumer-style demo that complements the B2B revenue analytics dashboard.

## Scope decisions

- Route: `/demos/ecommerce` exposed as a standalone demo inside the existing portfolio.
- Features included in the MVP:
  - Product listing grid with placeholder imagery, name, price, category, and “Add to Cart”.
  - Client-side filters for category and price range.
  - Cart UI with add/remove, quantity updates, and subtotal calculation.
  - Checkout UI (no payment) with a simple shipping information form and order summary.
- Intentional exclusions for the MVP:
  - No authentication, order history, or saved carts.
  - No real payments or integration with external providers.
  - No additional animations beyond what the global design system already provides.

## Data and state

- All product data is defined as static JSON under `data/`.
- Cart and filter state are managed client-side via React hooks under `hooks/` and utilities under `utils/`.
- No backend or API calls are used; all flows are simulated in memory.

## Last changes applied

- **2026-01-21**: Created the `ecommerce` demo folder with `components/`, `data/`, `hooks`, `pages/`, `utils/`, and this `memory.md` documenting purpose, scope, exclusions, and data/state decisions for Phase 2 – Project #2.

