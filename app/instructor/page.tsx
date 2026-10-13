import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  BookOpen,
  TrendingUp,
  Users,
  Youtube,
  Instagram,
  ArrowRight,
  CheckCircle,
  Star,
  MessageCircle,
} from "lucide-react";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Our Expert Stock Market Instructor in Pune | L&T Share Market Institute",
  description:
    "Meet our head instructor — a full-time trader with 5+ years of experience and 1000+ students trained in Pune. SEBI-compliant stock market education.",
  alternates: { canonical: "https://ltsharemarketinstitute.com/instructor" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "L&T Head Instructor",
  jobTitle: "Stock Market Trader & Educator",
  worksFor: {
    "@type": "Organization",
    name: "L&T Share Market Institute",
  },
  knowsAbout: [
    "Technical Analysis",
    "Options Trading",
    "Futures Trading",
    "Equity Markets",
    "Risk Management",
  ],
  sameAs: [
    "https://youtube.com/@ltsharemarketinstitute",
    "https://instagram.com/ltsharemarketinstitute",
  ],
};

const achievements = [
  { icon: Users, value: "1000+", label: "Students Trained", color: "text-blue-light" },
  { icon: TrendingUp, value: "5+", label: "Years Trading", color: "text-green-profit" },
  { icon: Star, value: "4.9/5", label: "Average Rating", color: "text-gold" },
  { icon: Award, value: "95%", label: "Student Success Rate", color: "text-purple-400" },
];

const expertise = [
  "Technical Analysis & Chart Reading",
  "Candlestick Pattern Mastery",
  "Options Trading Strategies",
  "Futures & Derivatives",
  "Risk Management & Position Sizing",
  "Intraday & Swing Trading",
  "Elliott Wave & Fibonacci",
  "Algo Trading Concepts",
];

const teachingPhilosophy = [
  {
    title: "Practice-First Approach",
    description:
      "Every concept is demonstrated live on real charts during market hours — no boring theory without practical application.",
  },
  {
    title: "Risk Before Reward",
    description:
      "Capital protection is paramount. We teach proper risk management before any trading strategy.",
  },
  {
    title: "Simplicity in Complexity",
    description:
      "Complex market concepts explained in simple, relatable language that beginners and experienced traders both understand.",
  },
  {
    title: "Long-Term Success",
    description:
      "We don't teach quick-rich schemes. We build the mindset, discipline, and skills for sustainable long-term trading success.",
  },
];

