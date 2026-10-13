import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight, TrendingUp, Newspaper } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Stock Market Blog — Trading Tips, Strategies & Education | L&T Institute Pune",
  description:
    "Free stock market education — learn technical analysis, options trading, risk management, and more. Expert articles from L&T Share Market Institute, Pune.",
  alternates: { canonical: "https://ltsharemarketinstitute.com/blog" },
};

const categories = [
  "All",
  "Beginner Guide",
  "Technical Analysis",
  "Options Trading",
  "F&O Trading",
  "Trading Psychology",
];

export default function BlogPage() {
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
              <li className="text-slate-300">Blog</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-brand/10 border border-blue-brand/30 rounded-full text-blue-light text-sm font-medium mb-6">
            <Newspaper className="w-4 h-4" />
            Free Stock Market Education
          </div>

          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4 mt-4">
            Trading Knowledge{" "}
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Expert articles on stock market trading, technical analysis, options strategies,
            and more — completely free from L&T Share Market Institute, Pune.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container-width">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-1.5 rounded-full text-xs font-medium glass-card text-slate-400 border-white/10"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / WhatsApp CTA */}
      <section className="section-padding bg-navy-900/30">
        <div className="container-width">
          <div className="glass-card p-8 md:p-12 text-center border-blue-brand/20 relative overflow-hidden">
            <div className="hero-glow bg-blue-brand/10 top-0 left-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <TrendingUp className="w-10 h-10 text-blue-light mx-auto mb-4" />
              <h2 className="font-heading font-bold text-3xl text-white mb-3">
                Get Daily Market Tips on WhatsApp
              </h2>
              <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
                Join our WhatsApp channel for free daily market analysis, chart setups,
                and trading tips from our expert instructor.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a
                  href="https://wa.me/919XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-base px-8 py-4"
                >
                  <BookOpen className="w-5 h-5" />
                  Join WhatsApp Channel
                </a>
                <Link href="/demo" className="btn-secondary text-base px-8 py-4">
                  Book Free Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
