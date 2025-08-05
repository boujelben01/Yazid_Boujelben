import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Formation = () => {
  const formations = [
    {
      title: "Ingénieur en Génie Informatique",
      school: "Institut International de Technologie, Sfax",
      specialization: "Génie Informatique",
      location: "Sfax, Tunisie",
      period: "2023 – Aujourd'hui",
      description: "Formation d'ingénieur en génie informatique, dernière année.",
      
      type: "cycle ingénieur",
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
    <section id="formation" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Formation 
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Mon parcours académique 
          </p>
        </div>

        {/* Formation Académique */}
        <div className="mb-16">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-border"></div>

            <div className="space-y-12">
              {formations.map((formation, index) => (
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
                          <div className="flex items-start gap-3 mb-2">
                            <GraduationCap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                            <div>
                              <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                                {formation.title}
                              </h4>
                              <p className="font-medium text-primary">{formation.school}</p>
                              <p className="text-sm text-muted-foreground">{formation.specialization}</p>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {formation.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {formation.location}
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground mb-4">{formation.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        {/* <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Certifications Professionnelles
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="shadow-soft border-0 bg-card/50 backdrop-blur-sm hover:shadow-strong transition-all duration-300 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-primary font-medium">{cert.organization}</p>
                      <p className="text-sm text-muted-foreground">{cert.date}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};