import React, { useState } from 'react';
import { BookOpen, CheckCircle, ChevronDown, ChevronUp, MapPin, Sparkles } from 'lucide-react';
import { BuyNowButton } from '../components/ConversionButtons';

interface ModuleItem {
  number: string;
  title: string;
  badge?: string;
  lessons: string[];
}

export const CurriculumSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const modules: ModuleItem[] = [
    {
      number: 'MÓDULO 1',
      title: 'Bienvenida, Comunidad y Mentalidad Emprendedora',
      lessons: [
        'Bienvenida oficial al curso y recorrido por la plataforma',
        'Cómo acceder a la comunidad privada en WhatsApp y Telegram',
        'Mentalidad de éxito y cómo fijar tus primeras metas de ventas'
      ]
    },
    {
      number: 'MÓDULO 2',
      title: 'Teoría de la Resina, Bioseguridad y Preparación Perfecta',
      lessons: [
        'Tipos de resina: Epóxica 1:1, 2:1 y Resina UV (cuándo usar cada una)',
        'Medidas de protección y bioseguridad para trabajar en casa sin riesgos',
        'Puntos de mezcla, control de burbujas y tiempos de curado exactos',
        'Pigmentos líquidos, en pasta, micas y tintas al alcohol'
      ]
    },
    {
      number: 'MÓDULO 3',
      title: 'Herramientas y Lista Exclusiva de Proveedores por País',
      badge: '¡INCLUYE CONTACTOS DE DISTRIBUIDORES!',
      lessons: [
        'Elementos indispensables para comenzar con bajo presupuesto',
        'Tipos de moldes de silicona y cómo cuidarlos para que duren años',
        'LISTA DE PROVEEDORES POR PAÍS (México, Colombia, EE.UU., Perú, Chile, España y más)',
        'Cómo comprar insumos directos y maximizar tu margen de ganancia'
      ]
    },
    {
      number: 'MÓDULO 4',
      title: 'Creación Paso a Paso de Joyería y Accesorios Personales',
      lessons: [
        'Llaveros de letras personalizados con hoja de oro y flores secas',
        'Dijes, aretes, collares y anillos en resina con biseles metálicos',
        'Lapiceros decorados y marcapáginas con borla',
        'Placas personalizadas para mascotas con nombre y número telefónico'
      ]
    },
    {
      number: 'MÓDULO 5',
      title: 'Piezas Decorativas de Alto Valor (Efecto Océano y Geodas)',
      lessons: [
        'Portavasos elegantes con bordes dorados pintados a mano',
        'Técnica Efecto Océano con olas realistas y espuma blanca',
        'Cuadros estilo Geoda con cristales, cuarzos y purpurina',
        'Encapsulado de fotografías, recuerdos de bebé y objetos sentimentales'
      ]
    },
    {
      number: 'MÓDULO 6',
      title: 'Marketing, Redes Sociales y Estrategia de Ventas',
      badge: '¡CONVIERTE TU ARTE EN DINERO!',
      lessons: [
        'Cómo elegir el nombre y diseñar el logo de tu marca gratis en Canva',
        'Decoración de empaques de regalo (unboxing que enamora a tus clientas)',
        'Creación de página en Facebook, perfil de Instagram y TikTok para vender',
        'Configuración de WhatsApp Business para cerrar pedidos rápidamente',
        'Estrategia de precios: Cuánto cobrar para no perder dinero y tener altas ganancias'
      ]
    }
  ];

  return (
    <section style={{ padding: '80px 0', background: 'rgba(0,0,0,0.3)', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px' }}>
          <span className="badge badge-pink" style={{ marginBottom: '14px' }}>
            <BookOpen size={14} /> PLAN DE ESTUDIOS COMPLETO
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.7rem)', marginBottom: '16px' }}>
            AQUÍ TE LO ENSEÑAMOS TODO
          </h2>
          <p style={{ fontSize: '1.1rem' }}>
            En más de 60 clases en video HD aprenderás desde lo más básico hasta las técnicas avanzadas que están marcando tendencia este año.
          </p>
        </div>

        {/* Feature Banner: Proveedores */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(224, 86, 253, 0.15) 0%, rgba(155, 81, 224, 0.25) 100%)',
            border: '1.5px solid rgba(224, 86, 253, 0.4)',
            borderRadius: '16px',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            maxWidth: '850px',
            margin: '0 auto 40px',
            boxShadow: '0 8px 25px rgba(155, 81, 224, 0.2)'
          }}
        >
          <div style={{ background: '#E056FD', borderRadius: '50%', padding: '10px', color: '#000' }}>
            <MapPin size={24} />
          </div>
          <div>
            <h4 style={{ color: '#FFDE59', fontSize: '1.1rem', fontWeight: 800 }}>
              TE BRINDAMOS LA LISTA DE PROVEEDORES POR PAÍS
            </h4>
            <p style={{ fontSize: '0.9rem', color: '#FFFFFF', margin: 0 }}>
              Olvídate de buscar en internet sin saber qué resina comprar. Te damos los contactos de tiendas confiables con los mejores precios en tu país.
            </p>
          </div>
        </div>

        {/* Accordion List */}
        <div style={{ maxWidth: '850px', margin: '0 auto 45px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {modules.map((m, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '20px 24px',
                  cursor: 'pointer',
                  borderColor: isOpen ? 'var(--accent-magenta)' : 'var(--border-glass)'
                }}
                onClick={() => setOpenIdx(isOpen ? null : idx)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--accent-magenta)' }}>{m.number}</span>
                      {m.badge && (
                        <span className="badge badge-gold" style={{ fontSize: '0.7rem', padding: '2px 8px' }}>
                          <Sparkles size={10} /> {m.badge}
                        </span>
                      )}
                    </div>
                    <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF' }}>{m.title}</h3>
                  </div>
                  <div>
                    {isOpen ? <ChevronUp size={22} color="#E056FD" /> : <ChevronDown size={22} color="#8E87A5" />}
                  </div>
                </div>

                {isOpen && (
                  <div style={{ marginTop: '18px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {m.lessons.map((lesson, lIdx) => (
                        <li key={lIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                          <CheckCircle size={16} color="#25D366" style={{ marginTop: '3px', flexShrink: 0 }} />
                          <span>{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center' }}>
          <BuyNowButton section="curriculum_cta" text="¡SÍ, QUIERO ACCEDER A TODAS LAS LECCIONES!" />
        </div>
      </div>
    </section>
  );
};
