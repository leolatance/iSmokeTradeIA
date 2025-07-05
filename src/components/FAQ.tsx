import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Shield, Smartphone, Brain, Clock, DollarSign, Users, BarChart3, Zap } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  icon: React.ElementType;
}

const faqItems: FAQItem[] = [
  {
    id: "como-funciona",
    question: "Como esse robô vai me deixar rico?",
    answer: "Sistema analisa 8 pares de moedas 24h por dia usando matemática pesada (RSI, EMA, Bollinger). IA processa tudo e te manda um alerta: quanto apostar, onde entrar, onde parar. 75% de acerto = você rico.",
    icon: Brain
  },
  {
    id: "quais-pares",
    question: "Em que mercados posso lucrar?",
    answer: "8 mercados que dão dinheiro: EUR/USD, GBP/JPY, USD/JPY, EUR/GBP (forex), BTC/USD, BTC/OTC, ETH/EUR (crypto) e ouro XAU/USD. Sistema opera em 3 velocidades: rápido (1min), médio (5min) e lento (15min).",
    icon: DollarSign
  },
  {
    id: "gerenciamento-risco",
    question: "Como não perder tudo igual os outros?",
    answer: "3 modos: 'Não sou trouxa' (1-2%), 'Equilibrado' (2-3%) e 'Vou ficar rico' (3-5%). Sistema calcula automaticamente quanto apostar pra não quebrar. Stop loss te salva, matemática controla tudo.",
    icon: Shield
  },
  {
    id: "funciona-sempre",
    question: "E se a internet cair? Perco dinheiro?",
    answer: "Sistema tem backup automático. API principal falha? Robô continua funcionando com dados históricos. 99.9% online - praticamente nunca para. Enquanto você dorme, ele trabalha.",
    icon: Clock
  },
  {
    id: "precisao-sinais",
    question: "75% de acerto é real ou marketing?",
    answer: "É matemática, não papo. Sistema usa 5+ indicadores ao mesmo tempo. Quando tá ruim, ele fala 'AGUARDA' - não força entrada igual amador. Cada sinal tem nota de 0-100%. Qualidade > quantidade.",
    icon: BarChart3
  },
  {
    id: "funciona-celular",
    question: "Posso usar no celular?",
    answer: "Claro! Funciona 100% no navegador, celular ou computador. Interface feita pro mobile. Recebe os sinais em qualquer lugar - praia, casa, trabalho. Não precisa instalar nada.",
    icon: Smartphone
  },
  {
    id: "precisa-conhecimento",
    question: "Sou leigo, consigo usar?",
    answer: "Sistema faz tudo mastigado: quanto apostar, onde entrar, onde sair, justificativa técnica. Mas aprende o básico de trading pra não ser trouxa. A gang ensina tudo no grupo!",
    icon: Users
  },
  {
    id: "diferencial-outros",
    question: "Por que não usar outros robôs?",
    answer: "Outros quebram, param, forçam entrada ruim. SmokeTrade: 1) Nunca para (backup automático), 2) Só opera quando tem chance, 3) Protege sua grana (3 perfis), 4) Dados reais (Alpha Vantage), 5) Análise profissional (5+ indicadores).",
    icon: Zap
  }
];

const FAQ: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-space">
            <span className="text-gradient-primary animate-neon-pulse">
              RESPONDENDO SUAS
            </span>
            {" "}DÚVIDAS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo que você quer saber sobre como sair da pobreza com IA. 
            Perguntas dos 622 que já estão ricos.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
                          <AccordionItem 
              key={item.id} 
              value={item.id}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6 hover:border-cannabis-green/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
                <AccordionTrigger className="text-left hover:no-underline group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all duration-300">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="text-lg font-semibold text-foreground font-space">
                      {item.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-16 pr-4 pb-4 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Guarantee Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-tech border-2 border-cyber-blue/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-space">
              GARANTIA: FUNCIONA OU SEU DINHEIRO VOLTA
            </h3>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Sistema testado por 622 ex-pobres que agora são ricos. 
              75% de acerto comprovado. 7 dias pra testar, não gostou? Devolve a grana.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gradient-dark border border-cannabis-green/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-cannabis-green mb-1">75%+</div>
                <div className="text-sm text-muted-foreground">Precisão comprovada</div>
              </div>
              <div className="bg-gradient-dark border border-rebel-purple/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-rebel-purple mb-1">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime garantido</div>
              </div>
              <div className="bg-gradient-dark border border-lime-accent/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-lime-accent mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Sistema ativo</div>
              </div>
              <div className="bg-gradient-dark border border-cyber-blue/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-cyber-blue mb-1 animate-cyber-pulse">R$ 47</div>
                <div className="text-sm text-muted-foreground">Acesso vitalício</div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-primary text-primary-foreground rounded-lg p-6">
              <h4 className="text-xl font-bold mb-2">🚀 PRONTO PRA FICAR RICO?</h4>
              <p className="text-sm opacity-90 mb-4">
                Entra na gang dos ex-pobres. Já são 622 ricos!
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center text-sm">
                <span>✅ Acesso vitalício</span>
                <span>✅ Garantia 7 dias</span>
                <span>✅ Suporte completo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;