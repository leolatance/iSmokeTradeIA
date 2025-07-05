import React from 'react';
import { ArrowDown, BarChart3, Brain, CheckCircle, Clock, Target, TrendingUp, Zap, Shield, DollarSign } from 'lucide-react';

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
    icon: Brain,
    title: "ROBÔ ANALISA O MERCADO",
    description: "IA trabalha 24h analisando 8 pares de moedas com 5+ indicadores técnicos profissionais",
    highlight: "Trabalha enquanto você dorme"
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "VOCÊ RECEBE O SINAL",
    description: "Notificação com entrada, stop loss, take profit e valor exato pra apostar",
    highlight: "Tudo calculado automaticamente"
  },
  {
    id: 3,
    icon: DollarSign,
    title: "VOCÊ LUCRA",
    description: "Segue o sinal, faz a operação e colhe os lucros. Simples assim!",
    highlight: "R$ 200-500 por dia"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-space">
            <span className="text-gradient-primary animate-neon-pulse">
              COMO VOCÊ VAI LUCRAR
            </span>
            {" "}EM 3 PASSOS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sistema automatizado que faz o trabalho pesado pra você. Só seguir os sinais e lucrar.
          </p>
        </div>

        {/* Proof Section */}
        <div className="bg-gradient-tech border border-cyber-blue/30 rounded-2xl p-8 mb-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center font-space">
            🔥 ENQUANTO VOCÊ DESCANSA, O ROBÔ TRABALHA
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 text-center">
              <div className="text-cannabis-green font-bold text-2xl mb-2">8 PARES</div>
              <div className="text-muted-foreground text-sm">Forex, Crypto, Ouro</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 text-center">
              <div className="text-cyber-blue font-bold text-2xl mb-2">75%+ WIN</div>
              <div className="text-muted-foreground text-sm">Taxa de acerto</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 text-center">
              <div className="text-lime-accent font-bold text-2xl mb-2">24/7</div>
              <div className="text-muted-foreground text-sm">Nunca para</div>
            </div>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-cannabis-green via-cyber-blue to-cannabis-green opacity-30 hidden md:block"></div>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="relative flex items-start space-x-6 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow group-hover:shadow-cannabis transition-all duration-300 group-hover:scale-110">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyber-blue rounded-full flex items-center justify-center text-xs font-bold text-foreground">
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 group-hover:border-cannabis-green/50 transition-all duration-300 group-hover:shadow-card">
                  <h3 className="text-xl font-semibold text-foreground mb-2 font-space">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    {step.description}
                  </p>
                  {step.highlight && (
                    <div className="inline-block bg-gradient-cyber text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {step.highlight}
                    </div>
                  )}
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="absolute -bottom-4 left-8 md:hidden">
                    <ArrowDown className="w-4 h-4 text-cannabis-green animate-float" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
                  <div className="bg-gradient-tech border border-cyber-blue/30 rounded-lg p-8 max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-cyber-blue mb-4 font-space">
              🎯 RESULTADO: VOCÊ RICO!
            </h3>
            <p className="text-muted-foreground text-lg mb-4">
              Enquanto os outros trabalham como escravos, você lucra dormindo.
            </p>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 text-left max-w-md mx-auto">
              <div className="text-cannabis-green font-bold mb-2">💰 Exemplo Real:</div>
              <div className="text-sm space-y-1">
                <div>• <strong>Segunda:</strong> +R$ 280</div>
                <div>• <strong>Terça:</strong> +R$ 450</div>
                <div>• <strong>Quarta:</strong> +R$ 320</div>
                <div>• <strong>Quinta:</strong> +R$ 380</div>
                <div>• <strong>Sexta:</strong> +R$ 510</div>
                <div className="text-cyber-blue font-bold text-lg pt-2 animate-cyber-pulse">
                  = R$ 1.940 na semana
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;