import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import heroBg from '@/assets/hero-bg.png';
import aiTrading from '@/assets/ai-trading.png';

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const Hero: React.FC = () => {
  const handleCTAClick = () => {
    // Redirecionar para o checkout
    window.open('https://go.goatpayments.com.br/stf4fdjq1g?mcp_token=eyJwaWQiOjMxNTEyNzEsInNpZCI6OTkyNDE5NTY3LCJheCI6IjFjNzUzMmUwZDY4NjA1NTQ2OTk4OGRmNmZiMmEzYmIyIiwidHMiOjE3NTE3NDAxMDYsImV4cCI6MTc1NDE1OTMwNn0.m1R7INX8kQVzbNtpx3pYDOJ0ZuupDyVGiJAM5EHjQFQ&fbclid=PAQ0xDSwLWTihleHRuA2FlbQIxMAABp3n8rye3Oi8peLfSI3up6OHQ1GU5MXv-8RLHOj9j6nQjsIhDC4BugDQgU1Hm_aem_91xDWtQCxFUr1yMJCTqknA', '_blank');
    
    // Analytics tracking (implementar conforme necessário)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        event_category: 'conversion',
        event_label: 'hero_cta',
        value: 47
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Skip link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
      >
        Pular para o conteúdo principal
      </a>

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Gráficos de trading em tempo real mostrando análise técnica" 
          className="w-full h-full object-cover opacity-20"
          loading="eager"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg/90 via-dark-bg/80 to-dark-bg/90" aria-hidden="true"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-10" aria-hidden="true">
        <div className="absolute top-20 left-10 w-2 h-2 bg-neon-green rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-neon-purple rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-neon-green rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <header className="mb-8 mt-16 md:mt-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-space leading-tight">
              Receba os sinais da IA que me faz 
              <span className="text-gradient-primary block mt-2">lucrar todo dia sem analisar nada</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              <span className="text-neon-green font-bold">+1000 manos</span> já tão usando e lucrando com o SmokeTrade IA
            </p>
          </header>

          {/* Main Image */}
          <div className="flex justify-center mb-8">
            <div className="relative max-w-md mx-auto">
              <div className="relative z-10">
                <img 
                  src={aiTrading} 
                  alt="Interface do sistema Smoke Trade IA mostrando sinais de trading em tempo real" 
                  className="w-full rounded-2xl shadow-2xl animate-float"
                  loading="eager"
                  width="400"
                  height="300"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-neon-green/20 to-neon-purple/20 rounded-2xl" aria-hidden="true"></div>
              </div>
            </div>
          </div>

          {/* Main CTA */}
          <div className="mb-8" id="main-content">
            <Button 
              variant="cta" 
              size="xl" 
              className="w-full md:w-auto px-8 md:px-12 py-6 text-lg md:text-xl font-bold touch-target"
              onClick={handleCTAClick}
              aria-describedby="cta-description"
            >
              🚀 Quero ativar a IA por R$47
              <ExternalLink className="w-5 h-5 ml-2" aria-hidden="true" />
            </Button>
            <p id="cta-description" className="text-sm text-muted-foreground mt-3">
              Acesso ilimitado • Sem mensalidade • Garantia de 7 dias
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="flex justify-center mb-16">
            <CountdownTimer className="animate-slide-up" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;