export interface IWhatsAppService {
  getCommunityUrl(params?: { sourceSection?: string }): string;
  joinCommunity(params?: { sourceSection?: string }): void;
}
