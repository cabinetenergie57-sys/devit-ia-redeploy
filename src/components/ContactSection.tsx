import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { supabase, type Contact } from '../lib/supabase';

interface ContactSectionProps {
  onLinaClick: () => void;
}

export default function ContactSection({ onLinaClick }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    requestType: 'audit',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const contact: Contact = {
        name: formData.name,
        email: formData.email,
        company: formData.company || undefined,
        phone: formData.phone || undefined,
        message: `[${formData.requestType === 'audit' ? 'Audit gratuit' : formData.requestType === 'devis' ? 'Devis gratuit' : 'Autre'}] ${formData.message || ''}`.trim(),
        source: 'website_form',
        status: 'new',
      };

      const { error: insertError } = await supabase.from('contacts').insert([contact]);

      if (insertError) throw insertError;

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        requestType: 'audit',
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Technopark Casablanca, Maroc',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@devitia.ma',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+212 5 22 XX XX XX',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Démarrons votre <span className="gradient-text">projet ensemble</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contactez-nous ou discutez avec Lina pour un accompagnement immédiat
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="card-elegant mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h3>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Message envoyé avec succès !
                  </h4>
                  <p className="text-gray-600">
                    Notre équipe vous contactera sous 2 heures. Vous pouvez également discuter
                    avec Lina dès maintenant.
                  </p>
                  <button onClick={onLinaClick} className="btn-gradient mt-6">
                    Parler à Lina
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Type de demande *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, requestType: 'audit' })}
                        className={`px-4 py-3 rounded-xl border-2 font-semibold transition-all ${
                          formData.requestType === 'audit'
                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                            : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                        }`}
                      >
                        Audit gratuit
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, requestType: 'devis' })}
                        className={`px-4 py-3 rounded-xl border-2 font-semibold transition-all ${
                          formData.requestType === 'devis'
                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                            : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                        }`}
                      >
                        Devis gratuit
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, requestType: 'autre' })}
                        className={`px-4 py-3 rounded-xl border-2 font-semibold transition-all ${
                          formData.requestType === 'autre'
                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                            : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                        }`}
                      >
                        Autre
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-purple-400 transition-colors"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email professionnel *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-purple-400 transition-colors"
                      placeholder="jean.dupont@entreprise.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-purple-400 transition-colors"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-purple-400 transition-colors"
                      placeholder="+33 X XX XX XX XX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Votre projet / besoin
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                      placeholder="Décrivez brièvement votre projet..."
                    ></textarea>
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gradient w-full inline-flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}</span>
                    <Send size={20} />
                  </button>
                </form>
              )}
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
              <p className="text-center text-gray-700">
                <span className="font-semibold">Besoin d'une réponse immédiate ?</span>
                <br />
                Discutez avec Lina, notre assistante IA disponible 24/7
              </p>
              <button onClick={onLinaClick} className="btn-gradient w-full mt-4">
                Parler à Lina maintenant
              </button>
            </div>
          </div>

          <div>
            <div className="card-elegant mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Nos coordonnées</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">{info.title}</div>
                      <div className="text-gray-600">{info.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Bureau professionnel DevitIA Maroc"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 mt-8 border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4">Horaires de disponibilité</h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span className="font-semibold">9h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span className="font-semibold">10h00 - 14h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span className="font-semibold">Fermé</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold gradient-text">Lina est disponible 24/7</span>{' '}
                  pour répondre à vos questions à tout moment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
