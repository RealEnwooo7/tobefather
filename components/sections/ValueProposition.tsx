"use client";

import { useState, useEffect, useRef } from 'react';
import { Brain, CheckSquare, Users, Heart } from 'lucide-react';

const values = [
  {
    icon: Brain,
    title: "IA spécialisée",
    description: "Intelligence artificielle dédiée aux enjeux de la paternité"
  },
  {
    icon: CheckSquare,
    title: "Checklists & rappels personnalisés",
    description: "Suivi adapté à votre situation et calendrier personnel"
  },
  {
    icon: Users,
    title: "Conseils médicaux, juridiques et pratiques",
    description: "Expertise professionnelle accessible 24h/24"
  },
  {
    icon: Heart,
    title: "Soutien émotionnel",
    description: "Accompagnement psychologique tout au long du parcours"
  }
];

export default function ValueProposition() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger animation for each value
            values.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems(prev => {
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
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            const isVisible = visibleItems[index] || false;
            
            return (
              <div
                key={index}
                className={`text-center p-6 rounded-2xl bg-gradient-to-b from-white to-gray-50/50 shadow-lg hover:shadow-xl transition-all duration-300 transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                } hover:scale-105`}
                style={{
                  transitionDelay: `${index * 60}ms`
                }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gradient-from to-gradient-to rounded-2xl mb-4 shadow-lg">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-text-dark mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}