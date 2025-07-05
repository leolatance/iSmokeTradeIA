import React, { useState, useEffect, useMemo } from 'react';

interface CountdownTimerProps {
  targetDate?: Date;
  className?: string;
}

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  targetDate, 
  className = "" 
}) => {
  // Timer fake para landing page - sempre mostra urgência entre 6-12 horas
  const target = useMemo(() => {
    if (targetDate) {
      return targetDate;
    }
    
    // Gera um tempo fake baseado na data atual
    // Sempre mostra entre 6-12 horas restantes
    const now = new Date();
    const fakeEndTime = new Date(now.getTime() + (8 * 60 * 60 * 1000)); // 8 horas
    
    // Adiciona variação baseada no dia para parecer mais real
    const dayOffset = now.getDate() % 4; // 0-3 horas extras
    fakeEndTime.setHours(fakeEndTime.getHours() + dayOffset);
    
    return fakeEndTime;
  }, [targetDate]);
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: 8,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const now = new Date().getTime();
      const targetTime = target.getTime();
      let difference = targetTime - now;
      
      // Se o tempo "acabou", reset para mais 6-12 horas
      if (difference <= 0) {
        const newTarget = new Date(now + (8 * 60 * 60 * 1000)); // Reset para 8 horas
        const dayOffset = new Date().getDate() % 4;
        newTarget.setHours(newTarget.getHours() + dayOffset);
        difference = newTarget.getTime() - now;
      }

      return {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    // Calcula imediatamente
    const initialTimeLeft = calculateTimeLeft();
    setTimeLeft(initialTimeLeft);

    // Depois atualiza a cada segundo
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [target]);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center bg-gradient-dark border border-cannabis-green/30 rounded-lg p-3 shadow-cannabis">
      <div className="text-2xl md:text-3xl font-bold text-cannabis-green font-space">
        {formatNumber(value)}
      </div>
      <div className="text-xs text-muted-foreground uppercase tracking-wider">
        {label}
      </div>
    </div>
  );

  return (
    <div className={`flex flex-col items-center space-y-4 ${className}`}>
      <div className="text-center">
        <p className="text-sm text-destructive font-semibold uppercase tracking-wider">
          OFERTA LIMITADA
        </p>
        <p className="text-muted-foreground text-sm">
          Promoção R$ 47 acaba em:
        </p>
      </div>
      
      <div className="grid grid-cols-3 gap-4 md:gap-6">
        <TimeUnit value={timeLeft.hours} label="Horas" />
        <TimeUnit value={timeLeft.minutes} label="Min" />
        <TimeUnit value={timeLeft.seconds} label="Seg" />
      </div>
    </div>
  );
};

export default CountdownTimer;