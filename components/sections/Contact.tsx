"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, MessageSquare, Building, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        consent: false
      });
    }, 1500);
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:contact@tobefather.com';
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-dark mb-6">
            Contact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Vous avez des questions ? Vous souhaitez établir un partenariat ? 
            Nous sommes là pour vous accompagner.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-8">
              {/* Email */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
                   onClick={handleEmailClick}>
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gradient-from to-gradient-to rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-text-dark mb-2 group-hover:text-gradient-from transition-colors duration-300">
                      Email direct
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Pour toute question générale
                    </p>
                    <p className="text-gradient-from font-semibold">
                      contact@tobefather.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Contact */}
              <div className="bg-gradient-to-br from-gradient-from/5 to-gradient-to/5 rounded-3xl p-8 border-l-4 border-gradient-from">
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gradient-via to-indigo-ocean rounded-2xl shadow-lg">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-text-dark mb-4">
                      Entreprises / Institutions / Professionnels de santé
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Vous souhaitez proposer To Be Father à vos équipes ou établir un partenariat ? 
                      Parlons de collaboration et des bénéfices pour vos collaborateurs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
               style={{ transitionDelay: '200ms' }}>
            {isSubmitted ? (
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-tbf-success rounded-full mb-6">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-text-dark mb-4">
                  Merci pour votre message !
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Nous avons bien reçu votre demande et vous répondrons dans les plus brefs délais.
                </p>
                <Button
                  variant="ghost"
                  onClick={() => setIsSubmitted(false)}
                  className="text-gradient-from"
                >
                  Envoyer un autre message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3 mb-8">
                  <MessageSquare className="h-8 w-8 text-gradient-from" />
                  <h3 className="font-heading text-2xl font-bold text-text-dark">
                    Formulaire de contact
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-text-dark mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gradient-from/20 focus:border-gradient-from transition-colors duration-200"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-text-dark mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gradient-from/20 focus:border-gradient-from transition-colors duration-200"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-text-dark mb-2">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gradient-from/20 focus:border-gradient-from transition-colors duration-200"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="general">Question générale</option>
                      <option value="partnership">Partenariat entreprise</option>
                      <option value="health">Professionnel de santé</option>
                      <option value="media">Demande média</option>
                      <option value="feedback">Retour/Suggestion</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-text-dark mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gradient-from/20 focus:border-gradient-from transition-colors duration-200 resize-none"
                      placeholder="Décrivez votre demande..."
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-5 h-5 text-gradient-from bg-gray-100 border-gray-300 rounded focus:ring-gradient-from/20 focus:ring-2"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
                      J'accepte que mes données soient utilisées pour répondre à ma demande conformément à la{' '}
                      <button 
                        type="button"
                        className="text-gradient-from hover:underline"
                        onClick={() => window.open('/confidentialite', '_blank')}
                      >
                        politique de confidentialité
                      </button>. *
                    </label>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting || !formData.consent}
                    className="w-full"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}