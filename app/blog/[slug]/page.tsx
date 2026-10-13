import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag, BookOpen } from "lucide-react";
import { getBlogBySlug, getAllSlugs, blogPosts } from "@/lib/blog-data";
import ScrollProgress from "@/components/ScrollProgress";
import BlogCard from "@/components/BlogCard";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogBySlug(params.slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: {
      canonical: `https://ltsharemarketinstitute.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["L&T Share Market Institute"],
      images: [{ url: post.image, alt: post.title }],
    },
  };
}

export default function BlogDetailPage({ params }: Props) {
  const post = getBlogBySlug(params.slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const formattedDate = new Date(post.date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.image,
    author: {
      "@type": "Organization",
      name: "L&T Share Market Institute",
    },
    publisher: {
      "@type": "Organization",
      name: "L&T Share Market Institute",
      logo: {
        "@type": "ImageObject",
        url: "https://ltsharemarketinstitute.com/logo.png",
      },
    },
    datePublished: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://ltsharemarketinstitute.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ScrollProgress />

      {/* Article Hero */}
      <section className="pt-28 pb-0">
        <div className="container-width max-w-4xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-slate-500">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              </li>
              <li>/</li>
              <li className="text-slate-300 truncate max-w-48">{post.title}</li>
            </ol>
          </nav>

          {/* Category + Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-blue-brand/10 border border-blue-brand/20 text-blue-light">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-slate-500 text-sm">
              <Calendar className="w-3.5 h-3.5" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1 text-slate-500 text-sm">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            {post.description}
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative h-64 md:h-96 mb-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-950" />
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Main Content */}
            <article className="lg:col-span-3">
              {/* Mid-article CTA */}
              <div className="glass-card p-5 border-blue-brand/30 mb-8 flex items-center gap-4">
                <BookOpen className="w-10 h-10 text-blue-light flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">
                    Want to learn this in a live session?
                  </p>
                  <p className="text-slate-400 text-xs">
                    Book your FREE demo class at L&T Share Market Institute, Pune.
                  </p>
                </div>
                <Link href="/demo" className="btn-primary text-sm py-2 px-4 whitespace-nowrap">
                  Book Demo
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Article Body */}
              <div
                className="prose prose-invert prose-slate max-w-none
                  prose-headings:font-heading prose-headings:text-white 
                  prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                  prose-p:text-slate-400 prose-p:leading-relaxed
                  prose-strong:text-white prose-strong:font-semibold
                  prose-li:text-slate-400 prose-li:marker:text-blue-light
                  prose-a:text-blue-light prose-a:no-underline hover:prose-a:underline
                  prose-blockquote:border-blue-brand prose-blockquote:text-slate-400
                  prose-code:text-green-profit prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                  prose-hr:border-white/10"
                dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
              />

              {/* Tags */}
              <div className="mt-10 pt-6 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs text-slate-400 bg-white/5 border border-white/10"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Card */}
              <div className="mt-8 glass-card p-6 flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">LT</span>
                </div>
                <div>
                  <p className="text-white font-semibold">L&T Share Market Institute</p>
                  <p className="text-slate-500 text-xs mb-2">Stock Market Educators · Pune</p>
                  <p className="text-slate-400 text-sm">
                    Pune&apos;s premier SEBI-compliant stock market institute. Our instructors
                    are full-time traders with 5+ years of market experience.
                  </p>
                </div>
              </div>

              {/* Prev/Next Navigation */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {prevPost && (
                  <Link
                    href={`/blog/${prevPost.slug}`}
                    className="glass-card p-4 hover:border-white/20 transition-all group"
                  >
                    <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                      <ArrowLeft className="w-3 h-3" />
                      Previous Article
                    </div>
                    <p className="text-white text-sm font-medium group-hover:text-blue-light transition-colors line-clamp-2">
                      {prevPost.title}
                    </p>
                  </Link>
                )}
                {nextPost && (
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="glass-card p-4 hover:border-white/20 transition-all group sm:text-right"
                  >
                    <div className="flex items-center gap-2 text-slate-500 text-xs mb-1 sm:justify-end">
                      Next Article
                      <ArrowRight className="w-3 h-3" />
                    </div>
                    <p className="text-white text-sm font-medium group-hover:text-blue-light transition-colors line-clamp-2">
                      {nextPost.title}
                    </p>
                  </Link>
                )}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA Box */}
                <div className="glass-card p-6 border-blue-brand/30">
                  <h3 className="font-heading font-bold text-white mb-2">
                    🎓 Join Our Course
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Learn this topic live with expert guidance. Book your FREE demo class
                    today!
                  </p>
                  <Link href="/demo" className="btn-primary w-full justify-center text-sm">
                    Book FREE Demo
                  </Link>
                </div>

                {/* Recent Posts */}
                <div className="glass-card p-6">
                  <h3 className="font-heading font-semibold text-white mb-4">
                    More Articles
                  </h3>
                  <div className="space-y-3">
                    {blogPosts
                      .filter((p) => p.slug !== post.slug)
                      .slice(0, 4)
                      .map((p) => (
                        <Link
                          key={p.id}
                          href={`/blog/${p.slug}`}
                          className="block text-slate-400 text-xs hover:text-white transition-colors leading-snug line-clamp-2"
                        >
                          → {p.title}
                        </Link>
                      ))}
                  </div>
                </div>

                {/* Contact box */}
                <div className="glass-card p-6 border-green-profit/20">
                  <h3 className="font-heading font-semibold text-white mb-2 text-sm">
                    💬 Have Questions?
                  </h3>
                  <p className="text-slate-400 text-xs mb-3">
                    Ask our expert instructor directly on WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/919XXXXXXXXX?text=Hi! I read your blog article and have a question."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full justify-center text-sm py-2"
                  >
                    Ask on WhatsApp
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="section-padding bg-navy-900/30">
        <div className="container-width">
          <h2 className="font-heading font-bold text-2xl text-white mb-8">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// Simple markdown to HTML converter (no external deps)
function markdownToHtml(markdown: string): string {
  return markdown
    .trim()
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code>$1</code>")
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>[\s\S]*?<\/li>)/g, "<ul>$1</ul>")
    .replace(/^\d+\. (.+)$/gm, "<li>$1</li>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/^(?!<[h|u|l|p])(.+)$/gm, "<p>$1</p>");
}
