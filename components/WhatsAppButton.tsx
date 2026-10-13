"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
}

export default function WhatsAppButton({
  message = WHATSAPP_MESSAGES.general,
}: WhatsAppButtonProps) {
  const url = buildWhatsAppUrl(message);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-50 group"
    >
      {/* Pulse rings */}
      <span className="absolute inset-0 rounded-full bg-green-profit opacity-20 animate-ping" />
      <span className="absolute inset-0 rounded-full bg-green-profit opacity-10 animate-ping" style={{ animationDelay: "0.3s" }} />

      {/* Button */}
      <div className="relative w-14 h-14 rounded-full bg-green-profit shadow-green-glow flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(0,210,106,0.6)]">
        <MessageCircle className="w-7 h-7 text-white fill-current" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-navy-800 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-white/10 shadow-glass pointer-events-none">
        Chat on WhatsApp
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1.5 w-2 h-2 bg-navy-800 border-r border-t border-white/10 rotate-45" />
      </div>
    </a>
  );
}
