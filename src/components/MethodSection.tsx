import { Users, Zap, TrendingUp, Shield, ArrowRight, Play } from 'lucide-react';

interface MethodSectionProps {
  onLinaClick: () => void;
}

export default function MethodSection({ onLinaClick }: MethodSectionProps) {
  const steps = [
    {
      icon: Users,
      title: 'Sélection ciblée',
      description: 'Identification rigoureuse des meilleurs talents Data/IT francophones, alignés avec vos besoins techniques et votre culture d\'entreprise. Chaque profil est validé selon 3 critères : compétences, soft skills et compatibilité managériale.',
      result: 'Résultat : un taux de satisfaction supérieur à 98 % et un temps moyen de sélection de 7 jours.',
    },
    {
      icon: Zap,
      title: 'Intégration accélérée',
      description: 'L\'onboarding express permet une mise en production rapide grâce à une immersion dans votre environnement et vos outils (Teams, Jira, Notion).',
      result: 'Résultat : prise de poste opérationnelle en moins de 10 jours et communication fluide dès le départ.',
    },
    {
      icon: TrendingUp,
      title: 'Suivi agile',
      description: 'Chaque projet bénéficie d\'un account manager dédié, de KPIs hebdomadaires et d\'un reporting transparent.',
      result: 'Résultat : 40 % de temps gagné sur la coordination et une visibilité totale sur les livrables.',
    },
    {
      icon: Shield,
      title: 'Optimisation continue',
      description: 'Analyse continue des performances pour améliorer les processus et faire progresser les équipes externalisées.',
      result: 'Résultat : réduction moyenne de 30 % des coûts opérationnels à long terme.',
    },
  ];

  return (
    <section id="method" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            La méthode <span className="gradient-text">Devit.IA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La méthode DevConnect™ garantit la réussite de votre externalisation au Maroc :
            sélection ciblée, intégration accélérée, suivi agile et optimisation en continu.
          </p>
        </div>

        <div className="relative mb-16">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 gradient-bg transform -translate-y-1/2 rounded-full"></div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="card-elegant text-center relative bg-white">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-bg flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                <p className="text-sm font-semibold text-gray-900 bg-gray-50 rounded-lg px-3 py-2">
                  💡 {step.result}
                </p>
                <div className="absolute -top-4 right-4 w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-elegant bg-gradient-to-br from-gray-50 to-white text-center max-w-4xl mx-auto mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            En résumé
          </h3>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            La méthode DevConnect™ transforme l'externalisation en un partenariat agile et durable.
            Vous gagnez en flexibilité, en performance et en sérénité grâce à une approche mesurable,
            humaine et rentable.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-gradient inline-flex items-center justify-center space-x-2"
          >
            <span>Demandez un audit gratuit</span>
            <ArrowRight size={20} />
          </a>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 mt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Comment Devit.IA transforme votre externalisation
              </h3>
              <p className="text-gray-600 mb-6">
                Notre approche unique combine expertise technique, connaissance du marché
                marocain et accompagnement sur-mesure pour garantir le succès de vos projets
                Data & IT.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">
                    Réduction de 40% du temps d'intégration
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">
                    Taux de satisfaction client de 98%
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">Turn-over inférieur à 5%</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-gradient inline-flex items-center justify-center space-x-2">
                  <Play size={20} />
                  <span>Voir la démo (1 min)</span>
                </button>
                <button
                  onClick={onLinaClick}
                  className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-full border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
                >
                  Parlez à Lina
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Success story Devit.IA"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
