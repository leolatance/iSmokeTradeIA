import React from 'react';
import { Star, TrendingUp, Users, CheckCircle } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  username: string;
  message: string;
  profit: string;
  avatar: string;
  verified?: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "João P.",
    username: "@joaopverde",
    message: "Cara, os sinais são brabo! Já fiz +R$ 2.4k só essa semana. Fumo um e já vejo os trades chegando 🍃💰",
    profit: "+R$ 2.400",
    avatar: "🤑",
    verified: true
  },
  {
    id: 2,
    name: "Maria S.",
    username: "@mariaskunk",
    message: "Finalmente um app que entende a gang! Os sinais chegam na hora certa e a assertividade tá insana",
    profit: "+R$ 1.850",
    avatar: "🚀",
    verified: true
  },
  {
    id: 3,
    name: "Pedro R.",
    username: "@pedrao420",
    message: "Mano, essa IA é diferente! Não força entrada quando o mercado tá ruim. Inteligente pra caralho",
    profit: "+R$ 3.200",
    avatar: "🧠",
    verified: true
  },
  {
    id: 4,
    name: "Ana L.",
    username: "@analemon",
    message: "Botei fé no sistema e não me arrependo. Trabalho em casa, fumo minha erva e ainda ganho dinheiro",
    profit: "+R$ 1.650",
    avatar: "🌿",
    verified: true
  }
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Users className="w-4 h-4 mr-2" />
            +1000 manos já tão na pista
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-space">
            A Gang Tá{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent animate-neon-pulse">
              Lucrando
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Veja o resultado de quem já entrou no esquema e tá fazendo a diferença
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-dark border border-neon-green/30 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-neon-green mb-2 animate-neon-pulse">+65%</div>
              <div className="text-sm text-muted-foreground">Assertividade média</div>
            </div>
            <div className="bg-gradient-dark border border-neon-purple/30 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-neon-purple mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Sistema ativo</div>
            </div>
            <div className="bg-gradient-dark border border-neon-green/30 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-neon-green mb-2 animate-neon-pulse">+1000</div>
              <div className="text-sm text-muted-foreground">Usuários ativos</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:border-neon-green/50 transition-all duration-300 hover:shadow-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <CheckCircle className="w-4 h-4 text-neon-green" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{testimonial.username}</p>
                  </div>
                </div>
                
                <div className="flex items-center bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span className="text-sm font-bold">{testimonial.profit}</span>
                </div>
              </div>

              {/* Message */}
              <p className="text-foreground mb-4 leading-relaxed">
                "{testimonial.message}"
              </p>

              {/* Rating */}
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-neon-green text-neon-green" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">5.0</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-glow border border-neon-green/30 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-neon-green mb-4 font-space">
              Quero Entrar na Gang! 🔥
            </h3>
            <p className="text-muted-foreground mb-6">
              Junte-se aos manos que já estão lucrando com os sinais mais precisos do mercado
            </p>
            <div className="bg-destructive/20 border border-destructive/50 rounded-lg p-4 mb-6">
              <p className="text-destructive font-semibold text-sm">
                ⚠️ ÚLTIMAS 24h DA PROMOÇÃO - Depois volta pro preço normal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;