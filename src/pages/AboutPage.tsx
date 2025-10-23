import { useEffect } from 'react';
import { Target, Sparkles, Repeat } from 'lucide-react';

interface AboutPageProps {
  onLinaClick: () => void;
}

export default function AboutPage({ onLinaClick }: AboutPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white py-12 md:py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-pink-700/90"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              A propos de Devit.IA
            </h1>
            <p className="text-lg md:text-xl mb-6 text-blue-50 leading-relaxed">
              Réinventer l'externalisation IT & Data pour les PME francophones grâce à la méthode DevConnect™.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onLinaClick}
                className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-50 transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                Parler à un expert
              </button>
              <a
                href="#devconnect"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('devconnect')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Découvrir DevConnect™
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Notre mission
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p>
                  Permettre aux entreprises <strong>francophones</strong> (PME, ETI et startups) de renforcer leurs équipes techniques sans la lourdeur du recrutement traditionnel. Grâce à un vivier de <strong>développeurs</strong>, <strong>data analysts</strong> et ingénieurs francophones basés au <strong>Maroc</strong>, Devit.IA offre une alternative <strong>agile</strong>, <strong>rentable</strong> et <strong>sécurisée</strong> à l'embauche locale.
                </p>
                <p className="italic text-gray-600">
                  <strong>Promesse :</strong> des profils opérationnels, disponibles rapidement, au niveau de qualité attendu sur les standards européens.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Talents Devit.IA collaborant sur un tableau de bord data"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DevConnect™ Purpose Section */}
      <section id="devconnect" className="py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              La méthode DevConnect™ répond à quoi ?
            </h2>
            <p className="text-xl text-gray-600 mb-8 text-center">
              DevConnect™ est née d'un constat : les entreprises ont besoin de talents techniques fiables, sans processus long, coûteux ou risqué. Elle répond à trois enjeux clés :
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-4">
                  <Target size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Performance</h3>
                <p className="text-gray-600">
                  Accès rapide à des profils IT & Data francophones évalués techniquement et humainement.
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-white border border-pink-100">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-600 text-white mb-4">
                  <Sparkles size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Simplicité</h3>
                <p className="text-gray-600">
                  Recrutement, onboarding et suivi gérés par Devit.IA, avec visibilité complète sur les performances.
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-4">
                  <Repeat size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Agilité</h3>
                <p className="text-gray-600">
                  Montée/descente en charge sans friction selon les priorités produit et les jalons projet.
                </p>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={onLinaClick}
                className="inline-block bg-gradient-to-r from-blue-600 to-pink-600 text-white font-bold py-4 px-8 rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Voir DevConnect™ en détail
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Les 4 piliers de DevConnect™
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="text-4xl font-bold text-blue-600 mb-3">1.</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sélection ciblée</h3>
              <p className="text-gray-600 mb-4">
                Matching technique & culturel en 3 étapes (tests, soft skills, compatibilité managériale).
              </p>
              <p className="text-sm text-blue-600 font-semibold">
                Résultat : 98 % de satisfaction et sélection moyenne en 7 jours.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="text-4xl font-bold text-blue-600 mb-3">2.</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Intégration accélérée</h3>
              <p className="text-gray-600 mb-4">
                Onboarding express, outils prêts (Teams, Jira, Notion, Git) et immersion dans vos rituels.
              </p>
              <p className="text-sm text-blue-600 font-semibold">
                Résultat : opérationnel en moins de 10 jours.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="text-4xl font-bold text-blue-600 mb-3">3.</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Suivi agile</h3>
              <p className="text-gray-600 mb-4">
                Account manager dédié, KPIs hebdo (qualité code, vélocité, délais) et reporting transparent.
              </p>
              <p className="text-sm text-blue-600 font-semibold">
                Résultat : 40 % de temps gagné sur la coordination.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="text-4xl font-bold text-blue-600 mb-3">4.</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Optimisation continue</h3>
              <p className="text-gray-600 mb-4">
                Feedbacks 360°, ajustements de profils, upskilling et audits qualité réguliers.
              </p>
              <p className="text-sm text-blue-600 font-semibold">
                Résultat : jusqu'à 30 % d'économies opérationnelles à long terme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DevConnect™ Exclusive Method Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Notre méthode exclusive : <span className="gradient-text">DevConnect™</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                DevConnect™ est la méthode propriétaire de Devit.IA, conçue pour révolutionner la façon dont les entreprises francophones externalisent leurs développeurs et experts en data. Contrairement aux simples plateformes de mise en relation, DevConnect™ est une méthode structurée, testée et optimisée pour garantir qualité, fiabilité et performance sur chaque mission.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Pourquoi la rendre exclusive ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Parce que DevConnect™ n'est pas un service de sourcing classique. C'est un véritable processus de collaboration intelligent, développé en interne par Devit.IA, qui combine IA, sélection humaine et accompagnement métier. En la gardant exclusive, nous protégeons notre savoir-faire et assurons à nos clients une qualité de service impossible à reproduire ailleurs.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 border border-pink-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ce qui nous différencie de la concurrence
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Là où les autres prestataires se contentent de présenter des profils, Devit.IA s'engage sur un résultat. Notre méthode DevConnect™ intègre des étapes précises : sélection approfondie, onboarding complet, suivi de performance mensuel, et optimisation continue. Chaque mission est pilotée, mesurée et accompagnée — pas simplement mise en relation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Une approche centrée sur la valeur
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  DevConnect™ apporte une logique de partenariat : nous ne plaçons pas un développeur, nous intégrons une ressource stratégique dans votre équipe. Cela signifie un démarrage plus rapide, des économies significatives, et surtout une stabilité durable dans la gestion de vos projets IT et Data.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 border border-pink-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  L'avantage Devit.IA
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Grâce à DevConnect™, Devit.IA garantit à ses clients un niveau de fiabilité supérieur, un recrutement ultra ciblé et une expérience fluide. Nos clients n'achètent pas du temps de développeur, ils investissent dans une solution maîtrisée, pilotée et mesurable.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center bg-gradient-to-r from-blue-600 to-pink-600 rounded-2xl p-8 text-white">
              <p className="text-xl font-semibold leading-relaxed">
                DevConnect™ est plus qu'une méthode : c'est notre signature. Elle symbolise la différence entre une simple externalisation et une stratégie d'excellence technologique francophone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-gradient-to-r from-blue-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Chiffres clés
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">≤ 10</div>
              <div className="text-xl text-blue-100">jours de démarrage moyen</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">98 %</div>
              <div className="text-xl text-blue-100">Satisfaction client</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">50 %</div>
              <div className="text-xl text-blue-100">Économies sur les coûts IT</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">&lt; 5 %</div>
              <div className="text-xl text-blue-100">Turn-over des missions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Difference Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Technopark Casablanca – écosystème numérique"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Notre différence
              </h2>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3"></span>
                  <span><strong>100 % francophone</strong> : communication fluide et culture business partagée.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3"></span>
                  <span><strong>Proximité</strong> : nearshore au Maroc avec décalage horaire minimal.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3"></span>
                  <span><strong>Conformité</strong> : NDA, bonnes pratiques sécurité et respect <strong>RGPD</strong>.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3"></span>
                  <span><strong>Accompagnement humain</strong> : un account manager dédié sur toute la mission.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Une équipe humaine avant tout
          </h2>
          <p className="text-xl text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Devit.IA est née d'une double expertise : gestion de projet et recrutement côté business, ingénierie et développement côté technique. Notre conviction : la technologie doit servir une collaboration de confiance.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <img
                src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Portrait de Ouafae Moussa"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ouafae Moussa</h3>
              <p className="text-blue-600 font-semibold mb-4">
                Cofondatrice – Direction projet & recrutement tech
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Portrait d'Ahmed MOBARAK"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ahmed MOBARAK</h3>
              <p className="text-blue-600 font-semibold mb-4">
                Cofondateur – Ingénierie & delivery digital
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 border border-gray-200 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Prêt à passer à l'action ?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              La méthode <strong>DevConnect™</strong> transforme l'externalisation en un partenariat <strong>agile</strong>, <strong>mesurable</strong> et <strong>rentable</strong>. Accédez à des talents francophones qualifiés tout en maîtrisant vos coûts et vos délais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onLinaClick}
                className="inline-block bg-gradient-to-r from-blue-600 to-pink-600 text-white font-bold py-4 px-8 rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Contactez nos experts
              </button>
              <button
                onClick={onLinaClick}
                className="inline-block bg-white text-gray-900 font-bold py-4 px-8 rounded-full border-2 border-gray-300 hover:border-gray-400 transition-all duration-300 hover:shadow-lg"
              >
                Explorer nos expertises
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
