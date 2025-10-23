import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onLinaClick: () => void;
}

export default function Header({ onLinaClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Accueil', path: '/', type: 'link' },
    { label: 'Solutions', path: '/solutions', type: 'link' },
    { label: 'Avantages', path: '/avantages', type: 'link' },
    { label: 'Méthode', path: '/methode', type: 'link' },
    { label: 'A propos', path: '/apropos', type: 'link' },
    { label: 'Estimation', path: '/estimation', type: 'link' },
    { label: 'Contact', path: '/contact', type: 'link' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center cursor-pointer">
            <div className="text-3xl font-bold gradient-text">Devit.IA</div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <button onClick={onLinaClick} className="btn-gradient">
              Parlez à Lina
            </button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-left text-gray-700 hover:text-gray-900 font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button onClick={onLinaClick} className="btn-gradient text-center">
                Parlez à Lina
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
