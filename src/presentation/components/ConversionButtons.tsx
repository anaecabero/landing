import React from 'react';
import { ShoppingBag, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { useService } from '../../di/useService';

interface BuyNowButtonProps {
  section: string;
  text?: string;
  subtext?: string;
  className?: string;
  fullWidth?: boolean;
}

export const BuyNowButton: React.FC<BuyNowButtonProps> = ({
  section,
  text = '¡SÍ, QUIERO EL 50% DE DESCUENTO Y ACCESO INMEDIATO!',
  subtext = 'Pago 100% seguro a través de Hotmart • Acceso de por vida',
  className = '',
  fullWidth = false
}) => {
  const checkoutService = useService('checkoutService');

  const handleClick = () => {
    checkoutService.redirectToCheckout({ sourceSection: section });
  };

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', width: fullWidth ? '100%' : 'auto' }}>
      <button
        onClick={handleClick}
        className={`btn-hotmart ${className}`}
        style={{ width: fullWidth ? '100%' : undefined }}
      >
        <ShoppingBag size={22} />
        <span>{text}</span>
        <ArrowRight size={20} />
      </button>

      {subtext && (
        <span
          style={{
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            marginTop: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <ShieldCheck size={14} color="#25D366" />
          {subtext}
        </span>
      )}
    </div>
  );
};

interface WhatsAppCommunityButtonProps {
  section: string;
  text?: string;
  subtext?: string;
  className?: string;
  fullWidth?: boolean;
}

export const WhatsAppCommunityButton: React.FC<WhatsAppCommunityButtonProps> = ({
  section,
  text = 'Unirme a la Comunidad de WhatsApp para Aprender Más',
  subtext = 'Acceso 100% gratuito • Más de 3,500 mujeres emprendedoras',
  className = '',
  fullWidth = false
}) => {
  const whatsAppService = useService('whatsAppService');

  const handleClick = () => {
    whatsAppService.joinCommunity({ sourceSection: section });
  };

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', width: fullWidth ? '100%' : 'auto' }}>
      <button
        onClick={handleClick}
        className={`btn-whatsapp ${className}`}
        style={{ width: fullWidth ? '100%' : undefined }}
      >
        <MessageCircle size={22} />
        <span>{text}</span>
      </button>

      {subtext && (
        <span
          style={{
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            marginTop: '8px'
          }}
        >
          {subtext}
        </span>
      )}
    </div>
  );
};
