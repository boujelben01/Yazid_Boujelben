import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Formation = () => {
  const formations = [
    {
      title: "Ingénieur en Génie Informatique",
      school: "Institut International de Technologie, Sfax",
      specialization: "Génie Informatique",
      location: "Sfax, Tunisie",
      period: "2023 – 2026",
      description: "Diplôme national d'ingénieur en génie informatique.",
      
      type: "Cycle ingénieur",
    },
    {
      title: "Licence en Science Informatique",
      school: "Institut Supérieur d'Informatique et Multimédia de Sfax",
      specialization: "Analyse de données & Big Data",
      location: "Sfax, Tunisie", 
      period: "2020 – 2023",
      description: "Licence spécialisée en analyse de données et Big Data.",
      type: "Licence"
    },
    {
      title: "Baccalauréat en Science Expérimentale",
      school: "Lycée Taïeb Mhiri, Sfax",
      specialization: "Sciences Expérimentales",
      location: "Sfax, Tunisie", 
      period: "2016 – 2020",
      description: "Baccalauréat en sciences expérimentales.",

      type: "Baccalauréat "
    }
  ];

  // const certifications = [
  //   {
  //     title: "Machine Learning & Deep Learning",
  //     organization: "Projets académiques",
  //     date: "2024",
  //     description: "Développement de modèles d'apprentissage automatique pour divers projets"
  //   },
  //   {
  //     title: "Business Intelligence avec Power BI",
  //     organization: "Microsoft Power BI",
  //     date: "2023", 
  //     description: "Maîtrise des outils BI pour la visualisation et l'analyse de données"
  //   },
  //   {
  //     title: "Développement Web Full Stack",
  //     organization: "Projets personnels",
  //     date: "2022",
  //     description: "Expertise en développement frontend et backend avec diverses technologies"
  //   }
  // ];

  return (
    <section id="formation" className="section-shell relative overflow-hidden pb-20 lg:pb-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.08),transparent_34%),radial-gradient(circle_at_bottom_left,hsl(var(--accent)/0.08),transparent_30%)]"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center animate-fade-in">
          <h2 className="section-title mt-4">
            Un parcours académique construit étape par étape
          </h2>
          <p className="section-subtitle">
            Formation axée sur la mise en pratique — projets, stages et compétences opérationnelles
          </p>
        </div>

        <div className="space-y-8 animate-slide-up">
          <div className="md:hidden space-y-6">
            {formations.map((formation) => (
              <Card
                key={formation.title}
                className="group h-full min-h-[220px] glass-card border-border/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40"
              >
                <CardContent className="flex h-full flex-col p-6 sm:p-7">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {formation.title}
                        </h4>
                        <p className="font-medium text-primary">{formation.school}</p>
                      </div>
                    </div>
                    <span className="rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {formation.type.trim()}
                    </span>
                  </div>

                  <p className="mb-4 text-sm text-muted-foreground">
                    {formation.specialization}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {formation.period}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {formation.location}
                    </div>
                  </div>

                  <p className="leading-relaxed text-muted-foreground">
                    {formation.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative hidden md:block">
            <div className="absolute top-14 h-px bg-gradient-to-r from-primary/20 via-border/30 to-primary/20 left-4 right-4 md:left-8 md:right-8 lg:left-16 lg:right-16 pointer-events-none z-0 blur-sm"></div>
            <div className="grid items-stretch grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {formations.map((formation) => (
                <div key={formation.title} className="relative pt-0">
                  <div className="absolute left-1/2 top-10 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-primary/20 bg-background text-primary shadow-soft">
                    <GraduationCap className="h-5 w-5" />
                  </div>

                  <div className="pt-24">
                    <Card className="group h-full md:h-[280px] lg:h-[320px] glass-card border-border/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40">
                      <CardContent className="flex h-full flex-col p-6 sm:p-7">
                        <div className="mb-4 flex items-start justify-between gap-3">
                          <div className="space-y-2">
                            <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                              {formation.title}
                            </h4>
                            <p className="font-medium text-primary">{formation.school}</p>
                            <p className="text-sm text-muted-foreground">
                              {formation.specialization}
                            </p>
                          </div>

                          <span className="whitespace-nowrap rounded-full border border-primary/15 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                            {formation.type.trim()}
                          </span>
                        </div>

                        <div className="mb-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4" />
                            {formation.period}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4" />
                            {formation.location}
                          </div>
                        </div>

                        <p className="leading-relaxed text-muted-foreground">
                          {formation.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};