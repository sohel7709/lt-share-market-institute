import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact L&T Share Market Institute Pune — Phone, Email, Address",
  description:
    "Contact L&T Share Market Institute in Pune. Call, email, or WhatsApp us for course inquiries, demo class booking, and more. Find us on Google Maps.",
  alternates: { canonical: "https://ltsharemarketinstitute.com/contact" },
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9XXXXXXXXX",
    href: "tel:+919XXXXXXXXX",
    description: "Call us Mon–Sat, 9AM–7PM",
    color: "text-blue-light",
    bg: "bg-blue-brand/10",
    border: "border-blue-brand/20",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 9XXXXXXXXX",
    href: buildWhatsAppUrl(WHATSAPP_MESSAGES.contact),
    description: "Chat with us instantly",
    color: "text-green-profit",
    bg: "bg-green-profit/10",
    border: "border-green-profit/20",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@ltsharemarketinstitute.com",
    href: "mailto:info@ltsharemarketinstitute.com",
    description: "We reply within 24 hours",
    color: "text-gold",
    bg: "bg-gold/10",
    border: "border-gold/20",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Pune, Maharashtra — 411001",
    href: "https://maps.google.com/?q=Pune,Maharashtra",
    description: "Visit our office",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
  },
];

const officeHours = [
  { day: "Monday — Friday", time: "9:00 AM – 7:00 PM" },
  { day: "Saturday", time: "9:00 AM – 5:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-28 pb-16 bg-navy-900/50 border-b border-white/10 chart-bg">
        <div className="container-width text-center">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center justify-center gap-2 text-sm text-slate-500">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li className="text-slate-300">Contact</li>
            </ol>
          </nav>

          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Have questions about our courses? Want to book a demo? We&apos;re here to help
            you start your trading journey.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {contactInfo.map(({ icon: Icon, label, value, href, description, color, bg, border }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`glass-card p-6 card-hover border ${border} group`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <p className="text-slate-500 text-xs mb-1">{label}</p>
                <p className={`font-semibold text-sm ${color} mb-1 break-all`}>{value}</p>
                <p className="text-slate-500 text-xs">{description}</p>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-white mb-6">
                Send Us a Message
              </h2>
              <LeadForm
                title="Book a FREE Demo Class"
                subtitle="Fill in the form and we'll reach out within minutes!"
                source="contact_page"
              />
            </div>

            {/* Map + Hours */}
            <div className="space-y-6">
              {/* Google Maps Embed */}
              <div>
                <h2 className="font-heading font-bold text-2xl text-white mb-4">
                  Find Us in Pune
                </h2>
                <div className="rounded-2xl overflow-hidden border border-white/10 h-72">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.05133618697!2d73.68437!3d18.5204303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="L&T Share Market Institute location in Pune"
                  />
                </div>
                <a
                  href="https://maps.google.com/?q=Pune,Maharashtra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center gap-1.5 text-blue-light text-sm hover:text-white transition-colors"
                >
                  Open in Google Maps
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Office Hours */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-blue-light" />
                  <h3 className="font-heading font-semibold text-white">Office Hours</h3>
                </div>
                <div className="space-y-2">
                  {officeHours.map(({ day, time }) => (
                    <div key={day} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                      <span className="text-slate-400 text-sm">{day}</span>
                      <span
                        className={`text-sm font-medium ${
                          time === "Closed" ? "text-red-400" : "text-green-profit"
                        }`}
                      >
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick WhatsApp CTA */}
              <a
                href={buildWhatsAppUrl(WHATSAPP_MESSAGES.contact)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center py-4 text-base"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp — Get Instant Reply
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
