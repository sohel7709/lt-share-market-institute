export const WHATSAPP_NUMBER = "919XXXXXXXXX"; // Replace with actual number

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export const WHATSAPP_MESSAGES = {
  general: "Hi! I want to know about stock market courses at L&T Share Market Institute, Pune.",
  demo: "Hi! I want to book a FREE Demo Class at L&T Share Market Institute, Pune.",
  courses: "Hi! I'm interested in your stock market courses. Please share details about fees and schedule.",
  beginner: "Hi! I want to join the Beginner Stock Market Course at L&T Share Market Institute, Pune.",
  advanced: "Hi! I want to join the Advanced Trading Masterclass at L&T Share Market Institute, Pune.",
  options: "Hi! I want to join the Options Trading Specialist Course at L&T Share Market Institute, Pune.",
  contact: "Hi! I have a query regarding L&T Share Market Institute. Please get in touch.",
};

export function buildLeadWhatsAppUrl(name: string, phone: string, city: string): string {
  const message = `Hi, I am ${name} from ${city}. I am interested in the stock market course at L&T Share Market Institute. My number is ${phone}.`;
  return buildWhatsAppUrl(message);
}
