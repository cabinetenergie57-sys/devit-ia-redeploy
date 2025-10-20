import { Users, UserCheck, Briefcase, ArrowRight } from 'lucide-react';

interface SolutionsSectionProps {
  onLinaClick: () => void;
}

export default function SolutionsSection({ onLinaClick }: SolutionsSectionProps) {
  const solutions = [
    {
      icon: Users,
      title: 'Régie nouvelle génération',
      description:
        'Renfort d\'équipe, flexibilité totale, intégration express. Augmentez votre capacité avec des talents Data/IT sélectionnés et opérationnels en quelques jours.',
      features: [
        'Intégration en moins de 2 semaines',
        'Flexibilité totale sur la durée',
        'Talents bilingues et expérimentés',
        'Suivi quotidien et rapports réguliers',
      ],
      cta: 'Construisez votre équipe sur mesure',
      image:
        'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      icon: UserCheck,
      title: 'Expert à la carte',
      description:
        'Consulting, audit, mission courte, réactivité maximale. Accédez à des experts seniors pour des interventions ciblées et à fort impact.',
      features: [
        'Experts seniors disponibles sous 48h',
        'Missions courtes ou ponctuelles',
        'Audit et conseil stratégique',
        'ROI mesurable et immédiat',
      ],
      cta: 'Demandez un expert',
      image:
        'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      icon: Briefcase,
      title: 'Clé en main Devit.IA',
      description:
        'De la sélection à la réussite du projet, sans effort : accompagnement complet. Nous prenons en charge l\'intégralité de votre projet, de A à Z.',
      features: [
        'Gestion complète du projet',
        'Équipe dédiée et coordonnée',
        'Garantie de résultat',
        'Zéro charge administrative',
      ],
      cta: 'Obtenez votre solution tout compris',
      image:
        'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <section id="solutions" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Externalisation <span className="gradient-text">Data & IT au Maroc</span>
            <br />
            <span className="text-3xl md:text-4xl">Choisissez votre formule d'excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nearshore agile, talents qualifiés et solutions sur mesure pour accélérer votre transformation digitale
          </p>
        </div>

        <div className="space-y-12">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`card-elegant grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="w-16 h-16 mb-6 rounded-2xl gradient-bg flex items-center justify-center">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{solution.description}</p>

                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={onLinaClick}
                    className="btn-gradient inline-flex items-center justify-center space-x-2"
                  >
                    <span>{solution.cta}</span>
                    <ArrowRight size={20} />
                  </button>
                  <button
                    onClick={onLinaClick}
                    className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-full border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
                  >
                    En savoir plus
                  </button>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
