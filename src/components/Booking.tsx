import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Clock, Package, MapPin, User, Phone, Mail, Send } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

const Booking = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    pickupLocation: "",
    deliveryLocation: "",
    date: undefined as Date | undefined,
    time: "",
    packageSize: "",
    specialInstructions: "",
    paymentMethod: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string | Date) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          date: formData.date ? formData.date.toISOString().slice(0, 10) : '',
        }),
      });
    } catch (err) {
      console.error(err);
    }

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      pickupLocation: "",
      deliveryLocation: "",
      date: undefined,
      time: "",
      packageSize: "",
      specialInstructions: "",
      paymentMethod: ""
    });
    
    setIsSubmitting(false);
    // Show success message (you can implement toast notification here)
    alert("Votre demande de réservation a été envoyée avec succès ! Nous vous contacterons sous 24h.");
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-accent/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">{t('booking.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t('booking.subtitle')}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-center">{t('booking.formTitle')}</CardTitle>
              <CardDescription className="text-center">{t('booking.formDescription')}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {t('booking.name')} *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Votre nom complet"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      {t('booking.email')} *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      {t('booking.phone')} *
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+33 6 12 34 56 78"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="serviceType">{t('booking.serviceType')} *</Label>
                    <Select value={formData.serviceType} onValueChange={(value) => handleInputChange("serviceType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder={t('booking.serviceType')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Transport Standard</SelectItem>
                        <SelectItem value="express">Transport Express</SelectItem>
                        <SelectItem value="business">Logistique d'Entreprise</SelectItem>
                        <SelectItem value="moving">Déménagement</SelectItem>
                        <SelectItem value="parcel">Transport de Colis</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Locations */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="pickupLocation" className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {t('booking.pickupLocation')} *
                    </Label>
                    <Input
                      id="pickupLocation"
                      value={formData.pickupLocation}
                      onChange={(e) => handleInputChange("pickupLocation", e.target.value)}
                      placeholder="Adresse de collecte"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="deliveryLocation" className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {t('booking.deliveryLocation')} *
                    </Label>
                    <Input
                      id="deliveryLocation"
                      value={formData.deliveryLocation}
                      onChange={(e) => handleInputChange("deliveryLocation", e.target.value)}
                      placeholder="Adresse de livraison"
                      required
                    />
                  </div>
                </div>

                {/* Date and Time */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      {t('booking.date')} *
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !formData.date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.date ? format(formData.date, "PPP", { locale: fr }) : "Sélectionnez une date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={formData.date}
                          onSelect={(date) => handleInputChange("date", date || new Date())}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time" className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {t('booking.time')}
                    </Label>
                    <Input
                      id="time"
                      value={formData.time}
                      onChange={(e) => handleInputChange("time", e.target.value)}
                      placeholder="14:30"
                    />
                  </div>
                </div>

                {/* Package Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="packageSize" className="flex items-center">
                      <Package className="w-4 h-4 mr-2" />
                      {t('booking.packageSize')}
                    </Label>
                    <Input
                      id="packageSize"
                      value={formData.packageSize}
                      onChange={(e) => handleInputChange("packageSize", e.target.value)}
                      placeholder="Ex: 50x30x20 cm, 5 kg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="paymentMethod">{t('booking.paymentMethod')}</Label>
                    <Select value={formData.paymentMethod} onValueChange={(value) => handleInputChange("paymentMethod", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez une méthode" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="card">Carte bancaire</SelectItem>
                        <SelectItem value="paypal">PayPal</SelectItem>
                        <SelectItem value="cash">Espèces à la livraison</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Special Instructions */}
                <div className="space-y-2">
                  <Label htmlFor="specialInstructions">{t('booking.specialInstructions')}</Label>
                  <Textarea
                    id="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={(e) => handleInputChange("specialInstructions", e.target.value)}
                    placeholder="Informations supplémentaires, accès spécial, etc."
                    rows={3}
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      t('booking.submitting')
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        {t('booking.submit')}
                      </>
                    )}
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">* {t('booking.required')}</p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Booking;
