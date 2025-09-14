"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, ExternalLink, Instagram, Linkedin, Facebook, Music } from 'lucide-react';

const mediaFeatures = [
  "Interviews de spécialistes",
  "Réels éducatifs et inspirants",
  "Contenus dédiés aux papas et à leur vie pro/perso"
];

export default function Media() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section id="media" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-indigo-ocean/20 to-gradient-via/20 rounded-3xl p-12 shadow-2xl">
                <div className="w-full h-full bg-navy-deep rounded-2xl shadow-xl flex items-center justify-center relative overflow-hidden">
                  {/* Media content mockup */}
                  <div className="text-center space-y-6">
                    <div className="w-24 h-24 bg-gradient-to-r from-gradient-via to-indigo-ocean rounded-full mx-auto flex items-center justify-center">
                      <span className="text-4xl">📰</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading text-xl font-bold text-text-light">@tobefather.off</h3>
                      <p className="text-text-light/70 text-sm">Média engagé</p>
                    </div>
                    
                    {/* Social media icons */}
                    <div className="flex justify-center space-x-4">
                      <div className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center">
                        <Instagram className="h-4 w-4 text-pink-300" />
                      </div>
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <Linkedin className="h-4 w-4 text-blue-300" />
                      </div>
                      <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                        <Facebook className="h-4 w-4 text-blue-300" />
                      </div>
                      <div className="w-8 h-8 bg-black/20 rounded-lg flex items-center justify-center">
                        <Music className="h-4 w-4 text-white/70" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-via/30 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-6 right-4 w-6 h-6 bg-indigo-ocean/30 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
               style={{ transitionDelay: '200ms' }}>
            <div className="mb-6">
              <span className="text-4xl font-bold">📰</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-dark mt-4 mb-6">
                Le Média To Be Father
              </h2>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Plus qu'une app, To Be Father est aussi un média engagé. Nous brisons les tabous, 
              partageons des témoignages et donnons la parole aux experts.
            </p>

            <div className="space-y-4 mb-10">
              {mediaFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-3 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                  style={{ transitionDelay: `${(index + 3) * 200}ms` }}
                >
                  <CheckCircle className="h-6 w-6 text-tbf-success flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-base">{feature}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-8">
              <p className="text-gray-600 text-base">
                <strong>Émission en préparation</strong> – YouTube, Spotify, Deezer.
              </p>
            </div>

            <Button 
              variant="ghost" 
              size="lg"
              className="group"
              onClick={() => window.open('https://instagram.com/tobefather.off', '_blank')}
              aria-label="Suivre @tobefather.off sur Instagram"
            >
              Suivre @tobefather.off
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}