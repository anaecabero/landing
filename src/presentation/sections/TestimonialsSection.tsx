import React from 'react';
import { MessageSquareQuote, Star, CheckCheck } from 'lucide-react';
import { MediaPlaceholder } from '../components/MediaPlaceholder';
import { WhatsAppCommunityButton } from '../components/ConversionButtons';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 'testimonio-1',
      name: 'Laura González',
      country: 'México',
      comment: '¡Chicas, estoy feliz! Publiqué mis primeros llaveros en los estados de WhatsApp y en 3 días me encargaron 25 piezas para un baby shower. Ya recuperé lo del curso y compré más insumos.',
      rating: 5
    },
    {
      id: 'testimonio-2',
      name: 'Sandra Morales',
      country: 'Colombia',
      comment: 'Tengo dos niños pequeños y no podía salir a trabajar. Con las clases de Yuly aprendí a manejar la resina sin desperdiciar nada. La lista de proveedores en Bogotá me ahorró muchísimo dinero.',
      rating: 5
    },
    {
      id: 'testimonio-3',
      name: 'Carolina Reyes',
      country: 'Chile',
      comment: 'El bono de cuadros geoda y reloj marino es oro puro. Vendí mi primer reloj en $75 dólares y el cliente quedó enamorado del acabado brillante. ¡El curso vale 10 veces más!',
      rating: 5
    },
    {
      id: 'testimonio-4',
      name: 'Patricia Valdivia',
      country: 'Perú',
      comment: 'La comunidad de alumnas en WhatsApp es maravillosa, siempre nos apoyamos con ideas. Las clases son súper claras y detalladas, hasta mi hija me ayuda a hacer las placas para perritos.',
      rating: 5
    }
  ];

  return (
    <section style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px' }}>
          <span className="badge badge-gold" style={{ marginBottom: '14px' }}>
            <MessageSquareQuote size={14} /> HISTORIAS DE ÉXITO
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.7rem)', marginBottom: '16px' }}>
            TESTIMONIOS DE NUESTRAS ALUMNAS
          </h2>
          <p style={{ fontSize: '1.1rem' }}>
            Mujeres reales que comenzaron desde cero y hoy tienen su propio negocio rentable de accesorios en resina.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid-2" style={{ gap: '24px', marginBottom: '45px' }}>
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                border: '1px solid rgba(224, 86, 253, 0.2)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 700 }}>{t.name}</h4>
                  <span style={{ fontSize: '0.8rem', color: '#E056FD' }}>{t.country} • Alumna Verificada</span>
                </div>
                <div style={{ display: 'flex', gap: '3px' }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
                  ))}
                </div>
              </div>

              {/* Chat-style quote */}
              <div
                style={{
                  background: 'rgba(37, 211, 102, 0.08)',
                  border: '1px solid rgba(37, 211, 102, 0.25)',
                  borderRadius: '12px',
                  padding: '14px 18px',
                  position: 'relative'
                }}
              >
                <p style={{ fontSize: '0.92rem', color: '#FFFFFF', fontStyle: 'italic', margin: 0, lineHeight: 1.5 }}>
                  "{t.comment}"
                </p>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '6px' }}>
                  <CheckCheck size={16} color="#25D366" />
                </div>
              </div>

              {/* Student Project Media Placeholder */}
              <div>
                <MediaPlaceholder
                  id={`proof-${t.id}`}
                  title={`Foto de Piezas Creadas por ${t.name}`}
                  dimensionLabel="WhatsApp Proof • 4:3"
                  aspectRatio="4/3"
                  type="image"
                />
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Social Proof Invitation */}
        <div style={{ textAlign: 'center' }}>
          <WhatsAppCommunityButton
            section="testimonials_whatsapp_join"
            text="Entrar a la Comunidad de WhatsApp y Conocer a las Alumnas"
          />
        </div>
      </div>
    </section>
  );
};
