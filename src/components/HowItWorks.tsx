import React from 'react';
import { ArrowDown, BarChart3, Brain, CheckCircle, Clock, Target, TrendingUp, Zap } from 'lucide-react';

interface Step {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  highlight?: string;
}

const steps: Step[] = [
  {
    id: 1,
    icon: Target,
    title: "Cliente escolhe par + timeframe",
    description: "Você seleciona qual moeda quer operar e o tempo de análise",
    highlight: "BTC/USDT • 15min"
  },
  {
    id: 2,
    icon: CheckCircle,
    title: "Sistema valida",
    description: "Verificamos se os dados estão corretos e disponíveis",
    highlight: "Validação automática"
  },
  {
    id: 3,
    icon: Clock,
    title: "Verifica cache (<5min)",
    description: "Checamos se já temos análise recente para economizar tempo",
    highlight: "Super rápido"
  },
  {
    id: 4,
    icon: BarChart3,
    title: "Busca dados API ou simula",
    description: "Coletamos dados reais ou usamos simulação inteligente",
    highlight: "Sempre funciona"
  },
  {
    id: 5,
    icon: Brain,
    title: "Aplica indicadores técnicos",
    description: "RSI, Bollinger Bands, médias móveis e outros indicadores",
    highlight: "IA profissional"
  },
  {
    id: 6,
    icon: TrendingUp,
    title: "Gera decisão BUY/SELL",
    description: "Algoritmo decide com nível de confiança baseado na análise",
    highlight: "+65% assertividade"
  },
  {
    id: 7,
    icon: Zap,
    title: "Envia sinal completo",
    description: "Você recebe entrada, stop loss, take profit e justificativa",
    highlight: "Tudo automatizado"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-space">
            Como Funciona a{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent animate-neon-pulse">
              Mágica
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sistema 100% automatizado que gera sinais de trading usando inteligência artificial
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-neon-green via-neon-purple to-neon-green opacity-30 hidden md:block"></div>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="relative flex items-start space-x-6 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow group-hover:shadow-neon transition-all duration-300 group-hover:scale-110">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-neon-purple rounded-full flex items-center justify-center text-xs font-bold text-foreground">
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 group-hover:border-neon-green/50 transition-all duration-300 group-hover:shadow-card">
                  <h3 className="text-xl font-semibold text-foreground mb-2 font-space">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    {step.description}
                  </p>
                  {step.highlight && (
                    <div className="inline-block bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {step.highlight}
                    </div>
                  )}
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="absolute -bottom-4 left-8 md:hidden">
                    <ArrowDown className="w-4 h-4 text-neon-green animate-float" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-glow border border-neon-green/30 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-neon-green mb-2 font-space">
              Resultado Final
            </h3>
            <p className="text-muted-foreground">
              Sinal completo com entrada, stop loss, take profit e justificativa técnica. 
              Tudo automatizado e pronto para você usar!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;