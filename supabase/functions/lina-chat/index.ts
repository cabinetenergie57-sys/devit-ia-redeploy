import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

const systemPrompt = `Tu es Lina, l'assistante IA de DEVIT.AI, une société spécialisée dans le nearshoring et l'innovation numérique.

Ta mission est d'accompagner les visiteurs du site (entreprises, recruteurs ou freelances) en leur présentant la méthode exclusive DevConnect™. Cette méthode optimise la collaboration entre les entreprises françaises et les développeurs qualifiés basés au Maroc.

Tu es professionnelle, claire, empathique et orientée résultats. Tu t'exprimes toujours en français avec un ton humain et engageant.

Ton objectif : qualifier le besoin du visiteur, proposer une estimation, planifier un appel de cadrage, et prévenir l'équipe DEVIT.AI lorsqu'un lead est qualifié.

À chaque conversation, suis ces étapes :
1. Identifie le profil (entreprise, recruteur, freelance ou autre)
2. Clarifie le besoin : stack, séniorité, effectif, délai, budget
3. Si besoin, utilise tes connaissances pour donner des réponses cohérentes sur la méthode DevConnect™, les offres, le RGPD ou les cas clients
4. Propose une action utile : estimation, planification de RDV ou envoi d'un récap
5. Termine toujours par une proposition concrète : « Souhaitez-vous réserver un appel de 15 min ? » ou « Puis-je vous envoyer un récapitulatif par email ? »

Politique de qualification des leads :
Un lead est QUALIFIÉ si toutes ces conditions sont vraies :
- profil = entreprise ou recruteur
- besoin explicite + stack mentionnée
- headcount ≥ 1 et séniorité précisée
- démarrage prévu sous 60 jours OU budget indiqué

Quand un lead est qualifié :
1. Collecte TOUTES les informations nécessaires (nom, email, société, téléphone si possible, besoin, stack, séniorité, effectif, délai, budget)
2. Utilise la fonction 'save_qualified_lead' pour sauvegarder le lead
3. Informe le visiteur que l'équipe sera notifiée et le recontactera sous 2h
4. Propose 3 créneaux de 15 min (fuseau Europe/Paris) pour un appel de cadrage DevConnect™

RÈGLES CRITIQUES POUR LA SAUVEGARDE DU LEAD :
- NE JAMAIS appeler save_qualified_lead si tu n'as PAS l'email du visiteur
- L'EMAIL est OBLIGATOIRE et doit contenir un @
- Le NOM est OBLIGATOIRE
- Si tu n'as pas le nom ET l'email, demande-les EXPLICITEMENT avant de sauvegarder
- Une fois que tu as nom + email + besoin qualifié, appelle IMMÉDIATEMENT save_qualified_lead

Informations clés sur DevConnect™ et DEVIT.AI:

**Méthode DevConnect™:**
- Processus éprouvé en 4 phases: Sélection ciblée → Intégration accélérée → Suivi agile → Optimisation continue
- Résultats mesurables: 98% de satisfaction client, 40% plus rapide que la moyenne, turn-over < 5%
- Méthodologie agile avec KPIs transparents et reporting régulier

**3 Solutions d'externalisation:**

1. **Régie nouvelle génération**
   - Renfort d'équipe IT/Data intégré à vos process
   - Flexibilité totale sur la durée et le dimensionnement
   - Intégration opérationnelle en 10-15 jours
   - Idéal pour: augmentation de capacité, projets longue durée

2. **Expert à la carte**
   - Consultants seniors spécialisés disponibles sous 48h
   - Missions courtes: audit, conseil, expertise ponctuelle
   - Intervention ciblée à fort impact
   - Idéal pour: audit technique, conseil stratégique, missions spécialisées

3. **Clé en main DevConnect™**
   - Gestion complète de projet de A à Z
   - Équipe dédiée et coordonnée
   - Garantie de résultat, zéro charge administrative
   - Idéal pour: projets complexes, transformation digitale, MVP

**Expertise technique disponible:**
- **Data**: Data Engineers, Data Scientists, Data Analysts, Architectes Data
- **Développement**: Full Stack, Frontend, Backend, Mobile (React, Angular, Vue, Node.js, Python, Java, .NET)
- **DevOps & Cloud**: AWS, Azure, GCP, Kubernetes, CI/CD, Infrastructure as Code
- **Architecture**: Architectes Solutions, Architectes Cloud, Tech Leads
- **Product & Agile**: Product Owners, Scrum Masters, Business Analysts

Tous nos profils sont:
- Bilingues français/anglais
- Formés aux standards internationaux
- Expérimentés (3 à 10+ ans selon les profils)
- Sélectionnés via notre processus de recrutement rigoureux

**Avantages compétitifs du Maroc:**
- Même fuseau horaire que l'Europe (GMT+1)
- Économies substantielles: jusqu'à 45% de réduction des coûts
- Pool de 300+ talents qualifiés immédiatement disponibles
- Conformité RGPD et normes de sécurité européennes
- Infrastructures technologiques de pointe (Technoparks, fibre optique)
- Stabilité politique et économique
- Culture de travail compatible avec les entreprises européennes

**Process d'engagement:**
1. Remplissage du formulaire de contact sur le site
2. Appel de qualification sous 2h par un conseiller expert
3. Élaboration d'une proposition sur-mesure (24-48h)
4. Sélection et présentation des profils (48-72h)
5. Démarrage de la mission

**Contact:**
- Email: ouafa.moussa78@gmail.com
- Téléphone: +212 5 22 XX XX XX
- Adresse: Technopark Casablanca, Maroc
- Horaires équipe: Lun-Ven 9h-18h, Sam 10h-14h
- Toi (Lina): disponible 24/7

Consignes de communication:
- Ton PROFESSIONNEL, clair et empathique
- Réponses STRUCTURÉES et concises
- Mets en gras les éléments clés (besoin, durée, séniorité, budget…)
- ENGAGER une vraie conversation pour qualifier les besoins
- Pose des questions ciblées pour clarifier : stack, séniorité, effectif, délai, budget
- Termine toujours par une question d'engagement
- NE JAMAIS donner de tarifs chiffrés (dire "tarifs personnalisés selon vos besoins")
- Propose le formulaire de contact quand le besoin est bien qualifié
- Pour les leads qualifiés : proposer un appel de 15 min et indiquer qu'un conseiller recontactera sous 2h`;

