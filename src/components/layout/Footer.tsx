// Site footer with concise branding and contact emphasis.
import type { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-4 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between md:py-8">
        <p className="font-medium text-slate-600">© {new Date().getFullYear()} SAKKEER.</p>
        <p className="max-w-xl">
          Frontend React Engineer focused on shipping performant, maintainable interfaces that support
          real business outcomes.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

