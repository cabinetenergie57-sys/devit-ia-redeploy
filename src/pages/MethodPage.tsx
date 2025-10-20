import { useEffect } from 'react';
import { Target, Users, TrendingUp, RefreshCw, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MethodPageProps {
  onLinaClick: () => void;
}

export default function MethodPage({ onLinaClick }: MethodPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pillars = [
    {
      icon: Target,
      number: '1',
      title: 'Sélection stratégique',
      description:
        'Chaque mission commence par une analyse approfondie du besoin client. Nous sélectionnons les développeurs et data analysts francophones les plus pertinents selon la stack technique, la culture d\'entreprise et le secteur d\'activité. Chaque profil est évalué techniquement et humainement, avec un niveau de français professionnel.',
    },
    {
      icon: Users,
      number: '2',
      title: 'Intégration fluide',
      description:
        'Une fois le profil validé, Devit.IA gère tout le processus d\'intégration : contrats, outils, environnement de travail, conformité RGPD et onboarding. Le client démarre sa mission sans friction, avec un développeur prêt à produire dès le jour 1.',
    },
    {
      icon: TrendingUp,
      number: '3',
      title: 'Suivi & Performance continue',
      description:
        'Chaque mission est accompagnée d\'un suivi mensuel via nos outils internes. Nous mesurons les résultats, la satisfaction, la productivité et la qualité des livrables. Un Account Manager Devit.IA reste dédié au client tout au long du projet, garantissant une relation de confiance et une performance durable.',
    },
    {
      icon: RefreshCw,
      number: '4',
      title: 'Optimisation & Fidélisation',
      description:
        'La méthode DevConnect™ inclut une boucle d\'amélioration continue. Nous analysons les missions terminées pour améliorer le matching, la rapidité d\'intégration et la stabilité des équipes. Notre objectif : créer une relation long terme, où chaque mission devient un partenariat gagnant-gagnant.',
    },
  ];

  const benefits = [
    'gagnent jusqu\'à 70 % d\'économies sur leurs coûts IT',
    'accèdent à des talents certifiés et disponibles',
    'conservent un contrôle total sur leurs projets',
  ];

  return (
    <>
      <div className="pt-20">
        <div className="bg-gradient-to-br from-blue-50 to-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              La Méthode <span className="gradient-text">DevConnect™</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La méthode exclusive qui transforme l'externalisation en performance
            </p>
          </div>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pourquoi DevConnect™ est une{' '}
              <span className="gradient-text">méthode exclusive</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed text-left">
              <p>
                La méthode DevConnect™ est le fruit de plusieurs années d'expérience en recrutement tech, gestion de mission et transformation digitale.
                Nous avons constaté que la majorité des prestataires d'externalisation se limitent à fournir des profils — sans accompagnement réel, sans suivi, et sans engagement de performance.
              </p>
              <p>
                <strong>DevConnect™ change complètement cette logique.</strong><br />
                C'est une méthode propriétaire, développée par Devit.IA, qui garantit un processus rigoureux et mesurable sur chaque mission.
              </p>
              <p>
                En la gardant exclusive, nous protégeons notre savoir-faire, nos standards de qualité, et la cohérence de l'expérience que nous offrons à nos clients.
              </p>
            </div>
          </div>

          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Les 4 piliers de la{' '}
              <span className="gradient-text">méthode DevConnect™</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {pillars.map((pillar, index) => (
              <div key={index} className="card-elegant group hover:scale-105">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 flex-shrink-0 rounded-xl gradient-bg flex items-center justify-center group-hover:shadow-lg transition-all">
                    <pillar.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-4xl font-bold gradient-text">{pillar.number}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                L'excellence Devit.IA
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Une approche radicalement différente de l'externalisation
              </p>
            </div>

            <div className="max-w-4xl mx-auto mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl p-8 border-2 border-blue-200 shadow-md">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center gap-3">
                  <Check size={32} className="text-blue-600" />
                  Notre engagement qualité
                </h4>
                <ul className="grid md:grid-cols-2 gap-6">
                  <li className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-900 font-semibold text-lg">Sélection d'experts adaptés à votre culture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-900 font-semibold text-lg">Intégration fluide et accompagnement complet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-900 font-semibold text-lg">Suivi mensuel de performance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-900 font-semibold text-lg">Dashboard clair et reporting continu</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-900 font-semibold text-lg">Partenariat durable avec garantie qualité</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-900 font-semibold text-lg">Conformité RGPD et sécurité des données</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 shadow-md">
              <h4 className="text-3xl font-bold text-gray-900 mb-5 text-center">
                Une approche centrée sur la valeur
              </h4>
              <p className="text-gray-700 mb-5 text-center text-lg leading-relaxed max-w-3xl mx-auto">
                DevConnect™ ne se limite pas à la mise à disposition de ressources :
                c'est une méthode d'accompagnement stratégique qui aligne vos objectifs business et vos ressources techniques.
              </p>
              <p className="text-gray-900 font-bold text-xl mb-5 text-center">
                Grâce à cette approche, les entreprises francophones :
              </p>
              <ul className="space-y-4 max-w-2xl mx-auto">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <Check className="text-green-500 flex-shrink-0 mt-1" size={28} />
                    <span className="text-gray-800 text-lg font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center mt-8 pt-8 border-t-2 border-gray-200">
              <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre signature</h4>
              <p className="text-xl text-gray-700 mb-4 leading-relaxed">
                DevConnect™ est bien plus qu'un processus :<br />
                c'est notre <strong className="gradient-text">signature d'excellence francophone</strong>.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Elle incarne la vision de Devit.IA :<br />
                rendre l'externalisation <strong>simple, humaine et performante</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-pink-600 text-white font-semibold py-3 px-8 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
                >
                  Découvrir nos développeurs certifiés DevConnect™
                </Link>
                <button
                  onClick={onLinaClick}
                  className="border-2 border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Parler à Lina
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
