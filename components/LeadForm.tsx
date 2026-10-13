"use client";

import { useState } from "react";
import { Send, User, Phone, MapPin, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { buildLeadWhatsAppUrl } from "@/lib/whatsapp";

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  source?: string;
  compact?: boolean;
}

export default function LeadForm({
  title = "Book Your FREE Demo Class",
  subtitle = "Fill in your details and we'll reach out within minutes!",
  source = "website",
  compact = false,
}: LeadFormProps) {
  const [formData, setFormData] = useState({ name: "", phone: "", city: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your full name";
    }
    if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number";
    }
    if (!formData.city.trim() || formData.city.trim().length < 2) {
      newErrors.city = "Please enter your city";
    }
    return newErrors;
  };

  const sendEmail = async () => {
    try {
      // Dynamic import to avoid SSR issues
      const emailjs = await import("@emailjs/browser");
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          from_phone: formData.phone,
          from_city: formData.city,
          source: source,
          message: `New lead from ${source}: ${formData.name} from ${formData.city}, Phone: ${formData.phone}`,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"
      );
      return true;
    } catch (err) {
      console.error("EmailJS error:", err);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("loading");

    // Send email (non-blocking — proceed to WhatsApp even if email fails)
    await sendEmail();

    setStatus("success");

    // Short delay then redirect to WhatsApp
    setTimeout(() => {
      const waUrl = buildLeadWhatsAppUrl(
        formData.name,
        formData.phone,
        formData.city || "Pune"
      );
      window.open(waUrl, "_blank");
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  if (status === "success") {
    return (
      <div className={`${compact ? "p-6" : "p-8"} glass-card text-center`}>
        <div className="w-16 h-16 rounded-full bg-green-profit/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-profit" />
        </div>
        <h3 className="font-heading font-bold text-white text-xl mb-2">
          🎉 You&apos;re All Set!
        </h3>
        <p className="text-slate-400 text-sm mb-2">
          Redirecting you to WhatsApp to confirm your demo class booking...
        </p>
        <div className="flex justify-center mt-4">
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-green-profit animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${compact ? "p-6" : "p-8"} glass-card`}>
      {!compact && (
        <div className="mb-6 text-center">
          <h3 className="font-heading font-bold text-white text-xl md:text-2xl mb-1">
            {title}
          </h3>
          <p className="text-slate-400 text-sm">{subtitle}</p>
        </div>
      )}

      {compact && (
        <h3 className="font-heading font-bold text-white text-lg mb-4">{title}</h3>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Name */}
        <div>
          <label htmlFor="lead-name" className="block text-sm text-slate-400 mb-1.5 font-medium">
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              id="lead-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={`input-field pl-10 ${errors.name ? "border-red-500/50 bg-red-500/5" : ""}`}
              disabled={status === "loading"}
              autoComplete="name"
            />
          </div>
          {errors.name && (
            <p className="flex items-center gap-1 mt-1 text-red-400 text-xs">
              <AlertCircle className="w-3 h-3" /> {errors.name}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="lead-phone" className="block text-sm text-slate-400 mb-1.5 font-medium">
            Mobile Number *
          </label>
          <div className="relative">
            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              id="lead-phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              maxLength={10}
              className={`input-field pl-10 ${errors.phone ? "border-red-500/50 bg-red-500/5" : ""}`}
              disabled={status === "loading"}
              autoComplete="tel"
              inputMode="numeric"
            />
          </div>
          {errors.phone && (
            <p className="flex items-center gap-1 mt-1 text-red-400 text-xs">
              <AlertCircle className="w-3 h-3" /> {errors.phone}
            </p>
          )}
        </div>

        {/* City */}
        <div>
          <label htmlFor="lead-city" className="block text-sm text-slate-400 mb-1.5 font-medium">
            Your City *
          </label>
          <div className="relative">
            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              id="lead-city"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Pune, Mumbai, etc."
              className={`input-field pl-10 ${errors.city ? "border-red-500/50 bg-red-500/5" : ""}`}
              disabled={status === "loading"}
              autoComplete="address-level2"
            />
          </div>
          {errors.city && (
            <p className="flex items-center gap-1 mt-1 text-red-400 text-xs">
              <AlertCircle className="w-3 h-3" /> {errors.city}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-blue-brand to-blue-glow text-white font-bold text-sm 
                     hover:opacity-90 transition-all duration-200 hover:shadow-blue-glow hover:-translate-y-0.5 
                     disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Booking your Demo...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Book FREE Demo Class
            </>
          )}
        </button>

        {status === "error" && (
          <p className="text-center text-red-400 text-xs">
            Something went wrong. Please try again or call us directly.
          </p>
        )}

        <p className="text-center text-slate-600 text-xs">
          🔒 Your information is 100% private. We never spam.
        </p>
      </form>
    </div>
  );
}
