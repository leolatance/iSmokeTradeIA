import React from 'react';
import { CheckCircle, TrendingUp, Brain, Shield, Zap, Target } from 'lucide-react';

interface FeatureCard {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  highlight: string;
  benefits: string[];
}

const features: FeatureCard[] = [
  {
    id: 1,
    icon: TrendingUp,
    title: "Assertividade Comprovada",
    description: "Mais de 65% de assertividade com gerenciamento de risco inteligente",
    highlight: "+65% WIN RATE",
    benefits: [
      "Backtesting com dados históricos",
      "Gerenciamento de risco automático",
      "Stop loss e take profit otimizados"
    ]
  },
  {
    id: 2,
    icon: Brain,
    title: "IA Inteligente",
    description: "Sistema que não força entradas quando o mercado está ruim",
    highlight: "NÃO FORÇA TRADES",
    benefits: [
      "Análise de múltiplos timeframes",
      "Detecta mercados laterais",
      "Gera 'Aguardar' quando necessário"
    ]
  },
  {
    id: 3,
    icon: Shield,
    title: "Sempre Funciona",
    description: "Sistema com fallback inteligente mesmo sem API das exchanges",
    highlight: "FALLBACK ATIVO",
    benefits: [
      "Dados simulados baseados em padrões",
      "99.9% de uptime garantido",
      "Funciona mesmo offline"
    ]
  }
];

const technicalIndicators = [
  { name: "RSI Personalizado", icon: "📊" },
  { name: "Análise Multi-Timeframe", icon: "🔁" },
  { name: "Bandas de Bollinger", icon: "📉" },
  { name: "Médias Móveis", icon: "📈" },
  { name: "MACD Otimizado", icon: "⚡" },
  { name: "Volume Analysis", icon: "📊" }
];

const WhyItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-purple text-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Shield className="w-4 h-4 mr-2" />
            Solução Real
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-space">
            Por que{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent animate-neon-pulse">
              Funciona
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Não é mais um robô que quebra. É um sistema completo, inteligente e confiável.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-neon-green/50 transition-all duration-300 hover:shadow-card animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon & Highlight */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                  {feature.highlight}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-4 font-space">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Benefits */}
              <div className="space-y-3">
                {feature.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-neon-green flex-shrink-0" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Indicators */}
        <div className="bg-gradient-glow border border-neon-green/30 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4 font-space">
              Indicadores Técnicos Profissionais
            </h3>
            <p className="text-muted-foreground text-lg">
              Combinamos os melhores indicadores em um só lugar
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {technicalIndicators.map((indicator, index) => (
              <div
                key={index}
                className="bg-gradient-dark border border-neon-green/20 rounded-lg p-4 text-center hover:border-neon-green/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl mb-2">{indicator.icon}</div>
                <div className="text-sm font-semibold text-foreground">{indicator.name}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="bg-gradient-primary text-primary-foreground rounded-lg p-4 inline-block">
              <p className="font-bold text-lg">
                Tudo automatizado • Análise completa • Resultado na sua mão
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-neon-green mb-2 animate-neon-pulse">+65%</div>
            <div className="text-sm text-muted-foreground">Assertividade média</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-neon-purple mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Sistema ativo</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-neon-green mb-2 animate-neon-pulse">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime garantido</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-neon-purple mb-2">+1000</div>
            <div className="text-sm text-muted-foreground">Usuários ativos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;