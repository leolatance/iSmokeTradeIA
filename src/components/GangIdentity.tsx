import React from 'react';
import { Flame, Leaf, Brain, Target, Coffee, Zap } from 'lucide-react';

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
    title: "Estilo de Vida",
    description: "Para quem entende que relaxar também faz parte do sucesso",
    quote: "Só corre com gelo no copo e sinal na mão."
  },
  {
    id: 2,
    icon: Target,
    title: "Mentalidade Certa",
    description: "Você sempre teve potencial, só estava no lugar errado",
    quote: "Tu não é vagabundo. Só tava no corre errado."
  },
  {
    id: 3,
    icon: Leaf,
    title: "Aproveitando a Vida",
    description: "Ganhar dinheiro enquanto curte a brisa? Agora é possível",
    quote: "Fuma e lucra. A culpa não é da brisa."
  },
  {
    id: 4,
    icon: Brain,
    title: "Inteligência Financeira",
    description: "IA que entende quando parar e quando acelerar",
    quote: "Sistema inteligente pra gente inteligente."
  },
  {
    id: 5,
    icon: Zap,
    title: "Energia da Gang",
    description: "Comunidade que se apoia e cresce junta",
    quote: "A gang unida jamais será vencida."
  },
  {
    id: 6,
    icon: Flame,
    title: "Atitude Diferenciada",
    description: "Para quem não quer ser mais um na multidão",
    quote: "Enquanto eles falam, a gang lucra."
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
            Identidade Única
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4 font-space">
            Bem-vindo à{" "}
            <span className="text-gradient-primary animate-neon-pulse">
              Gang
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Não somos mais um app de sinais. Somos uma comunidade que entende seu estilo de vida 
            e respeita suas escolhas. Aqui você encontra sua tribo.
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
          <div className="text-6xl mb-6">🍃</div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-space">
            O Manifesto da Gang
          </h3>
          
          <div className="space-y-4 text-lg text-muted-foreground mb-8">
            <p>
              <strong className="text-neon-green">Somos diferentes.</strong> Não seguimos padrões impostos pela sociedade.
            </p>
            <p>
              <strong className="text-neon-green">Somos inteligentes.</strong> Usamos tecnologia para trabalhar menos e ganhar mais.
            </p>
            <p>
              <strong className="text-neon-green">Somos livres.</strong> Escolhemos nosso estilo de vida e não pedimos desculpas.
            </p>
            <p>
              <strong className="text-neon-green">Somos unidos.</strong> A gang cresce junta, lucra junta, vence junta.
            </p>
          </div>

          <div className="bg-gradient-primary text-primary-foreground rounded-lg p-6 mb-6">
            <p className="text-xl font-bold mb-2">
              "Enquanto eles julgam, nós lucramos."
            </p>
            <p className="text-sm opacity-90">
              - Filosofia da Smoke Trade Gang
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GangIdentity;