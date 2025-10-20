import { useEffect } from 'react';
import AdvantagesSection from '../components/AdvantagesSection';
import BlogSection from '../components/BlogSection';
import TestimonialsSection from '../components/TestimonialsSection';

interface AdvantagesPageProps {
  onLinaClick: () => void;
}

export default function AdvantagesPage({ onLinaClick }: AdvantagesPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="pt-20">
        <div className="bg-gradient-to-br from-blue-50 to-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Les <span className="gradient-text">Avantages</span> Devit.IA
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pourquoi choisir l'externalisation au Maroc avec Devit.IA pour vos projets Data et IT
            </p>
          </div>
        </div>
      </div>
      <AdvantagesSection onLinaClick={onLinaClick} />
      <TestimonialsSection onLinaClick={onLinaClick} />
      <BlogSection onLinaClick={onLinaClick} />
    </>
  );
}
