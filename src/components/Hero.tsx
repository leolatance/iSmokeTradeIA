import React from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp, Zap, Brain, Target } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import heroBg from '@/assets/hero-bg.jpg';
import aiTrading from '@/assets/ai-trading.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Trading Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg/90 via-dark-bg/80 to-dark-bg/90"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-neon-green rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-neon-purple rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-neon-green rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-neon-purple rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-glow-pulse">
              <Brain className="w-4 h-4 mr-2" />
              IA + Análise Técnica Profissional
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 font-space leading-tight">
              <span className="block">Ganhe com</span>
              <span className="bg-gradient-primary bg-clip-text text-transparent animate-neon-pulse">
                Daytrade
              </span>
              <span className="block">usando IA</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              IA com Análise Técnica Profissional, direto no navegador. 
              <span className="text-neon-green font-semibold"> Não precisa instalar nada.</span>
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3 text-foreground">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-semibold">+65% de assertividade</span>
              </div>
              <div className="flex items-center space-x-3 text-foreground">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-semibold">Sinais em tempo real</span>
              </div>
              <div className="flex items-center space-x-3 text-foreground">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Brain className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-semibold">IA inteligente</span>
              </div>
              <div className="flex items-center space-x-3 text-foreground">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Target className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-semibold">Sem forçar entradas</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              variant="cta" 
              size="xl" 
              className="mb-8 w-full md:w-auto"
            >
              🚀 Testar Grátis por 7 dias
            </Button>

            {/* Trust indicators */}
            <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start space-y-4 md:space-y-0 md:space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                <span>Sem cartão de crédito</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                <span>+1000 usuários</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* AI Trading Image */}
            <div className="relative z-10">
              <img 
                src={aiTrading} 
                alt="AI Trading Interface" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-green/20 to-neon-purple/20 rounded-2xl"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold animate-glow-pulse z-20">
              +65% WIN
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-purple text-foreground px-4 py-2 rounded-full text-sm font-bold animate-glow-pulse z-20">
              24/7 ATIVO
            </div>

            {/* Countdown Timer */}
            <div className="mt-8">
              <CountdownTimer className="animate-slide-up" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-neon-green rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-green rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;