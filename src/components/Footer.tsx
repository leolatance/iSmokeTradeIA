import React from 'react';
import { Button } from '@/components/ui/button';
import { Brain, Shield, Code, Mail, MessageCircle, FileText, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const handleFinalCTAClick = () => {
    // Implementar integração com sistema de pagamento
    // Por enquanto, mostrar alerta ou redirecionar para checkout
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        event_category: 'conversion',
        event_label: 'footer_cta',
        value: 47
      });
    }
    
    // Aqui você pode implementar:
    // - Integração com Stripe/PayPal
    // - Redirecionamento para WhatsApp
    // - Modal de checkout
    alert('Redirecionando para checkout... (implementar sistema de pagamento)');
  };

  const handleSupportClick = (platform: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'support_click', {
        event_category: 'support',
        event_label: platform
      });
    }
  };

  return (
    <footer className="bg-gradient-dark border-t border-border/50">
      {/* Final CTA Section */}
      <div className="py-16 border-b border-border/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-space text-balance">
              <span className="text-gradient-cyber">
                ÚLTIMA CHANCE
              </span>
              {" "}DE FICAR RICO
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              622 ex-pobres já estão ricos. Você vai ficar de fora assistindo ou vai entrar na gang?
            </p>

            <div className="bg-gradient-tech border-2 border-cyber-blue/30 rounded-2xl p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-cyber-blue mb-2 animate-cyber-pulse">R$ 47</div>
                  <div className="text-sm text-muted-foreground">HOJE</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-cannabis-green mb-2">75%+</div>
                  <div className="text-sm text-muted-foreground">Assertividade</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-lime-accent mb-2">∞</div>
                  <div className="text-sm text-muted-foreground">ACESSO VITALÍCIO</div>
                </div>
              </div>

              <Button 
                variant="cta" 
                size="xl" 
                className="w-full md:w-auto touch-target"
                onClick={handleFinalCTAClick}
                aria-describedby="final-cta-description"
              >
                🚀 EU QUERO FICAR RICO AGORA
                <ExternalLink className="w-5 h-5 ml-2" aria-hidden="true" />
              </Button>
              
              <p id="final-cta-description" className="text-xs text-muted-foreground mt-4">
                7 dias pra testar • Não gostou? Devolve • Acesso vitalício por R$ 47
              </p>
            </div>

            <div className="bg-destructive/20 border border-destructive/50 rounded-lg p-4">
              <p className="text-destructive font-semibold text-sm">
                ⚠️ ÚLTIMAS VAGAS POR R$ 47 - Depois fica mais caro!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Authority Badge */}
      <div className="py-12 border-b border-border/30">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-dark border border-cannabis-green/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                  <Code className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground font-space">
                    CRIADO POR EX-POBRE QUE FICOU RICO
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Sistema real testado por 622 pessoas • Funciona de verdade
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-2">
                    <Brain className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-xs text-muted-foreground">IA Avançada</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-2">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-xs text-muted-foreground">Seguro & Confiável</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground font-space">
                    Smoke Trade IA
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Sinais inteligentes para a gang
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Sistema que transforma pessoas comuns em traders ricos. 
                Feito por quem já foi pobre e sabe como é querer uma vida melhor.
              </p>
              
              {/* Legal Notice */}
              <div className="bg-muted/20 border border-border/30 rounded-lg p-4 mt-4">
                <h4 className="text-sm font-semibold text-foreground mb-2">⚠️ Aviso Legal</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Trading envolve riscos significativos. Resultados passados não garantem lucros futuros. 
                  Nunca invista mais do que pode perder. Este sistema é educacional e não constitui aconselhamento financeiro.
                </p>
              </div>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-foreground font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="https://t.me/smoketradegang" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-cannabis-green transition-colors flex items-center space-x-2 touch-target"
                    onClick={() => handleSupportClick('telegram')}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Telegram da Gang</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:suporte@smoketrade.com" 
                    className="text-muted-foreground hover:text-cyber-blue transition-colors flex items-center space-x-2 touch-target"
                    onClick={() => handleSupportClick('email')}
                  >
                    <Mail className="w-4 h-4" />
                    <span>suporte@smoketrade.com</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-foreground font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="/termos-de-uso" 
                    className="text-muted-foreground hover:text-cannabis-green transition-colors flex items-center space-x-2 touch-target"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Termos de Uso</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/politica-privacidade" 
                    className="text-muted-foreground hover:text-rebel-purple transition-colors flex items-center space-x-2 touch-target"
                  >
                    <Shield className="w-4 h-4" />
                    <span>Política de Privacidade</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/politica-reembolso" 
                    className="text-muted-foreground hover:text-lime-accent transition-colors flex items-center space-x-2 touch-target"
                  >
                    <Shield className="w-4 h-4" />
                    <span>Política de Reembolso</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-border/30 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-xs text-muted-foreground">
              © 2024 Smoke Trade IA. Todos os direitos reservados.
            </p>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mt-2 md:mt-0">
              <p className="text-xs text-muted-foreground">
                ⚠️ Trading envolve riscos. Opere com responsabilidade.
              </p>
              <p className="text-xs text-muted-foreground">
                CNPJ: 00.000.000/0001-00
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;