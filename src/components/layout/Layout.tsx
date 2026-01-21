// Page layout shell with sticky header, centered content, and footer.
import type { FC, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="page-shell bg-slate-50 text-slate-900">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-[1200px] px-4 py-8 md:py-12">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

