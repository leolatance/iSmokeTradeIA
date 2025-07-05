import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ: React.FC = () => {
  const faqItems = [
    {
      id: "item-1",
      question: "Preciso entender de trade?",
      answer: "❗ Não. A IA já manda tudo pronto."
    },
    {
      id: "item-2",
      question: "Quantos sinais posso gerar?",
      answer: "✅ Ilimitados. Clique e gere quando quiser."
    },
    {
      id: "item-3",
      question: "É assinatura?",
      answer: "❌ Não. É acesso ilimitado por R$47."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-space">
              Dúvidas Frequentes
            </h2>
          </header>

          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6 hover:border-neon-green/50 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-neon-green">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pt-4">
                    <p className="text-lg font-medium text-foreground">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;