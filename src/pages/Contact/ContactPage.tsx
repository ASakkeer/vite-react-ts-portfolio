// Route-level contact page exposing the project inquiry form.
import type { FC } from "react";
import Layout from "../../components/layout/Layout";
import Contact from "./Contact";

const ContactPage: FC = () => {
  return (
    <Layout>
      <Contact />
    </Layout>
  );
};

export default ContactPage;

