"use client"

"use client"

import { Calendar as CalendarIcon, Clock as ClockIcon, CheckCircle2, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"

interface BookingFormData {
  name: string;
  email: string;
  message: string;
  preferredDate: string;
  preferredTime: string;
}

export function AvailabilityCalendar() {
  return (
    <section className="py-16 sm:py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="border-2 border-primary/20 shadow-lg">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75" />
                  </div>
                  <Badge className="bg-green-500 hover:bg-green-600">Disponible</Badge>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Actuellement disponible pour de nouveaux projets
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>Réponse sous 24h</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <ClockIcon className="h-5 w-5 text-green-500" />
                    <span>Démarrage immédiat possible</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <CalendarIcon className="h-5 w-5 text-green-500" />
                    <span>Planning flexible</span>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="w-full sm:w-auto">
                      Réserver une consultation gratuite
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] md:max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">Réserver une consultation gratuite</DialogTitle>
                      <p className="text-sm text-muted-foreground">
                        Discutons de votre projet et voyons comment je peux vous aider.
                      </p>
                    </DialogHeader>
                    <form onSubmit={async (e) => {
                      e.preventDefault();
                      const formData = new FormData(e.currentTarget);
                      const data = Object.fromEntries(formData.entries()) as unknown as BookingFormData;
                      
                      try {
                        const response = await fetch('/api/contact', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify(data),
                        });

                        const result = await response.json();

                        if (response.ok) {
                          toast({
                            title: "Demande envoyée !",
                            description: "Je vous recontacterai dans les plus brefs délais pour confirmer le rendez-vous.",
                          });
                          
                          // Optionnel : Rediriger vers WhatsApp
                          if (result.whatsappUrl) {
                            window.open(result.whatsappUrl, '_blank');
                          }
                          
                          // Fermer la modale après soumission réussie
                          document.getElementById('close-dialog')?.click();
                        } else {
                          throw new Error(result.message || 'Erreur lors de l\'envoi du formulaire');
                        }
                      } catch (error) {
                        console.error('Erreur:', error);
                        toast({
                          title: "Erreur",
                          description: error instanceof Error ? error.message : "Une erreur est survenue. Veuillez réessayer plus tard.",
                          variant: "destructive",
                        });
                      }
                    }} className="space-y-4 mt-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Nom complet <span className="text-red-500">*</span>
                          </label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Votre nom"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="votre@email.com"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="preferredDate" className="text-sm font-medium">
                            Date préférée <span className="text-red-500">*</span>
                          </label>
                          <Input
                            id="preferredDate"
                            name="preferredDate"
                            type="date"
                            min={new Date().toISOString().split('T')[0]}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="preferredTime" className="text-sm font-medium">
                            Heure préférée <span className="text-red-500">*</span>
                          </label>
                          <Input
                            id="preferredTime"
                            name="preferredTime"
                            type="time"
                            min="09:00"
                            max="18:00"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Parlez-nous de votre projet <span className="text-red-500">*</span>
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Décrivez brièvement votre projet, vos objectifs et vos attentes..."
                          className="min-h-[120px]"
                          required
                        />
                      </div>
                      
                      <div className="flex justify-end gap-3 pt-2">
                        <Button
                          type="button"
                          id="close-dialog"
                          variant="outline"
                          onClick={() => document.getElementById('close-dialog')?.click()}
                        >
                          Annuler
                        </Button>
                        <Button type="submit">
                          Envoyer la demande
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="w-full md:w-auto">
                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-semibold mb-4 text-center">Prochaines disponibilités</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-4 p-3 bg-background rounded-lg">
                      <span className="text-sm">Lundi - Vendredi</span>
                      <Badge variant="outline">9h - 18h</Badge>
                    </div>
                    <div className="flex items-center justify-between gap-4 p-3 bg-background rounded-lg">
                      <span className="text-sm">Samedi</span>
                      <Badge variant="outline">10h - 14h</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
