import React from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp, Zap, Brain, Target, Shield, DollarSign, BarChart3, Clock, ExternalLink } from 'lucide-react';
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
    // Implementar integração com sistema de pagamento
    // Por enquanto, scroll para o footer com mais info
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
    
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

      {/* Reduced animated background elements */}
      <div className="absolute inset-0 z-10" aria-hidden="true">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cannabis-green rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-cyber-blue rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-lime-accent rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-6xl mx-auto">
          {/* Main Title */}
          <header className="text-center mb-12 mt-16 md:mt-20 lg:mt-24">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 font-space leading-tight text-balance">
              <span className="text-gradient-primary">CHEGA DE SER QUEBRADO!</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Sistema que já fez <span className="text-cannabis-green font-bold">622 pessoas</span> saírem do vermelho e começarem a lucrar 
              <span className="text-cyber-blue font-bold"> R$ 200-500 por dia</span> com trading automatizado
            </p>
          </header>

          {/* Main Image */}
          <div className="flex justify-center mb-12">
            <div className="relative max-w-md mx-auto">
              <div className="relative z-10">
                <img 
                  src={aiTrading} 
                  alt="Interface do sistema Smoke Trade IA mostrando sinais de trading em tempo real com gráficos e indicadores técnicos" 
                  className="w-full rounded-2xl shadow-2xl animate-float"
                  loading="eager"
                  width="400"
                  height="300"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-cannabis-green/20 to-cyber-blue/20 rounded-2xl" aria-hidden="true"></div>
              </div>

              <div className="absolute -top-4 -right-4 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold z-20">
                <span className="sr-only">Taxa de acerto: </span>75%+ WIN
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center space-y-3 bg-card/30 backdrop-blur-sm border border-border/30 rounded-lg p-6 hover:border-cannabis-green/50 transition-all duration-300 touch-target">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center" aria-hidden="true">
                  <TrendingUp className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="font-semibold text-foreground">Robô trabalha 24h</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-3 bg-card/30 backdrop-blur-sm border border-border/30 rounded-lg p-6 hover:border-cannabis-green/50 transition-all duration-300 touch-target">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center" aria-hidden="true">
                  <BarChart3 className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="font-semibold text-foreground">Mesmo sem entender</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-3 bg-card/30 backdrop-blur-sm border border-border/30 rounded-lg p-6 hover:border-cannabis-green/50 transition-all duration-300 touch-target">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center" aria-hidden="true">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="font-semibold text-foreground">Não perde sua grana</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-3 bg-card/30 backdrop-blur-sm border border-border/30 rounded-lg p-6 hover:border-cannabis-green/50 transition-all duration-300 touch-target">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center" aria-hidden="true">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="font-semibold text-foreground">Lucro todo dia</span>
              </div>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="text-center mb-8">
            <div className="bg-gradient-tech border border-cyber-blue/30 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-4">
                <DollarSign className="w-8 h-8 text-cyber-blue" aria-hidden="true" />
                <span className="text-lg md:text-xl font-bold text-foreground">
                  R$ 47 hoje = R$ 200-500 por dia pra sempre
                </span>
              </div>
            </div>
          </div>

          {/* Main CTA */}
          <div className="text-center mb-8">
            <Button 
              variant="cta" 
              size="xl" 
              className="w-full md:w-auto px-8 md:px-12 py-4 text-base md:text-lg touch-target"
              onClick={handleCTAClick}
              aria-describedby="cta-description"
            >
              🚀 EU QUERO SAIR DO VERMELHO HOJE
              <ExternalLink className="w-5 h-5 ml-2" aria-hidden="true" />
            </Button>
            <p id="cta-description" className="text-xs text-muted-foreground mt-2">
              Acesso vitalício por R$ 47 • Garantia de 7 dias
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-muted-foreground mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cannabis-green rounded-full animate-pulse" aria-hidden="true"></div>
              <span>Garantia 7 dias reembolso</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyber-blue rounded-full animate-pulse" aria-hidden="true"></div>
              <span>Alpha Vantage API</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-lime-accent rounded-full animate-pulse" aria-hidden="true"></div>
              <span>Sistema usado por pros</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex justify-center mb-8" id="main-content">
            <CountdownTimer className="animate-slide-up" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;