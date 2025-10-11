import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQ = () => {
  const faqs = [
    {
      question: "Quels types de véhicules utilisez-vous ?",
      answer: "Nous utilisons exclusivement des véhicules légers commerciaux sous 3.5 tonnes, équipés de climatisation, GPS et assurance complète. Notre flotte comprend 3 véhicules modernes et écologiques."
    },
    {
      question: "Quels sont vos tarifs ?",
      answer: "Nos tarifs sont personnalisés selon la distance, le type de service et les spécificités de votre demande. Nous proposons des devis gratuits pour tous nos services. Contactez-nous pour obtenir un devis personnalisé."
    },
    {
      question: "Proposez-vous des services express ?",
      answer: "Oui, nous proposons un service Express avec livraison sous 2 heures, disponible 24/7. Ce service est parfait pour les livraisons urgentes dans tout le Haut-Rhin."
    },
    {
      question: "Comment puis-je suivre ma livraison ?",
      answer: "Tous nos véhicules sont équipés de GPS en temps réel. Vous recevrez un lien de suivi par SMS et email dès que votre colis sera pris en charge."
    },
    {
      question: "Quelles sont vos zones de livraison ?",
      answer: "Nous couvrons tout le département du Haut-Rhin, avec un focus particulier sur Mulhouse et ses environs. Nous nous étendons progressivement dans toute la région Grand Est."
    },
    {
      question: "Acceptez-vous les paiements en espèces ?",
      answer: "Oui, nous acceptons les paiements par carte bancaire, PayPal et espèces à la livraison. Vous pouvez choisir votre méthode de paiement préférée lors de la réservation."
    },
    {
      question: "Quels sont vos horaires d'ouverture ?",
      answer: "Nos services standard sont disponibles du lundi au vendredi de 8h à 18h. Notre service Express est disponible 24/7, 7 jours sur 7 pour vos urgences."
    },
    {
      question: "Proposez-vous des services de déménagement ?",
      answer: "Oui, nous proposons des services de déménagement pour particuliers et professionnels avec des véhicules adaptés et une équipe expérimentée. Nous fournissons également le matériel de protection nécessaire."
    },
    {
      question: "Comment réserver un transport ?",
      answer: "Vous pouvez réserver facilement via notre formulaire en ligne, par téléphone au +33 6 51 88 81 44, ou par email à idriss.attobi@gmail.com. Nous vous répondons sous 24h."
    },
    {
      question: "Vos véhicules sont-ils assurés ?",
      answer: "Oui, tous nos véhicules sont entièrement assurés avec une couverture complète pour vos biens transportés. L'assurance est incluse dans nos tarifs, sans frais supplémentaires."
    },
    {
      question: "Proposez-vous des services pour entreprises ?",
      answer: "Absolument ! Nous proposons des solutions logistiques sur-mesure pour les entreprises : livraisons régulières, logistique e-commerce, distribution last-mile, et services dédiés avec un interlocuteur privilégié."
    },
    {
      question: "Que faire si mon colis est endommagé ?",
      answer: "En cas de dommage, contactez-nous immédiatement. Grâce à notre assurance complète, nous nous engageons à vous dédommager rapidement. Tous nos véhicules sont équipés de systèmes de protection pour vos biens."
    }
  ];

  const { t } = useLanguage();
  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">{t('faq.title')}</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t('faq.subtitle')}</p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-card border border-border/50 rounded-lg px-6 shadow-card hover:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-card inline-block">
            <h3 className="text-2xl font-bold text-foreground mb-4">{t('faq.otherQuestions')}</h3>
            <p className="text-muted-foreground mb-6">{t('faq.teamHelp')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+33651888144" 
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                📞 +33 6 51 88 81 44
              </a>
              <a 
                href="mailto:idriss.attobi@gmail.com" 
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                ✉️ Envoyer un email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
