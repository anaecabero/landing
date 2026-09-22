import type { ITrackingService } from '../core/interfaces/ITrackingService';
import type { ICheckoutService } from '../core/interfaces/ICheckoutService';
import type { IWhatsAppService } from '../core/interfaces/IWhatsAppService';
import { SupabaseTrackingService } from '../infrastructure/supabase/SupabaseTrackingService';
import { HotmartCheckoutService } from '../infrastructure/hotmart/HotmartCheckoutService';
import { DirectWhatsAppService } from '../infrastructure/whatsapp/DirectWhatsAppService';

export interface ServiceRegistry {
  trackingService: ITrackingService;
  checkoutService: ICheckoutService;
  whatsAppService: IWhatsAppService;
}

export class DIContainer {
  private static instance: DIContainer;
  private services: Partial<ServiceRegistry> = {};

  private constructor() {}

  public static getInstance(): DIContainer {
    if (!DIContainer.instance) {
      DIContainer.instance = new DIContainer();
      DIContainer.instance.initDefaultServices();
    }
    return DIContainer.instance;
  }

  private initDefaultServices(): void {
    const trackingService = new SupabaseTrackingService();
    const checkoutService = new HotmartCheckoutService(trackingService);
    const whatsAppService = new DirectWhatsAppService(trackingService);

    this.register('trackingService', trackingService);
    this.register('checkoutService', checkoutService);
    this.register('whatsAppService', whatsAppService);
  }

  public register<K extends keyof ServiceRegistry>(key: K, service: ServiceRegistry[K]): void {
    this.services[key] = service;
  }

  public get<K extends keyof ServiceRegistry>(key: K): ServiceRegistry[K] {
    const service = this.services[key];
    if (!service) {
      throw new Error(`El servicio ${String(key)} no ha sido registrado en el DIContainer.`);
    }
    return service;
  }

  public getAll(): ServiceRegistry {
    return this.services as ServiceRegistry;
  }
}
