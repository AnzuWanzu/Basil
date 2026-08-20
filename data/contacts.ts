export const CONTACT_EMAIL = "hello@basilrestaurant.com";
export const CONTACT_PHONE = "(555) 123-4567";
export const ORDERS_EMAIL = "orders@basilrestaurant.com";
export const WHATSAPP_NUMBER = "15551234567";

export const LOCATION_CITY = "Sayre Highway";
export const ADDRESS_LINE1 = "Intavas Rd, Poblacion";
export const ADDRESS_LINE2 = "Impasug-ong, Bukidnon";
export const MAPS_COORDS = { lat: 8.28239, lng: 124.991094 };
export const MAPS_PLACE_URL = "https://maps.app.goo.gl/4njhmtEQChAq8f9x6";

export const SOCIAL_LINKS = [
  { key: "facebook", label: "Facebook", href: "#" },
  { key: "instagram", label: "Instagram", href: "#" },
  { key: "whatsapp", label: "WhatsApp", href: `https://wa.me/${WHATSAPP_NUMBER}` },
] as const;

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
] as const;
