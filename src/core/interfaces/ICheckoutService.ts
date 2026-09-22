export interface ICheckoutService {
  getCheckoutUrl(params?: { sourceSection?: string; promoCode?: string }): string;
  redirectToCheckout(params?: { sourceSection?: string; promoCode?: string }): void;
}
