"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Building, Users, Heart, Mail, ExternalLink } from 'lucide-react';

export default function Partnerships() {
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

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openInstagramStory = () => {
    window.open('https://instagram.com/stories/highlights/tobefather.off', '_blank');
  };

  return (
    <section id="partenariats" ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-dark mb-6">
            Partenariats & experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une collaboration étroite avec des professionnels pour vous offrir le meilleur accompagnement
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-8">
              {/* Experts Section */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gradient-from to-gradient-to rounded-2xl shadow-lg">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-text-dark mb-2">
                      Nos experts
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Nous collaborons avec des médecins et spécialistes (obstétriciens, sages-femmes, 
                      psychologues, sexologues, juristes…).
                    </p>
                  </div>
                </div>
                
                <Button
                  variant="ghost"
                  onClick={openInstagramStory}
                  className="group"
                >
                  Découvrir dans la story "PRO TBF"
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </div>

              {/* Business Section */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gradient-via to-indigo-ocean rounded-2xl shadow-lg">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-text-dark mb-2">
                      Entreprises & institutions
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Contactez-nous pour proposer To Be Father à vos équipes. 
                      Partenariats mutuelles/institutions à venir (congé paternité, coûts famille…).
                    </p>
                  </div>
                </div>
                
                <Button
                  variant="primary"
                  onClick={handleContactClick}
                  className="group"
                >
                  Proposer TBF à vos salariés
                  <Mail className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
               style={{ transitionDelay: '200ms' }}>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gradient-from/10 to-indigo-ocean/10 rounded-3xl p-8 shadow-xl">
                <div className="w-full h-full bg-white rounded-2xl shadow-lg flex items-center justify-center relative overflow-hidden">
                  {/* Partnership network visualization */}
                  <div className="text-center space-y-8">
                    {/* Central TBF node */}
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-r from-gradient-from to-gradient-to rounded-full mx-auto flex items-center justify-center shadow-xl relative z-10">
                        <span className="text-2xl font-bold text-white">TBF</span>
                      </div>
                      
                      {/* Surrounding expert nodes */}
                      <div className="absolute -top-4 -left-12 w-12 h-12 bg-tbf-success/80 rounded-full flex items-center justify-center shadow-lg">
                        <Heart className="h-6 w-6 text-white" />
                      </div>
                      <div className="absolute -top-4 -right-12 w-12 h-12 bg-gradient-via/80 rounded-full flex items-center justify-center shadow-lg">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div className="absolute -bottom-4 -left-12 w-12 h-12 bg-indigo-ocean/80 rounded-full flex items-center justify-center shadow-lg">
                        <Building className="h-6 w-6 text-white" />
                      </div>
                      <div className="absolute -bottom-4 -right-12 w-12 h-12 bg-tbf-warning/80 rounded-full flex items-center justify-center shadow-lg">
                        <Mail className="h-6 w-6 text-white" />
                      </div>

                      {/* Connection lines */}
                      <svg className="absolute inset-0 w-full h-full" style={{ transform: 'scale(1.5)' }}>
                        <line x1="50%" y1="50%" x2="20%" y2="30%" stroke="rgb(47, 128, 237)" strokeWidth="2" opacity="0.3" />
                        <line x1="50%" y1="50%" x2="80%" y2="30%" stroke="rgb(47, 128, 237)" strokeWidth="2" opacity="0.3" />
                        <line x1="50%" y1="50%" x2="20%" y2="70%" stroke="rgb(47, 128, 237)" strokeWidth="2" opacity="0.3" />
                        <line x1="50%" y1="50%" x2="80%" y2="70%" stroke="rgb(47, 128, 237)" strokeWidth="2" opacity="0.3" />
                      </svg>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-heading text-lg font-bold text-text-dark">Réseau d'experts</h3>
                      <p className="text-sm text-gray-500">Partenaires professionnels</p>
                    </div>
                  </div>
                  
                  {/* Animated dots */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-from/30 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-6 left-6 w-2 h-2 bg-indigo-ocean/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-1/3 left-4 w-2 h-2 bg-tbf-success/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}