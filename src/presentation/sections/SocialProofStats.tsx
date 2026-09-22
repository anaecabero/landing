import React from 'react';
import { Users, Star, Award, Globe2 } from 'lucide-react';

export const SocialProofStats: React.FC = () => {
  const stats = [
    { icon: <Users size={28} color="#E056FD" />, title: '+1,850', label: 'Alumnas Emprendedoras' },
    { icon: <Star size={28} color="#FFD700" />, title: '4.9 / 5.0', label: 'Calificación de Satisfacción' },
    { icon: <Award size={28} color="#25D366" />, title: '100% Oficial', label: 'Certificado de Finalización' },
    { icon: <Globe2 size={28} color="#00D2D3" />, title: '15+ Países', label: 'Comunidad Internacional' }
  ];

  return (
    <section style={{ padding: '30px 0', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.25)' }}>
      <div className="container">
        <div className="grid-4">
          {stats.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '12px 16px',
                background: 'rgba(255,255,255,0.02)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              <div>{item.icon}</div>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '2px' }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
