import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate?: Date;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  targetDate, 
  className = "" 
}) => {
  // Default to 7 days from now if no target date provided
  const defaultTarget = new Date();
  defaultTarget.setDate(defaultTarget.getDate() + 7);
  
  const target = targetDate || defaultTarget;
  
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +target - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center bg-gradient-dark border border-neon-green/30 rounded-lg p-3 shadow-glow">
      <div className="text-2xl md:text-3xl font-bold text-neon-green animate-neon-pulse font-space">
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
        <p className="text-sm text-destructive font-semibold uppercase tracking-wider animate-glow-pulse">
          🔥 OFERTA LIMITADA 🔥
        </p>
        <p className="text-muted-foreground text-sm">
          Teste grátis por 7 dias acaba em:
        </p>
      </div>
      
      <div className="grid grid-cols-4 gap-3 md:gap-4">
        <TimeUnit value={timeLeft.days} label="Dias" />
        <TimeUnit value={timeLeft.hours} label="Horas" />
        <TimeUnit value={timeLeft.minutes} label="Min" />
        <TimeUnit value={timeLeft.seconds} label="Seg" />
      </div>
      
      <div className="text-center">
        <p className="text-xs text-muted-foreground">
          Depois disso volta pro preço normal
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;