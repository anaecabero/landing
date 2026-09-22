import React from 'react';
import { Heart } from 'lucide-react';

export const FooterSection: React.FC = () => {
  return (
    <footer
      style={{
        background: '#07050E',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '50px 0 35px',
        color: 'var(--text-muted)',
        fontSize: '0.85rem',
        lineHeight: 1.6
      }}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        <h4 style={{ color: '#FFFFFF', fontSize: '1.2rem', marginBottom: '10px', fontWeight: 800 }}>
          DISEÑA Y EMPRENDE CON RESINA EPÓXICA
        </h4>
        <p style={{ maxWidth: '600px', margin: '0 auto 20px', color: 'var(--text-secondary)' }}>
          Transformando la pasión por las manualidades en negocios prósperos para mujeres en toda Latinoamérica y el mundo.
        </p>

        {/* Legal links */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '25px', color: '#C5BFD6', fontSize: '0.82rem' }}>
          <a href="#pricing" style={{ textDecoration: 'underline' }}>Inscripción con 50% Desc.</a>
          <span>•</span>
          <a href="#" onClick={(e) => { e.preventDefault(); alert('Políticas de Privacidad: Tus datos se encuentran 100% seguros y protegidos.'); }} style={{ textDecoration: 'underline' }}>Políticas de Privacidad</a>
          <span>•</span>
          <a href="#" onClick={(e) => { e.preventDefault(); alert('Términos de Servicio: Acceso digital inmediato de por vida tras confirmar la compra.'); }} style={{ textDecoration: 'underline' }}>Términos y Condiciones</a>
          <span>•</span>
          <a href="#faq" style={{ textDecoration: 'underline' }}>Preguntas Frecuentes</a>
        </div>

        {/* Meta / Facebook Disclaimer */}
        <div
          style={{
            maxWidth: '850px',
            margin: '0 auto 25px',
            padding: '16px 20px',
            background: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.04)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            textAlign: 'justify'
          }}
        >
          <p style={{ marginBottom: '8px' }}>
            <strong>DESCARGO DE RESPONSABILIDAD IMPORTANTE:</strong> Este sitio web no es parte de la plataforma de Facebook ni de Meta Platforms, Inc. Además, este sitio NO está respaldado por Facebook ni Meta de ninguna manera. FACEBOOK es una marca comercial registrada de META PLATFORMS, INC.
          </p>
          <p style={{ margin: 0 }}>
            Los testimonios y ejemplos presentados corresponden a experiencias reales de alumnas, pero no representan una garantía de ingresos exactos. Tus resultados dependerán exclusivamente de tu dedicación, creatividad, práctica y la aplicación consistente de las estrategias enseñadas en el curso.
          </p>
        </div>

        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} Diseña y Emprende con Resina. Todos los derechos reservados. Hecho con <Heart size={13} color="#E056FD" style={{ display: 'inline', verticalAlign: 'middle' }} /> para mujeres creadoras.
        </p>
      </div>
    </footer>
  );
};