export default function InstructorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 chart-bg relative overflow-hidden">
        <div className="hero-glow bg-blue-brand/20 top-0 right-0" />
        <div className="container-width relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-500">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li className="text-slate-300">Instructor</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Instructor Visual */}
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl bg-gradient-to-br from-blue-brand/20 via-navy-800 to-green-profit/20 border border-white/10 flex items-center justify-center">
                  {/* Placeholder avatar */}
                  <div className="text-center">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-600 to-green-600 mx-auto mb-4 flex items-center justify-center shadow-blue-glow">
                      <span className="text-white font-bold text-5xl font-heading">LT</span>
                    </div>
                    <p className="text-white font-heading font-bold text-xl">Head Instructor</p>
                    <p className="text-blue-light text-sm">L&T Share Market Institute</p>
                  </div>
                </div>

                {/* Floating achievement badges */}
                <div className="absolute -top-4 -right-4 glass-card px-3 py-2 border-green-profit/30 text-center">
                  <div className="text-green-profit font-bold text-sm">1000+</div>
                  <div className="text-slate-500 text-xs">Students</div>
                </div>
                <div className="absolute -bottom-4 -left-4 glass-card px-3 py-2 border-blue-brand/30 text-center">
                  <div className="text-blue-light font-bold text-sm">5+ Years</div>
                  <div className="text-slate-500 text-xs">Experience</div>
                </div>
                <div className="absolute top-1/2 -right-16 hidden lg:block glass-card px-3 py-2 border-gold/30 text-center">
                  <div className="text-gold font-bold text-sm">⭐ 4.9/5</div>
                  <div className="text-slate-500 text-xs">Rating</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-brand/10 border border-blue-brand/30 rounded-full text-blue-light text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4" />
                Your Expert Guide
              </div>

              <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-3 mt-2">
                Learn From a{" "}
                <span className="gradient-text">Full-Time Trader</span>
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Our head instructor is a seasoned market professional with over 5 years of
                active trading experience across equity, futures, and options markets. Having
                trained 1000+ students in Pune, he combines deep market knowledge with a
                passion for making complex concepts simple and actionable.
              </p>

              <p className="text-slate-400 leading-relaxed mb-8">
                He started trading with ₹50,000 and through years of discipline, proper
                education, and consistent risk management, built it into a full-time career.
                His mission is to help every student avoid the costly mistakes he made early on
                and fast-track their journey to consistent profitability.
              </p>

              {/* Social Links */}
              <div className="flex gap-3 mb-8">
                <a
                  href="https://youtube.com/@ltsharemarketinstitute"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-all text-sm font-medium"
                >
                  <Youtube className="w-4 h-4" />
                  YouTube
                </a>
                <a
                  href="https://instagram.com/ltsharemarketinstitute"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 hover:bg-pink-500 hover:text-white transition-all text-sm font-medium"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
                <a
                  href={buildWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-profit/10 border border-green-profit/20 text-green-profit hover:bg-green-profit hover:text-navy-900 transition-all text-sm font-medium"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>

              <Link href="/demo" className="btn-primary text-base px-8 py-4">
                Learn Directly from Him
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-14 bg-navy-900/50 border-y border-white/10">
        <div className="container-width">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map(({ icon: Icon, value, label, color }) => (
              <div key={label} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${color}`} />
                  </div>
                </div>
                <div className={`font-heading font-bold text-3xl ${color} mb-1`}>{value}</div>
                <p className="text-slate-400 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-heading text-3xl mb-6">
                Areas of <span className="gradient-text">Expertise</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {expertise.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2.5 glass-card px-4 py-3"
                  >
                    <CheckCircle className="w-4 h-4 text-green-profit flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Teaching Philosophy */}
            <div>
              <h2 className="section-heading text-3xl mb-6">
                Teaching <span className="gradient-text">Philosophy</span>
              </h2>
              <div className="space-y-5">
                {teachingPhilosophy.map(({ title, description }, i) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-brand/10 border border-blue-brand/30 flex items-center justify-center flex-shrink-0 text-blue-light font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Intro */}
      <section className="section-padding bg-navy-900/30">
        <div className="container-width max-w-3xl text-center">
          <h2 className="section-heading text-3xl mb-3">
            Watch Our <span className="gradient-text">Free Trading Lessons</span>
          </h2>
          <p className="text-slate-400 mb-8">
            Subscribe to our YouTube channel for free daily market analysis and trading tips.
          </p>
          <div className="glass-card overflow-hidden rounded-2xl aspect-video relative mb-6">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              className="w-full h-full"
              allow="encrypted-media"
              allowFullScreen
              title="Introduction to L&T Share Market Institute"
            />
          </div>
          <div className="flex gap-4 justify-center">
            <a
              href="https://youtube.com/@ltsharemarketinstitute"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Youtube className="w-4 h-4" />
              Subscribe on YouTube
            </a>
            <Link href="/demo" className="btn-secondary">
              Book Demo Class
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-width text-center max-w-2xl">
          <BookOpen className="w-12 h-12 text-blue-light mx-auto mb-4" />
          <h2 className="font-heading font-bold text-3xl text-white mb-3">
            Ready to Learn Directly from an Expert?
          </h2>
          <p className="text-slate-400 mb-8">
            Book a FREE demo class and experience world-class stock market education in Pune.
          </p>
          <Link href="/demo" className="btn-primary text-base px-10 py-4">
            Book FREE Demo Class
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
