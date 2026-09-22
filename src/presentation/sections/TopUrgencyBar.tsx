import React from 'react';
import { Flame } from 'lucide-react';
import { CountdownTimer } from '../components/CountdownTimer';

export const TopUrgencyBar: React.FC = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(90deg, #6B0E9E 0%, #B81865 50%, #4D097A 100%)',
        color: '#FFFFFF',
        padding: '10px 16px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 50,
        boxShadow: '0 2px 15px rgba(0,0,0,0.4)',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          fontSize: '0.9rem',
          fontWeight: 600
        }}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <Flame size={18} color="#FFD700" className="animate-pulse" />
          <span>¡OFERTA ESPECIAL 50% DE DESCUENTO DISPONIBLE SOLO POR HOY!</span>
        </span>
        <CountdownTimer initialMinutes={15} label="Termina en:" />
        <span
          style={{
            background: 'rgba(0,0,0,0.3)',
            padding: '3px 10px',
            borderRadius: '999px',
            fontSize: '0.8rem',
            color: '#FFDE59',
            fontWeight: 700
          }}
        >
          Últimos 12 cupos
        </span>
      </div>
    </div>
  );
};