const tools = [
  {
    type: 'function',
    function: {
      name: 'save_qualified_lead',
      description: 'Sauvegarde un lead qualifié dans la base de données et envoie une notification email à l\'équipe. À utiliser dès qu\'un lead remplit tous les critères de qualification.',
      parameters: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'Nom complet du contact'
          },
          email: {
            type: 'string',
            description: 'Adresse email du contact'
          },
          company: {
            type: 'string',
            description: 'Nom de la société'
          },
          phone: {
            type: 'string',
            description: 'Numéro de téléphone'
          },
          profile_type: {
            type: 'string',
            description: 'Type de profil recherché (ex: Data Engineer, Data Scientist, Full Stack Developer, etc.)'
          },
          stack: {
            type: 'array',
            items: { type: 'string' },
            description: 'Stack technique (langages, frameworks, outils)'
          },
          seniority: {
            type: 'string',
            description: 'Séniorité recherchée (Junior, Confirmé, Senior)'
          },
          team_size: {
            type: 'number',
            description: 'Nombre de profils nécessaires'
          },
          timeline: {
            type: 'string',
            description: 'Délai ou date de démarrage souhaitée'
          },
          budget_range: {
            type: 'string',
            description: 'Fourchette budgétaire'
          },
          project_description: {
            type: 'string',
            description: 'Description détaillée du projet ou de la mission'
          },
          qualification_score: {
            type: 'number',
            description: 'Score de qualification de 1 à 10 basé sur la complétude des informations et l\'urgence'
          }
        },
        required: ['name', 'email', 'profile_type', 'stack', 'qualification_score']
      }
    }
  }
];

interface Message {
  role: string;
  content: string;
}

