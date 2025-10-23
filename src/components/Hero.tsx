import { ArrowRight, Sparkles, Target } from 'lucide-react';

interface HeroProps {
  onLinaClick: () => void;
}

export default function Hero({ onLinaClick }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-900">
                Externalisation nouvelle génération
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              La nouvelle génération du nearshore francophone
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Devit.IA associe expertise humaine et intelligence artificielle pour offrir aux entreprises francophones un modèle d'externalisation plus fluide, plus rapide et plus intelligent.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('method')}
                className="btn-blue-pink inline-flex items-center justify-center space-x-2"
              >
                <span>Découvrir la méthode</span>
                <ArrowRight size={20} />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-full border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
              >
                Contact rapide
              </button>

              <button
                onClick={onLinaClick}
                className="bg-gray-900 text-white font-semibold py-3 px-6 rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center space-x-2"
              >
                <Target size={20} />
                <span>Audit gratuit</span>
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div>
                <div className="text-3xl font-bold gradient-text">98%</div>
                <div className="text-sm text-gray-600">Satisfaction client</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">40%</div>
                <div className="text-sm text-gray-600">Plus rapide</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">&lt;5%</div>
                <div className="text-sm text-gray-600">Turn-over</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Équipe professionnelle en réunion"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Lina, votre assistante IA</div>
                  <div className="text-sm text-gray-600">Disponible 24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
