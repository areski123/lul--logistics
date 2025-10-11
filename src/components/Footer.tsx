import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <span className="font-bold text-xl">L</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">LULé</h3>
                <p className="text-sm opacity-90">Logistique Urbaine</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Delivering Reliability Across Haut-Rhin. Votre partenaire de confiance 
              pour tous vos besoins de transport écologique et efficace.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>51 boulevard Alfred Wallach, 68100 Mulhouse</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+33 6 51 88 81 44</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>idriss.attobi@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Nos Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Transport de Colis</li>
              <li>Logistique d'Entreprise</li>
              <li>Livraison Express</li>
              <li>Déménagements</li>
              <li>Distribution Last-Mile</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Liens Rapides</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#home" className="hover:text-primary-foreground transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary-foreground transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-primary-foreground transition-colors">
                  Notre Flotte
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Horaires</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-2 mb-3">
                <Clock size={16} />
                <span>Heures de Service</span>
              </div>
              <div className="space-y-1">
                <div>Lundi - Vendredi: 7h00 - 19h00</div>
                <div>Samedi: 8h00 - 16h00</div>
                <div>Dimanche: Sur demande</div>
                <div className="text-primary-foreground font-medium mt-2">
                  Urgences: 24/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80">
              © 2023 LULé - Logistique Urbaine de Livraison écologique. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Mentions Légales
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Conditions d'Utilisation
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Politique de Confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;