async function saveQualifiedLead(leadData: any, conversationMessages: Message[]) {
  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

  if (!leadData.email || !leadData.email.includes('@')) {
    throw new Error('Email valide requis pour sauvegarder le lead');
  }

  if (!leadData.name || leadData.name === 'Visiteur') {
    throw new Error('Nom valide requis pour sauvegarder le lead');
  }

  const conversationSummary = conversationMessages
    .slice(-6)
    .map(m => `${m.role === 'user' ? 'Visiteur' : 'Lina'}: ${m.content}`)
    .join('\n\n');

  const { data: lead, error: dbError } = await supabase
    .from('qualified_leads')
    .insert({
      name: leadData.name,
      email: leadData.email,
      company: leadData.company || null,
      phone: leadData.phone || null,
      profile_type: leadData.profile_type,
      stack: leadData.stack || [],
      seniority: leadData.seniority || null,
      team_size: leadData.team_size || null,
      timeline: leadData.timeline || null,
      budget_range: leadData.budget_range || null,
      project_description: leadData.project_description || null,
      qualification_score: leadData.qualification_score || 5,
      status: 'new',
      conversation_data: conversationMessages,
      email_sent: false,
    })
    .select()
    .single();

  if (dbError) {
    console.error('Error saving lead to database:', dbError);
    throw new Error('Failed to save lead');
  }

  console.log('Lead saved successfully:', lead.id);

  try {
    const emailResponse = await fetch(`${SUPABASE_URL}/functions/v1/send-lead-notification`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        lead: {
          lead_id: lead.id,
          name: lead.name,
          email: lead.email,
          company: lead.company,
          phone: lead.phone,
          profile_type: lead.profile_type,
          stack: lead.stack,
          seniority: lead.seniority,
          team_size: lead.team_size,
          timeline: lead.timeline,
          budget_range: lead.budget_range,
          project_description: lead.project_description,
          qualification_score: lead.qualification_score,
          conversation_summary: conversationSummary,
        },
        send_confirmation: true
      }),
    });

    if (emailResponse.ok) {
      await supabase
        .from('qualified_leads')
        .update({ email_sent: true })
        .eq('id', lead.id);

      console.log('Email notification sent successfully');
    } else {
      const errorText = await emailResponse.text();
      console.error('Failed to send email notification:', errorText);
    }
  } catch (emailError) {
    console.error('Error sending email notification:', emailError);
  }

  return {
    success: true,
    lead_id: lead.id,
    message: 'Lead qualifié sauvegardé avec succès. L\'équipe a été notifiée par email.'
  };
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    if (!OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY is not configured');
    }

    const { messages } = await req.json() as { messages: Message[] };

    if (!messages || !Array.isArray(messages)) {
      throw new Error('Invalid messages format');
    }

    const now = new Date();
    const parisTime = new Intl.DateTimeFormat('fr-FR', {
      timeZone: 'Europe/Paris',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).format(now);

    const contextualizedPrompt = `${systemPrompt}

CONTEXTE TEMPOREL ACTUEL:
Nous sommes le ${parisTime} (fuseau Europe/Paris).
Utilise cette information pour proposer des créneaux de rendez-vous réalistes et pour contextualiser tes réponses (ex: "aujourd'hui", "demain", "cette semaine", etc.).`;

    let response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: contextualizedPrompt },
          ...messages,
        ],
        tools: tools,
        tool_choice: 'auto',
        temperature: 0.4,
        max_tokens: 800,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('OpenAI API error:', error);
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    let data = await response.json();
    let assistantMessage = data.choices[0]?.message;

    if (!assistantMessage) {
      throw new Error('No response from OpenAI');
    }

    if (assistantMessage.tool_calls && assistantMessage.tool_calls.length > 0) {
      const toolCall = assistantMessage.tool_calls[0];
      
      if (toolCall.function.name === 'save_qualified_lead') {
        console.log('Saving qualified lead...');
        const functionArgs = JSON.parse(toolCall.function.arguments);
        
        try {
          const result = await saveQualifiedLead(functionArgs, messages);
          
          const followUpResponse = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${OPENAI_API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              model: 'gpt-4o-mini',
              messages: [
                { role: 'system', content: contextualizedPrompt },
                ...messages,
                assistantMessage,
                {
                  role: 'tool',
                  tool_call_id: toolCall.id,
                  content: JSON.stringify(result),
                },
              ],
              temperature: 0.4,
              max_tokens: 600,
            }),
          });

          if (!followUpResponse.ok) {
            throw new Error('Failed to get follow-up response');
          }

          const followUpData = await followUpResponse.json();
          assistantMessage = followUpData.choices[0]?.message;
        } catch (functionError) {
          console.error('Error executing function:', functionError);
          return new Response(
            JSON.stringify({
              message: 'Merci pour ces informations ! J\'ai bien noté votre demande. Notre équipe vous recontactera très prochainement à l\'adresse ' + functionArgs.email + ' pour discuter de votre projet en détail. 🚀'
            }),
            {
              headers: {
                ...corsHeaders,
                'Content-Type': 'application/json',
              },
            }
          );
        }
      }
    }

    return new Response(
      JSON.stringify({ message: assistantMessage.content }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error in lina-chat function:', error);
    
    return new Response(
      JSON.stringify({
        error: error.message || 'Une erreur est survenue',
        message: 'Je rencontre un problème technique. N\'hésitez pas à nous contacter directement à ouafa.moussa78@gmail.com ou via le formulaire de contact sur notre site.'
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