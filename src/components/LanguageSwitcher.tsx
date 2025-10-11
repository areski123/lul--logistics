import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center space-x-2 text-muted-foreground hover:text-foreground"
    >
      <Globe className="w-4 h-4" />
      <span className="font-medium">
        {language === 'fr' ? 'FR' : 'EN'}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;
