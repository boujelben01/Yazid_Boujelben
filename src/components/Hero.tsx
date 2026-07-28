import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projets");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="accueil" className="relative flex min-h-screen items-center overflow-hidden pt-20 lg:pt-24">
      <div className="absolute inset-0 hero-pattern"></div>
      <div className="absolute left-8 top-24 h-24 w-24 rounded-full bg-primary/10 blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-24 right-10 h-32 w-32 rounded-full bg-accent/20 blur-3xl opacity-30 pointer-events-none"></div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-center lg:gap-16 lg:px-8 lg:py-20">
        <div className="order-2 max-w-2xl animate-fade-in space-y-8 text-center lg:order-1 lg:flex-1 lg:max-w-xl lg:text-left">
          <div className="space-y-5">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              <span className="gradient-text">Yazid</span>
              <br />
              <span className="text-foreground">BOUJELBEN</span>
            </h1>
            <div className="flex justify-center lg:justify-start">
              <p className="inline-flex items-center gap-2 text-base font-semibold text-primary sm:text-lg">
                Ingénieur en Génie Informatique • IA • Cloud
              </p>
            </div>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl lg:mx-0">
             Ingénieur en Génie Logiciel, passionné par les systèmes décisionnels, agentiques et le cloud.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button
              size="lg"
              onClick={scrollToProjects}
              variant="outline"
              className="transition-all hover:scale-[1.02]"
            >
              Voir mes projets
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>

            <Button variant="outline" size="lg" asChild>
              <a href="CV_Yazid_BOUJELBEN.pdf" download="CV_Yazid_BOUJELBEN.pdf">
                <Download className="mr-2 h-4 w-4" />
                Télécharger CV
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            <Button variant="outline" size="icon" asChild className="h-12 w-12 rounded-full p-0">
              <a href="mailto:yazidboujelben@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="h-12 w-12 rounded-full p-0">
              <a href="https://github.com/boujelben01" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="h-12 w-12 rounded-full p-0">
              <a href="https://www.linkedin.com/in/yazid-boujelben-b40986240/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="order-1 animate-fade-in flex shrink-0 justify-center lg:order-2 lg:justify-center">
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-primary/15 blur-3xl"></div>
            <div className="absolute -right-4 top-8 -z-10 h-24 w-24 rounded-full bg-accent/20 blur-2xl"></div>
            <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border-4 border-background/70 shadow-strong sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-[22rem] lg:w-[22rem] xl:h-[24rem] xl:w-[24rem]">
              <img
                src="Yazid boujelben.png"
                alt="Yazid Boujelben"
                className="h-full w-full object-cover"
                style={{ objectPosition: "40% 50%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};