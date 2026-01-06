import { NextResponse } from "next/server"

// Type pour les données de réservation
interface BookingData {
  name: string;
  email: string;
  message: string;
  preferredDate: string;
  preferredTime: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message, preferredDate, preferredTime } = body as BookingData

    // Formater la date en français
    const date = new Date(preferredDate);
    const formattedDate = date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Formater le message pour WhatsApp et Email
    const formattedMessage = `
*Nouvelle demande de consultation*

*Nom:* ${name}
*Email:* ${email}
*Date préférée:* ${formattedDate}
*Heure préférée:* ${preferredTime}

*Message:*
${message}
    `.trim()

    // URL WhatsApp pour la confirmation
    const whatsappMessage = encodeURIComponent(formattedMessage)
    const whatsappUrl = `https://wa.me/22997442048?text=${whatsappMessage}`

    // Enregistrer la réservation dans une base de données (à implémenter)
    // Exemple avec une base de données :
    /*
    const booking = await prisma.booking.create({
      data: {
        name,
        email,
        message,
        preferredDate: new Date(preferredDate),
        preferredTime,
        status: 'PENDING'
      }
    });
    */

    // Envoyer un email de confirmation (à décommenter et configurer)
    /*
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'contact@votredomaine.com',
        to: email,
        bcc: 'gomezjoel277@gmail.com',
        subject: `Confirmation de votre demande de consultation`,
        html: `
          <h1>Merci pour votre demande de consultation, ${name} !</h1>
          <p>Nous avons bien reçu votre demande pour le ${formattedDate} à ${preferredTime}.</p>
          <p>Nous vous contacterons dans les plus brefs délais pour confirmer ce créneau.</p>
          <p>Récapitulatif de votre demande :</p>
          <p>${message}</p>
          <p>Cordialement,<br>L'équipe</p>
        `,
      }),
    });
    */

    // Retourner la réponse avec l'URL WhatsApp
    return NextResponse.json({
      success: true,
      message: "Message reçu",
      whatsappUrl,
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ success: false, message: "Erreur lors du traitement" }, { status: 500 })
  }
}
