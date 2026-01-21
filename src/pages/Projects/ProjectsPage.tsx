// Route-level projects page listing all case-study projects.
import type { FC } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import ProjectsList from "./ProjectsList";

const ProjectsPage: FC = () => {
  return (
    <Layout>
      <section className="mb-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50/80 p-4 text-xs text-slate-600">
        <div className="space-y-1">
          <p>
            Live Demo (Preview):{" "}
            <Link
              to="/demos/revenue-analytics"
              className="font-semibold text-[#2563EB] underline-offset-2 hover:underline"
            >
              Revenue Analytics Dashboard
            </Link>
          </p>
          <p>
            E-commerce Demo (Preview):{" "}
            <Link
              to="/demos/ecommerce"
              className="font-semibold text-[#2563EB] underline-offset-2 hover:underline"
            >
              Storefront & Cart
            </Link>
          </p>
        </div>
      </section>
      <ProjectsList />
    </Layout>
  );
};

export default ProjectsPage;

