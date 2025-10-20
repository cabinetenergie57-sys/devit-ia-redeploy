import { Star, Quote } from 'lucide-react';

interface TestimonialsSectionProps {
  onLinaClick: () => void;
}

export default function TestimonialsSection({ onLinaClick }: TestimonialsSectionProps) {
  const testimonials = [
    {
      name: 'Sophie Martin',
      role: 'CTO',
      company: 'TechCorp France',
      image:
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      quote:
        'Devit.IA a transformé notre approche de l\'externalisation. L\'équipe marocaine s\'est intégrée en quelques jours et la qualité de livraison dépasse nos attentes. Un vrai partenariat stratégique.',
      rating: 5,
    },
    {
      name: 'Marc Dubois',
      role: 'Directeur Data',
      company: 'DataFlex Solutions',
      image:
        'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      quote:
        'Nous avons économisé 45% sur nos coûts Data tout en augmentant la vélocité de nos projets. L\'accompagnement de Lina et l\'équipe Devit.IA est exceptionnel.',
      rating: 5,
    },
    {
      name: 'Émilie Rousseau',
      role: 'CEO',
      company: 'InnovateLab',
      image:
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      quote:
        'La méthode DevConnect™ est unique. Du recrutement au suivi quotidien, tout est pensé pour la réussite. Notre turn-over est proche de zéro et la satisfaction des équipes est maximale.',
      rating: 5,
    },
  ];

  const successMetrics = [
    { value: '98%', label: 'Clients recommandent Devit.IA' },
    { value: '45%', label: 'Économies constatées sur projets Data' },
    { value: '40%', label: 'Gain de temps d\'intégration' },
    { value: '< 5%', label: 'Turn-over équipes externalisées' },
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ils ont choisi <span className="gradient-text">Devit.IA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nos clients transforment leur performance avec l'externalisation
            au Maroc
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-elegant relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm gradient-text font-semibold">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Des résultats qui parlent d'eux-mêmes
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chaque jour, nos clients constatent l'impact de Devit.IA sur leur performance
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold gradient-text mb-3">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 text-center">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Votre témoignage sera le prochain ?
            </h4>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Rejoignez les entreprises qui ont fait confiance à Devit.IA pour transformer
              leur stratégie Data & IT
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onLinaClick}
                className="btn-gradient inline-flex items-center justify-center space-x-2"
              >
                <span>Démarrer avec Devit.IA</span>
              </button>
              <button
                onClick={onLinaClick}
                className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-full border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
              >
                Lire plus de success stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
