import { Code, Palette, Rocket, Users, Sparkles, Brain, Database, Cpu, Zap, MessageSquare, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const About = () => {
  const skillGroups = [
    {
      title: "Développement",
      icon: Code,
      description: "Conception et réalisation d’applications web et backend full-stack.",
      skills: [
        "Python",
        "C",
        "Java",
        "PHP",
        "C#",
        ".NET",
        "Spring",
        "Angular",
        "React",
        "Laravel",
        "FastAPI",
        "Flask",
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cpu,
      description: "Déploiement, orchestration et automatisation d’infrastructures cloud modernes.",
      skills: [
        "GCP",
        "Terraform",
        "Docker",
        "Kubernetes",
        "GitLab CI/CD",
      ],
    },
    {
      title: "Data & IA",
      icon: Database,
      description: "Analyse de données, BI et développement de solutions intelligentes.",
      skills: [
        "SQL",
        "PostgreSQL",
        "SQL Server",
        "Redis",
        "SSIS",
        "Power BI",
        "Machine Learning",
        "LangGraph",
        "BMAD",
        "Deep Learning",
      ],
    },
  ];

  const values = [
    {
      icon: Zap,
      title: "Motivation",
      description: "Engagement et autonomie dans la conduite de projets de bout en bout",
    },
    {
      icon: MessageSquare,
      title: "Communication",
      description: "Traduire des sujets techniques en messages clairs et accessibles  pour décideurs, équipes et utilisateurs.",
    },
    {
      icon: Users,
      title: "Esprit d'équipe",
      description: "Travail collaboratif dans des environnements agiles (Scrum, Kanban)",
    },
    {
      icon: Target,
      title: "Rigueur",
      description: "Approche méthodique, de la conception à la mise en production",
    },
  ];

  return (
    <section id="apropos" className="section-shell relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.08),transparent_34%),radial-gradient(circle_at_bottom_right,hsl(var(--accent)/0.08),transparent_30%)]"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center animate-fade-in">
          <h2 className="section-title">
            À propos de moi
          </h2>
          <p className="section-subtitle">
            Ingénieur en Génie Informatique, rigoureux, polyvalent et animé par une forte curiosité technologique, je conçois des solutions à la croisée de la donnée, des systèmes décisionnels, de l'IA agentique et du cloud, en transformant des idées complexes en outils fiables et concrets.
          </p>
        </div>

        <div className="space-y-8 animate-slide-up" style={{ animationDelay: "0.15s" }}>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <Card className="glass-card overflow-hidden border-primary/10 rounded-2xl bg-gradient-to-br from-primary/10 via-card to-accent/10">
              <CardContent className="p-0">
                <div className="space-y-6 p-8">
                  <div className="flex items-center gap-3 text-sm font-semibold text-primary">
                    <Brain className="h-5 w-5" />
                    Profil & vision
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-foreground">
                      Ingénieur en Génie Informatique
                    </h3>
                    <p className="leading-relaxed text-muted-foreground">
                      Rigoureux, polyvalent et animé par une forte curiosité technologique, je mets mes compétences en Cloud, IA agentique et Data au service de projets innovants à forte valeur ajoutée.
                    </p>
                  </div>

                  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-3xl border border-border/60 bg-card/80 p-4 sm:p-6 text-center shadow-md">
                      <Database className="mx-auto mb-3 h-6 w-6 text-primary" />
                      <div className="text-sm font-semibold text-foreground">Data & SID</div>
                      <p className="mt-2 text-xs text-muted-foreground">SID, ETL (SSIS) et tableaux de bord Power BI</p>
                    </div>
                    <div className="rounded-3xl border border-border/60 bg-card/80 p-4 sm:p-6 text-center shadow-md">
                      <Brain className="mx-auto mb-3 h-6 w-6 text-primary" />
                      <div className="text-sm font-semibold text-foreground">IA Agentique</div>
                      <p className="mt-2 text-xs text-muted-foreground">Agents multi-agents, LangGraph et RAG</p>
                    </div>
                    <div className="rounded-3xl border border-border/60 bg-card/80 p-4 sm:p-6 text-center shadow-md">
                      <Cpu className="mx-auto mb-3 h-6 w-6 text-primary" />
                      <div className="text-sm font-semibold text-foreground">Cloud Native</div>
                      <p className="mt-2 text-xs text-muted-foreground">GCP, Terraform, Docker, Kubernetes et CI/CD</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-border/60">
              <CardContent className="p-6 sm:p-7">
                <div className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  <Users className="h-4 w-4" />
                  Mes valeurs
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {values.map((value) => (
                    <div
                      key={value.title}
                      className="rounded-2xl border border-border/70 bg-card/70 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <value.icon className="h-5 w-5" />
                      </div>
                      <h4 className="font-semibold text-foreground">{value.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                <Sparkles className="h-4 w-4" />
                Compétences techniques
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Mes domaines d’expertise couvrent le développement web, les infrastructures cloud et l’analyse de données, avec des livrables fiables et évolutifs.
              </p>
            </div>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <Card key={group.title} className="glass-card border-border/60">
                  <CardContent className="p-6 sm:p-7">
                    <div className="mb-4">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <group.icon className="h-5 w-5 text-primary" />
                          <h4 className="text-lg font-semibold text-foreground">{group.title}</h4>
                        </div>
                        <Badge variant="subtle" className="px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]">
                          {group.skills.length} compétences
                        </Badge>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {group.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <Badge key={skill} variant="subtle" className="px-3 py-1 text-xs font-semibold">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};