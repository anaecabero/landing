import React from 'react';
import { Sparkles, Eye } from 'lucide-react';
import { MediaPlaceholder } from '../components/MediaPlaceholder';
import { WhatsAppCommunityButton } from '../components/ConversionButtons';

export const ProjectsGallerySection: React.FC = () => {
  const projects = [
    { id: 'gallery-joyeria', title: 'Joyería Fina en Resina', tag: 'Alta Demanda' },
    { id: 'gallery-llaveros', title: 'Llaveros Personalizados', tag: 'Más Vendido' },
    { id: 'gallery-lapiceros', title: 'Lapiceros con Brillo & Flores', tag: 'Fácil de Crear' },
    { id: 'gallery-agendas', title: 'Agendas y Libretas Decoradas', tag: 'Tendencia' },
    { id: 'gallery-separadores', title: 'Separadores de Libros', tag: 'Bajo Costo' },
    { id: 'gallery-celular', title: 'Accesorios y Grips para Móvil', tag: 'Juvenil' },
    { id: 'gallery-mascotas', title: 'Placas para Mascotas con Datos', tag: 'Muy Rentable' },
    { id: 'gallery-portavasos', title: 'Portavasos y Bandejas Geoda', tag: 'Decoración Hogar' }
  ];

  return (
    <section style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px' }}>
          <span className="badge badge-gold" style={{ marginBottom: '14px' }}>
            <Eye size={14} /> GALERÍA DE PROYECTOS
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.7rem)', marginBottom: '16px' }}>
            Descubre Todo lo que Aprenderás a Crear
          </h2>
          <p style={{ fontSize: '1.1rem' }}>
            Piezas hermosas, duraderas y con un acabado brillante profesional que dejarán maravilladas a tus primeras clientas.
          </p>
        </div>

        {/* 8 Projects Grid */}
        <div className="grid-4" style={{ marginBottom: '45px' }}>
          {projects.map((p) => (
            <div
              key={p.id}
              className="glass-card"
              style={{
                padding: '14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                position: 'relative'
              }}
            >
              <div style={{ position: 'relative' }}>
                <span
                  style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    zIndex: 2,
                    background: 'rgba(0,0,0,0.65)',
                    color: '#FFDE59',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '3px 8px',
                    borderRadius: '6px',
                    border: '1px solid rgba(255,222,89,0.3)',
                    backdropFilter: 'blur(4px)'
                  }}
                >
                  <Sparkles size={10} style={{ display: 'inline', marginRight: '3px' }} />
                  {p.tag}
                </span>

                <MediaPlaceholder
                  id={p.id}
                  title={p.title}
                  dimensionLabel="1:1 • 800x800"
                  aspectRatio="1/1"
                  type="image"
                />
              </div>

              <div style={{ textAlign: 'center', padding: '4px 0' }}>
                <h4 style={{ fontSize: '1rem', color: '#FFFFFF', fontWeight: 700 }}>{p.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Callout to WhatsApp for asking questions */}
        <div
          style={{
            background: 'rgba(37, 211, 102, 0.08)',
            border: '1px solid rgba(37, 211, 102, 0.25)',
            borderRadius: '18px',
            padding: '24px',
            textAlign: 'center',
            maxWidth: '750px',
            margin: '0 auto'
          }}
        >
          <h4 style={{ color: '#25D366', fontSize: '1.2rem', marginBottom: '8px', fontWeight: 800 }}>
            ¿Quieres ver fotos y videos reales de alumnas?
          </h4>
          <p style={{ fontSize: '0.95rem', marginBottom: '18px' }}>
            Únete a nuestra comunidad gratuita de WhatsApp para conocer a otras emprendedoras y ver sus creaciones diarias.
          </p>
          <WhatsAppCommunityButton
            section="gallery_whatsapp_banner"
            text="Ver Creaciones en la Comunidad de WhatsApp"
          />
        </div>
      </div>
    </section>
  );
};
