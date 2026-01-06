"use client"

import type React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, Phone, MapPin, Clock, Send, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

type FormData = {
  name: string
  email: string
  phone: string
  message: string
}

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, reset } = useForm<FormData>()
  const { toast } = useToast()

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    
    // Construction du message pour WhatsApp
    const message = `Nouveau message de ${data.name}%0A%0A` +
                    `✉️ Email: ${data.email}%0A` +
                    `📱 Téléphone: ${data.phone}%0A%0A` +
                    `🗨️ Message:%0A${data.message}`;
                    
    // Numéro de téléphone WhatsApp (à remplacer par votre numéro)
    const phoneNumber = "+22997442048"; // Remplacez par votre numéro avec l'indicatif pays
    
    // Redirection vers WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    
    // Réinitialisation du formulaire
    reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Me Contacter</h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto mb-3 sm:mb-4" />
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-4">
            Un projet en tête ? N'hésitez pas à me contacter pour en discuter
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow group">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 bg-primary/10 text-primary rounded-lg flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">Téléphone</h3>
                  <a href="tel:0197442048" className="text-muted-foreground hover:text-primary text-sm sm:text-base flex items-center gap-1">
                    <Phone className="h-3.5 w-3.5" /> 01 97 44 20 48
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow group">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 bg-green-100 text-green-600 rounded-lg flex-shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">WhatsApp</h3>
                  <a
                    href="https://wa.me/22997442048"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-green-600 text-sm sm:text-base flex items-center gap-1"
                  >
                    <MessageCircle className="h-3.5 w-3.5" /> +229 97 44 20 48
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow group">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 bg-blue-100 text-blue-600 rounded-lg flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">Email</h3>
                  <a
                    href="mailto:gomezjoel277@gmail.com"
                    className="text-muted-foreground hover:text-blue-600 break-all text-sm sm:text-base flex items-center gap-1"
                  >
                    <Mail className="h-3.5 w-3.5 flex-shrink-0" /> gomezjoel277@gmail.com
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-4 sm:p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Input
                  {...register("name")}
                  placeholder="Votre nom"
                  required
                  className="text-sm sm:text-base"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Votre email"
                  {...register("email", { required: true })}
                  className="text-sm sm:text-base"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Votre téléphone"
                  {...register("phone")}
                  className="text-sm sm:text-base"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Votre message"
                  rows={5}
                  {...register("message", { required: true })}
                  className="min-h-[120px] text-sm sm:text-base"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="h-4 w-4" />
                    Envoyer le message
                  </span>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
