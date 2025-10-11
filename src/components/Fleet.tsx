import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Thermometer, Navigation, Shield, Users } from "lucide-react";
import fleetImage from "@/assets/fleet-image.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Fleet = () => {
  const fleetFeatures = [
    {
      icon: Truck,
      title: "Véhicules Légers",
      description: "Flotte de véhicules commerciaux légers < 3.5 tonnes",
      highlight: "3 véhicules",
    },
    {
      icon: Thermometer,
      title: "Climatisation",
      description: "Tous nos véhicules sont équipés de climatisation",
      highlight: "Confort optimal",
    },
    {
      icon: Navigation,
      title: "Suivi GPS",
      description: "Localisation en temps réel de vos livraisons",
      highlight: "24/7",
    },
    {
      icon: Shield,
      title: "Assurance Incluse",
      description: "Couverture complète pour tous les transports",
      highlight: "Protection totale",
    },
  ];

  const vehicleSpecs = [
    { label: "Charge utile", value: "< 3.5 tonnes" },
    { label: "Volume de chargement", value: "Jusqu'à 20m³" },
    { label: "Équipements", value: "Sangles, protection" },
    { label: "Maintenance", value: "Contrôles réguliers" },
  ];

  const { t } = useLanguage();
  return (
    <section id="fleet" className="py-20 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">{t('fleet.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t('fleet.subtitle')}</p>
        </div>

        {/* Fleet Overview */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative animate-fade-in">
              <img
                src={fleetImage}
                alt="Flotte de véhicules LULé"
                className="w-full h-auto rounded-2xl shadow-card"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-primary rounded-xl p-4 text-primary-foreground shadow-hero">
                <div className="text-center">
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-sm opacity-90">Véhicules</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8 animate-slide-in">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-4">{t('fleet.modernTitle')}</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Notre flotte de véhicules commerciaux légers est spécialement conçue 
                  pour les livraisons urbaines efficaces et respectueuses de l'environnement. 
                  Chaque véhicule est régulièrement entretenu et équipé des dernières technologies.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    Écologique
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    Efficace
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    Moderne
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    Sécurisé
                  </Badge>
                </div>
              </div>

              {/* Vehicle Specs */}
              <div className="bg-gradient-card rounded-xl p-6 border border-border/50">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Users className="w-5 h-5 text-primary mr-2" />
                  Spécifications Techniques
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {vehicleSpecs.map((spec, index) => (
                    <div key={index} className="space-y-1">
                      <div className="text-sm text-muted-foreground">{spec.label}</div>
                      <div className="font-medium text-foreground">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleetFeatures.map((feature, index) => (
            <Card 
              key={index}
              className="text-center group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/20 bg-gradient-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  {feature.highlight}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Expansion Notice */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Flotte en Expansion
            </h3>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Notre flotte actuelle de 3 véhicules est conçue pour s'adapter à la croissance 
              de nos services. Nous planifions l'expansion selon les besoins de nos clients 
              pour maintenir notre engagement de qualité et de rapidité.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;