import { Code, Palette, Rocket, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  const skills = [
    { name: "JavaScript", category: "Langage" },
    { name: "TypeScript", category: "Langage" },
    { name: "Java", category: "Langage" },
    { name: "PHP", category: "Langage" },
    { name: "React", category: "Framework" },
    { name: "Angular", category: "Framework" },
    { name: "Laravel", category: "Framework" },
    { name: ".NET", category: "Framework" },
    { name: "Flutter", category: "Mobile" },
    { name: "Power BI", category: "BI" },
    { name: "Machine Learning", category: "IA" },
    { name: "SQL", category: "Base de données" },
  ];

  const values = [
    {
      icon: Code,
      title: "Code propre",
      description: "Écriture de code maintenable et performant"
    },
    {
      icon: Palette,
      title: "Design moderne",
      description: "Création d'interfaces utilisateur attrayantes"
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimisation pour une expérience utilisateur fluide"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Travail d'équipe efficace et communication claire"
    },
  ];

  return (
    <section id="apropos" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            À propos de moi
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
             Étudiant en dernière année de génie informatique à l’IIT Sfax, passionné par le développement logiciel, l’intelligence artificielle, les systèmes décisionnels et l’analyse de données. Curieux, motivé et rigoureux, je conçois des solutions innovantes à travers des projets web, mobiles et décisionnels. 
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Profile et Description */}
          <div className="animate-slide-up">
            <Card className="p-8 shadow-soft border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-primary flex items-center justify-center">
                    <div className="w-28 h-28 rounded-full bg-card flex items-center justify-center">
                      <Code className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Ingénieur en Génie Informatique
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Actuellement à la recherche d'une opportunité pour mettre en pratique mes 
                      compétences techniques et continuer à apprendre dans un environnement 
                      professionnel stimulant.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Compétences et Valeurs */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Compétences */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Compétences techniques
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-3 bg-card rounded-lg border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-xs text-muted-foreground bg-accent px-2 py-1 rounded-full">
                      {skill.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Valeurs */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Mes valeurs
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div
                    key={value.title}
                    className="flex items-start space-x-3 p-4 bg-card rounded-lg border border-border/50"
                  >
                    <value.icon className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};