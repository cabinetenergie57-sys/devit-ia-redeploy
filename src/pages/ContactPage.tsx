import { useEffect } from 'react';
import ContactSection from '../components/ContactSection';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface ContactPageProps {
  onLinaClick: () => void;
}

export default function ContactPage({ onLinaClick }: ContactPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['+33 1 23 45 67 89', '+212 5 22 XX XX XX'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@devitia.fr', 'lina@devitia.fr'],
    },
    {
      icon: MapPin,
      title: 'Bureaux',
      details: ['Paris, France', 'Casablanca, Maroc'],
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: ['Lun - Ven: 9h - 18h', 'Support 24/7 disponible'],
    },
  ];

  return (
    <>
      <div className="pt-20">
        <div className="bg-gradient-to-br from-blue-50 to-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contactez <span className="gradient-text">Devit.IA</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre équipe est à votre écoute pour répondre à toutes vos questions
            </p>
          </div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="card-elegant text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-bg mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection onLinaClick={onLinaClick} />

      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Besoin d'une réponse immédiate ?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discutez avec Lina, notre assistante virtuelle, pour obtenir des réponses instantanées
              à vos questions sur Devit.IA
            </p>
            <button onClick={onLinaClick} className="btn-gradient text-lg">
              Parler avec Lina maintenant
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
