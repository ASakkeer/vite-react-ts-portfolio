// Route-level services page showing the full services grid.
import type { FC } from "react";
import Layout from "../../components/layout/Layout";
import Services from "./Services";

const ServicesPage: FC = () => {
  return (
    <Layout>
      <Services />
    </Layout>
  );
};

export default ServicesPage;

