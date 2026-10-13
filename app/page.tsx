import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Award,
  BookOpen,
  Target,
  Shield,
  Zap,
  CheckCircle,
  Star,
  ChevronDown,
  PlayCircle,
  MessageCircle,
  BarChart2,
  Brain,
  Clock,
  HeartHandshake,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import CourseCard from "@/components/CourseCard";
import TestimonialCard from "@/components/TestimonialCard";
import BlogCard from "@/components/BlogCard";
import LeadForm from "@/components/LeadForm";
import { courses } from "@/lib/courses-data";
import { testimonials } from "@/lib/testimonials-data";
import { blogPosts } from "@/lib/blog-data";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Stock Market Course in Pune | L&T Share Market Institute",
  description:
    "Learn stock market trading from experts in Pune. Join 1000+ students at L&T Share Market Institute. Beginner to advanced courses. Book your FREE demo class today!",
  alternates: { canonical: "https://ltsharemarketinstitute.com" },
};

const stats = [
  { value: 1000, suffix: "+", label: "Students Trained", icon: Users },
  { value: 5, suffix: "+ Years", label: "Market Experience", icon: Award },
  { value: 3, suffix: " Courses", label: "Structured Programs", icon: BookOpen },
  { value: 95, suffix: "%", label: "Success Rate", icon: Target },
];

