import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { BlogPost } from "@/lib/blog-data";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const categoryColors: Record<string, string> = {
    "Beginner Guide": "text-green-profit bg-green-profit/10 border-green-profit/20",
    "Technical Analysis": "text-blue-light bg-blue-brand/10 border-blue-brand/20",
    "Options Trading": "text-gold bg-gold/10 border-gold/20",
    "F&O Trading": "text-purple-400 bg-purple-400/10 border-purple-400/20",
    "Trading Psychology": "text-pink-400 bg-pink-400/10 border-pink-400/20",
  };

  const categoryStyle =
    categoryColors[post.category] ||
    "text-slate-400 bg-white/5 border-white/10";

  return (
    <article className="glass-card overflow-hidden card-hover group flex flex-col h-full">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <span
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${categoryStyle}`}
          >
            <Tag className="w-2.5 h-2.5" />
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-slate-500 text-xs mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>

        <h3 className="font-heading font-bold text-white text-base leading-snug mb-2 group-hover:text-blue-light transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 flex-1">
          {post.description}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 flex items-center gap-1.5 text-blue-light text-sm font-medium hover:text-white transition-colors group/link"
        >
          Read Full Article
          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
