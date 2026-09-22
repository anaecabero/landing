import type { IWhatsAppService } from '../../core/interfaces/IWhatsAppService';
import type { ITrackingService } from '../../core/interfaces/ITrackingService';

export class DirectWhatsAppService implements IWhatsAppService {
  private communityUrl: string;
  private trackingService: ITrackingService;

  constructor(trackingService: ITrackingService) {
    this.trackingService = trackingService;
    this.communityUrl = import.meta.env.VITE_WHATSAPP_COMMUNITY_URL || 'https://chat.whatsapp.com/comunidad-resina-mujeres';
  }

  getCommunityUrl(): string {
    return this.communityUrl;
  }

  joinCommunity(params?: { sourceSection?: string }): void {
    const targetUrl = this.getCommunityUrl();
    const section = params?.sourceSection || 'whatsapp_cta';

    // Registrar evento de clic en Supabase
    this.trackingService.trackEvent({
      eventType: 'whatsapp_community',
      section,
      metadata: { targetUrl }
    });

    // Redirigir directamente al grupo de WhatsApp
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  }
}
