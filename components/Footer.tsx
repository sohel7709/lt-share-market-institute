import Link from "next/link";
import {
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Youtube,
  Instagram,
  Facebook,
  MessageCircle,
  Shield,
  ArrowRight,
} from "lucide-react";

const footerLinks = {
  quickLinks: [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/demo", label: "Free Demo Class" },
    { href: "/instructor", label: "Our Instructor" },
    { href: "/testimonials", label: "Student Reviews" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
  ],
  courses: [
    { href: "/courses", label: "Beginner Stock Market Course" },
    { href: "/courses", label: "Advanced Trading Masterclass" },
    { href: "/courses", label: "Options Trading Specialist" },
    { href: "/demo", label: "Free Demo Class" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 border-t border-white/10">
      {/* Main Footer */}
      <div className="container-width py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-brand to-green-profit rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-white text-sm">
                  L&T Share Market
                </span>
                <span className="text-xs text-slate-400">Institute · Pune</span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Pune&apos;s premier stock market trading institute. SEBI-compliant
              education for beginners to advanced traders. Join 1000+ successful
              students.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://wa.me/919XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-green-profit/10 border border-green-profit/20 flex items-center justify-center text-green-profit hover:bg-green-profit hover:text-navy-900 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@ltsharemarketinstitute"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 hover:bg-red-500 hover:text-white transition-all duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/ltsharemarketinstitute"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 hover:bg-pink-500 hover:text-white transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/ltsharemarketinstitute"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-5">
              Our Courses
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.courses.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Trust Badge */}
            <div className="mt-6 p-3 rounded-xl bg-green-profit/5 border border-green-profit/20">
              <div className="flex items-center gap-2 mb-1">
                <Shield className="w-4 h-4 text-green-profit" />
                <span className="text-green-profit text-xs font-semibold">
                  SEBI Compliant
                </span>
              </div>
              <p className="text-slate-500 text-xs">
                All courses follow SEBI guidelines for investor education.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-5">
              Contact Us
            </h3>
            <div className="space-y-4">
              <a
                href="tel:+919XXXXXXXXX"
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-brand/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-blue-light" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium group-hover:text-blue-light transition-colors">
                    +91 9XXXXXXXXX
                  </p>
                  <p className="text-slate-500 text-xs">Mon–Sat, 9AM–7PM</p>
                </div>
              </a>

              <a
                href="mailto:info@ltsharemarketinstitute.com"
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-brand/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-blue-light" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium group-hover:text-blue-light transition-colors">
                    info@ltsmi.com
                  </p>
                  <p className="text-slate-500 text-xs">We reply within 24hrs</p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-brand/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-blue-light" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Pune, Maharashtra</p>
                  <p className="text-slate-500 text-xs">India — 411001</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/demo"
              className="mt-6 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-brand text-white text-sm font-semibold hover:bg-blue-light transition-all duration-200 hover:shadow-blue-glow"
            >
              Book Free Demo Class
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-width py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs text-center sm:text-left">
            © {currentYear} L&T Share Market Institute, Pune. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs text-center">
            ⚠️ Trading involves risk. Past performance is not indicative of future results. 
            Please read all risk disclosures before investing.
          </p>
        </div>
      </div>
    </footer>
  );
}
