"use client";

import { useState, useEffect, useRef } from 'react';
import { Users, Target, Scale, Globe } from 'lucide-react';

const visionPoints = [
  {
    icon: Users,
    title: "Constat",
    description: "175 millions d'hommes deviennent pères chaque année, mais trop peu d'outils leur sont dédiés."
  },
  {
    icon: Target,
    title: "Objectif",
    description: "Permettre aux pères de se sentir utiles, importants et soutenus."
  },
  {
    icon: Scale,
    title: "Égalité parentale",
    description: "Parentalité équilibrée et partagée : une nécessité pour le bien-être de tous."
  },
  {
    icon: Globe,
    title: "Ambition",
    description: "Convaincre en France, Europe et monde que la paternité mérite un soutien concret."
  }
];

export default function Vision() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visionPoints.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 200);
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
    <section id="vision" ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-dark mb-6">
            Pourquoi To Be Father ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Notre vision et nos valeurs pour transformer l'accompagnement paternel
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visionPoints.map((point, index) => {
            const IconComponent = point.icon;
            const isVisible = visibleCards[index] || false;
            
            return (
              <div
                key={index}
                className={`relative group transition-all duration-700 transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
              >
                <div className="h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gradient-from/20 group-hover:scale-105">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gradient-from to-gradient-to rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="font-heading text-xl font-bold text-text-dark mb-4 group-hover:text-gradient-from transition-colors duration-300">
                      {point.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {point.description}
                    </p>
                  </div>
                  
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gradient-from/5 to-gradient-to/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}