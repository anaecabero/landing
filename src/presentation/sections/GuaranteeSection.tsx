import React from 'react';
import { ShieldCheck, RefreshCw, CheckCircle2 } from 'lucide-react';
import { MediaPlaceholder } from '../components/MediaPlaceholder';
import { BuyNowButton } from '../components/ConversionButtons';

export const GuaranteeSection: React.FC = () => {
  return (
    <section style={{ padding: '80px 0', background: 'rgba(0,0,0,0.3)', position: 'relative' }}>
      <div className="container">
        <div
          className="glass-card"
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            padding: 'clamp(28px, 5vw, 50px)',
            border: '2px solid rgba(241, 196, 15, 0.4)',
            background: 'linear-gradient(135deg, rgba(241, 196, 15, 0.05) 0%, rgba(20, 12, 38, 0.8) 100%)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5), 0 0 35px rgba(241, 196, 15, 0.15)'
          }}
        >
          <div className="grid-2" style={{ alignItems: 'center', gap: '35px' }}>
            <div>
              <MediaPlaceholder
                id="guarantee-seal-badge"
                title="Sello Dorado: Garantía de Satisfacción 7 Días Hotmart"
                dimensionLabel="1:1 • 600x600"
                aspectRatio="1/1"
                type="image"
              />
            </div>

            <div>
              <span className="badge badge-gold" style={{ marginBottom: '14px' }}>
                <ShieldCheck size={14} /> COMPRA 100% PROTEGIDA Y SIN RIESGO
              </span>

              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#FFD700', marginBottom: '16px', fontWeight: 900 }}>
                ¡EL RIESGO ES COMPLETAMENTE MÍO!
              </h2>

              <p style={{ fontSize: '1rem', color: '#FFFFFF', marginBottom: '14px', lineHeight: 1.6 }}>
                No quiero que tomes una decisión a ciegas hoy. Quiero que pruebes el curso desde adentro, veas las primeras clases, descargues la lista de distribuidores y comiences a practicar.
              </p>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.6 }}>
                Tienes <strong>7 DÍAS COMPLETOS</strong> de garantía incondicional. Si sientes que la resina no es para ti, o el curso no superó tus expectativas, simplemente solicitas el reembolso directo a través de la plataforma de <strong>Hotmart</strong> y te devolvemos el <strong>100% de tu dinero</strong> sin preguntas y sin trámites engorrosos.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px', fontSize: '0.9rem', color: '#25D366' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} /> Respaldado por la plataforma líder Hotmart
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <RefreshCw size={16} /> Devolución directa a tu tarjeta o cuenta
                </span>
              </div>

              <BuyNowButton
                section="guarantee_cta"
                text="PROBAR EL CURSO HOY SIN NINGÚN RIESGO"
                subtext="Cuentas con 7 días completos de prueba protegida"
                fullWidth={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
