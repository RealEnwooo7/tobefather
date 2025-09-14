"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Instagram, Linkedin, Facebook, Music, ExternalLink, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Enfin une app qui nous comprend ! En tant que futur papa, j'avais besoin d'être rassuré et accompagné.",
    author: "Thomas, papa de Emma (6 mois)",
    location: "Paris"
  },
  {
    quote: "To Be Father m'aide à mieux partager avec ma conjointe. Les conseils sont précieux et adaptés.",
    author: "Julien, futur papa",
    location: "Lyon"
  },
  {
    quote: "Les témoignages me touchent beaucoup. Je me sens moins seul dans cette aventure incroyable.",
    author: "Marc, papa de Lucas (2 ans)",
    location: "Marseille"
  },
  {
    quote: "Une vraie révolution pour nous les papas ! Enfin des outils pensés pour notre rôle unique.",
    author: "David, papa de Léa (8 mois)",
    location: "Toulouse"
  }
];

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com/tobefather.off',
    color: 'bg-pink-500 hover:bg-pink-600'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/company/tobefather',
    color: 'bg-blue-600 hover:bg-blue-700'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://facebook.com/tobefather.off',
    color: 'bg-blue-500 hover:bg-blue-600'
  },
  {
    name: 'TikTok',
    icon: Music,
    url: 'https://tiktok.com/@tobefather.off',
    color: 'bg-black hover:bg-gray-800'
  }
];

export default function SocialMedia() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="medias-reseaux" ref={sectionRef} className="py-24 bg-navy-deep relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgb(108, 99, 255) 0%, transparent 50%), 
                           radial-gradient(circle at 80% 20%, rgb(47, 128, 237) 0%, transparent 50%), 
                           radial-gradient(circle at 40% 40%, rgb(90, 123, 239) 0%, transparent 50%)`,
          backgroundSize: '600px 600px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-light mb-6">
            Médias & réseaux
          </h2>
          <p className="text-xl text-text-light/80 max-w-3xl mx-auto leading-relaxed">
            Depuis septembre 2025, To Be Father est aussi un média présent sur Instagram, 
            LinkedIn, Facebook et TikTok : @tobefather.off.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Testimonials Slider */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="text-center mb-8">
                  <Quote className="h-12 w-12 text-gradient-from mx-auto mb-4 opacity-80" />
                  <h3 className="font-heading text-2xl font-bold text-text-light mb-6">
                    Témoignages de pères
                  </h3>
                </div>

                <div className="relative h-48 flex items-center">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ${
                        index === currentTestimonial
                          ? 'opacity-100 transform translate-x-0'
                          : 'opacity-0 transform translate-x-8'
                      }`}
                    >
                      <blockquote className="text-text-light/90 text-lg leading-relaxed mb-6 italic text-center">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="text-center">
                        <div className="font-semibold text-text-light">{testimonial.author}</div>
                        <div className="text-sm text-text-light/70">{testimonial.location}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Indicators */}
                <div className="flex justify-center space-x-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? 'bg-gradient-from scale-125'
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                      aria-label={`Voir témoignage ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Podcast */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
               style={{ transitionDelay: '200ms' }}>
            <div className="space-y-8">
              {/* Social Media Links */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
                <h3 className="font-heading text-xl font-bold text-text-light mb-6 text-center">
                  Suivez-nous sur les réseaux
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <Button
                        key={social.name}
                        variant="ghost"
                        size="lg"
                        onClick={() => window.open(social.url, '_blank')}
                        className="group flex items-center space-x-3 bg-white/5 hover:bg-white/15 text-text-light border border-white/20 hover:border-white/40 rounded-2xl transition-all duration-300"
                      >
                        <div className={`p-2 rounded-lg ${social.color} transition-all duration-300 group-hover:scale-110`}>
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-medium">{social.name}</span>
                        <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Button>
                    );
                  })}
                </div>
              </div>

              {/* Podcast Teaser */}
              <div className="bg-gradient-to-br from-gradient-from/20 to-gradient-to/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-gradient-from/30">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gradient-from to-gradient-to rounded-2xl shadow-lg mb-6">
                    <Music className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold text-text-light mb-4">
                    Bientôt : Notre Podcast
                  </h3>
                  
                  <p className="text-text-light/80 leading-relaxed mb-6">
                    <strong>Émission en préparation</strong><br />
                    YouTube, Spotify, Deezer
                  </p>
                  
                  <div className="flex justify-center space-x-4">
                    <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-red-300 text-xs font-bold">YT</span>
                    </div>
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-green-300 text-xs font-bold">SP</span>
                    </div>
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-orange-300 text-xs font-bold">DZ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}