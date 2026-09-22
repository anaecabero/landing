import type { ICheckoutService } from '../../core/interfaces/ICheckoutService';
import type { ITrackingService } from '../../core/interfaces/ITrackingService';

export class HotmartCheckoutService implements ICheckoutService {
  private baseUrl: string;
  private trackingService: ITrackingService;

  constructor(trackingService: ITrackingService) {
    this.trackingService = trackingService;
    this.baseUrl = import.meta.env.VITE_HOTMART_CHECKOUT_URL || 'https://go.hotmart.com/M89035161A?ap=5bba';
  }

  getCheckoutUrl(params?: { sourceSection?: string; promoCode?: string }): string {
    const url = new URL(this.baseUrl);
    const currentParams = new URLSearchParams(window.location.search);
    
    // Propagar UTMs actuales
    currentParams.forEach((val, key) => {
      url.searchParams.set(key, val);
    });

    if (params?.sourceSection) {
      url.searchParams.set('sck', `landing_${params.sourceSection}`);
    }

    if (params?.promoCode) {
      url.searchParams.set('offDiscount', params.promoCode);
    }

    return url.toString();
  }

  redirectToCheckout(params?: { sourceSection?: string; promoCode?: string }): void {
    const targetUrl = this.getCheckoutUrl(params);
    const section = params?.sourceSection || 'unknown_section';

    // Registrar evento en Supabase sin bloquear la redirección
    this.trackingService.trackEvent({
      eventType: 'hotmart_checkout',
      section,
      metadata: { targetUrl }
    });

    // Abrir en pestaña nueva o redirigir
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  }
}
