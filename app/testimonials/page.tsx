"use client";

import { useState } from "react";
import Link from "next/link";
import { Star, ArrowRight, Play, X } from "lucide-react";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/lib/testimonials-data";

type FilterCategory = "all" | "beginner" | "advanced" | "options";

const videoTestimonials = [
  {
    id: "1",
    name: "Priya Desai",
    city: "Pune",
    course: "Options Trading Specialist",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
    profit: "₹35,000/month",
  },
  {
    id: "2",
    name: "Vikas Joshi",
    city: "Pune",
    course: "Options Trading Specialist",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
    profit: "Full-time trader",
  },
];

export default function TestimonialsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const filters: { key: FilterCategory; label: string }[] = [
    { key: "all", label: "All Reviews" },
    { key: "beginner", label: "Beginner Course" },
    { key: "advanced", label: "Advanced Course" },
    { key: "options", label: "Options Course" },
  ];

  const filtered =
    activeFilter === "all"
      ? testimonials
      : testimonials.filter((t) => t.courseCategory === activeFilter);

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
              <li className="text-slate-300">Student Reviews</li>
            </ol>
          </nav>

          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-gold fill-gold" />
            ))}
          </div>

          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Real Students, <span className="gradient-text-gold">Real Results</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-6">
            Over 1000+ students from Pune have transformed their financial lives with L&T
            Share Market Institute. Read their authentic success stories.
          </p>

          {/* Rating summary */}
          <div className="inline-flex items-center gap-8 glass-card px-8 py-4 rounded-2xl">
            {[
              { value: "4.9/5", label: "Average Rating" },
              { value: "1000+", label: "Students" },
              { value: "98%", label: "Recommend Us" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-heading font-bold text-2xl text-white">{value}</div>
                <div className="text-slate-500 text-xs">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="section-padding bg-navy-900/30">
        <div className="container-width">
          <h2 className="font-heading font-bold text-2xl text-white text-center mb-8">
            Video Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {videoTestimonials.map((vt) => (
              <div key={vt.id} className="glass-card overflow-hidden card-hover">
                <div
                  className="relative h-48 cursor-pointer group"
                  onClick={() => setActiveVideo(vt.youtubeId)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={vt.thumbnail}
                    alt={`${vt.name} testimonial`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-navy-900/50 flex items-center justify-center group-hover:bg-navy-900/30 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-white font-semibold text-sm">{vt.name}</p>
                  <p className="text-slate-500 text-xs">{vt.city} · {vt.course}</p>
                  <p className="text-green-profit text-xs font-semibold mt-1">📈 {vt.profit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white hover:text-slate-300 transition-colors"
              aria-label="Close video"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="aspect-video rounded-2xl overflow-hidden bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Student testimonial video"
              />
            </div>
          </div>
        </div>
      )}

      {/* Written Testimonials */}
      <section className="section-padding">
        <div className="container-width">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {filters.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === key
                    ? "bg-blue-brand text-white shadow-blue-glow"
                    : "glass-card text-slate-400 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Testimonial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-slate-500 py-12">
              No testimonials for this filter yet.
            </p>
          )}

          {/* Bottom CTA */}
          <div className="mt-14 text-center">
            <h2 className="font-heading font-bold text-2xl text-white mb-3">
              Ready to Write Your Own Success Story?
            </h2>
            <p className="text-slate-400 mb-6">
              Join 1000+ students and start your profitable trading journey today.
            </p>
            <Link href="/demo" className="btn-primary text-base px-10 py-4">
              Book FREE Demo Class
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
