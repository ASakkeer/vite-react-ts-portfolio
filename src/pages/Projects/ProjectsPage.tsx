// Route-level projects page listing all case-study projects.
import type { FC } from "react";
import Layout from "../../components/layout/Layout";
import ProjectsList from "./ProjectsList";

const ProjectsPage: FC = () => {
  return (
    <Layout>
      <ProjectsList />
    </Layout>
  );
};

export default ProjectsPage;

