import React, { useState, useEffect } from 'react';
import { ShoppingBag, MessageCircle, X } from 'lucide-react';
import { useService } from '../../di/useService';

export const StickyUrgencyBar: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const checkoutService = useService('checkoutService');
  const whatsAppService = useService('whatsAppService');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 550 && !dismissed) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(11, 8, 22, 0.95)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderTop: '1px solid rgba(224, 86, 253, 0.3)',
        boxShadow: '0 -4px 30px rgba(0, 0, 0, 0.7)',
        padding: '12px 16px',
        animation: 'slideUp 0.3s ease-out'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            style={{
              background: '#FF2A6D',
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: '0.75rem',
              padding: '3px 8px',
              borderRadius: '6px'
            }}
          >
            50% OFF
          </span>
          <div style={{ fontSize: '0.88rem', color: '#FFFFFF', fontWeight: 700 }}>
            <span>Curso Completo + 10 Bonos: </span>
            <span style={{ color: '#FFDE59', fontSize: '1rem' }}>$29.99 USD</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {/* CTA 1: Checkout Hotmart */}
          <button
            onClick={() => checkoutService.redirectToCheckout({ sourceSection: 'sticky_bar' })}
            className="btn-hotmart"
            style={{
              padding: '10px 20px',
              fontSize: '0.88rem',
              boxShadow: '0 4px 15px rgba(255, 42, 109, 0.4)'
            }}
          >
            <ShoppingBag size={16} />
            <span>¡COMPRAR CON 50% DESC.!</span>
          </button>

          {/* CTA 2: WhatsApp Community */}
          <button
            onClick={() => whatsAppService.joinCommunity({ sourceSection: 'sticky_bar' })}
            className="btn-whatsapp"
            style={{
              padding: '10px 18px',
              fontSize: '0.88rem'
            }}
          >
            <MessageCircle size={16} />
            <span>WhatsApp</span>
          </button>

          <button
            onClick={() => setDismissed(true)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              alignItems: 'center'
            }}
            title="Cerrar barra"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
