import type { Metadata } from "next";
import { BookOpen, ArrowRight, CheckCircle, MessageCircle } from "lucide-react";
import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/lib/courses-data";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Stock Market Courses in Pune — Beginner, Advanced & Options Trading",
  description:
    "Explore all stock market courses at L&T Share Market Institute, Pune. Beginner, Advanced Trading Masterclass, and Options Trading Specialist. SEBI-compliant, live sessions.",
  alternates: { canonical: "https://ltsharemarketinstitute.com/courses" },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Stock Market Courses in Pune",
  itemListElement: courses.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Course",
      name: c.title,
      description: c.description,
      provider: {
        "@type": "Organization",
        name: "L&T Share Market Institute",
        url: "https://ltsharemarketinstitute.com",
      },
      timeRequired: c.duration,
      offers: {
        "@type": "Offer",
        price: c.fees.replace("₹", "").replace(",", ""),
        priceCurrency: "INR",
      },
    },
  })),
};

const compareFeatures = [
  "Live Market Sessions",
  "Study Materials",
  "Certificate",
  "Practice Account",
  "Doubt Clearing",
  "Placement Support",
  "1-on-1 Mentoring",
  "Lifetime Access",
];

const courseFeatures = [
  [true, true, true, false, true, false, false, true],
  [true, true, true, true, true, true, true, true],
  [true, true, true, true, true, false, true, true],
];

export default function CoursesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      {/* Page Hero */}
      <section className="pt-28 pb-16 bg-navy-900/50 border-b border-white/10 chart-bg">
        <div className="container-width text-center">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center justify-center gap-2 text-sm text-slate-500">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-slate-300">Courses</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-brand/10 border border-blue-brand/30 rounded-full text-blue-light text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            Our Courses
          </div>

          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4 mt-4">
            Stock Market Courses in{" "}
            <span className="gradient-text">Pune</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            From complete beginner to professional options trader — structured programs
            designed for real results. All courses include live market sessions.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/demo" className="btn-primary">
              Book Free Demo Class
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={buildWhatsAppUrl(WHATSAPP_MESSAGES.courses)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp for Details
            </a>
          </div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, i) => (
              <CourseCard key={course.id} course={course} featured={i === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-navy-900/30">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="section-heading text-3xl md:text-4xl mb-4">
              Course Comparison
            </h2>
            <p className="text-slate-400 text-lg">
              Choose the right course for your level and goals.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full" role="table">
              <thead>
                <tr className="bg-navy-800/80">
                  <th className="px-6 py-4 text-left text-slate-400 text-sm font-semibold">
                    Feature
                  </th>
                  {courses.map((c) => (
                    <th
                      key={c.id}
                      className="px-6 py-4 text-center text-white text-sm font-semibold"
                    >
                      {c.icon} {c.level}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareFeatures.map((feature, fi) => (
                  <tr
                    key={feature}
                    className="border-t border-white/10 hover:bg-white/2 transition-colors"
                  >
                    <td className="px-6 py-4 text-slate-300 text-sm">{feature}</td>
                    {courseFeatures.map((cf, ci) => (
                      <td key={ci} className="px-6 py-4 text-center">
                        {cf[fi] ? (
                          <CheckCircle className="w-5 h-5 text-green-profit mx-auto" />
                        ) : (
                          <span className="text-slate-700 text-lg">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t border-white/10 bg-navy-800/40">
                  <td className="px-6 py-4 text-slate-300 text-sm font-semibold">
                    Price
                  </td>
                  {courses.map((c) => (
                    <td key={c.id} className="px-6 py-4 text-center">
                      <div className="text-slate-500 text-xs line-through">
                        {c.originalFees}
                      </div>
                      <div className="text-green-profit font-bold text-lg">{c.fees}</div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding">
        <div className="container-width">
          <div className="glass-card p-8 md:p-12 text-center border-blue-brand/30 relative overflow-hidden">
            <div className="hero-glow bg-blue-brand/20 top-0 left-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="font-heading font-bold text-3xl text-white mb-3">
                Not Sure Which Course is Right for You?
              </h2>
              <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
                Join our FREE demo class first — no commitment. Experience the teaching style
                and then decide which course suits you best.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/demo" className="btn-primary text-base px-8 py-4">
                  Book FREE Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={buildWhatsAppUrl(WHATSAPP_MESSAGES.courses)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-base px-8 py-4"
                >
                  <MessageCircle className="w-4 h-4" />
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
