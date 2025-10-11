import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Package, MapPin, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  
  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle tracking logic here
    console.log("Tracking:", trackingNumber);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Suivi de Livraison
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Suivez votre colis en temps réel et restez informé de chaque étape de la livraison
            </p>
          </div>

          {/* Tracking Form */}
          <Card className="max-w-2xl mx-auto mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Package className="w-6 h-6 text-primary mr-2" />
                Entrez votre numéro de suivi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleTrack} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="tracking">Numéro de suivi</Label>
                  <div className="flex gap-2">
                    <Input
                      id="tracking"
                      placeholder="Ex: LULE2024-12345"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      className="flex-1"
                    />
                    <Button type="submit" variant="orange">
                      <Search className="w-4 h-4 mr-2" />
                      Rechercher
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Example Tracking Result (shown when tracking is available) */}
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>État de la livraison</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Timeline */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">Colis collecté</h4>
                      <p className="text-sm text-muted-foreground">
                        51 boulevard Alfred Wallach, Mulhouse
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Aujourd'hui à 09:30
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">En cours de livraison</h4>
                      <p className="text-sm text-muted-foreground">
                        Votre colis est en route
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Aujourd'hui à 11:45
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-muted-foreground">
                        Livraison prévue
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Estimation: Aujourd'hui 14:00-16:00
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Support */}
                <div className="mt-8 p-4 bg-accent/20 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Un problème avec votre livraison ?{" "}
                    <a href="tel:+33651888144" className="text-primary font-semibold hover:underline">
                      Contactez-nous au +33 6 51 88 81 44
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tracking;
