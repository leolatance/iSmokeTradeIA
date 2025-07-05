import React from 'react';
import { CheckCircle, TrendingUp, Brain, Shield, Zap, Target, DollarSign, Clock, BarChart3 } from 'lucide-react';

interface FeatureCard {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  highlight: string;
  benefits: string[];
}

interface RiskProfile {
  name: string;
  risk: string;
  description: string;
  colorClass: string;
}

const features: FeatureCard[] = [
  {
    id: 1,
    icon: TrendingUp,
    title: "VOCÊ NUNCA MAIS VAI SER TROUXA",
    description: "Sistema que acerta 75% das operações enquanto outros traders quebram",
    highlight: "75%+ WIN RATE",
    benefits: [
      "Enquanto eles perdem, você ganha",
      "Backtesting com dados reais",
      "Confiança matemática, não achismo"
    ]
  },
  {
    id: 2,
    icon: Shield,
    title: "PROTEGE SUA GRANA COMO COFRE",
    description: "Sistema que impede você de perder tudo como os amadores fazem",
    highlight: "RISCO CONTROLADO",
    benefits: [
      "Nunca mais apostar tudo e perder",
      "Stop Loss automático te salva",
      "Calculado por matemática, não emoção"
    ]
  },
  {
    id: 3,
    icon: Zap,
    title: "FUNCIONA ATÉ NO APOCALIPSE",
    description: "Robô trabalha 24/7 sem parar, sem reclamar, sem preguiça",
    highlight: "NUNCA PARA",
    benefits: [
      "API profissional integrada",
      "Backup automático inteligente",
      "Trabalha enquanto você curte"
    ]
  },
  {
    id: 4,
    icon: Brain,
    title: "IA MAIS ESPERTA QUE HUMANO",
    description: "Sistema que não opera por desespero como trader comum",
    highlight: "SEM DESESPERO",
    benefits: [
      "Detecta furada e para",
      "Só opera quando tem chance",
      "Qualidade > quantidade sempre"
    ]
  }
];

const technicalIndicators = [
  { name: "RSI Personalizado", icon: "📊", desc: "Força relativa otimizada" },
  { name: "EMA Multi-Timeframe", icon: "📈", desc: "Médias móveis exponenciais" },
  { name: "Bandas de Bollinger", icon: "📉", desc: "Volatilidade e suporte/resistência" },
  { name: "MACD Avançado", icon: "⚡", desc: "Divergência e momentum" },
  { name: "Análise de Volume", icon: "📊", desc: "Confirmação de movimentos" },
  { name: "Volatilidade Smart", icon: "🎯", desc: "Condições de mercado" }
];

const riskProfiles: RiskProfile[] = [
  {
    name: "Não Sou Trouxa",
    risk: "1-2%",
    description: "Proteção máxima",
    colorClass: "text-cannabis-green"
  },
  {
    name: "Equilibrado",
    risk: "2-3%",
    description: "Ideal pra maioria",
    colorClass: "text-cyber-blue"
  },
  {
    name: "Vou Ficar Rico",
    risk: "3-5%",
    description: "Maior potencial",
    colorClass: "text-lime-accent"
  }
];

const WhyItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-purple text-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Shield className="w-4 h-4 mr-2" aria-hidden="true" />
            SEGREDO DOS RICOS
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-space text-balance">
            <span className="text-gradient-primary">
              POR QUE OS RICOS
            </span>
            {" "}FICAM MAIS RICOS
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Enquanto você trabalha como escravo, eles usam robôs pra multiplicar dinheiro. Agora é sua vez!
          </p>
        </header>

        {/* Main Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <article
              key={feature.id}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-cannabis-green/50 transition-all duration-300 hover:shadow-card animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon & Highlight */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow" aria-hidden="true">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="bg-gradient-cyber text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                  {feature.highlight}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 font-space">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-3" role="list">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cannabis-green flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Risk Management Section */}
        <div className="bg-gradient-tech border border-cyber-blue/30 rounded-2xl p-8 mb-12 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center font-space">
            <DollarSign className="w-8 h-8 text-cyber-blue inline mr-2" aria-hidden="true" />
            NUNCA MAIS PERCA TUDO
          </h3>
          <p className="text-muted-foreground text-lg text-center mb-8">
            3 perfis que impedem você de ser mais um quebrado
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {riskProfiles.map((profile, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 text-center hover:border-cannabis-green/50 transition-all duration-300 animate-slide-up touch-target"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${profile.colorClass} font-bold text-2xl mb-2`}>
                  {profile.name}
                </div>
                <div className="text-cyber-blue font-bold text-lg mb-2">
                  {profile.risk} por operação
                </div>
                <div className="text-sm text-muted-foreground">
                  {profile.description}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <div className="bg-gradient-primary text-primary-foreground rounded-lg p-4 inline-block">
              <p className="font-bold text-lg">
                ✅ Matemática faz tudo • ✅ Te salva do prejuízo • ✅ Maximiza lucro
              </p>
            </div>
          </div>
        </div>

        {/* Technical Indicators */}
        <div className="bg-gradient-glow border border-rebel-purple/30 rounded-2xl p-8 mb-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-space">
              <BarChart3 className="w-8 h-8 text-rebel-purple inline mr-2" aria-hidden="true" />
              ARSENAL SECRETO DOS PROS
            </h3>
            <p className="text-muted-foreground text-lg">
              Mesmas ferramentas que os ricos usam pra multiplicar dinheiro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalIndicators.map((indicator, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 hover:border-rebel-purple/50 transition-all duration-300 animate-slide-up touch-target"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="text-2xl mb-2" aria-hidden="true">{indicator.icon}</div>
                  <div className="text-sm font-semibold text-foreground mb-1">{indicator.name}</div>
                  <div className="text-xs text-muted-foreground">{indicator.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cannabis-green mb-2">75%+</div>
            <div className="text-sm text-muted-foreground">Precisão média</div>
          </div>
                      <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyber-blue mb-2">8</div>
              <div className="text-sm text-muted-foreground">Pares disponíveis</div>
            </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-lime-accent mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime garantido</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-rebel-purple mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Sistema ativo</div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-cyber text-primary-foreground rounded-2xl p-8 max-w-2xl mx-auto">
            <h4 className="text-xl md:text-2xl font-bold mb-4 font-space">
              🚀 PRONTO PRA FICAR RICO?
            </h4>
            <p className="text-lg mb-6 opacity-90">
              R$ 47 hoje pra nunca mais acordar preocupado com dinheiro
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <div className="bg-background/20 backdrop-blur-sm rounded-lg p-4 text-sm">
                ✅ Acesso vitalício
              </div>
              <div className="bg-background/20 backdrop-blur-sm rounded-lg p-4 text-sm">
                ✅ Garantia 7 dias
              </div>
              <div className="bg-background/20 backdrop-blur-sm rounded-lg p-4 text-sm">
                ✅ Suporte completo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;