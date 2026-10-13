import { Star, BadgeCheck, TrendingUp } from "lucide-react";
import { Testimonial } from "@/lib/testimonials-data";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="star-rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "text-gold fill-gold"
              : "text-slate-600"
          }`}
        />
      ))}
    </div>
  );
}

function AvatarCircle({ initials, name }: { initials: string; name: string }) {
  // Generate a consistent color based on name
  const colors = [
    "from-blue-600 to-blue-400",
    "from-purple-600 to-purple-400",
    "from-green-600 to-green-400",
    "from-orange-600 to-orange-400",
    "from-pink-600 to-pink-400",
    "from-teal-600 to-teal-400",
  ];
  const colorIndex =
    name.charCodeAt(0) % colors.length;

  return (
    <div
      className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors[colorIndex]} flex items-center justify-center flex-shrink-0`}
    >
      <span className="text-white font-bold text-sm">{initials}</span>
    </div>
  );
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="glass-card p-6 card-hover flex flex-col h-full">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <AvatarCircle initials={testimonial.avatar} name={testimonial.name} />
          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="font-semibold text-white text-sm">{testimonial.name}</h4>
              {testimonial.verified && (
                <BadgeCheck className="w-4 h-4 text-blue-light" />
              )}
            </div>
            <p className="text-slate-500 text-xs">{testimonial.city}</p>
          </div>
        </div>
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Quote */}
      <div className="flex-1">
        <p className="text-slate-300 text-sm leading-relaxed italic">
          &quot;{testimonial.feedback}&quot;
        </p>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
        <span className="text-xs text-slate-500 bg-white/5 px-2.5 py-1 rounded-full">
          {testimonial.course.split(" ").slice(0, 2).join(" ")} Course
        </span>
        <div className="flex items-center gap-1.5 text-green-profit">
          <TrendingUp className="w-3.5 h-3.5" />
          <span className="text-xs font-semibold">{testimonial.profit}</span>
        </div>
      </div>
    </div>
  );
}
