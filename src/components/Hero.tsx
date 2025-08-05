import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projets");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-16 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">

          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-strong">
                <img 
                  src="/yazid boujelben 1.png" 
                  alt="Yazid Boujelben" 
                  className="w-full h-full object-cover object-center scale-110"
                  style={{ objectPosition: '50% 0%' }}
                />
              </div>
              {/* Decoration ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/10 animate-pulse"></div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
            <span className="gradient-text">Yazid</span>
            <br />
            <span className="text-foreground">Boujelben</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
             Futur ingénieur en génie informatique , passionné par le développement logiciel, l’IA, les systèmes décisionnels et l’analyse de données.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-6 justify-center items-center pt-6">
            {/* Primary Action Button */}
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-strong group w-full sm:w-auto"
            >
              Voir mes projets
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            {/* Secondary Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <a href="/cv-yazid-boujelben.pdf" download="CV-Yazid-Boujelben.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Télécharger CV
                </a>
              </Button>
              
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <a href="mailto:yazidboujelben@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </a>
              </Button>
              
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <a href="https://github.com/boujelben01" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <a href="https://www.linkedin.com/in/yazid-boujelben-b40986240/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};