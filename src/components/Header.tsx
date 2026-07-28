import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Accueil", href: "#accueil" },
    { name: "À propos", href: "#apropos" },
    { name: "Formation", href: "#formation" },
    { name: "Expérience", href: "#experience" },
    { name: "Projets", href: "#projets" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href) as HTMLElement | null;
    const headerEl = document.querySelector('header') as HTMLElement | null;
    const headerHeight = headerEl ? headerEl.offsetHeight : 0;
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - headerHeight - 1; // increased gap to hide decorative lines
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  // compute header height and publish as CSS variable for exact anchor offsets
  useEffect(() => {
    const setOffset = () => {
      const headerEl = document.querySelector('header') as HTMLElement | null;
      const headerHeight = headerEl ? headerEl.offsetHeight : 0;
      // increased extra gap (20px) to hide thin decorative lines under sections
      const offset = headerHeight + 1;
      document.documentElement.style.setProperty('--scroll-offset', `${offset}px`);
    };

    setOffset();
    window.addEventListener('resize', setOffset);
    return () => window.removeEventListener('resize', setOffset);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 bg-background/95 border-b border-border/70">
      <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex w-full items-center justify-between">
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center gap-2 rounded-full border border-border/70 bg-card/90 px-2 py-1.5">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 transition duration-200 hover:bg-primary/15 hover:text-primary whitespace-nowrap"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center rounded-full border border-border/70 bg-background/70 px-2 py-1.5 text-sm text-foreground/80 shadow-sm">
              <ThemeToggle />
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <div className="scale-110">
                <ThemeToggle />
              </div>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => setIsOpen(!isOpen)}
                className="h-9 w-9 rounded-full bg-card/90 border border-border/70"
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="mt-4 space-y-2 rounded-3xl border border-border/70 bg-card/95 p-4 shadow-soft backdrop-blur-xl">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="block rounded-full px-4 py-3 text-base font-semibold text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};