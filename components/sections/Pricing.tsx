"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Smartphone, Brain, Zap } from 'lucide-react';

const plans = [
  {
    name: "Gratuit",
    price: "0€",
    period: "À vie",
    description: "Les fonctionnalités essentielles pour commencer",
    features: [
      "Accès aux fonctionnalités essentielles",
      "IA personnalisée (5 questions/jour)",
      "Suivi de base grossesse/enfant",
      "Conseils généraux",
      "Support communautaire"
    ],
    cta: "Être informé du lancement",
    popular: false,
    color: "from-gray-100 to-gray-50"
  },
  {
    name: "Premium",
    price: "4,39€",
    period: "/mois",
    description: "L'expérience complète To Be Father",
    originalPrice: "35,99€/an",
    savings: "Annuel : 3,59€/mois (-20%)",
    features: [
      "Accès illimité à notre IA personnalisée",
      "Toutes les fonctionnalités avancées de suivi",
      "Contenus exclusifs et outils pratiques",
      "Conseils experts personnalisés",
      "Support prioritaire",
      "Partage avec l'autre parent (à terme)"
    ],
    cta: "Être informé du lancement",
    popular: true,
    color: "from-gradient-from to-gradient-to"
  }
];

export default function Pricing() {
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

  const handleCTAClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="prix" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-dark mb-6">
            Prix & abonnements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choisissez la formule qui vous convient pour accompagner votre paternité
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const isPopular = plan.popular;
            
            return (
              <div
                key={index}
                className={`relative transition-all duration-700 transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                } ${isPopular ? 'scale-105 z-10' : 'hover:scale-105'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge variant="gradient" className="px-4 py-2 text-sm font-semibold">
                      <Star className="mr-2 h-4 w-4" />
                      Recommandé
                    </Badge>
                  </div>
                )}

                <div className={`h-full rounded-3xl p-8 shadow-xl transition-all duration-300 relative overflow-hidden ${
                  isPopular 
                    ? 'bg-white border-2 border-gradient-from hover:shadow-2xl' 
                    : 'bg-white border border-gray-200 hover:shadow-xl hover:border-gray-300'
                }`}>
                  
                  {/* Background gradient for popular plan */}
                  {isPopular && (
                    <div className="absolute inset-0 bg-gradient-to-br from-gradient-from/5 to-gradient-to/5 opacity-50"></div>
                  )}

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="text-center mb-8">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                        isPopular 
                          ? 'bg-gradient-to-r from-gradient-from to-gradient-to shadow-lg' 
                          : 'bg-gray-100'
                      }`}>
                        {isPopular ? (
                          <Brain className="h-8 w-8 text-white" />
                        ) : (
                          <Smartphone className="h-8 w-8 text-gray-600" />
                        )}
                      </div>
                      
                      <h3 className={`font-heading text-2xl font-bold mb-2 ${
                        isPopular ? 'text-gradient-from' : 'text-text-dark'
                      }`}>
                        {plan.name}
                      </h3>
                      
                      <div className="mb-4">
                        <span className={`text-4xl font-bold ${
                          isPopular ? 'text-text-dark' : 'text-gray-900'
                        }`}>
                          {plan.price}
                        </span>
                        <span className="text-gray-500 ml-2">{plan.period}</span>
                      </div>

                      {plan.savings && (
                        <div className="mb-4">
                          <p className="text-sm text-gradient-from font-semibold bg-gradient-from/10 px-3 py-1 rounded-full inline-block">
                            {plan.savings}
                          </p>
                        </div>
                      )}

                      <p className="text-gray-600 text-sm">
                        {plan.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                            isPopular 
                              ? 'bg-gradient-to-r from-gradient-from to-gradient-to' 
                              : 'bg-tbf-success'
                          }`}>
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-gray-700 text-sm leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button
                      variant={isPopular ? "primary" : "outline"}
                      size="lg"
                      className="w-full"
                      onClick={handleCTAClick}
                    >
                      {isPopular && <Zap className="mr-2 h-4 w-4" />}
                      {plan.cta}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional info */}
        <div className={`text-center mt-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '600ms' }}>
          <div className="bg-gradient-to-r from-gradient-from/5 to-gradient-to/5 rounded-2xl p-6 max-w-3xl mx-auto">
            <h3 className="font-heading text-xl font-semibold text-text-dark mb-4">
              Premium inclut :
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Un accès illimité à notre IA personnalisée, toutes les fonctionnalités avancées de suivi, 
              des contenus exclusifs et des outils pratiques pour les pères et les familles.
            </p>
          </div>
        </div>
      </div>

      {/* JSON-LD for Products */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "To Be Father App",
            "description": "Application copilote de la paternité avec IA personnalisée",
            "brand": {
              "@type": "Brand",
              "name": "To Be Father"
            },
            "offers": [
              {
                "@type": "Offer",
                "name": "Gratuit",
                "price": "0",
                "priceCurrency": "EUR",
                "availability": "https://schema.org/PreOrder",
                "validFrom": "2025-01-01"
              },
              {
                "@type": "Offer", 
                "name": "Premium",
                "price": "4.39",
                "priceCurrency": "EUR", 
                "priceSpecification": {
                  "@type": "RecurringCharge",
                  "frequency": "monthly"
                },
                "availability": "https://schema.org/PreOrder",
                "validFrom": "2025-01-01"
              }
            ]
          })
        }}
      />
    </section>
  );
}