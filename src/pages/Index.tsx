import React from 'react';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import TestimonialsSimple from '@/components/TestimonialsSimple';
import OfferSection from '@/components/OfferSection';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Hero />
      <Benefits />
      <TestimonialsSimple />
      <OfferSection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
