import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.08] py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-[#A1A1AA]">
        <div className="flex items-center gap-3">
          <Logo variant="white" className="h-7 w-auto" />
          <span>Sakkeer A. — Senior Software Engineer</span>
        </div>
        <span>© 2026</span>
      </div>
    </footer>
  );
}
