"use client";

import { useState, useEffect, useRef } from 'react';
import { Brain, CheckSquare, Users, MessageSquare, Bell, Share2 } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "IA personnalisée",
    description: "Accès illimité en Premium pour des conseils adaptés à votre situation",
    highlight: "Premium"
  },
  {
    icon: CheckSquare,
    title: "Suivi & checklists",
    description: "De la grossesse aux premières années, suivez chaque étape importante",
    highlight: "Essentiel"
  },
  {
    icon: Users,
    title: "Conseils en temps réel",
    description: "Médecins, sages-femmes, psychologues... L'expertise à portée de main",
    highlight: "Expert"
  },
  {
    icon: MessageSquare,
    title: "Espace communautaire",
    description: "Échangez avec d'autres pères dans un environnement bienveillant",
    highlight: "Prévu"
  },
  {
    icon: Bell,
    title: "Rappels & to-dos",
    description: "Ne manquez plus aucun rendez-vous ou étape importante",
    highlight: "Pratique"
  },
  {
    icon: Share2,
    title: "Partage avec l'autre parent",
    description: "Synchronisez vos informations avec votre partenaire",
    highlight: "À terme"
  }
];

export default function Features() {
  const [visibleFeatures, setVisibleFeatures] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleFeatures(prev => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 150);
            });
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
    <section id="fonctionnalites" ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-dark mb-6">
            Fonctionnalités clés
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez tout ce que To Be Father vous propose pour vous accompagner dans votre parcours paternel
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isVisible = visibleFeatures[index] || false;
            
            return (
              <div
                key={index}
                className={`relative group transition-all duration-700 transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                } hover:scale-105`}
              >
                <div className="h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gradient-from/20 relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gradient-from/5 to-gradient-to/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gradient-from to-gradient-to rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <span className="text-xs font-semibold text-gradient-from bg-gradient-from/10 px-3 py-1 rounded-full">
                        {feature.highlight}
                      </span>
                    </div>
                    
                    <h3 className="font-heading text-xl font-bold text-text-dark mb-4 group-hover:text-gradient-from transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}