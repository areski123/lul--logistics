import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Truck, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Process = () => {
  const steps = [
    {
      icon: Phone,
      number: "01",
      title: "Contactez-nous",
      description: "Appelez-nous ou remplissez le formulaire en ligne pour une demande de devis",
    },
    {
      icon: MapPin,
      number: "02",
      title: "Planification",
      description: "Nous organisons la collecte et la livraison selon vos besoins",
    },
    {
      icon: Truck,
      number: "03",
      title: "Transport",
      description: "Votre colis est transporté en toute sécurité par notre flotte",
    },
    {
      icon: CheckCircle,
      number: "04",
      title: "Livraison",
      description: "Réception confirmée avec suivi en temps réel",
    },
  ];

  const { t } = useLanguage();
  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">{t('process.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t('process.subtitle')}</p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary to-primary transform -translate-y-1/2 opacity-20"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <Card 
                key={index}
                className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/30 bg-gradient-card relative animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold border-4 border-background group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="pt-6">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
