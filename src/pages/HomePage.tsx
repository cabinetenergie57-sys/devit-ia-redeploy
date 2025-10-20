import Hero from '../components/Hero';
import TestimonialsSection from '../components/TestimonialsSection';
import LinaSection from '../components/LinaSection';
import { Database, Shield, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HomePageProps {
  onLinaClick: () => void;
}

export default function HomePage({ onLinaClick }: HomePageProps) {
  const keyBenefits = [
    {
      icon: TrendingUp,
      title: 'Économies garanties',
      description: 'Jusqu\'à 45% d\'économies sur vos coûts IT et Data',
      link: '/solutions',
    },
    {
      icon: Users,
      title: 'Talents d\'excellence',
      description: 'Accédez aux meilleurs profils Data & IT du Maroc',
      link: '/avantages',
    },
    {
      icon: Shield,
      title: 'Qualité assurée',
      description: 'Méthode DevConnect™ pour une intégration réussie',
      link: '/solutions',
    },
    {
      icon: Database,
      title: 'Support continu',
      description: 'Accompagnement 24/7 par nos équipes expertes',
      link: '/contact',
    },
  ];

  return (
    <>
      <Hero onLinaClick={onLinaClick} />

      {/* Key Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pourquoi <span className="gradient-text">DevConnect™</span> ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La solution complète pour externaliser vos projets Data et IT au Maroc avec succès
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {keyBenefits.map((benefit, index) => (
              <Link
                key={index}
                to={benefit.link}
                className="card-elegant group hover:shadow-2xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-bg mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                  En savoir plus <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/solutions" className="btn-gradient inline-block">
              Découvrir nos solutions
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection onLinaClick={onLinaClick} />
      <LinaSection onLinaClick={onLinaClick} />

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Prêt à transformer votre stratégie IT ?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Rejoignez les entreprises qui ont fait confiance à DevConnect™ pour optimiser leurs
              coûts et accélérer leur croissance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={onLinaClick} className="btn-gradient">
                Parler avec Lina
              </button>
              <Link
                to="/contact"
                className="bg-white text-gray-900 font-semibold py-3 px-8 rounded-full border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg inline-block"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
