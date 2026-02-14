/**
 * Mock project data for Projects page.
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
}

export const projectsMock: Project[] = [
  {
    id: "1",
    title: "Revenue Analytics Dashboard",
    category: "Dashboard",
    description: "Analytics dashboard for MRR tracking, account metrics, and revenue visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    id: "2",
    title: "E-Commerce Storefront",
    category: "E-Commerce",
    description: "Customer-facing e-commerce platform with product filters, cart, and checkout flow.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    id: "3",
    title: "Operations Task Manager",
    category: "Operations",
    description: "Internal ops tool for task management, status tracking, and team collaboration.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    id: "4",
    title: "Website Form Builder",
    category: "Web",
    description: "Dynamic form builder with validation and multi-step flows.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    id: "5",
    title: "Personal Portfolio",
    category: "Portfolio",
    description: "Modern portfolio site with animations and responsive design.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    id: "6",
    title: "React Admin Panel",
    category: "Admin",
    description: "Role-based admin panel with data tables, filters, and KPI cards.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    link: "#",
  },
];
