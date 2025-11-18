import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="text-2xl font-bold text-gradient">Sakkeer.A</div>
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            Built with <Heart className="h-4 w-4 text-primary fill-primary" /> using React &
            TypeScript
          </p>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sakkeer A. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
