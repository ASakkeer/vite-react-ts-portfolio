// Route-level home page showing hero, services preview, and project highlights.
import type { FC } from "react";
import Layout from "../../components/layout/Layout";
import Hero from "./Hero";
import ServicesSummary from "./ServicesSummary";
import ProjectsList from "../Projects/ProjectsList";

const HomePage: FC = () => {
  return (
    <Layout>
      <Hero />
      <ServicesSummary />
      <ProjectsList />
    </Layout>
  );
};

export default HomePage;

