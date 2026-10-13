"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, IndianRupee, ArrowRight, MessageCircle, CheckCircle } from "lucide-react";
import { Course } from "@/lib/courses-data";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

interface CourseCardProps {
  course: Course;
  featured?: boolean;
}

export default function CourseCard({ course, featured = false }: CourseCardProps) {
  const [expanded, setExpanded] = useState(false);

  const levelColors = {
    Beginner: "text-green-profit bg-green-profit/10 border-green-profit/30",
    Intermediate: "text-gold bg-gold/10 border-gold/30",
    Advanced: "text-blue-light bg-blue-brand/10 border-blue-brand/30",
  };

  const whatsappMsg = {
    beginner: WHATSAPP_MESSAGES.beginner,
    advanced: WHATSAPP_MESSAGES.advanced,
    options: WHATSAPP_MESSAGES.options,
  };

  const msgKey = course.id === "1" ? "beginner" : course.id === "2" ? "advanced" : "options";

  return (
    <div
      className={`glass-card overflow-hidden card-hover relative flex flex-col ${
        featured ? "border-blue-brand/40 shadow-blue-glow" : ""
      }`}
    >
      {/* Popular Badge */}
      {course.badge && (
        <div
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${course.badgeColor}`}
        >
          {course.badge}
        </div>
      )}

      {/* Card Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-start gap-4">
          <div className="text-4xl">{course.icon}</div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <span
                className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${levelColors[course.level]}`}
              >
                {course.level}
              </span>
            </div>
            <h3 className="font-heading font-bold text-white text-lg leading-tight mb-1 pr-20">
              {course.title}
            </h3>
            <p className="text-slate-400 text-sm">{course.subtitle}</p>
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mt-4">{course.description}</p>
      </div>

      {/* Pricing & Duration */}
      <div className="px-6 py-4 bg-white/2 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-slate-500" />
          <span className="text-slate-300 text-sm font-medium">{course.duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-500 text-sm line-through">{course.originalFees}</span>
          <div className="flex items-center gap-0.5">
            <IndianRupee className="w-4 h-4 text-green-profit" />
            <span className="text-green-profit font-bold text-lg">
              {course.fees.replace("₹", "")}
            </span>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="p-6 flex-1">
        <h4 className="text-white text-sm font-semibold mb-3">What You&apos;ll Get:</h4>
        <ul className="space-y-2">
          {course.highlights.slice(0, expanded ? undefined : 4).map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
              <CheckCircle className="w-4 h-4 text-green-profit flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
        {course.highlights.length > 4 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-3 text-blue-light text-xs font-medium hover:text-white transition-colors"
          >
            {expanded ? "Show less ↑" : `+${course.highlights.length - 4} more benefits ↓`}
          </button>
        )}
      </div>

      {/* CTA Buttons */}
      <div className="p-6 pt-0 flex gap-3">
        <Link
          href="/demo"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-blue-brand text-white text-sm font-semibold hover:bg-blue-light transition-all duration-200 hover:shadow-blue-glow"
        >
          Book Demo
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <a
          href={buildWhatsAppUrl(whatsappMsg[msgKey])}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-green-profit/10 border border-green-profit/30 text-green-profit text-sm font-semibold hover:bg-green-profit hover:text-navy-900 transition-all duration-200"
          aria-label={`WhatsApp about ${course.title}`}
        >
          <MessageCircle className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
