// Root application component configuring route definitions and React Query client.
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage.tsx";
import ProjectsPage from "./pages/Projects/ProjectsPage.tsx";
import ProjectCaseStudyPage from "./pages/Projects/ProjectCaseStudyPage.tsx";
import ServicesPage from "./pages/Services/ServicesPage.tsx";
import ExperiencePage from "./pages/Experience/ExperiencePage.tsx";
import ContactPage from "./pages/Contact/ContactPage.tsx";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:id" element={<ProjectCaseStudyPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/contact" element={<ContactPage />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </QueryClientProvider>
);

export default App;
