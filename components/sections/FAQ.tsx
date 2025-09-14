"use client";

import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    category: "Application & fonctionnalités",
    questions: [
      {
        question: "Quand sortira l'application ?",
        answer: "Juillet 2026."
      },
      {
        question: "iOS & Android ?",
        answer: "Oui (App Store & Google Play)."
      },
      {
        question: "Utilisable dès la grossesse ?",
        answer: "Absolument."
      },
      {
        question: "Espace pour échanger ?",
        answer: "Souhaité à terme."
      }
    ]
  },
  {
    category: "Prix & abonnements",
    questions: [
      {
        question: "Version gratuite ?",
        answer: "Oui, essentiels + IA (5 questions/jour)."
      },
      {
        question: "Prix premium ?",
        answer: "4,39 € / mois."
      },
      {
        question: "Que comprend l'abonnement ?",
        answer: "IA illimitée, suivi avancé, contenus & outils exclusifs."
      },
      {
        question: "Offre annuelle ?",
        answer: "35,99 € / an (−20%)."
      }
    ]
  },
  {
    category: "Cible & utilité",
    questions: [
      {
        question: "À qui ?",
        answer: "À tous les pères ; multiculturel & personnalisé."
      },
      {
        question: "Utile pour les mamans ?",
        answer: "Oui, rééquilibre la charge mentale."
      },
      {
        question: "Déjà papa ?",
        answer: "Oui."
      },
      {
        question: "Différences vs autres apps ?",
        answer: "1er assistant personnel de paternité, IA spécialisée qui s'adapte en temps réel."
      }
    ]
  },
  {
    category: "Vision & valeurs",
    questions: [
      {
        question: "Pourquoi ?",
        answer: "Peu d'outils pour 175M de nouveaux pères/an."
      },
      {
        question: "Objectif principal ?",
        answer: "Soutien concret & place pleine du père."
      },
      {
        question: "Égalité parentale ?",
        answer: "Équilibrée & partagée."
      },
      {
        question: "Long terme ?",
        answer: "Convaincre France/Europe/Monde."
      }
    ]
  },
  {
    category: "Média & réseaux sociaux",
    questions: [
      {
        question: "Seulement une app ?",
        answer: "Non, aussi un média engagé."
      },
      {
        question: "Où suivre ?",
        answer: "@tobefather.off (IG/LinkedIn/Facebook/TikTok)."
      },
      {
        question: "Témoignages ?",
        answer: "Oui, au centre du projet."
      },
      {
        question: "Podcast/YouTube ?",
        answer: "Prévu (YouTube/Spotify/Deezer)."
      }
    ]
  },
  {
    category: "Partenariats & experts",
    questions: [
      {
        question: "Quels pros ?",
        answer: "Médecins & spécialistes en activité (voir story PRO TBF)."
      },
      {
        question: "Liés à des mutuelles/institutions ?",
        answer: "Pas encore, en travail."
      },
      {
        question: "Entreprises ?",
        answer: "Oui, avantage RH possible."
      },
      {
        question: "Pro de santé ?",
        answer: "Oui: contact@tobefather.com."
      }
    ]
  },
  {
    category: "Sécurité & confidentialité",
    questions: [
      {
        question: "Données protégées ?",
        answer: "Oui, priorité absolue ; jamais revendues sans accord."
      },
      {
        question: "RGPD ?",
        answer: "Oui, respect strict."
      },
      {
        question: "Partage d'infos perso ?",
        answer: "Non, sauf choix explicite (ex. autre parent)."
      },
      {
        question: "Anonymat ?",
        answer: "Non (app personnalisée), mais données sécurisées."
      }
    ]
  },
  {
    category: "Développement futur",
    questions: [
      {
        question: "International ?",
        answer: "Oui, progressivement avec experts locaux."
      },
      {
        question: "Traductions ?",
        answer: "Anglais, espagnol, allemand (priorité)."
      },
      {
        question: "Version web ?",
        answer: "Pas au début ; installation requise."
      },
      {
        question: "Couples séparés ?",
        answer: "Oui, prévu."
      }
    ]
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
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

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section id="faq" ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-dark mb-6">
            Questions fréquentes
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Trouvez toutes les réponses à vos questions sur To Be Father
          </p>
        </div>

        <div className="space-y-8">
          {faqData.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="font-heading text-xl font-bold text-gradient-from mb-6 pb-2 border-b-2 border-gradient-from/20">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const key = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openItems[key] || false;
                  
                  return (
                    <div
                      key={questionIndex}
                      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                    >
                      <button
                        className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-gradient-from/20 rounded-2xl group"
                        onClick={() => toggleItem(categoryIndex, questionIndex)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${key}`}
                      >
                        <span className="font-heading text-lg font-semibold text-text-dark group-hover:text-gradient-from transition-colors duration-200 pr-4">
                          {item.question}
                        </span>
                        <div className="flex-shrink-0 ml-4">
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-gradient-from transition-transform duration-200" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500 group-hover:text-gradient-from transition-colors duration-200" />
                          )}
                        </div>
                      </button>
                      
                      <div
                        id={`faq-answer-${key}`}
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="px-6 pb-5">
                          <p className="text-gray-700 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* JSON-LD for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.flatMap(category => 
              category.questions.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.answer
                }
              }))
            )
          })
        }}
      />
    </section>
  );
}