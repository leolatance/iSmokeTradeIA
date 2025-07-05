import React from 'react';
import { MessageCircle, Copy, Clock, Users, Smartphone } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: MessageCircle,
      text: "Sinais ilimitados"
    },
    {
      icon: Copy,
      text: "Clique e gere seu sinal na hora"
    },
    {
      icon: Clock,
      text: "Acesso vitalício"
    },
    {
      icon: Users,
      text: "Suporte direto no grupo"
    },
    {
      icon: Smartphone,
      text: "Funciona no celular e no PC"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center space-x-4 bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:border-neon-green/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-neon-green font-bold text-xl">✓</span>
                    <p className="text-lg font-semibold text-foreground">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits; 