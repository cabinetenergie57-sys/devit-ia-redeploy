import { Linkedin, Mail, Phone, MapPin, Bot } from 'lucide-react';

interface FooterProps {
  onLinaClick: () => void;
}

export default function Footer({ onLinaClick }: FooterProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold gradient-text mb-4">Devit.IA</div>
            <p className="text-gray-400 mb-4">
              L'excellence Data & IT au Maroc avec la méthode DevConnect™ et l'assistante IA
              Lina.
            </p>
            <div className="flex items-center space-x-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('method')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Méthode Devit.IA
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('solutions')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('advantages')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Avantages Maroc
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Témoignages
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Régie nouvelle génération</li>
              <li>Expert à la carte</li>
              <li>Clé en main Devit.IA</li>
              <li>Consulting Data & IT</li>
              <li>Audit & Accompagnement</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="flex-shrink-0 mt-1 text-gray-400" />
                <span className="text-gray-400">58 rue Monceau, 75008 Paris</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail size={18} className="flex-shrink-0 mt-1 text-gray-400" />
                <a
                  href="mailto:contact@devitia.ma"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  contact@devitia.ma
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone size={18} className="flex-shrink-0 mt-1 text-gray-400" />
                <a
                  href="tel:+33763262609"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +33 7 63 26 26 09
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-6 mb-8 border border-purple-800/30">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white">Avec Lina, gagnez en sérénité</div>
                  <div className="text-sm text-gray-400">
                    sur tous vos projets IT/Data au Maroc
                  </div>
                </div>
              </div>
              <button onClick={onLinaClick} className="btn-gradient">
                Parlez à Lina
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              &copy; 2025 Devit.IA. Tous droits réservés.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-white transition-colors">
                RGPD
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
