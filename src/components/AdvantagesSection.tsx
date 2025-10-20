import { Globe, TrendingUp, Shield, Clock, Award, DollarSign } from 'lucide-react';

interface AdvantagesSectionProps {
  onLinaClick: () => void;
}

export default function AdvantagesSection({ onLinaClick }: AdvantagesSectionProps) {
  const advantages = [
    {
      icon: Globe,
      title: 'Talents bilingues experts',
      description:
        'Profils qualifiés, maîtrisant le français et adaptés aux standards internationaux',
    },
    {
      icon: TrendingUp,
      title: 'Intégration 40% plus rapide',
      description:
        'Méthodologie DevConnect™ éprouvée pour une montée en puissance express',
    },
    {
      icon: Award,
      title: 'Satisfaction client 98%',
      description: 'Excellence opérationnelle et engagement qualité sur chaque mission',
    },
    {
      icon: Clock,
      title: 'Turn-over < 5%',
      description: 'Stabilité des équipes et continuité garantie sur vos projets',
    },
    {
      icon: Shield,
      title: 'Conformité RGPD',
      description:
        'Infrastructures sécurisées et conformes aux normes européennes',
    },
    {
      icon: DollarSign,
      title: 'Optimisation budgétaire',
      description: 'Réduction des coûts jusqu\'à 45% sans compromis sur la qualité',
    },
  ];

  const stats = [
    { value: '500+', label: 'Projets réussis' },
    { value: '150+', label: 'Clients satisfaits' },
    { value: '300+', label: 'Talents qualifiés' },
    { value: '5 ans', label: 'D\'expertise Maroc' },
  ];

  return (
    <section id="advantages" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pourquoi externaliser IT/Data au{' '}
            <span className="gradient-text">Maroc avec Devit.IA</span> ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Le Maroc s'impose comme la destination privilégiée pour l'externalisation Data & IT
            en zone francophone
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div key={index} className="card-elegant group hover:scale-105">
              <div className="w-14 h-14 mb-4 rounded-xl gradient-bg flex items-center justify-center group-hover:shadow-lg transition-all">
                <advantage.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Le Maroc, hub technologique de référence
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  Infrastructures de pointe, écosystème tech dynamique et position géographique
                  stratégique font du Maroc le partenaire idéal pour vos projets Data & IT.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3 text-white">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
                    <span>Même fuseau horaire que l'Europe</span>
                  </li>
                  <li className="flex items-center space-x-3 text-white">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
                    <span>Formation technique de haut niveau</span>
                  </li>
                  <li className="flex items-center space-x-3 text-white">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
                    <span>Technoparks et centres d'innovation</span>
                  </li>
                  <li className="flex items-center space-x-3 text-white">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
                    <span>Stabilité politique et économique</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={onLinaClick}
                    className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg"
                  >
                    Recevoir le dossier Maroc/Tech
                  </button>
                  <button
                    onClick={onLinaClick}
                    className="border-2 border-white text-white font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
                  >
                    Parler à Lina
                  </button>
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Technopark Casablanca"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-gray-700">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
