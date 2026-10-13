"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, TrendingUp, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/demo", label: "Free Demo" },
  { href: "/instructor", label: "Instructor" },
  { href: "/testimonials", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy-900/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="container-width">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-brand to-green-profit rounded-xl flex items-center justify-center shadow-blue-glow group-hover:shadow-green-glow transition-all duration-300">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-white text-sm">
                  L&T Share Market
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Institute · Pune
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link py-1 ${
                    pathname === link.href
                      ? "text-white after:w-full"
                      : "text-slate-300"
                  } ${link.href === "/demo" ? "!text-green-profit font-semibold" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+919XXXXXXXXX"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white text-sm font-medium transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+91 9XXXXXXXXX</span>
              </a>
              <Link href="/demo" className="btn-primary py-2 px-5 text-sm">
                Book Free Demo
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-navy-900/98 backdrop-blur-md border-t border-white/10 px-4 py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? "bg-blue-brand/20 text-blue-light"
                      : link.href === "/demo"
                      ? "text-green-profit font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-2">
                <a
                  href="tel:+919XXXXXXXXX"
                  className="flex items-center gap-2 px-4 py-3 text-slate-300 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +91 9XXXXXXXXX
                </a>
                <Link href="/demo" className="btn-primary justify-center text-center">
                  Book Free Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
        <div className="bg-navy-900/95 backdrop-blur-md border-t border-white/10 px-4 py-3 flex gap-3">
          <a
            href="tel:+919XXXXXXXXX"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/10 text-white text-sm font-medium border border-white/10"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <Link
            href="/demo"
            className="flex-1 flex items-center justify-center py-2.5 rounded-xl bg-blue-brand text-white text-sm font-semibold"
          >
            Book Free Demo
          </Link>
        </div>
      </div>
    </>
  );
}
