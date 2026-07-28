import { MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Experience = () => {
  const experiences = [
    {
      title: "Stage PFE",
      company: "Sofrecom",
      location: "Sfax, Tunisie",
      period: "Février 2026 – Juin 2026",
      description:
        "Conception et développement d’une plateforme agentique intelligente automatisant la migration d’applications On-Premise vers Google Cloud Platform (GCP).",
      achievements: [
        "Développement d’un module local agentique basé sur la méthodologie BMAD orchestrant des agents IA.",
        "Conception de blueprints Terraform sur mesure pour GKE Autopilot et Cloud Run, intégrés à des pipelines CI/CD GitLab.",
        "Développement d’une plateforme web orchestrant le déploiement via agents LangGraph avec suivi temps réel et chatbot RAG.",
      ],
      technologies: [
        "LangGraph",
        "FastAPI",
        "React",
        "PostgreSQL",
        "Redis",
        "Terraform",
        "Docker",
        "Kubernetes",
        "GitLab CI/CD",
        "GCP",
      ],
    },
    {
      title: "Stage d'été",
      company: "Acteol",
      location: "Sfax, Tunisie",
      period: "Juin 2025 – Juillet 2025",
      description: "Développement d'un système d'information décisionnel.",
      achievements: [
        "Création d'un ETL qui va permettre la création d'un DW à partir de cet extrait.",
        "Création des relations et vérification de l'intégrité des données importées.",
        "Développement d'une application web pour l'affichage de dashboard.",
      ],
      technologies: ["React", ".NET", "SSIS", "SQL"],
    },
    {
      title: "Stage d'été",
      company: "InfoSquare",
      location: "Sfax, Tunisie",
      period: "Juillet 2024 – Août 2024",
      description:
        "Migration d'une application mobile cross-platform vers des versions modernes.",
      achievements: [
        "Migration d'une application mobile cross-platform",
        "Mise à jour du front-end vers des versions modernes",
        "Adaptation de la base locale (SQLite) et refactoring",
        "Amélioration des performances de l'application",
      ],
      technologies: ["Angular", "Ionic", "SQLite"],
    },
    {
      title: "Stage PFE",
      company: "All Soft Multimedia",
      location: "Sfax, Tunisie",
      period: "Février 2023 – Mai 2023",
      description:
        "Développement d'un système d'information décisionnel pour la gestion commerciale.",
      achievements: [
        "Création d'un système d'information décisionnel complet",
        "Intégration de données via SSIS",
        "Visualisation des KPIs avec Power BI",
        "Initiation à des modèles de ML pour analyse prédictive",
      ],
      technologies: ["Power BI", "SSIS", "SQL", "Machine Learning"],
    },
    {
      title: "Stage d'été",
      company: "PRIMATEC Engineering",
      location: "Sfax, Tunisie",
      period: "Juillet 2022 – Août 2022",
      description:
        "Développement d'un système de contrôle à distance d'un dispositif d'alimentation.",
      achievements: [
        "Contrôle à distance d'un dispositif d'alimentation via proxy Python",
        "Communication série via proxy Ethernet",
        "Interface de contrôle web intuitive",
        "Intégration complète du système de communication",
      ],
      technologies: ["Python", "Flask", "HTML", "CSS"],
    },
  ];

  return (
    <section id="experience" className="section-shell relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.08),transparent_34%),radial-gradient(circle_at_bottom_right,hsl(var(--accent)/0.08),transparent_30%)]"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center animate-fade-in">
          <h2 className="section-title mt-4">
            Une progression construite sur des missions concrètes
          </h2>
          <p className="section-subtitle">
            Des projets techniques variés, allant de la migration d’applications à des plateformes IA et data, avec un impact concret à chaque étape.
          </p>
        </div>

          <div className="animate-slide-up">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className={`group h-full overflow-hidden border border-border/60 bg-card/75 shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-primary"></div>
                <CardContent className="flex h-full flex-col p-6 sm:p-7">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-primary">{exp.company}</p>
                      <h3 className="mt-1 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                    </div>
                          <span className="whitespace-nowrap rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                            {exp.period}
                          </span>
                  </div>

                  <div className="mb-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                  </div>

                  <p className="mb-5 leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>

                  <div className="mb-5">
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Réalisations
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="subtle" className="px-3 py-1 text-xs font-medium">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};