import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      company: "E-Commerce Alsace",
      rating: 5,
      text: "Service exceptionnel ! LULé a transformé notre logistique. Livraisons rapides et professionnelles.",
      image: "👩‍💼",
    },
    {
      name: "Jean Martin",
      company: "Restaurant Le Gourmet",
      rating: 5,
      text: "Toujours à l'heure, toujours fiable. Je recommande vivement pour tous vos besoins de livraison.",
      image: "👨‍🍳",
    },
    {
      name: "Sophie Laurent",
      company: "Boutique Mode",
      rating: 5,
      text: "Un service client remarquable. Ils comprennent vraiment les besoins des petites entreprises.",
      image: "👩‍💻",
    },
    {
      name: "Pierre Bernard",
      company: "Constructeur",
      rating: 5,
      text: "Parfait pour le transport de matériaux. Véhicules adaptés et chauffeurs compétents.",
      image: "👷‍♂️",
    },
  ];

  const { t } = useLanguage();
  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">{t('testimonials.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez ce que nos clients disent de nos services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/30 bg-gradient-card relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
                
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-cta-orange text-cta-orange" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-sm text-foreground/80 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3 pt-4 border-t border-border/50">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
