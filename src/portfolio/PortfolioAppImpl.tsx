import "@/portfolio/styles/portfolio.css";
import { Header } from "@/portfolio/components/Header";
import { Footer } from "@/portfolio/components/Footer";
import { CustomCursor } from "@/portfolio/components/CustomCursor";
import { CursorFire } from "@/portfolio/components/CursorFire";
import { BoredToggle } from "@/portfolio/components/BoredToggle";
import { PlayAnythingPanel } from "@/portfolio/components/PlayAnythingPanel";
import { ModeDemoPanel } from "@/portfolio/components/ModeDemoPanel";
import { ScrollChoreography } from "@/portfolio/components/ScrollChoreography";
import { PlayModeProvider, usePlayMode } from "@/portfolio/play/PlayModeContext";
import { Hero } from "@/portfolio/sections/Hero";
import { Build } from "@/portfolio/sections/Build";
import { Metrics } from "@/portfolio/sections/Metrics";
import { Experience } from "@/portfolio/sections/Experience";
import { PersonalWork } from "@/portfolio/sections/PersonalWork";
import { EngineeringDepth } from "@/portfolio/sections/EngineeringDepth";
import { Contact } from "@/portfolio/sections/Contact";

function PortfolioShell() {
  const { fireEnabled } = usePlayMode();

  return (
    <div className="min-h-screen w-full bg-[#0B0B0D] text-[#F5F5F5] overflow-x-hidden relative">
      <a
        href="#scene-hero"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:bg-[#FF494A] focus:text-[#0B0B0D] focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      {fireEnabled ? <CursorFire active /> : null}
      <CustomCursor />
      <ScrollChoreography />
      <Header />
      <main className="relative z-10 pt-16">
        <Hero />
        <Build />
        <Metrics />
        <Experience />
        <PersonalWork />
        <EngineeringDepth />
        <Contact />
      </main>
      <Footer />
      <BoredToggle />
      <PlayAnythingPanel />
      <ModeDemoPanel />
    </div>
  );
}

export function PortfolioAppImpl() {
  return (
    <PlayModeProvider>
      <PortfolioShell />
    </PlayModeProvider>
  );
}
