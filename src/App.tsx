/**
 * Root application component. Sets up providers and routing.
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import { NavigationProvider } from "@/context/NavigationContext";
import { Layout } from "@/components/layout/Layout";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { HomePage } from "@/pages/Home/HomePage";
import { AboutPage } from "@/pages/About/AboutPage";
import { ProjectsPage } from "@/pages/Projects/ProjectsPage";
import { ServicesPage } from "@/pages/Services/ServicesPage";
import { ExperiencePage } from "@/pages/Experience/ExperiencePage";
import { ContactPage } from "@/pages/Contact/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ThemeProvider>
        <NavigationProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="experience" element={<ExperiencePage />} />
              <Route path="contact" element={<ContactPage />} />
            </Route>
          </Routes>
        </NavigationProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
