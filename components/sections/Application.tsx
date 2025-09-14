"use client";

import { useState, useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Smartphone, Calendar } from 'lucide-react';

const features = [
  "Conseils médicaux, juridiques et pratiques",
  "Checklists et rappels personnalisés", 
  "Soutien émotionnel et (à terme) espace communautaire"
];

export default function Application() {
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
    <section id="application" ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="mb-6">
              <span className="text-4xl font-bold">📱</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-dark mt-4 mb-6">
                L'Application To Be Father
              </h2>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              To Be Father est la première application copilote de la paternité. Grâce à une IA spécialisée, 
              elle accompagne les futurs et jeunes pères dès l'annonce de la grossesse jusqu'aux premières 
              années de l'enfant.
            </p>

            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-3 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                  style={{ transitionDelay: `${(index + 2) * 200}ms` }}
                >
                  <CheckCircle className="h-6 w-6 text-tbf-success flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-base">{feature}</span>
                </div>
              ))}
            </div>

            {/* Info Box */}
            <div className={`bg-gradient-to-r from-gradient-from/5 to-gradient-to/5 border-l-4 border-gradient-from rounded-r-2xl p-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '800ms' }}>
              <div className="flex flex-wrap gap-3 items-center">
                <Badge variant="gradient" className="text-sm px-3 py-1.5">
                  <Calendar className="mr-2 h-4 w-4" />
                  Sortie prévue : juillet 2026
                </Badge>
                <Badge variant="outline" className="text-sm px-3 py-1.5 border-indigo-ocean/30 text-indigo-ocean">
                  <Smartphone className="mr-2 h-4 w-4" />
                  iOS & Android
                </Badge>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
               style={{ transitionDelay: '400ms' }}>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gradient-from/20 to-gradient-to/20 rounded-3xl p-12 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl shadow-xl flex items-center justify-center relative overflow-hidden">
                  {/* App mockup placeholder */}
                  <div className="text-center space-y-6">
                    <div className="w-24 h-24 bg-gradient-to-r from-gradient-from to-gradient-to rounded-full mx-auto flex items-center justify-center">
                      <Smartphone className="h-12 w-12 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading text-xl font-bold text-text-dark">To Be Father</h3>
                      <p className="text-gray-500 text-sm">Votre copilote paternel</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gradient-to-r from-gradient-from to-gradient-to rounded-full w-32 mx-auto"></div>
                      <div className="h-2 bg-gray-200 rounded-full w-24 mx-auto"></div>
                      <div className="h-2 bg-gray-200 rounded-full w-28 mx-auto"></div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-tbf-success/20 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-6 left-4 w-6 h-6 bg-gradient-from/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}