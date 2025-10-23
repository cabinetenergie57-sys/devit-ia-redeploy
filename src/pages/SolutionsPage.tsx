import { useEffect } from 'react';
import SolutionsSection from '../components/SolutionsSection';
import MethodSection from '../components/MethodSection';
import CostSavingsSection from '../components/CostSavingsSection';
import { Calculator } from 'lucide-react';

interface SolutionsPageProps {
  onLinaClick: () => void;
}

export default function SolutionsPage({ onLinaClick }: SolutionsPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSimulator = () => {
    const simulator = document.getElementById('cost-savings');
    if (simulator) {
      simulator.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="pt-20">
        <div className="bg-gradient-to-br from-blue-50 to-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Découvrez comment Devit.IA transforme votre stratégie IT et Data avec des solutions sur-mesure
            </p>
            <button
              onClick={scrollToSimulator}
              className="btn-gradient inline-flex items-center space-x-2"
            >
              <Calculator className="w-5 h-5" />
              <span>Calculer vos économies</span>
            </button>
          </div>
        </div>
      </div>
      <SolutionsSection onLinaClick={onLinaClick} />
      <MethodSection onLinaClick={onLinaClick} />
      <CostSavingsSection onLinaClick={onLinaClick} />
    </>
  );
}
