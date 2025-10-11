import { useLanguage } from "@/contexts/LanguageContext";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-background z-50">
      <div className="p-4">
        <button onClick={onClose} className="text-foreground">
          Close
        </button>
        <nav className="flex flex-col space-y-4 mt-4">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">
            {t('nav.home')}
          </a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors">
            {t('nav.services')}
          </a>
           <a href="#booking" className="text-foreground hover:text-primary transition-colors">
              {t('nav.booking')}
            </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            {t('nav.about')}
          </a>
          <a href="#fleet" className="text-foreground hover:text-primary transition-colors">
            {t('nav.fleet')}
          </a>
           <a href="#faq" className="text-foreground hover:text-primary transition-colors">
              {t('nav.faq')}
            </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            {t('nav.contact')}
          </a>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;