import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      type, prenom, nom, email, telephone,
      prenomEnfant, nombreEnfants, ageEnfants, date,
      adresse, codePostal, message,
    } = body;

    // Validation basique
    if (!email || !prenom || !nom || !message) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
    }

    const adminEmail = process.env.EMAIL_TO || "gwenviet33@gmail.com";
    const fromEmail = process.env.EMAIL_FROM || "noreply@gwenviet.fr";

    // Email à Gwendal
    await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: `[GwenViet] Nouvelle demande : ${type} — ${prenom} ${nom}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1A3A8F; color: white; padding: 20px; border-radius: 12px 12px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">Nouvelle demande GwenViet</h1>
            <p style="margin: 5px 0 0; opacity: 0.8; font-size: 14px;">${new Date().toLocaleDateString("fr-FR", { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" })}</p>
          </div>
          <div style="background: white; padding: 24px; border: 1px solid #e5e7eb; border-top: none;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr style="background: #F0F4FF;"><td style="padding: 8px 12px; font-weight: bold; color: #1A3A8F; border-bottom: 1px solid #e5e7eb;">Type</td><td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb;">${type}</td></tr>
              <tr><td style="padding: 8px 12px; font-weight: bold; color: #1A3A8F; border-bottom: 1px solid #e5e7eb;">Nom</td><td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb;">${prenom} ${nom}</td></tr>
              <tr style="background: #F0F4FF;"><td style="padding: 8px 12px; font-weight: bold; color: #1A3A8F; border-bottom: 1px solid #e5e7eb;">Email</td><td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 8px 12px; font-weight: bold; color: #1A3A8F; border-bottom: 1px solid #e5e7eb;">Téléphone</td><td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb;"><a href="tel:${telephone}">${telephone}</a></td></tr>
              ${prenomEnfant ? `<tr style="background: #F0F4FF;"><td style="padding: 8px 12px; font-weight: bold; color: #1A3A8F; border-bottom: 1px solid #e5e7eb;">Enfant fêté</td><td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb;">${prenomEnfant}</td></tr>` : ""}
              ${nombreEnfants ? `<tr><td style="padding: 8px 12px; font-weight: bold; color: #1A3A8F; border-bottom: 1px solid #e5e7eb;">Nb enfants</td><td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb;">${nombreEnfants}</td></tr>` : ""}
              ${ageEnfants ? `<tr style="background: #F0F4FF;"><td style="padding: 8px 12px; font-weight: bold; color: #1A3A8F; border-bottom: 1px solid #e5e7eb;">Âge moyen</td><td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb;">${ageEnfants}</td></tr>` : ""}
              ${date ? `<tr><td style="padding: 8px 12px; font-weight: bold; color: #1A3A8F; border-bottom: 1px solid #e5e7eb;">Date souhaitée</td><td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb;">${date}</td></tr>` : ""}
              ${adresse ? `<tr style="background: #F0F4FF;"><td style="padding: 8px 12px; font-weight: bold; color: #1A3A8F; border-bottom: 1px solid #e5e7eb;">Adresse</td><td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb;">${adresse}, ${codePostal || ""}</td></tr>` : ""}
            </table>
            <div style="margin-top: 16px; background: #F9FAFB; border-radius: 8px; padding: 16px; border-left: 3px solid #1A3A8F;">
              <strong style="color: #1A3A8F; font-size: 13px; display: block; margin-bottom: 8px;">Message</strong>
              <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #374151;">${message.replace(/\n/g, "<br>")}</p>
            </div>
          </div>
          <div style="background: #CC2027; color: white; padding: 12px 24px; border-radius: 0 0 12px 12px; font-size: 12px; text-align: center;">
            GwenViet · 06 77 24 36 75 · gwenviet33@gmail.com
          </div>
        </div>
      `,
    });

    // Email de confirmation au client
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "GwenViet — Demande reçue ! Réponse sous 2h",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1A3A8F; color: white; padding: 24px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 28px; font-family: Georgia, serif;">GWEN<span style="color: #F5C518;">VIET</span></h1>
            <p style="margin: 8px 0 0; opacity: 0.8; font-size: 14px;">Animation & Arts Martiaux · Libourne</p>
          </div>
          <div style="background: white; padding: 32px; border: 1px solid #e5e7eb; border-top: none;">
            <h2 style="color: #1A3A8F; font-size: 20px; margin-top: 0;">Bonjour ${prenom} !</h2>
            <p style="color: #374151; font-size: 15px; line-height: 1.7;">
              Merci pour votre demande concernant : <strong>${type}</strong>.<br>
              Gwendal a bien reçu votre message et vous contactera <strong style="color: #CC2027;">sous 2 heures</strong>.
            </p>
            <div style="background: #F0F4FF; border-radius: 12px; padding: 16px; margin: 20px 0;">
              <p style="margin: 0; font-size: 14px; color: #1A3A8F;">
                📞 Si c'est urgent : <strong>06 77 24 36 75</strong><br>
                💬 WhatsApp : <a href="https://wa.me/33677243675" style="color: #1A3A8F;">wa.me/33677243675</a>
              </p>
            </div>
            <p style="color: #6B7280; font-size: 13px;">
              À très bientôt !<br>
              <strong style="color: #1A3A8F;">Gwendal FERRON — GwenViet</strong>
            </p>
          </div>
          <div style="background: #F9FAFB; color: #9CA3AF; padding: 16px 24px; border-radius: 0 0 12px 12px; font-size: 11px; text-align: center; border: 1px solid #e5e7eb; border-top: none;">
            GwenViet · 18 Chemin de Belliquet · 33500 Libourne · SIRET 99048354700016
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
