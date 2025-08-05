import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "Approche proactive de placement optimal des services sur les noeuds Edge mobiles",
      description: "Système intelligent pour l'optimisation du placement des services sur des noeuds Edge mobiles avec apprentissage profond.",
      image: "/api/placeholder/600/400",
      technologies: ["Deep Learning", "Angular", "FastAPI", "Firebase"]
    },
    {
      title: "Gestion de restaurant",
      description: "Application complète pour la gestion des commandes, menus et réservations d'un restaurant.",
      image: "/api/placeholder/600/400",
      technologies: [".NET", "React"]
    },
    {
      title: "Places de loisir à Sfax",
      description: "Site web pour réserver des terrains de football, basket et volley à Sfax.",
      image: "/api/placeholder/600/400",
      technologies: ["Laravel", "React"]
    },
    {
      title: "Gestion d'Achat de Tickets de Train",
      description: "Application web pour la gestion et l'achat de tickets de train.",
      image: "/api/placeholder/600/400",
      technologies: ["JEE (Java EE)"]
    },
    {
      title: "Application agence de voyage",
      description: "Application web pour une agence de voyage.",
      image: "/api/placeholder/600/400",
      technologies: ["Angular"]
    },
    {
      title: "Dashboard restaurant",
      description: "Visualisation et analyse des données d'un restaurant via des dashboards interactifs.",
      image: "/api/placeholder/600/400",
      technologies: ["Power BI", "SSIS", "SSAS"]
    },
  ];

  return (
    <section id="projets" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Mes Projets
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Une sélection de mes projets récents showcasing mes compétences.
          </p>
        </div>

        {/* Tous les projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden shadow-soft border-0 bg-card/50 backdrop-blur-sm hover:shadow-strong transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <div className="w-full h-full bg-gradient-primary opacity-20 group-hover:opacity-30 transition-opacity"></div>
              </div>
              
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-0.5 bg-accent text-accent-foreground text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};