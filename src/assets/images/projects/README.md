# Project thumbnails

Drop your project thumbnail images here (e.g. `my-app.png`, `dashboard.jpg`).

**Usage:** In `src/data/projects.mock.ts` you can either:

1. **Import from here** (recommended; images are bundled and cached):
   ```ts
   import thumb1 from "@/assets/images/projects/revenue-dashboard.jpg";
   // In projectsData: image: thumb1
   ```

2. **Use `public` folder:** Put images in `public/projects/` and reference as:
   ```ts
   image: "/projects/revenue-dashboard.jpg"
   ```

Recommended size: about 600×400 px (or same aspect ratio) for the grid.
