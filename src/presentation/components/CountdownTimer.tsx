import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  initialMinutes?: number;
  label?: string;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  initialMinutes = 15,
  label = 'La oferta expira en:'
}) => {
  const [secondsLeft, setSecondsLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 15 * 60));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        background: 'rgba(255, 42, 109, 0.15)',
        border: '1px solid rgba(255, 42, 109, 0.4)',
        padding: '6px 14px',
        borderRadius: '999px',
        fontSize: '0.9rem',
        fontWeight: 700,
        color: '#FF6B8B'
      }}
    >
      <Clock size={16} className="animate-pulse" />
      {label && <span>{label}</span>}
      <span
        style={{
          fontFamily: 'monospace',
          fontSize: '1.05rem',
          color: '#FFFFFF',
          background: 'rgba(0, 0, 0, 0.4)',
          padding: '2px 8px',
          borderRadius: '6px'
        }}
      >
        {pad(minutes)}:{pad(seconds)}
      </span>
    </div>
  );
};
