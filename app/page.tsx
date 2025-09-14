"use client";

import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import ValueProposition from '@/components/sections/ValueProposition';
import Application from '@/components/sections/Application';
import Media from '@/components/sections/Media';
import Vision from '@/components/sections/Vision';
import TargetAudience from '@/components/sections/TargetAudience';
import Features from '@/components/sections/Features';
import Pricing from '@/components/sections/Pricing';
import Partnerships from '@/components/sections/Partnerships';
import SocialMedia from '@/components/sections/SocialMedia';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      <Header />
      <Hero />
      <ValueProposition />
      <Application />
      <Media />
      <Vision />
      <TargetAudience />
      <Features />
      <Pricing />
      <Partnerships />
      <SocialMedia />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}