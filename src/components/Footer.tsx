import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-lg font-medium">© {currentYear} Yazid Boujelben</span>
          </div>
        </div>
      </div>
    </footer>
  );
};