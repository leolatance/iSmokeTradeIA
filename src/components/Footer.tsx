import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const handleCTAClick = () => {
    // Implementar integração com sistema de pagamento
    console.log('CTA clicked - redirecionar para pagamento');
  };

  return (
    <footer className="bg-gradient-to-b from-background to-card/20 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Final CTA */}
          <div className="text-center mb-12">
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

          {/* Guarantee */}
          <div className="bg-card/30 backdrop-blur-sm border border-neon-green/30 rounded-xl p-8 text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-neon-green" />
              <span className="text-xl font-bold text-foreground">Garantia de 7 dias</span>
            </div>
            <p className="text-lg text-muted-foreground">
              Testa por 7 dias. Se não curtir, é só pedir reembolso.
            </p>
          </div>

          {/* Legal */}
          <div className="text-center space-y-4">
            <div className="text-sm text-muted-foreground">
              <p>© 2024 SmokeTrade IA 2.0. Todos os direitos reservados.</p>
              <p className="mt-2">
                Este produto não garante resultados. Trading envolve riscos.
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;