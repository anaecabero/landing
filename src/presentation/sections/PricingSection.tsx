import React from 'react';
import { Check, ShieldCheck, Zap } from 'lucide-react';
import { CountdownTimer } from '../components/CountdownTimer';
import { MediaPlaceholder } from '../components/MediaPlaceholder';
import { BuyNowButton, WhatsAppCommunityButton } from '../components/ConversionButtons';

export const PricingSection: React.FC = () => {
  const inclusions = [
    'Acceso completo e ilimitado a más de 60 video-lecciones en HD',
    'Lista exclusiva de proveedores de resina y moldes por país',
    'Todos los 10 Súper Bonos de regalo (Valorados en $365 USD)',
    'Certificado Oficial descargable avalado internacionalmente',
    'Acceso de por vida a la plataforma educativa en Hotmart',
    'Soporte continuo y comunidad privada en WhatsApp',
    'Actualizaciones futuras del curso sin ningún costo adicional',
    'Garantía incondicional de satisfacción de 7 días (Riesgo Cero)'
  ];

  return (
    <section id="pricing" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="ambient-glow ambient-purple" style={{ top: '10%' }} />

      <div className="container">
        {/* Urgency Badge */}
        <div style={{ textAlign: 'center', marginBottom: '35px' }}>
          <span className="badge badge-gold" style={{ fontSize: '0.9rem', padding: '8px 18px', marginBottom: '14px' }}>
            <Zap size={16} /> OFERTA ESPECIAL VÁLIDA SOLO POR HOY
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '16px' }}>
            ¡Accede Hoy Mismo con el <span style={{ color: '#FF2A6D' }}>50% de Descuento</span>!
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <CountdownTimer initialMinutes={15} label="El descuento especial expira en:" />
          </div>
        </div>

        {/* Pricing Box Container */}
        <div
          className="glass-card"
          style={{
            maxWidth: '850px',
            margin: '0 auto',
            border: '2px solid rgba(255, 42, 109, 0.45)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 50px rgba(255, 42, 109, 0.25)',
            padding: 'clamp(24px, 5vw, 45px)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Top Banner Ribbon */}
          <div
            style={{
              position: 'absolute',
              top: '25px',
              right: '-60px',
              transform: 'rotate(45deg)',
              background: 'linear-gradient(90deg, #FF5E3A, #FF2A6D)',
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: '0.78rem',
              padding: '6px 60px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
          >
            50% OFF
          </div>

          {/* Bundle Mockup Placeholder */}
          <div style={{ marginBottom: '30px' }}>
            <MediaPlaceholder
              id="pricing-bundle-mockup"
              title="Mockup Completo del Curso + 10 Bonos (Laptop, Tablet y Móvil)"
              dimensionLabel="16:9 • 1200x675"
              aspectRatio="16/9"
              type="image"
            />
          </div>

          {/* Price Numbers Display */}
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
              Precio regular anterior: <span style={{ textDecoration: 'line-through', color: '#FF6B8B', fontWeight: 700 }}>$59.99 USD</span>
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: '#E056FD' }}>HOY SOLO:</span>
              <span style={{ fontSize: 'clamp(3rem, 7vw, 4.5rem)', fontWeight: 900, color: '#FFDE59', textShadow: '0 0 30px rgba(255, 222, 89, 0.4)' }}>
                $29.99
              </span>
              <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', fontWeight: 700 }}>USD</span>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#25D366', fontWeight: 700 }}>
              ✓ Único pago para toda la vida • Sin mensualidades ni cobros sorpresa
            </p>
          </div>

          {/* Inclusions Checklist */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '16px',
              padding: '24px',
              marginBottom: '35px',
              border: '1px solid rgba(255, 255, 255, 0.06)'
            }}
          >
            <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '16px', fontWeight: 700 }}>
              TODO LO QUE RECIBES AL INSCRIBIRTE HOY:
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
              {inclusions.map((inc, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <Check size={18} color="#25D366" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Primary CTA Button */}
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <BuyNowButton
              section="pricing_box_cta"
              text="CONOCE EL PRECIO EN TU MONEDA AQUÍ"
              subtext="Haz clic para ver el precio exacto en pesos, soles, euros o tu moneda local"
              fullWidth={true}
            />
          </div>

          {/* Trust Guarantee note */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              textAlign: 'center',
              flexWrap: 'wrap',
              marginBottom: '20px'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} color="#25D366" /> Pago Seguro SSL 256-Bit
            </span>
            <span>•</span>
            <span>Aceptamos Tarjetas Débito/Crédito, PayPal y Efectivo en OXXO/Baloto</span>
          </div>

          {/* Secondary Conversion: WhatsApp for doubts */}
          <div
            style={{
              borderTop: '1px solid rgba(255,255,255,0.08)',
              paddingTop: '20px',
              textAlign: 'center'
            }}
          >
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
              ¿Prefieres consultar primero con nuestro equipo o pagar por transferencia?
            </p>
            <WhatsAppCommunityButton
              section="pricing_whatsapp_secondary"
              text="💬 Preguntar en WhatsApp por Otros Medios de Pago"
              fullWidth={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
