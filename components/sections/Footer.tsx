"use client";

import { Instagram, Linkedin, Facebook, Music, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const footerLinks = {
  navigation: [
    { name: 'Accueil', href: '#hero' },
    { name: 'Application', href: '#application' },
    { name: 'Média', href: '#media' },
    { name: 'Prix', href: '#prix' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Partenariats', href: '#partenariats' },
    { name: 'Contact', href: '#contact' }
  ],
  legal: [
    { name: 'RGPD & Confidentialité', href: '/confidentialite' },
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'CGU', href: '/cgu' }
  ],
  social: [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/tobefather.off',
      color: 'hover:text-pink-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/company/tobefather',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/tobefather.off',
      color: 'hover:text-blue-500'
    },
    {
      name: 'TikTok',
      icon: Music,
      url: 'https://tiktok.com/@tobefather.off',
      color: 'hover:text-gray-300'
    }
  ]
};

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <footer className="relative bg-navy-deep text-text-light">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 75%, rgb(108, 99, 255) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 25%, rgb(47, 128, 237) 0%, transparent 50%)`,
          backgroundSize: '400px 400px'
        }} />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-12 h-12">
                  <Image
                    src="/image.png"
                    alt="To Be Father Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-heading text-2xl font-bold">To Be Father</span>
              </div>
              
              <p className="text-text-light/80 leading-relaxed mb-6 max-w-md">
                La première application copilote de la paternité. Accompagnement personnalisé 
                avec IA spécialisée pour tous les futurs et jeunes pères.
              </p>

              <div className="flex items-center space-x-2 mb-6">
                <Mail className="h-5 w-5 text-gradient-from" />
                <a 
                  href="mailto:contact@tobefather.com"
                  className="text-text-light/90 hover:text-gradient-from transition-colors duration-200"
                >
                  contact@tobefather.com
                </a>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4">
                {footerLinks.social.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-200 ${social.color} group`}
                      aria-label={`Suivre sur ${social.name}`}
                    >
                      <IconComponent className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="font-heading text-lg font-semibold mb-6">Navigation</h3>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-text-light/80 hover:text-text-light transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-heading text-lg font-semibold mb-6">Légal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-text-light/80 hover:text-text-light transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sm text-text-light/60">
                  <strong className="text-text-light/80">@tobefather.off</strong><br />
                  Suivez nos réseaux sociaux
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-text-light/60 text-sm">
                © {new Date().getFullYear()} To Be Father. Tous droits réservés.
              </p>
              <p className="text-text-light/60 text-sm mt-2 sm:mt-0">
                Lancement application : juillet 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <Button
        variant="primary"
        size="icon"
        className={`fixed bottom-8 right-8 z-50 transition-all duration-300 shadow-xl ${
          showBackToTop 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        onClick={scrollToTop}
        aria-label="Retour en haut"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </footer>
  );
}