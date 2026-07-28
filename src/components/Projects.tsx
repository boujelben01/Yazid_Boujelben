import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Projects = () => {
  const projects = [
    {
      title: "Approche proactive de placement optimal des services sur les noeuds Edge mobiles",
      description: "Système intelligent pour l'optimisation du placement des services sur des noeuds Edge mobiles avec apprentissage profond.",
      image: "/api/placeholder/600/400",
      technologies: ["Deep Learning", "Angular", "FastAPI"]
    },
    {
      title: "Gestion de restaurant",
      description: "Plateforme métier pour piloter les commandes, les menus, les réservations et le service client d'un restaurant avec suivi des ventes.",
      image: "/api/placeholder/600/400",
      technologies: [".NET", "React"]
    },
    {
      title: "Places de loisir à Sfax",
      description: "Portail de réservation pour terrains de sport à Sfax, gérant les disponibilités, les créneaux et l'inscription des utilisateurs.",
      image: "/api/placeholder/600/400",
      technologies: ["Laravel", "React"]
    },
    {
      title: "Application de gestion d’un centre de formation",
      description: "Solution modulaire pour gérer étudiants, formateurs, cours, inscriptions et notes avec architecture Spring Boot et bonnes pratiques orientées objet.",
      image: "/api/placeholder/600/400",
      technologies: ["Spring Boot", "React", "Docker"]
    },
    {
      title: "Application agence de voyage",
      description: "Solution web pour gérer les réservations, les offres de voyage et la relation client d'une agence en ligne.",
      image: "/api/placeholder/600/400",
      technologies: ["Angular"]
    },
    {
      title: "Dashboard restaurant",
      description: "Tableau de bord analytique pour suivre les performances, la rentabilité et les tendances opérationnelles d'un établissement.",
      image: "/api/placeholder/600/400",
      technologies: ["Power BI", "SSIS", "SSAS"]
    },
  ];

  return (
    <section id="projets" className="section-shell relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Mes Projets
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Une sélection de mes projets récents showcasing mes compétences.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden shadow-soft border border-border/50 bg-card/90 backdrop-blur-sm hover:-translate-y-1 hover:shadow-strong transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between rounded-t-xl border-b border-border/70 bg-slate-950/10 px-4 py-3 text-xs uppercase tracking-[0.28em] text-primary/90">
                <span>Projet {index + 1}</span>
                <ExternalLink className="h-4 w-4 text-primary" />
              </div>

              <CardContent className="px-5 pt-5 pb-4">
                <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <CardDescription className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardContent>

              <CardFooter className="flex flex-wrap gap-2 border-t border-border/70 px-5 pb-5 pt-4">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <Badge key={techIndex} variant="subtle" className="px-3 py-1 text-xs font-semibold">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                    +{project.technologies.length - 3} techs
                  </span>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};