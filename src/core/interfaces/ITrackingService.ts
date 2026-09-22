export type ConversionEventType = 
  | 'hotmart_checkout' 
  | 'whatsapp_community' 
  | 'vsl_play' 
  | 'currency_modal' 
  | 'faq_expand';

export interface TrackingPayload {
  eventType: ConversionEventType;
  section: string;
  metadata?: Record<string, unknown>;
}

export interface ITrackingService {
  trackEvent(payload: TrackingPayload): Promise<void>;
}
