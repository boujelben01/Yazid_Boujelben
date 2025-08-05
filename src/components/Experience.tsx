import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Experience = () => {
  const experiences = [
    {
      title: "Stage d'été",
      company: "Acteol",
      location: "Sfax, Tunisie",
      period: "Juin 2025 – Juillet 2025",
      description: "Développement d'un système d'information décisionnel",
      achievements: [
        "Création d'un ETL qui va permettre la création d'un DW à partir de cet extrait.",
        "Création des relations et vérification de l'intégrité des données importées.",
        "Développement d'une  application web pour l'affichage de dashboard."
      ],
      technologies: ["React", ".NET", "SSIS", "SQL"]
    },
    {
      title: "Stage d'été",
      company: "InfoSquare",
      location: "Sfax, Tunisie",
      period: "Juillet 2024 – Août 2024",
      description: "Migration d'une application mobile cross-platform vers des versions modernes.",
      achievements: [
        "Migration d'une application mobile cross-platform",
        "Mise à jour du front-end vers des versions modernes",
        "Adaptation de la base locale (SQLite) et refactoring",
        "Amélioration des performances de l'application"
      ],
      technologies: ["Angular", "Ionic", "SQLite"]
    },
    {
      title: "Stage PFE",
      company: "All Soft Multimedia",
      location: "Sfax, Tunisie", 
      period: "Février 2023 – Mai 2023",
      description: "Développement d'un système d'information décisionnel pour la gestion commerciale.",
      achievements: [
        "Création d'un système d'information décisionnel complet",
        "Intégration de données via SSIS",
        "Visualisation des KPIs avec Power BI",
        "Initiation à des modèles de ML pour analyse prédictive"
      ],
      technologies: ["Power BI", "SSIS", "SQL", "Machine Learning"]
    },
    {
      title: "Stage d'été",
      company: "PRIMATEC Engineering",
      location: "Sfax, Tunisie",
      period: "Juillet 2022 – Août 2022", 
      description: "Développement d'un système de contrôle à distance d'un dispositif d'alimentation.",
      achievements: [
        "Contrôle à distance d'un dispositif d'alimentation via proxy Python",
        "Communication série via proxy Ethernet",
        "Interface de contrôle web intuitive",
        "Intégration complète du système de communication"
      ],
      technologies: ["Python", "Flask", "HTML", "CSS"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Expérience professionnelle
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Mon parcours professionnel dans le développement web et les technologies frontend
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-border"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-soft"></div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 ml-12 md:ml-0' : 'md:pl-8 ml-12 md:ml-0'}`}>
                  <Card className="shadow-soft border-0 bg-card/50 backdrop-blur-sm hover:shadow-strong transition-all duration-300 group">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                        
                        <div className="space-y-1">
                          <p className="font-medium text-primary">{exp.company}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4">{exp.description}</p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-medium text-foreground mb-2">Principales réalisations :</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Technologies utilisées :</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-accent text-accent-foreground text-xs rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};