import { MessageSquare, Zap, Clock, ArrowRight } from 'lucide-react';

interface LinaSectionProps {
  onLinaClick: () => void;
}

export default function LinaSection({ onLinaClick }: LinaSectionProps) {
  const features = [
    {
      icon: MessageSquare,
      title: 'Conseils instantanés',
      description: 'Réponses immédiates à vos questions sur vos projets Data & IT',
    },
    {
      icon: Zap,
      title: 'Accompagnement projet',
      description: 'Du briefing à la livraison, Lina vous guide à chaque étape',
    },
    {
      icon: Clock,
      title: 'Disponible 24/7',
      description: 'Accessible par chat ou email, Lina est toujours là pour vous',
    },
  ];

  return (
    <section id="lina" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-900">
                Intelligence Artificielle
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Rencontrez <span className="gradient-text">Lina</span>, votre assistante IA
              personnalisée
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Lina est votre copilote intelligent : conseils, réponses instantanées,
              accompagnement projet Data/IT du briefing à la livraison. Disponible par chat ou
              email, Lina rend la collaboration facile et ultra-personnalisée.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onLinaClick}
                className="btn-gradient inline-flex items-center justify-center space-x-2"
              >
                <MessageSquare size={20} />
                <span>Essayez Lina maintenant</span>
              </button>
              <button className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-full border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center space-x-2">
                <span>Voir la démo</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="card-elegant bg-gradient-to-br from-white to-gray-50 p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg relative">
                  <img
                    src="/Generated Image October 11, 2025 - 1_10AM.png"
                    alt="Lina"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-4 border-white"></div>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-xl">Lina</div>
                  <div className="text-sm text-green-600 font-medium">En ligne</div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-start">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl rounded-tl-sm p-4 max-w-xs">
                    <p className="text-gray-800">
                      Bonjour ! Je suis Lina, votre assistante IA. Comment puis-je vous aider
                      avec vos projets Data & IT aujourd'hui ?
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-gray-100 rounded-2xl rounded-tr-sm p-4 max-w-xs">
                    <p className="text-gray-800">
                      Je cherche à externaliser une équipe Data au Maroc
                    </p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl rounded-tl-sm p-4 max-w-xs">
                    <p className="text-gray-800">
                      Excellent choix ! Avec Devit.IA, je peux vous accompagner pour :
                      <br />• Définir vos besoins précis
                      <br />• Sélectionner les meilleurs profils
                      <br />• Assurer une intégration express
                      <br />
                      <br />
                      Parlons de votre projet !
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Écrivez votre message..."
                  className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-purple-300"
                  disabled
                />
                <button className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Réponse instantanée</div>
                  <div className="text-sm text-gray-600">Temps moyen : 2 secondes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
