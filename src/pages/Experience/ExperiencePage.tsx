// Route-level experience page summarizing roles and impact.
import type { FC } from "react";
import Layout from "../../components/layout/Layout";
import Experience from "./Experience";

const ExperiencePage: FC = () => {
  return (
    <Layout>
      <Experience />
    </Layout>
  );
};

export default ExperiencePage;

