import React from 'react';
import { Award, UserCheck, Heart, Sparkles } from 'lucide-react';
import { MediaPlaceholder } from '../components/MediaPlaceholder';

export const InstructorSection: React.FC = () => {
  return (
    <section style={{ padding: '80px 0', position: 'relative', background: 'rgba(0,0,0,0.2)' }}>
      <div className="container">
        {/* Mentor Bio */}
        <div className="grid-2" style={{ alignItems: 'center', marginBottom: '70px' }}>
          <div>
            <MediaPlaceholder
              id="instructor-photo"
              title="Foto de la Instructora en su Taller"
              dimensionLabel="3:4 • 900x1200"
              aspectRatio="3/4"
              type="image"
            />
          </div>

          <div>
            <span className="badge badge-pink" style={{ marginBottom: '14px' }}>
              <UserCheck size={14} /> TU MENTORA Y GUÍA
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.7rem)', marginBottom: '18px' }}>
              YO TE MOSTRARÉ CÓMO LO HE LOGRADO
            </h2>
            <p style={{ fontSize: '1.05rem', marginBottom: '16px' }}>
              ¡Hola! Soy <strong>Yuly Mar Rivas</strong>, ama de casa, madre y emprendedora. Me declaro una enamorada apasionada del arte en resina.
            </p>
            <p style={{ fontSize: '1rem', marginBottom: '16px', color: 'var(--text-secondary)' }}>
              Cuando empecé, no había quién me guiara: eché a perder resina cara, gasté en moldes defectuosos y las piezas me quedaban pegajosas o con burbujas. Sé exactamente la frustración que se siente querer emprender y no saber por dónde comenzar.
            </p>
            <p style={{ fontSize: '1rem', marginBottom: '24px', color: 'var(--text-secondary)' }}>
              Por eso creé este programa formativo paso a paso: para ahorrarte meses de errores, darte mis trucos profesionales y enseñarte cómo crear una marca que te dé libertad económica para ti y tu familia.
            </p>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Heart size={20} color="#E056FD" />
                <span style={{ fontSize: '0.9rem', color: '#FFFFFF', fontWeight: 600 }}>Enseñanza con paciencia y amor</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Sparkles size={20} color="#FFD700" />
                <span style={{ fontSize: '0.9rem', color: '#FFFFFF', fontWeight: 600 }}>Acompañamiento en la comunidad</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Feature */}
        <div
          className="glass-card"
          style={{
            background: 'linear-gradient(135deg, rgba(241, 196, 15, 0.08) 0%, rgba(155, 81, 224, 0.08) 100%)',
            border: '1.5px solid rgba(241, 196, 15, 0.3)',
            padding: 'clamp(24px, 4vw, 40px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            alignItems: 'center'
          }}
        >
          <div>
            <span className="badge badge-gold" style={{ marginBottom: '12px' }}>
              <Award size={14} /> RECONOCIMIENTO PROFESIONAL
            </span>
            <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '14px', fontWeight: 800 }}>
              AL FINALIZAR EL CURSO PODRÁS SOLICITAR TU CERTIFICADO
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '18px' }}>
              Al completar todas las lecciones prácticas recibirás tu diploma oficial personalizado con tu nombre, listo para imprimir en alta resolución y exhibir en tu taller o redes sociales como garantía de tu profesionalismo.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: '#FFFFFF' }}>
              <li>✓ Certificado digital emitido con código de autenticidad</li>
              <li>✓ Descarga inmediata sin costos extras</li>
              <li>✓ Valida tus habilidades ante tus clientas</li>
            </ul>
          </div>

          <div>
            <MediaPlaceholder
              id="official-diploma-certificate"
              title="Certificado Oficial de Finalización"
              dimensionLabel="4:3 • 1200x900"
              aspectRatio="4/3"
              type="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
