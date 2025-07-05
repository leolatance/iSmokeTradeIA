import React from 'react';
import { Flame, Leaf, Brain, Target, Coffee, Zap, DollarSign, TrendingUp } from 'lucide-react';

interface IdentityItem {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  quote: string;
}

const identityItems: IdentityItem[] = [
  {
    id: 1,
    icon: Coffee,
    title: "LIBERDADE TOTAL",
    description: "Trabalha de casa, acorda na hora que quer, sem chefe enchendo o saco",
    quote: "Patrão? Só se for do dinheiro mesmo."
  },
  {
    id: 2,
    icon: Target,
    title: "MINDSET DE RICO",
    description: "Você não nasceu pra ser empregado, nasceu pra ser dono",
    quote: "Rico pensa diferente, age diferente, ganha diferente."
  },
  {
    id: 3,
    icon: Leaf,
    title: "VIDA SEM STRESS",
    description: "Ganha dinheiro curtindo a vida, sem correria, sem desespero",
    quote: "Relaxa e lucra. É assim que a gang faz."
  },
  {
    id: 4,
    icon: Brain,
    title: "IA TRABALHANDO PRA VOCÊ",
    description: "Robô faz o trabalho pesado, você só colhe os lucros",
    quote: "Por que trabalhar duro se pode trabalhar esperto?"
  },
  {
    id: 5,
    icon: DollarSign,
    title: "DINHEIRO TODO DIA",
    description: "R$ 200-500 por dia, todo dia, direto na conta",
    quote: "Dinheiro dormindo é prejuízo. Aqui trabalha 24h."
  },
  {
    id: 6,
    icon: TrendingUp,
    title: "RESULTADO QUE IMPRESSIONA",
    description: "75% de acerto não é sorte, é matemática pura",
    quote: "Dados não mentem, pessoas sim."
  }
];

const GangIdentity: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-neon-green rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-neon-purple rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-neon-green rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-purple text-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Flame className="w-4 h-4 mr-2" />
            QUEBRADOS VIRAM RICOS
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4 font-space">
            <span className="text-gradient-primary animate-neon-pulse">
              GANG DOS
            </span>
            {" "}EX-POBRES
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Somos maluco que tava quebrado e agora tá rico. Se você tá cansado de ser pobre, 
            essa é sua gang. Aqui ninguém julga, só lucra.
          </p>
        </div>

        {/* Identity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {identityItems.map((item, index) => (
            <div
              key={item.id}
              className="group bg-card/30 backdrop-blur-sm border border-border/30 rounded-lg p-6 hover:border-neon-green/50 transition-all duration-300 hover:shadow-card animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                <item.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 font-space">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {item.description}
              </p>

              {/* Quote */}
              <div className="bg-gradient-glow border border-neon-green/20 rounded-lg p-4">
                <p className="text-neon-green font-semibold text-sm italic">
                  "{item.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gang Manifesto */}
        <div className="bg-gradient-glow border-2 border-neon-green/30 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🤖</div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-space">
            MANIFESTO: CHEGA DE SER POBRE!
          </h3>
          
          <div className="space-y-4 text-lg text-muted-foreground mb-8">
            <p>
              <strong className="text-neon-green">SOMOS EX-POBRES.</strong> Não nascemos ricos, mas decidimos ficar. IA é nossa arma.
            </p>
            <p>
              <strong className="text-neon-green">SOMOS REBELDES.</strong> Recusamos viver no padrão: trabalhar até morrer sendo pobre.
            </p>
            <p>
              <strong className="text-neon-green">SOMOS UNIDOS.</strong> Maluco que já conseguiu ensina quem tá chegando.
            </p>
            <p>
              <strong className="text-neon-green">SOMOS RICOS.</strong> Porque decidimos ser. E você pode decidir também.
            </p>
          </div>

          <div className="bg-gradient-primary text-primary-foreground rounded-lg p-6 mb-6">
            <p className="text-xl font-bold mb-2">
              "Pobreza é escolha. Riqueza também."
            </p>
            <p className="text-sm opacity-90">
              - Gang dos Ex-Pobres
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4">
              <div className="text-2xl font-bold text-neon-green mb-2">622</div>
              <div className="text-sm text-muted-foreground">Membros ativos</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4">
              <div className="text-2xl font-bold text-neon-purple mb-2">R$ 2.5M+</div>
              <div className="text-sm text-muted-foreground">Lucro total da gang</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4">
              <div className="text-2xl font-bold text-neon-green mb-2">18-30</div>
              <div className="text-sm text-muted-foreground">Idade média</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GangIdentity;