import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-background/90 py-4 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
        <p className="font-medium text-foreground/80">
          © {currentYear} Yazid BOUJELBEN
        </p>
      </div>
    </footer>
  );
};