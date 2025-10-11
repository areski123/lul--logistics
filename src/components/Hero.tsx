import { Button } from "@/components/ui/button";
import { Send, Package, ArrowRight } from "lucide-react";
import heroVan from "@/assets/hero-van.png";
import heroTruck from "@/assets/hero-truck.png";
import miniVan from "@/assets/mini-van.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const Hero = () => {
  const { t } = useLanguage();
  
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay: 0.2 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Decorative shapes */}
      <motion.div 
        className="absolute top-0 left-0 w-64 h-64 bg-blue-600 opacity-10 rounded-full -translate-x-32 -translate-y-32"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-green-500 opacity-10 rounded-full translate-x-32 translate-y-32"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, -90, 0]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <div className="container mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
              variants={fadeInUp}
            >
              Concilier les nouveaux besoins des consommateurs en ville avec ceux{" "}
              <span className="text-green-600">de l'environnement.</span>
            </motion.h1>
            
            <motion.div variants={fadeInUp}>
              <Button variant="orange" size="lg" className="group">
                En Savoir +
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image - Fleet showcase */}
          <motion.div 
            className="relative"
            initial="initial"
            animate="animate"
            variants={fadeInRight}
          >
            <div className="relative z-10">
              <motion.img
                src={heroTruck}
                alt="Flotte de véhicules de livraison écologique LULé - camions, vélos cargo et utilitaires"
                className="w-full h-auto rounded-lg shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>

        {/* CTA Cards at bottom */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          {/* Card 1: Envoi et Livraison */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-blue-700 text-white p-8 hover:bg-blue-800 transition-colors cursor-pointer group h-full">
              <div className="flex items-start space-x-4">
                <motion.div 
                  className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Send className="w-8 h-8" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">ENVOI ET LIVRAISON</h3>
                  <p className="text-blue-100 mb-4">
                    Marchandises, palettes, colis, courriers ...
                  </p>
                  <div className="inline-flex items-center text-sm font-semibold group-hover:translate-x-2 transition-transform">
                    EN SAVOIR +
                  </div>
                </div>
              </div>
          </Card>
          </motion.div>

          {/* Card 2: Collecte */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-blue-700 text-white p-8 hover:bg-blue-800 transition-colors cursor-pointer group h-full">
              <div className="flex items-start space-x-4">
                <motion.div 
                  className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Package className="w-8 h-8" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">COLLECTE</h3>
                  <p className="text-blue-100 mb-4">
                    Marchandises, courriers, gros colis, petits colis, palettes ...
                  </p>
                  <div className="inline-flex items-center text-sm font-semibold group-hover:translate-x-2 transition-transform">
                    EN SAVOIR +
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;