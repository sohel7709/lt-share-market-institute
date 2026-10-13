import type { Metadata } from "next";
import { PlayCircle, CheckCircle, Clock, Users, Star, Shield, ArrowRight, Zap } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book FREE Demo Stock Market Class in Pune | L&T Share Market Institute",
  description:
    "Join our FREE Live Trading Demo Class in Pune. See how we teach stock market trading with real charts and live market sessions. Limited seats — book now!",
  alternates: { canonical: "https://ltsharemarketinstitute.com/demo" },
};

const benefits = [
  "Learn to read live stock market charts",
  "Understand how professional traders think",
  "See a live intraday trade setup",
  "Q&A session with the expert instructor",
  "Know which course is right for you",
  "No prior experience required",
  "100% FREE — zero obligation",
];

const demoDetails = [
  { icon: Clock, label: "Duration", value: "2 Hours" },
  { icon: Users, label: "Batch Size", value: "Small Groups" },
  { icon: Star, label: "Rating", value: "4.9 / 5 ⭐" },
  { icon: Shield, label: "Cost", value: "FREE!" },
];

export default function DemoPage() {
  const nextBatchDate = new Date();
  nextBatchDate.setDate(nextBatchDate.getDate() + 3);
  const batchDateStr = nextBatchDate.toLocaleDateString("en-IN", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* Page Hero */}
      <section className="pt-28 pb-16 chart-bg relative overflow-hidden">
        <div className="hero-glow bg-blue-brand/20 top-0 left-1/4" />
        <div className="hero-glow bg-green-profit/10 bottom-0 right-1/4" />

        <div className="container-width relative z-10">
          <div className="text-center mb-12">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center justify-center gap-2 text-sm text-slate-500">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                </li>
                <li>/</li>
                <li className="text-slate-300">Free Demo Class</li>
              </ol>
            </nav>

            {/* Urgency Banner */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-semibold mb-6 animate-pulse">
              <Zap className="w-4 h-4 fill-gold" />
              Next Demo: {batchDateStr} — Only 5 Seats Left!
            </div>

            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Join Our{" "}
              <span className="gradient-text">FREE Live Trading</span>
              <br />
              Demo Class
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
              Experience our teaching style before you enroll. See real charts, live setups,
              and discover why 1000+ students chose L&T Share Market Institute.
            </p>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-2 text-sm text-slate-400 mb-12">
            <div className="flex -space-x-2">
              {["RS", "PD", "AK", "VM", "NB"].map((initials, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-navy-900 bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center text-white text-xs font-bold"
                >
                  {initials}
                </div>
              ))}
            </div>
            <span>
              <strong className="text-white">500+</strong> people joined last month
            </span>
          </div>

          {/* Main Grid: Benefits + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
            {/* Benefits */}
            <div>
              <h2 className="font-heading font-bold text-white text-2xl mb-6">
                What You&apos;ll Learn in the Demo
              </h2>

              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-profit/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-profit" />
                    </div>
                    <span className="text-slate-300 text-base">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Demo Details Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {demoDetails.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="glass-card p-4 flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-brand/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-light" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">{label}</p>
                      <p className="text-white font-semibold text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial snippet */}
              <div className="glass-card p-5 border-l-4 border-green-profit">
                <p className="text-slate-300 text-sm italic mb-3">
                  &quot;I attended the free demo with zero knowledge. By the end, I understood
                  candlestick charts and knew exactly what to study. Enrolled immediately!&quot;
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                    RS
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">Rahul S.</p>
                    <p className="text-slate-500 text-xs">Pune — Beginner Course</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-gold fill-gold" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Lead Form */}
            <div className="sticky top-24">
              <LeadForm
                title="Reserve Your FREE Seat"
                subtitle={`Next batch: ${batchDateStr} — Only 5 seats left!`}
                source="demo_page"
              />

              <div className="mt-4 flex items-center justify-center gap-6 text-xs text-slate-600">
                <span className="flex items-center gap-1">
                  <Shield className="w-3 h-3 text-green-profit" />
                  100% Private
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-profit" />
                  No Spam
                </span>
                <span className="flex items-center gap-1">
                  <PlayCircle className="w-3 h-3 text-green-profit" />
                  FREE Class
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Below Form CTA */}
      <section className="py-16 bg-navy-900/30">
        <div className="container-width text-center max-w-2xl">
          <h2 className="font-heading font-bold text-2xl text-white mb-3">
            Prefer to Talk First?
          </h2>
          <p className="text-slate-400 mb-6">
            Our team is available Mon–Sat, 9AM–7PM. Call or WhatsApp us directly.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:+919XXXXXXXXX" className="btn-primary">
              📞 Call Now
            </a>
            <Link href="/contact" className="btn-secondary">
              More Contact Options
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
