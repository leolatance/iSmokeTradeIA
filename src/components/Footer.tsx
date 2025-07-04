import React from 'react';
import { Button } from '@/components/ui/button';
import { Brain, Shield, Code, Mail, MessageCircle, FileText } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-dark border-t border-border/50">
      {/* Final CTA Section */}
      <div className="py-16 border-b border-border/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-space">
              Pronto para{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent animate-neon-pulse">
                Entrar na Gang?
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Junte-se aos +1000 manos que já estão lucrando com os sinais mais precisos do mercado
            </p>

            <div className="bg-gradient-glow border-2 border-neon-green/30 rounded-2xl p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-neon-green mb-2 animate-neon-pulse">7 dias</div>
                  <div className="text-sm text-muted-foreground">Teste grátis</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neon-purple mb-2">+65%</div>
                  <div className="text-sm text-muted-foreground">Assertividade</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neon-green mb-2 animate-neon-pulse">24/7</div>
                  <div className="text-sm text-muted-foreground">Suporte ativo</div>
                </div>
              </div>

              <Button 
                variant="cta" 
                size="xl" 
                className="w-full md:w-auto"
              >
                🚀 Liberar meus primeiros sinais
              </Button>
              
              <p className="text-xs text-muted-foreground mt-4">
                Sem cartão de crédito • Acesso imediato • Cancele quando quiser
              </p>
            </div>

            <div className="bg-destructive/20 border border-destructive/50 rounded-lg p-4">
              <p className="text-destructive font-semibold text-sm">
                ⚠️ ÚLTIMAS 24h DA PROMOÇÃO - Depois volta pro preço normal
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Authority Badge */}
      <div className="py-12 border-b border-border/30">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-dark border border-neon-green/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                  <Code className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground font-space">
                    Desenvolvido por Programador Profissional
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Baseado em análise técnica real • +5 anos de experiência
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
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sistema de sinais de daytrade powered by IA, desenvolvido especialmente 
                para quem entende que relaxar também faz parte do sucesso financeiro.
              </p>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-foreground font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-neon-green transition-colors flex items-center space-x-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>Telegram da Gang</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-neon-green transition-colors flex items-center space-x-2">
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
                  <a href="#" className="text-muted-foreground hover:text-neon-green transition-colors flex items-center space-x-2">
                    <FileText className="w-4 h-4" />
                    <span>Termos de Uso</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-neon-green transition-colors flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>Política de Privacidade</span>
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
            <p className="text-xs text-muted-foreground mt-2 md:mt-0">
              ⚠️ Trading envolve riscos. Opere com responsabilidade.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;