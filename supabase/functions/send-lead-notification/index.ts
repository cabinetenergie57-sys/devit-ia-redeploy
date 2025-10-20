import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface LeadNotification {
  lead_id: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  profile_type: string;
  stack: string[];
  seniority?: string;
  team_size?: number;
  timeline?: string;
  budget_range?: string;
  project_description?: string;
  qualification_score: number;
  conversation_summary: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { lead, send_confirmation = false } = await req.json() as { lead: LeadNotification, send_confirmation?: boolean };

    if (!lead || !lead.name || !lead.email) {
      console.error('Invalid lead data:', { name: lead?.name, email: lead?.email });
      throw new Error('Invalid lead data: name and email are required');
    }

    if (!lead.email.includes('@')) {
      console.error('Invalid email format:', lead.email);
      throw new Error('Invalid email format');
    }

    const emailSubject = `🎯 Nouveau lead qualifié: ${lead.name} - ${lead.profile_type}`;
    
    const emailBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
    .info-box { background: white; padding: 15px; margin: 10px 0; border-radius: 5px; border-left: 4px solid #667eea; }
    .label { font-weight: bold; color: #667eea; }
    .score { display: inline-block; background: #4ade80; color: white; padding: 5px 15px; border-radius: 20px; font-weight: bold; }
    .footer { text-align: center; margin-top: 20px; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">🎯 Nouveau Lead Qualifié</h1>
      <p style="margin: 5px 0 0 0; opacity: 0.9;">Lina a identifié une opportunité commerciale</p>
    </div>
    
    <div class="content">
      <div class="info-box">
        <p><span class="label">Score de qualification:</span> <span class="score">${lead.qualification_score}/10</span></p>
      </div>

      <div class="info-box">
        <h3 style="margin-top: 0; color: #667eea;">📋 Informations du Contact</h3>
        <p><span class="label">Nom:</span> ${lead.name}</p>
        <p><span class="label">Email:</span> <a href="mailto:${lead.email}">${lead.email}</a></p>
        ${lead.company ? `<p><span class="label">Société:</span> ${lead.company}</p>` : ''}
        ${lead.phone ? `<p><span class="label">Téléphone:</span> <a href="tel:${lead.phone}">${lead.phone}</a></p>` : ''}
      </div>

      <div class="info-box">
        <h3 style="margin-top: 0; color: #667eea;">💼 Besoin Identifié</h3>
        <p><span class="label">Type de profil:</span> ${lead.profile_type}</p>
        ${lead.seniority ? `<p><span class="label">Séniorité:</span> ${lead.seniority}</p>` : ''}
        ${lead.team_size ? `<p><span class="label">Effectif:</span> ${lead.team_size} personne(s)</p>` : ''}
        ${lead.stack && lead.stack.length > 0 ? `<p><span class="label">Stack technique:</span> ${lead.stack.join(', ')}</p>` : ''}
        ${lead.timeline ? `<p><span class="label">Délai:</span> ${lead.timeline}</p>` : ''}
        ${lead.budget_range ? `<p><span class="label">Budget:</span> ${lead.budget_range}</p>` : ''}
      </div>

      ${lead.project_description ? `
      <div class="info-box">
        <h3 style="margin-top: 0; color: #667eea;">📝 Description du Projet</h3>
        <p>${lead.project_description}</p>
      </div>
      ` : ''}

      <div class="info-box">
        <h3 style="margin-top: 0; color: #667eea;">💬 Résumé de la Conversation</h3>
        <p style="font-style: italic; white-space: pre-wrap;">${lead.conversation_summary}</p>
      </div>

      <div style="text-align: center; margin-top: 30px;">
        <p style="font-size: 14px; color: #666;">⏰ <strong>Action requise:</strong> Recontacter ce lead sous 2h maximum</p>
      </div>
    </div>

    <div class="footer">
      <p>Email automatique envoyé par Lina, votre assistante IA Devit.IA</p>
      <p>Lead ID: ${lead.lead_id}</p>
    </div>
  </div>
</body>
</html>
    `;

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    
    if (!RESEND_API_KEY) {
      console.warn('RESEND_API_KEY not configured');
      throw new Error('RESEND_API_KEY not configured');
    }

    console.log('Sending email to ouafa.moussa78@gmail.com...');

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Lina - Devit.IA <onboarding@resend.dev>',
        to: ['ouafa.moussa78@gmail.com'],
        reply_to: 'ouafa.moussa78@gmail.com',
        subject: emailSubject,
        html: emailBody,
        text: `Nouveau lead qualifié: ${lead.name}\n\nEmail: ${lead.email}\nSociété: ${lead.company || 'N/A'}\nTéléphone: ${lead.phone || 'N/A'}\nProfil: ${lead.profile_type}\nSéniorité: ${lead.seniority || 'N/A'}\nEffectif: ${lead.team_size || 'N/A'}\nDélai: ${lead.timeline || 'N/A'}\nBudget: ${lead.budget_range || 'N/A'}\n\nScore: ${lead.qualification_score}/10\n\nLead ID: ${lead.lead_id}`,
      }),
    });

    if (!resendResponse.ok) {
      const error = await resendResponse.text();
      console.error('Resend API error:', error);
      throw new Error(`Failed to send email: ${resendResponse.status} - ${error}`);
    }

    const resendData = await resendResponse.json();
    console.log('Email sent successfully:', resendData);

    if (send_confirmation) {
      console.log('Sending confirmation email to lead:', lead.email);

      const confirmationSubject = 'Confirmation de votre demande - Devit.IA';
      const confirmationBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px 20px; border-radius: 8px 8px 0 0; text-align: center; }
    .content { background: #f9f9f9; padding: 30px 20px; border-radius: 0 0 8px 8px; }
    .info-box { background: white; padding: 20px; margin: 20px 0; border-radius: 5px; border-left: 4px solid #667eea; }
    .label { font-weight: bold; color: #667eea; }
    .cta-button { display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; font-weight: bold; }
    .footer { text-align: center; margin-top: 20px; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 28px;">✓ Demande reçue !</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">Merci ${lead.name}</p>
    </div>

    <div class="content">
      <p style="font-size: 16px; margin-bottom: 20px;">Bonjour ${lead.name},</p>

      <p>Merci d'avoir échangé avec Lina, notre assistante IA ! Nous avons bien reçu votre demande concernant :</p>

      <div class="info-box">
        <p><span class="label">Profil recherché:</span> ${lead.profile_type}</p>
        ${lead.stack && lead.stack.length > 0 ? `<p><span class="label">Stack technique:</span> ${lead.stack.join(', ')}</p>` : ''}
        ${lead.seniority ? `<p><span class="label">Séniorité:</span> ${lead.seniority}</p>` : ''}
        ${lead.team_size ? `<p><span class="label">Effectif:</span> ${lead.team_size} personne(s)</p>` : ''}
        ${lead.timeline ? `<p><span class="label">Délai:</span> ${lead.timeline}</p>` : ''}
      </div>

      <div style="background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0; border-radius: 5px;">
        <p style="margin: 0;"><strong>⏰ Prochaine étape :</strong></p>
        <p style="margin: 5px 0 0 0;">Un conseiller expert Devit.IA vous recontactera dans les <strong>2 heures</strong> pour échanger sur votre projet et vous proposer une solution personnalisée.</p>
      </div>

      <p>En attendant, n'hésitez pas à consulter notre site pour en savoir plus sur notre méthode DevConnect™ et nos réussites clients.</p>

      <div style="text-align: center; margin: 30px 0;">
        <p style="margin-bottom: 15px;">Des questions ? Contactez-nous directement :</p>
        <p style="margin: 5px 0;">
          <strong>Email:</strong> <a href="mailto:ouafa.moussa78@gmail.com" style="color: #667eea;">ouafa.moussa78@gmail.com</a>
        </p>
        ${lead.phone ? `<p style="margin: 5px 0;"><strong>Votre téléphone:</strong> ${lead.phone}</p>` : ''}
      </div>

      <p style="margin-top: 30px;">À très bientôt !</p>
      <p style="margin: 5px 0;"><strong>L'équipe Devit.IA</strong></p>
    </div>

    <div class="footer">
      <p>Cet email de confirmation a été envoyé automatiquement par Lina</p>
      <p style="margin: 10px 0;">Devit.IA - Nearshoring & Innovation Numérique</p>
      <p style="margin: 5px 0;">Technopark Casablanca, Maroc</p>
    </div>
  </div>
</body>
</html>
      `;

      const confirmationResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Lina - Devit.IA <onboarding@resend.dev>',
          to: [lead.email],
          reply_to: 'ouafa.moussa78@gmail.com',
          subject: confirmationSubject,
          html: confirmationBody,
          text: `Bonjour ${lead.name},\n\nMerci d'avoir échangé avec Lina ! Nous avons bien reçu votre demande.\n\nProfil recherché: ${lead.profile_type}\nStack: ${lead.stack?.join(', ') || 'N/A'}\nSéniorité: ${lead.seniority || 'N/A'}\nEffectif: ${lead.team_size || 'N/A'}\nDélai: ${lead.timeline || 'N/A'}\n\nProchaine étape: Un conseiller expert Devit.IA vous recontactera dans les 2 heures.\n\nÀ très bientôt !\nL'équipe Devit.IA\n\nEmail: ouafa.moussa78@gmail.com`,
        }),
      });

      if (confirmationResponse.ok) {
        const confirmationData = await confirmationResponse.json();
        console.log('Confirmation email sent to lead:', confirmationData);
      } else {
        const confirmationError = await confirmationResponse.text();
        console.error('Failed to send confirmation email:', confirmationError);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Email notification sent successfully',
        email_id: resendData.id
      }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error in send-lead-notification function:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'Failed to send notification'
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});