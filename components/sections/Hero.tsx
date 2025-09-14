"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Calendar, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-deep">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 animate-gradient opacity-20" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgb(108, 99, 255) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgb(47, 128, 237) 0%, transparent 50%)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32">
              <Image
                src="/image.png"
                alt="To Be Father Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-text-light mb-6 leading-tight">
            La première application <br />
            <span className="bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to bg-clip-text text-transparent">
              copilote de la paternité
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-text-light/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            To Be Father accompagne les futurs et jeunes pères, dès l'annonce de la grossesse 
            jusqu'aux premières années de l'enfant.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="primary" 
              size="xl"
              className="group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Rejoindre la liste d'attente"
            >
              Rejoindre la liste d'attente
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="ghost" 
              size="xl"
              className="text-text-light hover:bg-white/10"
              onClick={() => document.getElementById('media')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Découvrir le média
            </Button>
          </div>

          {/* Badges */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Badge variant="gradient" className="text-base px-4 py-2">
              <Smartphone className="mr-2 h-4 w-4" />
              iOS & Android
            </Badge>
            <Badge variant="gradient" className="text-base px-4 py-2">
              <Calendar className="mr-2 h-4 w-4" />
              Lancement : juillet 2026
            </Badge>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-text-light/30 rounded-full">
            <div className="w-1 h-3 bg-gradient-to-b from-gradient-from to-gradient-to rounded-full mx-auto mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "To Be Father",
            "description": "La première application copilote de la paternité",
            "url": "https://tobefather.com",
            "logo": "https://tobefather.com/image.png",
            "foundingDate": "2025",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "",
              "contactType": "Customer Service",
              "email": "contact@tobefather.com"
            },
            "sameAs": [
              "https://instagram.com/tobefather.off",
              "https://linkedin.com/company/tobefather",
              "https://facebook.com/tobefather.off",
              "https://tiktok.com/@tobefather.off"
            ]
          })
        }}
      />
    </section>
  );
}