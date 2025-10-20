/*
  # Create blog posts table

  ## Overview
  This migration creates the blog_posts table to store blog articles for the DevConnect website.

  ## New Tables
  
  ### `blog_posts`
  - `id` (uuid, primary key) - Unique identifier for each blog post
  - `title` (text, required) - Blog post title
  - `slug` (text, unique, required) - URL-friendly version of the title
  - `excerpt` (text, required) - Short summary/preview text
  - `content` (text, required) - Full blog post content
  - `author` (text, required) - Author name
  - `category` (text, required) - Blog category
  - `image_url` (text, required) - Featured image URL
  - `read_time` (integer, required) - Estimated reading time in minutes
  - `published` (boolean, default: true) - Publication status
  - `created_at` (timestamptz, default: now()) - Creation timestamp
  - `updated_at` (timestamptz, default: now()) - Last update timestamp

  ## Security
  - Enable RLS on blog_posts table
  - Add policy for public read access (blog posts are public content)
  - No write policies needed (content will be managed by admins via backend)

  ## Notes
  - Blog posts are public content, so anyone can read them
  - Write operations would be handled by admin interface (not implemented in this migration)
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author text NOT NULL,
  category text NOT NULL,
  image_url text NOT NULL,
  read_time integer NOT NULL DEFAULT 5,
  published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read published blog posts"
  ON blog_posts
  FOR SELECT
  USING (published = true);

-- Insert 3 initial blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, author, category, image_url, read_time, published) VALUES
(
  'Maroc vs France : Comparatif des coûts IT en 2025',
  'maroc-vs-france-cout-it-2025',
  'Découvrez pourquoi externaliser au Maroc permet de réduire vos coûts IT de 40 à 60% tout en maintenant une qualité premium. Analyse détaillée des écarts de tarification.',
  E'# Maroc vs France : Le vrai comparatif des coûts IT\n\nLe nearshore au Maroc représente une opportunité stratégique pour les entreprises françaises. Voici une analyse complète des écarts de coûts.\n\n## Développeur Full-Stack Senior\n\n**France :** 450-650€/jour (TJM)\n**Maroc :** 250-350€/jour (TJM)\n**Économie :** 45-50%\n\n## Data Engineer / Data Scientist\n\n**France :** 500-750€/jour\n**Maroc :** 300-400€/jour\n**Économie :** 40-47%\n\n## DevOps Engineer\n\n**France :** 550-800€/jour\n**Maroc :** 320-450€/jour\n**Économie :** 42-44%\n\n## Architecte Solutions\n\n**France :** 700-1000€/jour\n**Maroc :** 400-550€/jour\n**Économie :** 43-45%\n\n## Au-delà des coûts : les avantages cachés\n\n### 1. Même fuseau horaire\nCollaboration en temps réel sans décalage horaire, idéal pour les daily meetings et la communication fluide.\n\n### 2. Proximité culturelle\nFrancophonie, compréhension du contexte business européen, codes professionnels similaires.\n\n### 3. Qualité équivalente\nIngénieurs formés dans les mêmes écoles (partenariats avec grandes écoles françaises), certifications internationales.\n\n### 4. Flexibilité juridique\nCadre légal stable, accords bilatéraux France-Maroc, protection intellectuelle robuste.\n\n## ROI sur un projet de 6 mois\n\nPour une équipe de 4 développeurs :\n- **Budget France :** 480 000€\n- **Budget Maroc :** 264 000€\n- **Économie :** 216 000€\n\nCette économie peut être réinvestie dans l\'innovation, le marketing ou la croissance.\n\n## Conclusion\n\nLe Maroc offre le meilleur rapport qualité-prix pour l\'externalisation IT. Avec DevConnect™, vous bénéficiez d\'une expertise de sélection et d\'accompagnement pour maximiser votre ROI.',
  'Sarah Bennani',
  'Externalisation',
  'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  8,
  true
),
(
  'Nearshore vs Offshore : Pourquoi le Maroc domine en 2025',
  'nearshore-vs-offshore-maroc-2025',
  'Comparaison approfondie entre nearshore au Maroc et offshore en Asie. Temps de réponse, qualité, communication : le Maroc surpasse l''offshore traditionnel sur tous les critères.',
  E'# Nearshore vs Offshore : Le match décisif\n\nLe choix entre nearshore (Maroc) et offshore (Inde, Vietnam, Philippines) n''est plus seulement une question de coût. En 2025, le nearshore marocain s''impose comme la solution premium.\n\n## Les 7 critères de comparaison\n\n### 1. Décalage horaire\n\n**Nearshore Maroc :** GMT+1 (identique à Paris en hiver)\n**Offshore Asie :** +4h30 à +7h\n\n**Gagnant :** Maroc. Collaboration synchrone vs meetings à 6h du matin.\n\n### 2. Barrière linguistique\n\n**Nearshore Maroc :** Français natif + anglais\n**Offshore Asie :** Anglais avec accent variable\n\n**Gagnant :** Maroc. Communication fluide = moins de malentendus = moins de refonte.\n\n### 3. Temps de vol\n\n**Nearshore Maroc :** 3h depuis Paris\n**Offshore Asie :** 11-14h\n\n**Gagnant :** Maroc. Visites régulières = meilleure cohésion.\n\n### 4. Proximité culturelle\n\n**Nearshore Maroc :** Culture francophone, codes européens\n**Offshore Asie :** Différences culturelles marquées\n\n**Gagnant :** Maroc. Compréhension intuitive du contexte business.\n\n### 5. Coûts réels\n\n**Nearshore Maroc :** 40-60% moins cher que France\n**Offshore Asie :** 60-70% moins cher que France\n\nMais attention aux coûts cachés offshore :\n- Gestion de la communication (+15%)\n- Voyages plus fréquents (+10%)\n- Taux de refonte plus élevé (+20%)\n\n**Gagnant :** Maroc. TCO (Total Cost of Ownership) comparable avec meilleure qualité.\n\n### 6. Qualité du code\n\n**Nearshore Maroc :** Standards européens, certifications ISO\n**Offshore Asie :** Variable selon les prestataires\n\n**Gagnant :** Maroc. Qualité homogène et prévisible.\n\n### 7. Time-to-Market\n\n**Nearshore Maroc :** Délais réduits grâce à la synchronisation\n**Offshore Asie :** Ralentissements dus au décalage horaire\n\n**Gagnant :** Maroc. 25% de time-to-market en moins.\n\n## Cas d''usage réels\n\n### Startup FinTech parisienne\n- **Avant (Offshore Inde) :** 8 mois de développement, 3 refonte majeures\n- **Après (Nearshore Maroc) :** 5 mois, 1 seule itération\n- **Résultat :** Lancement anticipé de 3 mois\n\n### PME E-commerce lyonnaise\n- **Avant (Offshore Vietnam) :** Communication compliquée, bugs récurrents\n- **Après (Nearshore Maroc) :** Équipe intégrée, 0 incompréhension\n- **Résultat :** Satisfaction client +40%\n\n## Verdict 2025\n\nLe Maroc nearshore domine l''offshore asiatique sur 6 critères sur 7. Pour les entreprises françaises et européennes, c''est le choix évident.',
  'Karim Alaoui',
  'Stratégie',
  'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  10,
  true
),
(
  '5 erreurs fatales en externalisation IT (et comment les éviter)',
  '5-erreurs-fatales-externalisation-it',
  'Ne commettez plus ces erreurs coûteuses. Guide pratique pour réussir votre externalisation IT au Maroc et maximiser votre ROI dès le premier projet.',
  E'# Les 5 erreurs qui coûtent cher en externalisation\n\nAprès avoir accompagné 150+ projets d''externalisation, nous avons identifié les pièges récurrents qui plombent les budgets et les délais.\n\n## Erreur #1 : Choisir uniquement sur le prix\n\n### Le piège\nSélectionner le prestataire le moins cher sans évaluer la qualité réelle.\n\n### Les conséquences\n- Code de mauvaise qualité = dette technique\n- Refonte complète après 6 mois\n- Budget final 2x supérieur\n\n### La solution DevConnect™\nAudit de compétences rigoureux, tests techniques approfondis, références vérifiées.\n\n**ROI :** Économie de 30% sur le coût total du projet.\n\n---\n\n## Erreur #2 : Négliger l''onboarding\n\n### Le piège\nLancer directement dans le code sans phase d''intégration.\n\n### Les conséquences\n- Incompréhension du contexte business\n- Développements hors-sujet\n- Frustration des équipes\n\n### La solution DevConnect™\nOnboarding structuré de 2 semaines :\n- Immersion dans le produit\n- Compréhension des users stories\n- Alignement sur les processus\n\n**ROI :** Time-to-productivity réduit de 40%.\n\n---\n\n## Erreur #3 : Communication asynchrone uniquement\n\n### Le piège\nS''appuyer exclusivement sur Slack/email sans réunions régulières.\n\n### Les conséquences\n- Malentendus fréquents\n- Déviations du scope\n- Démotivation de l''équipe\n\n### La solution DevConnect™\nRituels agile imposés :\n- Daily standup (15 min)\n- Sprint planning bi-hebdomadaire\n- Retro mensuelle\n\n**ROI :** Taux de réussite projet +50%.\n\n---\n\n## Erreur #4 : Pas de KPIs mesurables\n\n### Le piège\nPiloter \"au feeling\" sans indicateurs de performance.\n\n### Les conséquences\n- Impossible de mesurer la valeur\n- Pas d''amélioration continue\n- Budget sans contrôle\n\n### La solution DevConnect™\nDashboard de suivi en temps réel :\n- Vélocité (story points)\n- Quality score (tests + reviews)\n- Time-to-market\n- Budget burn rate\n\n**ROI :** Visibilité totale = décisions data-driven.\n\n---\n\n## Erreur #5 : Négliger la dimension humaine\n\n### Le piège\nTraiter l''équipe externalisée comme des \"ressources\" interchangeables.\n\n### Les conséquences\n- Turnover élevé\n- Perte de connaissance\n- Qualité en baisse\n\n### La solution DevConnect™\nApproche humaine centrée sur :\n- Reconnaissance du travail\n- Évolution de carrière\n- Appartenance au projet\n\n**ROI :** Rétention de 95% vs 60% en moyenne.\n\n---\n\n## Checklist avant de lancer votre projet\n\n✅ Auditer les compétences réelles\n✅ Prévoir 2 semaines d''onboarding\n✅ Établir des rituels de communication\n✅ Définir 5-7 KPIs mesurables\n✅ Construire une vraie relation humaine\n\n## Conclusion\n\nL''externalisation IT réussie n''est pas une question de chance. C''est une question de méthode. Avec DevConnect™, ces 5 erreurs sont systématiquement évitées.',
  'Sarah Bennani',
  'Best Practices',
  'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  12,
  true
)
ON CONFLICT (slug) DO NOTHING;