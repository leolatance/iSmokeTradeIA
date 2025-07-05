import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Shield, Smartphone, Brain, Clock, DollarSign, Users } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  icon: React.ElementType;
}

const faqItems: FAQItem[] = [
  {
    id: "funciona-celular",
    question: "Funciona no celular?",
    answer: "Sim! O sistema roda 100% no navegador, tanto no celular quanto no desktop. Você pode receber os sinais em qualquer dispositivo com internet. A interface é totalmente responsiva e otimizada para mobile.",
    icon: Smartphone
  },
  {
    id: "precisa-saber-operar",
    question: "Preciso saber operar para usar?",
    answer: "Não precisa ser expert! Os sinais vêm completos com entrada, stop loss, take profit e justificativa. Mas recomendamos conhecimento básico de trading para entender os riscos. Temos material educativo para iniciantes na plataforma.",
    icon: Brain
  },
  {
    id: "quais-moedas",
    question: "Quais moedas/pares ele cobre?",
    answer: "Cobrimos os principais pares de criptomoedas: BTC/USDT, ETH/USDT, ADA/USDT, DOT/USDT, LINK/USDT e mais de 50 outros pares. O sistema funciona com qualquer timeframe de 5min até diário.",
    icon: DollarSign
  },
  {
    id: "garantia-funcionamento",
    question: "Tem garantia de funcionamento?",
    answer: "Sim! Garantimos 99.9% de uptime. O sistema tem fallback inteligente - se a API principal falhar, usamos dados simulados baseados em padrões históricos. Você sempre recebe sinais, mesmo sem conexão com exchanges.",
    icon: Shield
  },
  {
    id: "frequencia-sinais",
    question: "Quantos sinais recebo por dia?",
    answer: "Em média 5-15 sinais por dia, dependendo das condições do mercado. O sistema é inteligente e não força entradas - quando o mercado está ruim, ele gera 'Aguardar'. Qualidade > Quantidade sempre.",
    icon: Clock
  },
  {
    id: "suporte-comunidade",
    question: "Tem suporte e comunidade?",
    answer: "Temos grupo exclusivo no Telegram com +1000 membros ativos, suporte técnico 24/7 e comunidade que compartilha resultados e estratégias. A gang se ajuda mutuamente!",
    icon: Users
  }
];

const FAQ: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-space">
            Dúvidas da{" "}
            <span className="text-gradient-primary animate-neon-pulse">
              Gang
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Respondemos as perguntas mais comuns sobre o sistema
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={item.id} 
                value={item.id}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6 hover:border-neon-green/50 transition-all duration-300 animate-slide-up"
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
          <div className="bg-gradient-glow border-2 border-neon-green/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-space">
              Garantia Total de Funcionamento
            </h3>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Sistema desenvolvido por programador profissional com mais de 5 anos de experiência. 
              Baseado em análise técnica real e testado por mais de 1000 usuários.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-dark border border-neon-green/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-neon-green mb-1">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime garantido</div>
              </div>
              <div className="bg-gradient-dark border border-neon-purple/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-neon-purple mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Suporte ativo</div>
              </div>
              <div className="bg-gradient-dark border border-neon-green/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-neon-green mb-1">7 dias</div>
                <div className="text-sm text-muted-foreground">Teste grátis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;