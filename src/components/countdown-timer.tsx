
"use client";

import { useState, useEffect } from 'react';

const EVENT_DATE = new Date("2026-01-06T10:00:00");

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

// Helper function to calculate time left
const calculateTimeLeft = (): TimeLeft | null => {
  const now = new Date();
  const difference = EVENT_DATE.getTime() - now.getTime();

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return null;
};

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Set the initial time left
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft?.days },
    { label: 'Hours', value: timeLeft?.hours },
    { label: 'Minutes', value: timeLeft?.minutes },
    { label: 'Seconds', value: timeLeft?.seconds },
  ];

  if (!isClient || !timeLeft) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            {timeUnits.map((unit) => (
                <div key={unit.label} className="p-6 bg-card/50 rounded-lg backdrop-blur-sm border">
                    <div className="text-4xl md:text-6xl font-bold font-headline text-primary animate-pulse">00</div>
                    <div className="text-sm md:text-base font-medium text-muted-foreground mt-2">{unit.label}</div>
                </div>
            ))}
        </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
      {timeUnits.map((unit) => (
        <div key={unit.label} className="p-6 bg-card/50 rounded-lg backdrop-blur-sm border transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
          <div className="text-4xl md:text-6xl font-bold font-headline text-primary">
            {String(unit.value).padStart(2, '0')}
          </div>
          <div className="text-sm md:text-base font-medium text-muted-foreground mt-2">{unit.label}</div>
        </div>
      ))}
    </div>
  );
}
