import React from 'react';
import { Gift, Sparkles, Check } from 'lucide-react';
import { MediaPlaceholder } from '../components/MediaPlaceholder';
import { BuyNowButton } from '../components/ConversionButtons';

export const BonusesSection: React.FC = () => {
  const bonuses = [
    {
      num: 'BONO #1',
      title: 'Masterclass en Vivo Mensual de Preguntas y Respuestas',
      val: '$60.00 USD',
      desc: 'Accede a sesiones exclusivas por Zoom cada mes con la instructora para resolver dudas y revisar tus piezas en vivo.',
      placeholderId: 'bonus-masterclass-live'
    },
    {
      num: 'BONO #2',
      title: 'Masterclass de Cuadros con Técnica Geoda',
      val: '$25.00 USD',
      desc: 'Aprende a diseñar cuadros luminosos con cuarzos, líneas doradas y resina brillante de alto relieve.',
      placeholderId: 'bonus-geoda'
    },
    {
      num: 'BONO #3',
      title: 'Masterclass de Reloj de Pared con Técnica Océano',
      val: '$25.00 USD',
      desc: 'Domina las olas marinas con pistola de calor y crea relojes de pared estilo playa que se venden a precio premium.',
      placeholderId: 'bonus-reloj-oceano'
    },
    {
      num: 'BONO #4',
      title: 'Masterclass de Tazas Decoradas con Resina',
      val: '$25.00 USD',
      desc: 'Aprende a personalizar tazas térmicas y de cerámica con glitter y sellado grado alimenticio.',
      placeholderId: 'bonus-tazas'
    },
    {
      num: 'BONO #5',
      title: 'Masterclass de Lámpara con Fotografía Encapsulada',
      val: '$25.00 USD',
      desc: 'Crea lámparas de noche con base de madera y luces LED encapsulando fotos familiares y recuerdos.',
      placeholderId: 'bonus-lampara'
    },
    {
      num: 'BONO #6',
      title: 'Masterclass de Recuerdos de Recién Nacido',
      val: '$25.00 USD',
      desc: 'Conserva el cordón umbilical, huellitas y cabello de bebé en dijes y pirámides de resina cristalina.',
      placeholderId: 'bonus-bebe'
    },
    {
      num: 'BONO #7',
      title: 'Técnicas para Secar Flores Naturales en Casa',
      val: '$25.00 USD',
      desc: 'Aprende a deshidratar flores manteniendo su color vivo original para incluirlas en aretes y marcapáginas.',
      placeholderId: 'bonus-flores'
    },
    {
      num: 'BONO #8',
      title: 'Módulo Exclusivo: Llaveros Inteligentes con Chip NFC',
      val: '$50.00 USD',
      desc: 'Inserta tecnología en tu resina: llaveros que al tocarlos con el móvil abren canciones de Spotify o redes sociales.',
      placeholderId: 'bonus-llaveros-inteligentes'
    },
    {
      num: 'BONO #9',
      title: 'Guía de Costos, Precios y Presupuestos',
      val: '$25.00 USD',
      desc: 'Plantilla en Excel para saber exactamente cuánto gastas en material y cuánto debes cobrar para tener 60% a 80% de ganancia.',
      placeholderId: 'bonus-costos'
    },
    {
      num: 'BONO #10',
      title: 'Acceso de por Vida a la Comunidad VIP de Alumnas',
      val: '$80.00 USD',
      desc: 'Red de apoyo mutuo con miles de compañeras donde compartimos proveedores, consejos e ideas de venta.',
      placeholderId: 'bonus-comunidad-vip'
    }
  ];

  return (
    <section style={{ padding: '80px 0', background: 'radial-gradient(circle at 50% 50%, #1A0D36 0%, #0B0816 80%)', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 50px' }}>
          <span className="badge badge-pink" style={{ marginBottom: '14px' }}>
            <Gift size={14} /> ¡QUEREMOS QUE AHORRES POR ESO TE REGALAMOS MÁS!
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: '18px' }}>
            Inscríbete Hoy y Recibe Gratis Acceso a <span style={{ color: '#FFDE59' }}>10 Súper Bonos Exclusivos</span>
          </h2>
          <p style={{ fontSize: '1.1rem' }}>
            Valorados en más de <strong style={{ color: '#FF6B8B' }}>$365.00 USD</strong>. Si te registras hoy durante el período de oferta, todos estos módulos y masterclasses especiales son tuyos completamente <strong style={{ color: '#25D366' }}>GRATIS</strong>.
          </p>
        </div>

        {/* 10 Bonuses Grid */}
        <div className="grid-2" style={{ gap: '24px', marginBottom: '50px' }}>
          {bonuses.map((b, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                border: '1px solid rgba(241, 196, 15, 0.25)',
                background: 'rgba(255, 255, 255, 0.03)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <span className="badge badge-pink" style={{ fontSize: '0.75rem' }}>{b.num}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    {b.val}
                  </span>
                  <span className="badge badge-green" style={{ fontSize: '0.8rem', fontWeight: 800 }}>
                    <Sparkles size={12} /> HOY GRATIS
                  </span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '16px', alignItems: 'center' }}>
                <div>
                  <MediaPlaceholder
                    id={b.placeholderId}
                    title={b.num}
                    dimensionLabel="4:3"
                    aspectRatio="4/3"
                    type="image"
                  />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '8px', lineHeight: 1.3 }}>{b.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>{b.desc}</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#25D366', fontWeight: 600 }}>
                <Check size={14} /> Incluido gratis con tu inscripción única
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <BuyNowButton
            section="bonuses_cta"
            text="¡QUIERO ACCEDER AL CURSO Y TODOS LOS 10 BONOS GRATIS!"
            subtext="Oferta por tiempo limitado • Los bonos se desbloquean inmediatamente al comprar"
          />
        </div>
      </div>
    </section>
  );
};
