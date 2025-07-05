import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Clock, CreditCard, ExternalLink } from 'lucide-react';

const OfferSection: React.FC = () => {
  const handleCTAClick = () => {
    // Redirecionar para o checkout
    window.open('https://go.goatpayments.com.br/stf4fdjq1g?mcp_token=eyJwaWQiOjMxNTEyNzEsInNpZCI6OTkyNDE5NTY3LCJheCI6IjFjNzUzMmUwZDY4NjA1NTQ2OTk4OGRmNmZiMmEzYmIyIiwidHMiOjE3NTE3NDAxMDYsImV4cCI6MTc1NDE1OTMwNn0.m1R7INX8kQVzbNtpx3pYDOJ0ZuupDyVGiJAM5EHjQFQ&fbclid=PAQ0xDSwLWTihleHRuA2FlbQIxMAABp3n8rye3Oi8peLfSI3up6OHQ1GU5MXv-8RLHOj9j6nQjsIhDC4BugDQgU1Hm_aem_91xDWtQCxFUr1yMJCTqknA', '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Main Offer Box */}
          <div className="bg-card/50 backdrop-blur-sm border border-neon-green/30 rounded-2xl p-8 mb-8 animate-slide-up">
            <div className="text-center">
              
              {/* Scarcity Badge */}
              <div className="inline-flex items-center bg-neon-purple/20 border border-neon-purple/50 rounded-full px-4 py-2 mb-6">
                <Clock className="w-4 h-4 text-neon-purple mr-2" />
                <span className="text-sm font-medium text-neon-purple">
                  Oferta liberada só pra quem entrou no grupo ICE
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="text-6xl md:text-7xl font-bold text-neon-green mb-2">
                  R$47
                </div>
                <div className="text-xl text-muted-foreground">
                  Acesso ilimitado – <span className="text-neon-green font-bold">sem mensalidade</span>
                </div>
              </div>

              {/* Key Points */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center justify-center space-x-2 text-center">
                  <Shield className="w-5 h-5 text-neon-green" />
                  <span className="text-sm text-foreground">Preço único</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-center">
                  <Clock className="w-5 h-5 text-neon-purple" />
                  <span className="text-sm text-foreground">Web app liberado na hora</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-center">
                  <CreditCard className="w-5 h-5 text-neon-green" />
                  <span className="text-sm text-foreground">Não é assinatura</span>
                </div>
              </div>

              {/* Main CTA */}
              <div className="mb-6">
                <Button 
                  variant="cta" 
                  size="xl" 
                  className="w-full md:w-auto px-8 md:px-12 py-6 text-lg md:text-xl font-bold touch-target"
                  onClick={handleCTAClick}
                >
                  🚀 Quero a IA agora
                  <ExternalLink className="w-5 h-5 ml-2" aria-hidden="true" />
                </Button>
              </div>

              {/* Payment Options */}
              <div className="text-sm text-muted-foreground">
                💳 Pix ou cartão • Acesso liberado na hora
              </div>
            </div>
          </div>

          {/* Guarantee Box */}
          <div className="bg-card/30 backdrop-blur-sm border border-neon-purple/30 rounded-xl p-6 text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-center space-x-3 mb-3">
              <Shield className="w-6 h-6 text-neon-purple" />
              <span className="text-lg font-semibold text-foreground">Garantia de 7 dias</span>
            </div>
            <p className="text-muted-foreground">
              Testa por 7 dias. Se não curtir, é só pedir reembolso.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OfferSection; 