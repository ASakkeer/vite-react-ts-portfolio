# Pages

## Purpose

Route-level pages for the portfolio.

## Structure

- **Home/** – HomePage (short versions of everything)
- **About/** – AboutPage (cards, skills, stats, education)
- **Experience/** – ExperiencePage (professional roles only)
- **Projects/** – ProjectsPage, ProjectsList, ProjectCard
- **Services/** – ServicesPage, ServiceCard
- **Contact/** – ContactPage

## Routes

| Path       | Page          |
|------------|---------------|
| /          | HomePage      |
| /about     | AboutPage     |
| /experience| ExperiencePage|
| /projects  | ProjectsPage  |
| /services  | ServicesPage  |
| /contact   | ContactPage   |

## Flow

- Home: Hero → Services (short) → Projects (short) → About stats (short) → Experience preview (short)
- Projects: Grid of mock project cards
- Services: Grid of six services from memory.md
- Experience: Timeline of roles + core skills badges
- Contact: Form (EmailJS) + contact details display

## Dependencies

- react-router-dom, framer-motion
- @/components, @/data
