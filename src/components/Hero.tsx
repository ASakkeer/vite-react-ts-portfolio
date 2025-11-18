import { ArrowDown, Download } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-glow-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 animate-fade-in-up">
          <div className="inline-block">
            <span className="text-sm font-medium text-primary px-4 py-2 rounded-full glass">
              👋 Hello, I'm
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
            <span className="text-gradient glow-text">Sakkeer A</span>
          </h1>

          <p className="text-2xl md:text-3xl text-muted-foreground font-light max-w-3xl mx-auto">
            Senior React Native Engineer
            <br />
            <span className="text-primary">Frontend Developer</span>
          </p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Over 8 years of experience leading end-to-end development of high-performance, scalable cross-platform mobile applications for global clients
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="group relative overflow-hidden glow-box"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-glow-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>

            <Button 
              variant="outline" 
              size="lg" 
              className="glass glass-hover"
              onClick={() => window.open('/sakkeer_resume.pdf', '_blank')}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          <div className="pt-12">
            <button
              onClick={scrollToAbout}
              className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
              aria-label="Scroll to about section"
            >
              <ArrowDown className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
