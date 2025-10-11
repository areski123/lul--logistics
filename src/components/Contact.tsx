import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    pickupLocation: "",
    deliveryLocation: "",
    date: "",
    time: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      toast({
        title: "Demande envoyée",
        description: "Nous vous contacterons dans les plus brefs délais.",
      });
    } catch (err) {
      console.error(err);
      toast({ title: "Erreur", description: "Échec de l'envoi. Réessayez." });
    }
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      pickupLocation: "",
      deliveryLocation: "",
      date: "",
      time: "",
      message: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      info: "+33 6 51 88 81 44",
      description: "Disponible 24/7 pour vos urgences",
    },
    {
      icon: Mail,
      title: "Email",
      info: "idriss.attobi@gmail.com",
      description: "Réponse sous 24h garantie",
    },
    {
      icon: MapPin,
      title: "Adresse",
      info: "51 boulevard Alfred Wallach",
      description: "68100 Mulhouse, Haut-Rhin",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "+33 6 51 88 81 44",
      description: "Chat support instantané",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-accent/10 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">{t('contact.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t('contact.subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-card shadow-card border-border/50 animate-slide-in">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center">
                <MessageCircle className="w-6 h-6 text-primary mr-2" />
                {t('contact.quoteRequest')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('booking.name')} *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('booking.email')} *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('booking.phone')} *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Type de service</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-border/50 rounded-md focus:border-primary focus:outline-none bg-background"
                    >
                      <option value="">Sélectionnez un service</option>
                      <option value="standard">Standard</option>
                      <option value="express">Express</option>
                      <option value="business">Logistique d'entreprise</option>
                      <option value="moving">Déménagement</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="pickupLocation">{t('booking.pickupLocation')}</Label>
                    <Input
                      id="pickupLocation"
                      name="pickupLocation"
                      value={formData.pickupLocation}
                      onChange={handleInputChange}
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="deliveryLocation">{t('booking.deliveryLocation')}</Label>
                    <Input
                      id="deliveryLocation"
                      name="deliveryLocation"
                      value={formData.deliveryLocation}
                      onChange={handleInputChange}
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">{t('booking.date')}</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">{t('booking.time')}</Label>
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (détails sur le transport)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="border-border/50 focus:border-primary resize-none"
                    placeholder="Décrivez vos besoins (taille des colis, contraintes particulières, etc.)"
                  />
                </div>

                <Button type="submit" variant="orange" size="lg" className="w-full">
                  {t('common.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <Card 
                  key={index}
                  className="bg-gradient-card border-border/50 hover:border-primary/20 hover:shadow-card transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <contact.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">
                          {contact.title}
                        </h4>
                        <p className="text-primary font-medium mb-1">
                          {contact.info}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Hours */}
            <Card className="bg-gradient-primary/10 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Horaires de Service
                    </h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Lundi - Vendredi:</span>
                        <span className="text-foreground">7h00 - 19h00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Samedi:</span>
                        <span className="text-foreground">8h00 - 16h00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Urgences:</span>
                        <span className="text-primary font-medium">24/7</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">
                  Notre Localisation
                </h4>
                <div className="bg-muted rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm">
                      51 boulevard Alfred Wallach<br />
                      68100 Mulhouse, Haut-Rhin
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;