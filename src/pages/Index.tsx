import React from 'react';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import WhyItWorks from '@/components/WhyItWorks';
import SocialProof from '@/components/SocialProof';
import GangIdentity from '@/components/GangIdentity';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Hero />
      <HowItWorks />
      <WhyItWorks />
      <SocialProof />
      <GangIdentity />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
