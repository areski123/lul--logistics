import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Users, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Notre Mission",
      description: "Fournir un transport rapide, sécurisé et centré sur le client à Mulhouse et au-delà.",
    },
    {
      icon: Eye,
      title: "Notre Vision",
      description: "Devenir le leader du transport de véhicules légers dans la région Haut-Rhin.",
    },
    {
      icon: Users,
      title: "Nos Valeurs",
      description: "Fiabilité, écologie, service client de qualité et engagement communautaire.",
    },
    {
      icon: Award,
      title: "Notre Engagement",
      description: "Solutions de transport flexibles et durables pour tous nos clients.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-accent/10 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            À Propos de <span className="text-primary">LULé</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fondée en 2023, LULé est spécialisée dans la logistique urbaine de livraison écologique, 
            offrant des solutions de transport innovantes dans le Haut-Rhin.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <div className="bg-gradient-card rounded-2xl p-8 lg:p-12 shadow-card">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slide-in">
                <h3 className="text-3xl font-bold text-foreground">
                  Notre Histoire
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Née d'une vision écologique et d'un engagement envers la communauté locale, 
                  LULé a été créée pour répondre aux besoins croissants de transport durable 
                  dans la région de Mulhouse.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Avec une flotte de véhicules légers modernes et une équipe dédiée, 
                  nous nous engageons à fournir des services de logistique fiables 
                  tout en respectant l'environnement.
                </p>
                <div className="bg-primary/10 rounded-lg p-4">
                  <p className="text-primary font-medium text-center">
                    "Delivering Reliability Across Haut-Rhin"
                  </p>
                </div>
              </div>
              
              <div className="relative animate-fade-in">
                <div className="bg-gradient-primary rounded-2xl p-8 text-center text-primary-foreground">
                  <div className="space-y-6">
                    <div>
                      <div className="text-4xl font-bold">51</div>
                      <div className="text-sm opacity-90">Boulevard Alfred Wallach</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold">68100</div>
                      <div className="text-sm opacity-90">Mulhouse, Haut-Rhin</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold">2023</div>
                      <div className="text-sm opacity-90">Année de création</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="text-center p-6 bg-gradient-card border-border/50 hover:border-primary/20 hover:shadow-card transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="space-y-4 p-0">
                <div className={`w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-foreground">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-card inline-block">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Contactez-nous
            </h3>
            <div className="space-y-2 text-muted-foreground">
              <p>📞 +33 6 51 88 81 44</p>
              <p>✉️ idriss.attobi@gmail.com</p>
              <p>📍 51 boulevard Alfred Wallach, 68100 Mulhouse</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;