import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { WhatsAppCommunityButton } from '../components/ConversionButtons';

interface FaqItem {
  q: string;
  a: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      q: '¿Cuál es la duración del curso y cómo son los horarios?',
      a: 'La duración dependerá 100% de ti y de tu tiempo libre. Al ser una formación 100% online y grabada en alta definición, tú decides a qué hora estudiar (por la mañana, en la noche o los fines de semana). Tendrás ACCESO DE POR VIDA para ver las lecciones cuantas veces desees.'
    },
    {
      q: '¿Cómo recibo el acceso una vez realizado el pago?',
      a: 'Una vez completado el pago, recibirás de inmediato un correo electrónico de confirmación de Hotmart (el mismo que indiques en la compra) con tus claves de acceso directo a la plataforma educativa. Podrás comenzar a ver las clases en menos de 2 minutos.'
    },
    {
      q: '¿Dónde y cómo compro los materiales si vivo en mi país?',
      a: '¡Es la pregunta más común! Dentro del Módulo 3 te entregamos una Lista Exclusiva de Proveedores por País (México, Colombia, Estados Unidos, Perú, Chile, España, Ecuador, etc.). Te decimos exactamente qué marcas de resina comprar y qué tiendas físicas y online ofrecen los mejores precios.'
    },
    {
      q: '¿Necesito experiencia previa en manualidades o resina?',
      a: 'No, en absoluto. Este curso está pensado para mujeres que nunca han tocado un bote de resina. Te explicamos desde cómo colocar tus guantes y medir las proporciones exactas para que tus piezas nunca queden blandas ni pegajosas.'
    },
    {
      q: '¿Cuáles son los métodos de pago disponibles?',
      a: 'Puedes pagar de forma rápida y segura con tarjeta de crédito o débito, PayPal y en muchos países en efectivo (OXXO en México, Baloto/Efecty en Colombia, PagoEfectivo en Perú, Sencillito en Chile, etc.). El sistema de Hotmart convertirá automáticamente el precio a tu moneda local.'
    },
    {
      q: '¿Es seguro pagar a través de Hotmart?',
      a: 'Totalmente seguro. Hotmart es la empresa de cursos digitales líder en el mundo de habla hispana, con certificado de seguridad encriptada SSL de 256 bits (la misma seguridad que utiliza un banco). Tus datos financieros nunca son compartidos con nadie.'
    },
    {
      q: '¿Puedo ver las clases desde mi teléfono celular?',
      a: '¡Sí! Puedes ingresar desde cualquier celular, tablet o computadora. Incluso puedes descargar la app oficial de Hotmart en tu móvil y ver las lecciones sin necesidad de tener internet.'
    }
  ];

  return (
    <section style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 45px' }}>
          <span className="badge badge-pink" style={{ marginBottom: '14px' }}>
            <HelpCircle size={14} /> RESPUESTAS CLARAS
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.7rem)', marginBottom: '16px' }}>
            PREGUNTAS FRECUENTES
          </h2>
          <p style={{ fontSize: '1.05rem' }}>
            Resolvemos todas tus inquietudes para que comiences tu camino en el arte de la resina con total confianza.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div style={{ maxWidth: '850px', margin: '0 auto 50px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '20px 24px',
                  cursor: 'pointer',
                  borderColor: isOpen ? 'var(--accent-magenta)' : 'var(--border-glass)'
                }}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                  <h3 style={{ fontSize: '1.1rem', color: '#FFFFFF', fontWeight: 700 }}>
                    {faq.q}
                  </h3>
                  <div>
                    {isOpen ? <ChevronUp size={22} color="#E056FD" /> : <ChevronDown size={22} color="#8E87A5" />}
                  </div>
                </div>

                {isOpen && (
                  <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? WhatsApp Box */}
        <div
          style={{
            background: 'rgba(37, 211, 102, 0.08)',
            border: '1px solid rgba(37, 211, 102, 0.3)',
            borderRadius: '18px',
            padding: '28px',
            textAlign: 'center',
            maxWidth: '750px',
            margin: '0 auto'
          }}
        >
          <h4 style={{ color: '#25D366', fontSize: '1.25rem', marginBottom: '8px', fontWeight: 800 }}>
            ¿Tienes alguna otra duda o consulta especial?
          </h4>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '18px' }}>
            Nuestro equipo de apoyo y alumnas están listas para orientarte directamente por chat.
          </p>
          <WhatsAppCommunityButton
            section="faq_whatsapp_support"
            text="Hablar con Nosotras por WhatsApp Ahora"
          />
        </div>
      </div>
    </section>
  );
};
