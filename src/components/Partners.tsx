import { Card, CardContent } from "@/components/ui/card";
import { Handshake } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Partners = () => {
  const partners = [
    {
      name: "EcoTransport Alliance",
      logo: "🌱",
      description: "Réseau de transport écologique",
    },
    {
      name: "Chamber of Commerce",
      logo: "🏛️",
      description: "Chambre de Commerce Alsace",
    },
    {
      name: "Tech Logistics Hub",
      logo: "💻",
      description: "Innovation logistique",
    },
    {
      name: "Green Fleet Network",
      logo: "🚛",
      description: "Flotte verte certifiée",
    },
    {
      name: "Mulhouse Business",
      logo: "🏢",
      description: "Réseau entreprises locales",
    },
  ];

  const { t } = useLanguage();
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-light/80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 backdrop-blur-sm">
            <Handshake className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">{t('partners.title')}</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Ensemble pour une logistique durable et efficace
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {partners.map((partner, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {partner.logo}
                </div>
                <h4 className="font-semibold text-white text-sm leading-tight">
                  {partner.name}
                </h4>
                <p className="text-xs text-white/70">
                  {partner.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
