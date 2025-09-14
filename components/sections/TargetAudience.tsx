"use client";

import { useState, useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Baby, CheckCircle2 } from 'lucide-react';

export default function TargetAudience() {
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
    <section id="pour-qui" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-dark mb-6">
              Pour qui ?
            </h2>

            <div className="space-y-6 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>À tous les pères :</strong> seuls, en couple, mariés, homosexuels… 
                Application multiculturelle et personnalisée.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Utile aussi pour les <strong>mamans</strong> (rééquilibrage de la charge mentale).
              </p>
            </div>

            <Badge 
              variant="gradient" 
              className="text-base px-6 py-3 mb-8"
            >
              <CheckCircle2 className="mr-2 h-5 w-5" />
              Déjà papa ? Oui, l'app s'adapte à votre situation.
            </Badge>

            {/* Visual features */}
            <div className="grid grid-cols-2 gap-6">
              <div className={`text-center p-6 bg-gradient-to-b from-gray-50 to-white rounded-2xl shadow-lg transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: '300ms' }}>
                <Heart className="h-12 w-12 text-gradient-from mx-auto mb-4" />
                <h3 className="font-heading text-lg font-semibold text-text-dark mb-2">Inclusif</h3>
                <p className="text-sm text-gray-600">Toutes les paternités</p>
              </div>

              <div className={`text-center p-6 bg-gradient-to-b from-gray-50 to-white rounded-2xl shadow-lg transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: '500ms' }}>
                <Users className="h-12 w-12 text-gradient-via mx-auto mb-4" />
                <h3 className="font-heading text-lg font-semibold text-text-dark mb-2">Partagé</h3>
                <p className="text-sm text-gray-600">Charge mentale équilibrée</p>
              </div>
            </div>
          </div>

          {/* Visual Illustration */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
               style={{ transitionDelay: '200ms' }}>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gradient-from/10 to-indigo-ocean/10 rounded-3xl p-8 shadow-xl">
                <div className="w-full h-full bg-white rounded-2xl shadow-lg flex items-center justify-center relative overflow-hidden">
                  {/* Family illustration mockup */}
                  <div className="text-center space-y-8">
                    {/* Central family icon */}
                    <div className="relative">
                      <div className="w-24 h-24 bg-gradient-to-r from-gradient-from to-gradient-to rounded-full mx-auto flex items-center justify-center shadow-xl">
                        <Baby className="h-12 w-12 text-white" />
                      </div>
                      
                      {/* Surrounding elements representing diversity */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-tbf-success rounded-full flex items-center justify-center shadow-lg">
                        <Heart className="h-4 w-4 text-white" />
                      </div>
                      <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-via rounded-full flex items-center justify-center shadow-lg">
                        <Users className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="font-heading text-xl font-bold text-text-dark">Pour tous les pères</h3>
                      <div className="flex flex-wrap justify-center gap-2">
                        <span className="text-xs bg-gradient-from/10 text-gradient-from px-3 py-1 rounded-full">Multiculturel</span>
                        <span className="text-xs bg-gradient-via/10 text-gradient-via px-3 py-1 rounded-full">Inclusif</span>
                        <span className="text-xs bg-indigo-ocean/10 text-indigo-ocean px-3 py-1 rounded-full">Personnalisé</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-6 left-6 w-4 h-4 bg-gradient-from/20 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-8 right-8 w-6 h-6 bg-indigo-ocean/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-1/2 right-4 w-3 h-3 bg-tbf-success/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}