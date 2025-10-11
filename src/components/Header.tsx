import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import luleLogo from "@/assets/lule-logo.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";

const Header = () => {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Top Bar with CTA Buttons */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-end items-center space-x-3">
            <LanguageSwitcher />
            <Link to="/tracking">
              <Button variant="outline" size="sm" className="text-sm">
                Suivi de Livraison
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="orange" size="sm" className="text-sm">
                Demander un Devis
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header with Logo and Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={luleLogo} 
              alt="LULé - Logistique Urbaine de Livraison écologique" 
              className="h-12 w-auto cursor-pointer"
            />
          </Link>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="lg:hidden text-foreground"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Accueil
            </a>
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Nos Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors font-medium">
              À Propos
            </a>
            <a href="#fleet" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Notre Flotte
            </a>
            <a href="#faq" className="text-gray-700 hover:text-primary transition-colors font-medium">
              FAQ
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </nav>
        </div>
      </div>
      
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </header>
  );
};

export default Header;