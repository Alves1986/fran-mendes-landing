export const WHATSAPP_PHONE = "5542999176326";

export function whatsappUrl(message: string) {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;
}

export const SITE_CONTACT_MESSAGE = "Olá! Cheguei pelo site da Fran Mendes Geffer e gostaria de conversar sobre uma parceria.";
export const SITE_CONTACT_URL = whatsappUrl(SITE_CONTACT_MESSAGE);