const whyChooseUs = [
  {
    icon: BarChart2,
    title: "Live Market Sessions",
    description:
      "Learn by doing — real-time chart analysis and live trade execution during market hours.",
    color: "text-blue-light",
    bg: "bg-blue-brand/10",
  },
  {
    icon: Shield,
    title: "SEBI Compliant",
    description:
      "All courses follow SEBI guidelines for investor education. Your learning is safe and regulated.",
    color: "text-green-profit",
    bg: "bg-green-profit/10",
  },
  {
    icon: Brain,
    title: "Expert Instructor",
    description:
      "Learn directly from a seasoned trader with 5+ years of live market experience.",
    color: "text-gold",
    bg: "bg-gold/10",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description:
      "Batch timings designed for working professionals, students, and housewives alike.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    icon: HeartHandshake,
    title: "Post-Course Support",
    description:
      "Lifetime access to study materials, and ongoing doubt-clearing sessions after course completion.",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
  },
  {
    icon: Zap,
    title: "Practical Approach",
    description:
      "No boring theory — every concept is backed by real chart examples and live trade setups.",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
];

const faqs = [
  {
    q: "Do I need prior experience to join?",
    a: "No! Our Beginner course starts from absolute zero. We build your foundation from scratch.",
  },
  {
    q: "Is stock market trading legal in India?",
    a: "Yes, absolutely. Trading in Indian stock markets (BSE/NSE) is completely legal and regulated by SEBI.",
  },
  {
    q: "How much capital do I need to start trading?",
    a: "You can start with as little as ₹5,000–₹10,000. We teach proper risk management to protect your capital.",
  },
  {
    q: "Do you provide placement assistance?",
    a: "Yes, our Advanced course includes placement assistance with broking firms and fintech companies.",
  },
  {
    q: "Are online classes available?",
    a: "Yes, we offer both online and offline batches. Contact us to know about current batch availability.",
  },
  {
    q: "What is the refund policy?",
    a: "We offer a full refund within 7 days of joining if you're not satisfied with the course quality.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "L&T Share Market Institute",
  image: "https://ltsharemarketinstitute.com/og-image.png",
  url: "https://ltsharemarketinstitute.com",
  telephone: "+91-9XXXXXXXXX",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pune",
    addressLocality: "Pune",
    addressRegion: "MH",
    postalCode: "411001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.5204,
    longitude: 73.8567,
  },
  openingHours: "Mo-Sa 09:00-19:00",
  priceRange: "₹₹",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* ============ HERO SECTION ============ */}
      <section
        className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden chart-bg"
        aria-label="Hero section"
      >
        {/* Background glows */}
        <div className="hero-glow bg-blue-brand/20 top-[-100px] left-[-200px]" />
        <div className="hero-glow bg-green-profit/10 bottom-[-100px] right-[-200px]" />

        {/* Floating chart SVG decoration */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-10 pointer-events-none hidden xl:block">
          <svg viewBox="0 0 600 400" className="w-full h-full" aria-hidden="true">
            <polyline
              points="0,300 80,250 160,270 240,180 320,200 400,120 480,140 560,60 600,80"
              fill="none"
              stroke="#1A6BFF"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polyline
              points="0,350 80,320 160,340 240,260 320,280 400,200 480,210 560,150 600,140"
              fill="none"
              stroke="#00D26A"
              strokeWidth="2"
              strokeDasharray="8 4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="container-width relative z-10 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="text-center lg:text-left">
              {/* Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-brand/10 border border-blue-brand/30 rounded-full text-blue-light text-sm font-medium mb-6 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-green-profit animate-pulse" />
                Pune&apos;s #1 Stock Market Institute
              </div>

              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 animate-slide-up">
                Learn{" "}
                <span className="gradient-text">Stock Market</span>
                <br />
                Trading from{" "}
                <span className="text-green-profit">Experts</span>
              </h1>

              <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Join <strong className="text-white">1000+ students</strong> from Pune who are
                trading profitably. From beginner basics to advanced options strategies — we
                teach it all with{" "}
                <strong className="text-green-profit">live market sessions</strong>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link href="/demo" className="btn-primary text-base px-8 py-4 animate-glow-pulse">
                  <PlayCircle className="w-5 h-5" />
                  Book FREE Demo Class
                </Link>
                <a
                  href={buildWhatsAppUrl(WHATSAPP_MESSAGES.demo)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-base px-8 py-4"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
                {["SEBI Compliant", "Live Trading", "Certificate", "Placement Support"].map(
                  (item) => (
                    <span
                      key={item}
                      className="flex items-center gap-1.5 text-slate-400 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-green-profit" />
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Right: Lead Form */}
            <div className="w-full max-w-md mx-auto lg:max-w-none">
              <LeadForm
                title="Book Your FREE Demo Class"
                subtitle="500+ people joined last month. Don't miss out!"
                source="homepage_hero"
              />
              <p className="text-center text-slate-600 text-xs mt-3">
                ⭐⭐⭐⭐⭐ Rated 4.9/5 by 1000+ students
              </p>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-16">
            <a
              href="#stats"
              className="flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors animate-bounce-slow"
              aria-label="Scroll down"
            >
              <span className="text-xs">Scroll to explore</span>
              <ChevronDown className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ============ STATS SECTION ============ */}
      <section id="stats" className="py-16 bg-navy-900/50 border-y border-white/5">
        <div className="container-width">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, suffix, label, icon: Icon }) => (
              <div key={label} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-brand/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-light" />
                  </div>
                </div>
                <div className="font-heading font-bold text-3xl md:text-4xl text-white mb-1">
                  <AnimatedCounter end={value} suffix={suffix} />
                </div>
                <p className="text-slate-400 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COURSES OVERVIEW ============ */}
      <section className="section-padding" id="courses">
        <div className="container-width">
          <div className="text-center mb-14">
            <span className="section-tag mb-4">
              <BookOpen className="w-4 h-4" />
              Our Courses
            </span>
            <h2 className="section-heading text-3xl md:text-4xl mt-4 mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Structured programs designed to take you from complete beginner to professional
              trader — at your own pace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <CourseCard key={course.id} course={course} featured={i === 1} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/courses" className="btn-secondary">
              View All Course Details
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section className="section-padding bg-navy-900/30" id="why-us">
        <div className="container-width">
          <div className="text-center mb-14">
            <span className="section-tag mb-4">
              <Award className="w-4 h-4" />
              Why L&T Institute
            </span>
            <h2 className="section-heading text-3xl md:text-4xl mt-4 mb-4">
              What Makes Us <span className="gradient-text">Different</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              We don&apos;t just teach theory — we teach you how to trade real money in real
              markets with proper risk management.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map(({ icon: Icon, title, description, color, bg }) => (
              <div
                key={title}
                className="glass-card p-6 card-hover group"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <h3 className="font-heading font-semibold text-white text-lg mb-2">
                  {title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS PREVIEW ============ */}
      <section className="section-padding" id="testimonials">
        <div className="container-width">
          <div className="text-center mb-14">
            <span className="section-tag mb-4">
              <Star className="w-4 h-4" />
              Student Success Stories
            </span>
            <h2 className="section-heading text-3xl md:text-4xl mt-4 mb-4">
              Real Results from <span className="text-gold">Real Students</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Don&apos;t take our word for it. See what our 1000+ students from Pune say about
              their trading journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/testimonials" className="btn-secondary">
              Read All 1000+ Reviews
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ INSTRUCTOR HIGHLIGHT ============ */}
      <section className="section-padding bg-navy-900/30" id="instructor">
        <div className="container-width">
          <div className="glass-card p-8 md:p-12 overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-brand/5 rounded-full blur-3xl" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="section-tag mb-4 inline-flex">
                  <TrendingUp className="w-4 h-4" />
                  Your Instructor
                </span>
                <h2 className="section-heading text-3xl md:text-4xl mt-4 mb-4">
                  Learn From a{" "}
                  <span className="gradient-text">Full-Time Trader</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                  Our head instructor has 5+ years of live trading experience across equity,
                  futures, and options markets. He&apos;s trained 1000+ students in Pune and
                  believes in practical, real-world education over boring theory.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { label: "Years Experience", value: "5+" },
                    { label: "Students Trained", value: "1000+" },
                    { label: "Avg Rating", value: "4.9★" },
                    { label: "Success Rate", value: "95%" },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="font-heading font-bold text-2xl text-white mb-0.5">
                        {value}
                      </div>
                      <div className="text-slate-500 text-xs">{label}</div>
                    </div>
                  ))}
                </div>

                <Link href="/instructor" className="btn-primary">
                  Meet Our Instructor
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Instructor Visual */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-blue-brand/20 to-green-profit/20 border border-white/10 flex items-center justify-center float-animation">
                    <div className="text-center">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-green-600 mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white font-bold text-4xl font-heading">LT</span>
                      </div>
                      <p className="text-white font-semibold">Head Instructor</p>
                      <p className="text-slate-400 text-sm">5+ Years Experience</p>
                    </div>
                  </div>
                  {/* Floating badges */}
                  <div className="absolute -top-4 -right-4 bg-green-profit text-navy-900 text-xs font-bold px-3 py-1.5 rounded-full">
                    ⭐ 4.9/5 Rating
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-blue-brand text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    🎓 1000+ Students
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA SECTION ============ */}
      <section className="section-padding" id="cta">
        <div className="container-width">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-brand/20 to-green-profit/10 border border-blue-brand/30 p-8 md:p-14 text-center">
            {/* Decoration */}
            <div className="absolute inset-0 chart-bg opacity-30" />
            <div className="hero-glow bg-blue-brand/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6">
                <Zap className="w-4 h-4 fill-gold" />
                Limited Seats Available
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-4">
                Start Your Trading Journey{" "}
                <span className="gradient-text">Today</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
                Next batch starts soon. Book your FREE demo class now and experience the
                quality of teaching before you enroll.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demo" className="btn-primary text-base px-10 py-4">
                  <PlayCircle className="w-5 h-5" />
                  Book FREE Demo Class
                </Link>
                <a
                  href={buildWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-base px-10 py-4"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BLOG PREVIEW ============ */}
      <section className="section-padding bg-navy-900/30" id="blog">
        <div className="container-width">
          <div className="text-center mb-14">
            <span className="section-tag mb-4">
              <BookOpen className="w-4 h-4" />
              Trading Knowledge
            </span>
            <h2 className="section-heading text-3xl md:text-4xl mt-4 mb-4">
              Learn From Our Free{" "}
              <span className="gradient-text">Trading Blog</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Expert articles, strategies, and market insights — completely free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/blog" className="btn-secondary">
              Read All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ FAQ SECTION ============ */}
      <section className="section-padding" id="faq">
        <div className="container-width max-w-3xl">
          <div className="text-center mb-14">
            <h2 className="section-heading text-3xl md:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-lg">
              Everything you need to know before joining L&T Share Market Institute.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map(({ q, a }, i) => (
              <details
                key={i}
                className="glass-card group"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-semibold text-white text-sm md:text-base pr-4">{q}</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-slate-400 text-sm mb-4">
              Have more questions? We&apos;re here to help!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
              <a
                href={buildWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle className="w-4 h-4" />
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
