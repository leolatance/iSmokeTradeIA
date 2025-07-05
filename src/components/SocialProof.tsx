import React from 'react';
import { Star, TrendingUp, Users, CheckCircle, Shield, BarChart3, Zap } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  username: string;
  message: string;
  profit: string;
  avatar: string;
  verified?: boolean;
  strategy?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "João P.",
    username: "@joaopverde",
    message: "Cara, era quebrado igual vocês! Agora tô fazendo +R$ 2.4k por semana só seguindo os sinais. É isso aí, gang! 🤑💰",
    profit: "+R$ 2.400",
    avatar: "🤑",
    verified: true,
    strategy: "EUR/USD • 15min"
  },
  {
    id: 2,
    name: "Maria S.",
    username: "@mariaskunk",
    message: "Antes eu perdia tudo apostando igual louca. Agora com o sistema nunca perco mais que 3%. Virei pro mesmo! 🚀",
    profit: "+R$ 1.850",
    avatar: "🚀",
    verified: true,
    strategy: "Perfil Recomendado"
  },
  {
    id: 3,
    name: "Pedro R.",
    username: "@pedrao420",
    message: "Mano, essa parada é diferente! Robô faz tudo sozinho. Quando ele manda aguardar, eu aguardo. Resultado: só lucro! 🧠",
    profit: "+R$ 3.200",
    avatar: "🧠",
    verified: true,
    strategy: "BTC/USD • 5min"
  },
  {
    id: 4,
    name: "Ana L.",
    username: "@analemon",
    message: "Trabalho em casa e ainda ganho mais que no emprego! Sistema roda sozinho 24h. Nunca mais acordo preocupada 🌿",
    profit: "+R$ 1.650",
    avatar: "🌿",
    verified: true,
    strategy: "XAU/USD • 1min"
  },
  {
    id: 5,
    name: "Carlos M.",
    username: "@carlosmota",
    message: "Já testei tudo, mano! SmokeTrade é o único que presta. 75% de acerto não é papo, é matemática pura! 📊",
    profit: "+R$ 4.100",
    avatar: "📊",
    verified: true,
    strategy: "Multi-pares"
  },
  {
    id: 6,
    name: "Julia K.",
    username: "@juliak420",
    message: "Melhor parte: não preciso pensar em nada! Sistema calcula tudo, só sigo e lucro. Até minha mãe tá usando! 💎",
    profit: "+R$ 2.850",
    avatar: "💎",
    verified: true,
    strategy: "GBP/JPY • 5min"
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
              622 EX-QUEBRADOS AGORA RICOS
            </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-space">
            <span className="text-gradient-primary animate-neon-pulse">
              OLHA O QUE A GANG
            </span>
            {" "}TÁ FALANDO
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Maluco que tava quebrado igual você, agora tá rico. Olha só:
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-gradient-dark border border-neon-green/30 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-neon-green mb-2 animate-neon-pulse">75%+</div>
              <div className="text-sm text-muted-foreground">Precisão comprovada</div>
            </div>
            <div className="bg-gradient-dark border border-neon-purple/30 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-neon-purple mb-2">8</div>
              <div className="text-sm text-muted-foreground">Pares disponíveis</div>
            </div>
            <div className="bg-gradient-dark border border-neon-green/30 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-neon-green mb-2 animate-neon-pulse">24/7</div>
              <div className="text-sm text-muted-foreground">Sistema ativo</div>
            </div>
            <div className="bg-gradient-dark border border-neon-purple/30 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-neon-purple mb-2">622</div>
              <div className="text-sm text-muted-foreground">Usuários ativos</div>
            </div>
          </div>
        </div>

        {/* Technical Credibility */}
        <div className="bg-gradient-glow border border-neon-green/30 rounded-2xl p-8 mb-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-space">
              <Shield className="w-6 h-6 text-neon-green inline mr-2" />
              MESMA TECNOLOGIA DOS RICOS
            </h3>
            <p className="text-muted-foreground">
              Sistema que os fundos milionários usam, agora na palma da sua mão
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 text-center">
              <BarChart3 className="w-8 h-8 text-neon-green mx-auto mb-3" />
              <h4 className="font-bold text-foreground mb-2">Alpha Vantage API</h4>
              <p className="text-sm text-muted-foreground">Dados financeiros reais em tempo real</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 text-center">
              <Zap className="w-8 h-8 text-neon-purple mx-auto mb-3" />
              <h4 className="font-bold text-foreground mb-2">Análise Multi-Indicador</h4>
              <p className="text-sm text-muted-foreground">RSI, EMA, Bollinger Bands e mais</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 text-center">
              <Shield className="w-8 h-8 text-neon-green mx-auto mb-3" />
              <h4 className="font-bold text-foreground mb-2">Gerenciamento de Risco</h4>
              <p className="text-sm text-muted-foreground">3 perfis profissionais configurados</p>
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

              {/* Strategy */}
              {testimonial.strategy && (
                <div className="mb-3">
                  <span className="bg-neon-green/20 text-neon-green px-2 py-1 rounded text-xs font-semibold">
                    {testimonial.strategy}
                  </span>
                </div>
              )}

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
              EU QUERO PARAR DE SER POBRE! 🔥
            </h3>
            <p className="text-muted-foreground mb-6">
              Chega de inveja dos outros. Agora é sua vez de lucrar!
            </p>
                         <div className="bg-gradient-primary text-primary-foreground rounded-lg p-4 mb-6">
               <p className="font-semibold text-sm">
                 ✅ Acesso vitalício por R$ 47 • ✅ Garantia 7 dias • ✅ Acesso imediato
               </p>
             </div>
            <div className="bg-destructive/20 border border-destructive/50 rounded-lg p-4">
              <p className="text-destructive font-semibold text-sm">
                ⚠️ ÚLTIMAS VAGAS DA PROMOÇÃO - Depois fica caro mesmo!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;