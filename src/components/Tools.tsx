import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Bike, Zap, Warehouse, Satellite, Thermometer } from "lucide-react";

// Inspired by sections on tracking and tools from Citéliv (see citeliv.fr)
const Tools = () => {
  const tools = [
    {
      icon: Satellite,
      title: "Système de Tracking",
      description:
        "Suivi en temps réel de vos livraisons avec notifications SMS/Email et preuve de livraison.",
      highlights: ["Temps réel", "Preuves de livraison", "Notifications"],
    },
    {
      icon: Warehouse,
      title: "Entrepôt / Stockage",
      description:
        "Espace de stockage pour consolider, trier et préparer vos expéditions localement.",
      highlights: ["Consolidation", "Préparation", "Gestion locale"],
    },
    {
      icon: Thermometer,
      title: "Véhicules Frigorifiques",
      description:
        "Transport sous température contrôlée pour l'alimentaire et les produits sensibles.",
      highlights: ["Température contrôlée", "Traçabilité", "Sécurité"],
    },
  ];

  const transport = [
    { icon: Bike, name: "Coursier à vélo", info: "Ultra rapide en centre-ville" },
    { icon: Truck, name: "Véhicules < 3.5T", info: "Adaptés à la distribution urbaine" },
    { icon: Zap, name: "Express 2h", info: "Priorité et disponibilité 24/7" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Outils & <span className="text-primary">Tracking</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des outils modernes pour une logistique fiable et transparente
          </p>
        </div>

        {/* Tools */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {tools.map((tool, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground mb-4">
                  <tool.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-foreground">{tool.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{tool.description}</p>
                <div className="flex flex-wrap gap-2">
                  {tool.highlights.map((h, i) => (
                    <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {h}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Transport options */}
        <div className="bg-gradient-card rounded-2xl p-8 border border-border/50">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Modes de Transport</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {transport.map((t, index) => (
              <Card key={index} className="bg-background/50 border-border/50">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <t.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.info}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;


