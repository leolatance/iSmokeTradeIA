import React from 'react';
import { ArrowLeft, Shield, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TermosDeUso: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <Button 
            variant="ghost" 
            className="mb-4"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground font-space">Termos de Uso</h1>
              <p className="text-muted-foreground">Smoke Trade IA</p>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto prose prose-invert">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8">
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">1. Aceitação dos Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ao acessar e usar o sistema Smoke Trade IA, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não deve usar nosso serviço.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">2. Descrição do Serviço</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O Smoke Trade IA é um sistema educacional de sinais de trading que utiliza inteligência artificial para análise de mercados financeiros. O serviço inclui:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Sinais automatizados de trading</li>
                <li>Análise técnica em tempo real</li>
                <li>Indicadores de entrada e saída</li>
                <li>Suporte educacional via Telegram</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">3. Aviso de Risco</h2>
              <div className="bg-destructive/20 border border-destructive/50 rounded-lg p-6 mb-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-destructive font-semibold mb-2">⚠️ IMPORTANTE - LEIA COM ATENÇÃO</h3>
                    <ul className="text-sm text-destructive/90 space-y-1">
                      <li>• Trading envolve risco significativo de perda financeira</li>
                      <li>• Resultados passados não garantem lucros futuros</li>
                      <li>• Nunca invista mais do que pode perder</li>
                      <li>• Este sistema é educacional, não constitui aconselhamento financeiro</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Responsabilidades do Usuário</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O usuário se compromete a:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Usar o sistema apenas para fins educacionais</li>
                <li>Não compartilhar credenciais de acesso</li>
                <li>Realizar suas próprias análises antes de qualquer operação</li>
                <li>Respeitar as regras de gerenciamento de risco</li>
                <li>Não responsabilizar a empresa por perdas financeiras</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Limitação de Responsabilidade</h2>
              <p className="text-muted-foreground leading-relaxed">
                A Smoke Trade IA não se responsabiliza por perdas financeiras, danos diretos ou indiretos resultantes do uso do sistema. Os sinais fornecidos são apenas para fins educacionais e não constituem recomendação de investimento.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Política de Reembolso</h2>
              <p className="text-muted-foreground leading-relaxed">
                Oferecemos garantia de reembolso de 7 dias corridos a partir da data de compra. Para solicitar reembolso, entre em contato através do email suporte@smoketrade.com com seus dados de compra.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">7. Propriedade Intelectual</h2>
              <p className="text-muted-foreground leading-relaxed">
                Todo o conteúdo, algoritmos, interfaces e materiais do Smoke Trade IA são protegidos por direitos autorais e propriedade intelectual. É proibida a reprodução, distribuição ou engenharia reversa sem autorização expressa.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">8. Modificações dos Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação. É responsabilidade do usuário verificar periodicamente os termos atualizados.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">9. Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para dúvidas sobre estes termos, entre em contato:
                <br />
                Email: suporte@smoketrade.com
                <br />
                Telegram: @smoketradegang
              </p>
            </section>

            <footer className="text-center pt-8 border-t border-border/30">
              <p className="text-sm text-muted-foreground">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermosDeUso; 