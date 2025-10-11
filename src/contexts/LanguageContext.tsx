import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.booking': 'Réservation',
    'nav.about': 'À propos',
    'nav.fleet': 'Flotte',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'LULé Livraison Écologique',
    'hero.tagline': '"Delivering Reliability Across Haut-Rhin"',
    'hero.description': 'Solutions de transport flexibles et efficaces pour véhicules sous 3.5 tonnes. Connecter les personnes et les entreprises dans tout le Haut-Rhin.',
    'hero.vehicles': 'Véhicules',
    'hero.founded': 'Fondée',
    'hero.service': 'Service',
    'hero.vehiclesUnder': 'Véhicules < 3.5T',
    'hero.expressDelivery': 'Livraison Express',
    'hero.insuranceIncluded': 'Assurance Incluse',
    'hero.shipping': 'Envoi et',
    'hero.delivery': 'Livraison',
    'hero.parcelCollection': 'Collecte de',
    'hero.parcels': 'Colis',
    
    // Services
    'services.title': 'Nos Services',
    'services.subtitle': 'Solutions de transport flexibles adaptées à vos besoins dans le Haut-Rhin',
    'services.parcelTransport': 'Transport de Colis',
    'services.parcelDescription': 'Livraison sécurisée de vos colis avec suivi en temps réel',
    'services.businessLogistics': 'Logistique d\'Entreprise',
    'services.businessDescription': 'Solutions logistiques sur-mesure pour votre entreprise',
    'services.expressDelivery': 'Livraison Express',
    'services.expressDescription': 'Service de livraison express pour vos urgences',
    'services.moving': 'Déménagements',
    'services.movingDescription': 'Déménagements particuliers et professionnels',
    
    // Booking
    'booking.title': 'Réservez votre Transport',
    'booking.subtitle': 'Demandez un devis personnalisé pour votre transport en quelques clics',
    'booking.formTitle': 'Formulaire de Réservation',
    'booking.formDescription': 'Remplissez les informations ci-dessous pour recevoir votre devis personnalisé',
    'booking.name': 'Nom complet',
    'booking.email': 'Email',
    'booking.phone': 'Téléphone',
    'booking.serviceType': 'Type de service',
    'booking.pickupLocation': 'Lieu de collecte',
    'booking.deliveryLocation': 'Lieu de livraison',
    'booking.date': 'Date souhaitée',
    'booking.time': 'Heure souhaitée',
    'booking.packageSize': 'Taille/Dimensions',
    'booking.paymentMethod': 'Méthode de paiement préférée',
    'booking.specialInstructions': 'Instructions spéciales',
    'booking.submit': 'Demander un Devis Gratuit',
    'booking.submitting': 'Envoi en cours...',
    'booking.required': 'Champs obligatoires. Nous vous contacterons sous 24h pour confirmer votre réservation.',
    
    // About
    'about.title': 'À Propos de LULé',
    'about.subtitle': 'Fondée en 2023, LULé est spécialisée dans la logistique urbaine de livraison écologique, offrant des solutions de transport innovantes dans le Haut-Rhin.',
    'about.story': 'Notre Histoire',
    'about.mission': 'Notre Mission',
    'about.vision': 'Notre Vision',
    'about.values': 'Nos Valeurs',
    'about.commitment': 'Notre Engagement',
    'about.contactUs': 'Contactez-nous',
    
    // Contact
    'contact.title': 'Contactez LULé',
    'contact.subtitle': 'Demandez votre devis gratuit ou contactez-nous pour plus d\'informations',
    'contact.quoteRequest': 'Demande de Devis',
    'contact.phone': 'Téléphone',
    'contact.email': 'Email',
    'contact.address': 'Adresse',
    'contact.whatsapp': 'WhatsApp',
    'contact.hours': 'Horaires de Service',
    'contact.location': 'Notre Localisation',
    
    // FAQ
    'faq.title': 'Questions Fréquentes',
    'faq.subtitle': 'Trouvez les réponses aux questions les plus courantes sur nos services de transport',
    'faq.otherQuestions': 'Vous avez d\'autres questions ?',
    'faq.teamHelp': 'Notre équipe est là pour vous aider. Contactez-nous directement !',
    'faq.sendEmail': 'Envoyer un email',
    
    // Sections
    'fleet.title': 'Notre Flotte',
    'fleet.subtitle': 'Des véhicules modernes et équipés pour répondre à tous vos besoins de transport',
    'fleet.modernTitle': 'Flotte Moderne et Écologique',
    'clients.title': 'Nos Clients',
    'testimonials.title': 'Avis de nos Clients',
    'partners.title': 'Nos Partenaires',
    'process.title': 'Le processus de livraison',
    'process.subtitle': 'Simple, rapide et transparent',
    'tools.title': 'Outils & Tracking',
    'tools.subtitle': 'Des outils modernes pour une logistique fiable et transparente',
    'tools.transportTitle': 'Modes de Transport',
    
    // Common
    'common.required': 'Obligatoire',
    'common.optional': 'Optionnel',
    'common.submit': 'Envoyer',
    'common.cancel': 'Annuler',
    'common.close': 'Fermer',
    'common.more': 'En savoir plus',
    'common.learnMore': 'Découvrir',
    'common.getQuote': 'Devis Gratuit',
    'common.contactUs': 'Nous Contacter',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.booking': 'Booking',
    'nav.about': 'About',
    'nav.fleet': 'Fleet',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'LULé Ecological Delivery',
    'hero.tagline': '"Delivering Reliability Across Haut-Rhin"',
    'hero.description': 'Flexible and efficient transport solutions for vehicles under 3.5 tons. Connecting people and businesses throughout Haut-Rhin.',
    'hero.vehicles': 'Vehicles',
    'hero.founded': 'Founded',
    'hero.service': 'Service',
    'hero.vehiclesUnder': 'Vehicles < 3.5T',
    'hero.expressDelivery': 'Express Delivery',
    'hero.insuranceIncluded': 'Insurance Included',
    'hero.shipping': 'Shipping and',
    'hero.delivery': 'Delivery',
    'hero.parcelCollection': 'Parcel',
    'hero.parcels': 'Collection',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Flexible transport solutions adapted to your needs in Haut-Rhin',
    'services.parcelTransport': 'Parcel Transport',
    'services.parcelDescription': 'Secure delivery of your parcels with real-time tracking',
    'services.businessLogistics': 'Business Logistics',
    'services.businessDescription': 'Custom logistics solutions for your business',
    'services.expressDelivery': 'Express Delivery',
    'services.expressDescription': 'Express delivery service for your emergencies',
    'services.moving': 'Moving Services',
    'services.movingDescription': 'Personal and professional moving services',
    
    // Booking
    'booking.title': 'Book Your Transport',
    'booking.subtitle': 'Request a personalized quote for your transport in just a few clicks',
    'booking.formTitle': 'Booking Form',
    'booking.formDescription': 'Fill in the information below to receive your personalized quote',
    'booking.name': 'Full Name',
    'booking.email': 'Email',
    'booking.phone': 'Phone',
    'booking.serviceType': 'Service Type',
    'booking.pickupLocation': 'Pickup Location',
    'booking.deliveryLocation': 'Delivery Location',
    'booking.date': 'Preferred Date',
    'booking.time': 'Preferred Time',
    'booking.packageSize': 'Size/Dimensions',
    'booking.paymentMethod': 'Preferred Payment Method',
    'booking.specialInstructions': 'Special Instructions',
    'booking.submit': 'Request Free Quote',
    'booking.submitting': 'Sending...',
    'booking.required': 'Required fields. We will contact you within 24h to confirm your booking.',
    
    // About
    'about.title': 'About LULé',
    'about.subtitle': 'Founded in 2023, LULé specializes in urban ecological delivery logistics, offering innovative transport solutions in Haut-Rhin.',
    'about.story': 'Our Story',
    'about.mission': 'Our Mission',
    'about.vision': 'Our Vision',
    'about.values': 'Our Values',
    'about.commitment': 'Our Commitment',
    'about.contactUs': 'Contact Us',
    
    // Contact
    'contact.title': 'Contact LULé',
    'contact.subtitle': 'Request your free quote or contact us for more information',
    'contact.quoteRequest': 'Quote Request',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.whatsapp': 'WhatsApp',
    'contact.hours': 'Service Hours',
    'contact.location': 'Our Location',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Find answers to the most common questions about our transport services',
    'faq.otherQuestions': 'Have other questions?',
    'faq.teamHelp': 'Our team is here to help. Contact us directly!',
    'faq.sendEmail': 'Send email',
    
    // Sections
    'fleet.title': 'Our Fleet',
    'fleet.subtitle': 'Modern, well-equipped vehicles to cover your transport needs',
    'fleet.modernTitle': 'Modern and Ecological Fleet',
    'clients.title': 'Our Clients',
    'testimonials.title': 'What Our Clients Say',
    'partners.title': 'Our Partners',
    'process.title': 'Our Delivery Process',
    'process.subtitle': 'Simple, fast and transparent',
    'tools.title': 'Tools & Tracking',
    'tools.subtitle': 'Modern tools for reliable and transparent logistics',
    'tools.transportTitle': 'Transport Modes',
    
    // Common
    'common.required': 'Required',
    'common.optional': 'Optional',
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
    'common.close': 'Close',
    'common.more': 'Learn more',
    'common.learnMore': 'Discover',
    'common.getQuote': 'Free Quote',
    'common.contactUs': 'Contact Us',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
