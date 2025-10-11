import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Import client logos
import eLeclercLogo from "@/assets/clients-resized/E.Leclerc-Logo.wine.png";
import carrefourLogo from "@/assets/clients-resized/Carrefour-Logo-1966.png";
import amazonLogo from "@/assets/clients-resized/amazon.png";
import laPosteLogo from "@/assets/clients-resized/la-post.png";
import dhlLogo from "@/assets/clients-resized/DHL-Logo.wine.png";
import chronopostLogo from "@/assets/clients-resized/chronopost.png";

const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const clients = [
    { name: "E.Leclerc", logo: eLeclercLogo },
    { name: "Carrefour", logo: carrefourLogo },
    { name: "Amazon", logo: amazonLogo },
    { name: "La Poste", logo: laPosteLogo },
    { name: "DHL", logo: dhlLogo },
    { name: "Chronopost", logo: chronopostLogo },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const { t } = useLanguage();
  return (
    <section className="py-16 bg-gradient-to-b from-background to-primary/5" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t('clients.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ils nous font confiance pour leurs besoins logistiques
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {clients.map((client, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card 
                className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/30 bg-background/50 backdrop-blur-sm h-full"
              >
                <CardContent className="p-6 flex flex-col items-center justify-center h-32">
                  <div className="w-full h-20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <p className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors text-center">
                    {client.name}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
