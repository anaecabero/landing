import React from 'react';
import { HeartHandshake, DollarSign, Palette, Home, Sparkles } from 'lucide-react';
import { MediaPlaceholder } from '../components/MediaPlaceholder';

export const OpportunitySection: React.FC = () => {
  const cards = [
    {
      icon: <DollarSign size={24} color="#FFD700" />,
      title: 'Genera Altos Ingresos desde Casa',
      desc: 'Crea tu propia marca de accesorios personalizados sin jefes, sin horarios estrictos y ganando el 100% de tus ventas.'
    },
    {
      icon: <Palette size={24} color="#E056FD" />,
      title: 'Crea Piezas en Tendencia',
      desc: 'Aprende las técnicas más cotizadas en Instagram y TikTok: efecto océano, geodas brillantes, flores secas y glitter encapsulado.'
    },
    {
      icon: <HeartHandshake size={24} color="#25D366" />,
      title: 'Bajo Presupuesto Inicial',
      desc: 'Te enseñamos cómo comenzar con herramientas accesibles y te damos la lista de proveedores por país para ahorrar en tus insumos.'
    },
    {
      icon: <Home size={24} color="#00D2D3" />,
      title: 'Ideal para Amas de Casa y Madres',
      desc: 'Un emprendimiento flexible y terapéutico que puedes realizar en una pequeña mesa de tu casa sin descuidar a tu familia.'
    }
  ];

  return (
    <section style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px' }}>
          <span className="badge badge-gold" style={{ marginBottom: '14px' }}>
            <Sparkles size={14} /> TU NUEVA REALIDAD COMIENZA AQUÍ
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.7rem)', marginBottom: '18px' }}>
            ¡Imagínate poder aprender a elaborar todo tipo de accesorios con resina y generar un ingreso extra desde tu casa!
          </h2>
          <p style={{ fontSize: '1.1rem' }}>
            No necesitas ser experta ni haber estudiado artes manuales. Nuestro método paso a paso te guía desde cómo mezclar la primera gota hasta cómo empacar y vender tus creaciones.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'center', marginBottom: '50px' }}>
          {/* Visual Showcase Placeholder */}
          <div>
            <MediaPlaceholder
              id="opportunity-transformation-image"
              title="Transformación: De Principiante a Emprendedora"
              dimensionLabel="4:3 • 1200x900"
              aspectRatio="4/3"
              type="image"
            />
          </div>

          {/* Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {cards.map((c, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  padding: '20px'
                }}
              >
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '12px',
                    padding: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  {c.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '6px', color: '#FFFFFF' }}>{c.title}</h3>
                  <p style={{ fontSize: '0.9rem', margin: 0 }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
