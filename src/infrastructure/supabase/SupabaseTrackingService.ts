import type { ITrackingService, TrackingPayload } from '../../core/interfaces/ITrackingService';
import { supabase, isSupabaseConfigured } from './supabaseClient';

export class SupabaseTrackingService implements ITrackingService {
  async trackEvent(payload: TrackingPayload): Promise<void> {
    const urlParams = new URLSearchParams(window.location.search);
    const utm_source = urlParams.get('utm_source') || undefined;
    const utm_medium = urlParams.get('utm_medium') || undefined;
    const utm_campaign = urlParams.get('utm_campaign') || undefined;

    const eventRecord = {
      event_type: payload.eventType,
      section: payload.section,
      utm_source,
      utm_medium,
      utm_campaign,
      user_agent: navigator.userAgent,
      referrer: document.referrer || undefined,
      device_type: window.innerWidth < 768 ? 'mobile' : window.innerWidth < 1024 ? 'tablet' : 'desktop',
      page_path: window.location.pathname
    };

    if (isSupabaseConfigured && supabase) {
      try {
        const { error } = await supabase.from('click_events').insert([eventRecord]);
        if (error) {
          console.warn('[SupabaseTrackingService] Error al registrar evento:', error.message);
        } else {
          console.debug('[SupabaseTrackingService] Evento registrado exitosamente en Supabase:', payload.eventType);
        }
      } catch (err) {
        console.warn('[SupabaseTrackingService] Excepción al registrar evento:', err);
      }
    } else {
      console.info('[MockTrackingService] Supabase no configurado o modo demo. Evento registrado localmente:', eventRecord);
    }
  }
}
