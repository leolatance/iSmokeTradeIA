import React from 'react';
import { MessageCircle, Star } from 'lucide-react';

const TestimonialsSimple: React.FC = () => {
  // Aqui o cliente vai substituir pelos caminhos das imagens reais
  const testimonialImages = [
    {
      id: 1,
      src: "/depoimento1.jpg", // ✅ Caminho correto (sem "public")
      alt: "Depoimento 1 - Print real de lucro",
      placeholder: "📱"
    },
    {
      id: 2,
      src: "/depoimento2.jpeg", // ✅ Caminho correto (sem "public")
      alt: "Depoimento 2 - Print real de lucro",
      placeholder: "💰"
    },
    {
      id: 3,
      src: "/depoimento3.jpeg", // ✅ Caminho correto (sem "public")
      alt: "Depoimento 3 - Print real de lucro",
      placeholder: "🚀"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-space">
              <span className="text-gradient-primary">Depoimentos</span> Reais
            </h2>
            <p className="text-lg text-muted-foreground">
              Veja o que nossos membros estão falando sobre o SmokeTrade IA
            </p>
          </div>

          {/* Testimonials Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {testimonialImages.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`bg-card/50 backdrop-blur-sm border rounded-2xl p-6 hover:border-opacity-75 transition-all duration-300 animate-slide-up ${
                  index % 2 === 0 
                    ? 'border-neon-green/30 hover:border-neon-green/50' 
                    : 'border-neon-purple/30 hover:border-neon-purple/50'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <MessageCircle className={`w-5 h-5 ${index % 2 === 0 ? 'text-neon-green' : 'text-neon-purple'}`} />
                  <span className="text-sm text-muted-foreground">Depoimento {testimonial.id}</span>
                </div>
                
                {/* Image Container */}
                <div className="relative rounded-lg overflow-hidden mb-4">
                  {testimonial.src ? (
                    <img 
                      src={testimonial.src} 
                      alt={testimonial.alt}
                      className="w-full h-auto max-h-[400px] object-cover rounded-lg border border-neon-green/30"
                      loading="lazy"
                    />
                  ) : (
                    // Placeholder enquanto não tem imagem
                    <div className={`bg-gradient-to-br rounded-lg p-8 border flex items-center justify-center min-h-[300px] ${
                      index % 2 === 0 
                        ? 'from-neon-green/20 to-neon-purple/20 border-neon-green/30' 
                        : 'from-neon-purple/20 to-neon-green/20 border-neon-purple/30'
                    }`}>
                      <div className="text-center">
                        <div className="text-4xl mb-4">{testimonial.placeholder}</div>
                        <p className="text-muted-foreground text-sm font-medium">
                          Adicionar imagem do depoimento {testimonial.id}
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          Print real de lucro/resultado
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 fill-current ${
                        index % 2 === 0 ? 'text-neon-green' : 'text-neon-purple'
                      }`} 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Social Proof Stats */}
          <div className="bg-card/50 backdrop-blur-sm border border-neon-purple/30 rounded-xl p-6 text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-neon-green mb-2">+1000</div>
                <div className="text-sm text-muted-foreground">Membros ativos</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-neon-purple mb-2">75%+</div>
                <div className="text-sm text-muted-foreground">Taxa de acerto</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-neon-green mb-2">80%+</div>
                <div className="text-sm text-muted-foreground">Precisão dos sinais</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSimple; 