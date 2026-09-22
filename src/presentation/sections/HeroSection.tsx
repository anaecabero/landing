import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { MediaPlaceholder } from '../components/MediaPlaceholder';
import { BuyNowButton, WhatsAppCommunityButton } from '../components/ConversionButtons';

export const HeroSection: React.FC = () => {
  return (
    <section
      style={{
        padding: '60px 0 50px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="ambient-glow ambient-purple" />
      <div className="ambient-glow ambient-pink" />

      <div className="container" style={{ textAlign: 'center' }}>
        {/* Pre-headline Pill */}
        <div style={{ marginBottom: '18px' }}>
          <span className="badge badge-pink">
            <Sparkles size={14} /> CURSO 100% ONLINE PARA MUJERES EMPRENDEDORAS
          </span>
        </div>

        {/* Reference Callout */}
        <p
          style={{
            fontSize: '0.95rem',
            color: '#FFDE59',
            fontWeight: 700,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            maxWidth: '820px',
            margin: '0 auto 16px'
          }}
        >
          DESCUBRE CÓMO MUCHAS MUJERES ESTÁN ELABORANDO ACCESORIOS CON RESINA E INICIANDO SU NEGOCIO DESDE CASA EN TAN SOLO 20 DÍAS
        </p>

        {/* Main Headline */}
        <h1
          style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.4rem)',
            fontWeight: 800,
            maxWidth: '920px',
            margin: '0 auto 20px',
            lineHeight: 1.15
          }}
        >
          Domina el Arte de la <span style={{ color: '#E056FD', textShadow: '0 0 25px rgba(224, 86, 253, 0.5)' }}>Resina Epóxica</span> y Crea un Negocio Rentable desde tu Hogar
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
            maxWidth: '780px',
            margin: '0 auto 36px',
            color: 'var(--text-secondary)'
          }}
        >
          Sin experiencia previa ni maquinarias caras. Aprende a crear joyería fina, llaveros personalizados, cuadros geoda y accesorios en tendencia que tus clientas amarán.
        </p>

        {/* Video Sales Letter (VSL) Placeholder */}
        <div
          style={{
            maxWidth: '840px',
            margin: '0 auto 40px',
            padding: '12px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '24px',
            border: '1px solid rgba(224, 86, 253, 0.3)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 35px rgba(155, 81, 224, 0.25)'
          }}
        >
          <MediaPlaceholder
            id="hero-vsl-video"
            title="Video Presentación del Curso (VSL)"
            dimensionLabel="16:9 • 1920x1080 Full HD"
            aspectRatio="16/9"
            type="video"
          />
        </div>

        {/* Trust Points / Reasons Why */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '16px 28px',
            marginBottom: '40px',
            fontSize: '0.95rem',
            color: '#FFFFFF'
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle2 size={18} color="#25D366" /> No necesitas experiencia previa
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle2 size={18} color="#25D366" /> Lista de proveedores de insumos por país
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle2 size={18} color="#25D366" /> Más de 60 clases paso a paso en video
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle2 size={18} color="#25D366" /> Certificado internacional incluido
          </span>
        </div>

        {/* Dual Conversion Buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '18px',
            maxWidth: '650px',
            margin: '0 auto'
          }}
        >
          {/* Conversion Point 1: Direct Urgency Buy */}
          <BuyNowButton
            section="hero_primary_cta"
            text="¡SÍ, QUIERO EL 50% DE DESCUENTO Y ACCESO INMEDIATO!"
            subtext="Garantía de 7 días respaldada por Hotmart • Único pago con acceso de por vida"
            fullWidth={true}
          />

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%', margin: '4px 0' }}>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>O si prefieres</span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
          </div>

          {/* Conversion Point 2: WhatsApp Community */}
          <WhatsAppCommunityButton
            section="hero_whatsapp_nurture"
            text="Unirme a la Comunidad de WhatsApp para Aprender Más"
            subtext="Únete a más de 3,500 mujeres emprendedoras y resuelve tus dudas antes de comprar"
            fullWidth={true}
          />
        </div>
      </div>
    </section>
  );
};
