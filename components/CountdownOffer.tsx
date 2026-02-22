'use client';

import { useEffect, useMemo, useState } from 'react';

export function CountdownOffer() {
  const targetDate = useMemo(() => {
    const now = new Date();
    now.setHours(now.getHours() + 48);
    return now;
  }, []);

  const [timeLeft, setTimeLeft] = useState('48h 00m 00s');

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = targetDate.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft('Oferta encerrada');
        clearInterval(timer);
        return;
      }
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft(`${hours}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="rounded-xl border border-brand-gold/40 bg-brand-navy p-4 text-center text-white shadow-glow">
      <p className="text-sm uppercase tracking-widest text-brand-gold">Oferta Especial por Tempo Limitado</p>
      <p className="mt-2 text-2xl font-bold">{timeLeft}</p>
    </div>
  );
}
