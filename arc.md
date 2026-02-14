# Project arc

- **Reset (Feb 2025)**: `src` was cleared for a new portfolio build. Preserved content (Home, Services, Experience) is in `memory.md` at the project root.
- **Portfolio Build (Feb 2025)**: Full portfolio implemented with:
  - **Theme**: #161616 background, #ff494a primary, white text. Fonts: Rajdhani (hero), Rubik (body).
  - **Structure**: `components/` (layout, ui), `pages/` (Home, About, Experience, Projects, Services, Contact), `hooks/`, `context/`, `data/`, `styles/`, `theme/`, `lib/`.
  - **Routing**: React Router. Routes: / (Home), /about, /experience, /projects, /services, /contact.
  - **Animations**: Framer Motion (scroll pop-in, fade-out, floating elements), react-type-animation (hero typewriter).
  - **Each folder** has its own `memory.md` documenting purpose, flow, and content.
  - **Responsive (Feb 2025)**: All pages and components optimized for mobile. Global overflow-x hidden, Hero/Header/Footer centered on mobile, responsive typography and spacing, touch-friendly form inputs (min-height 44px), scaled-down floating shapes, stat cards and grids adapt for small screens.
