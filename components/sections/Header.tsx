"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navigationItems = [
  { name: 'Application', href: '#application' },
  { name: 'Média', href: '#media' },
  { name: 'Prix', href: '#prix' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Partenariats', href: '#partenariats' },
  { name: 'Contact', href: '#contact' }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  const handleCTAClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <Image
                src="/image.png"
                alt="To Be Father Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className={`font-heading text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-text-dark' : 'text-text-light'
            }`}>
              TBF
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`transition-colors duration-300 hover:text-gradient-from focus-outline font-medium ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-gradient-from' 
                    : 'text-text-light/90 hover:text-text-light'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              variant="primary"
              size="default"
              onClick={handleCTAClick}
              className="shadow-lg hover:shadow-xl"
            >
              Liste d'attente
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-md transition-colors duration-300 focus-outline ${
              isScrolled 
                ? 'text-gray-700 hover:text-gradient-from' 
                : 'text-text-light hover:text-text-light/80'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Menu principal"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-screen opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="bg-white/98 backdrop-blur-md rounded-2xl shadow-2xl mx-4 mb-4 overflow-hidden border border-gray-100">
            <div className="py-6 px-6 space-y-4">
              {navigationItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left py-3 px-4 text-lg font-medium text-text-dark hover:text-gradient-from hover:bg-gradient-from/5 rounded-xl transition-all duration-200 focus-outline ${
                    'opacity-0 animate-fade-up'
                  }`}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  {item.name}
                </button>
              ))}
              
              <div className="pt-4 border-t border-gray-200">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleCTAClick}
                  className="w-full animate-fade-up"
                  style={{ 
                    animationDelay: `${navigationItems.length * 50}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  Liste d'attente
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}