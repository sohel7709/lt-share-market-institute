# L&T Share Market Institute — Next.js Website

A premium, SEO-optimized stock market institute website for **L&T Share Market Institute, Pune**.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom design tokens
- **Language**: TypeScript
- **Email**: EmailJS (client-side, no backend needed)
- **Lead Flow**: Form → EmailJS → WhatsApp redirect

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
Copy `.env.local.example` to `.env.local`:
```bash
cp .env.local.example .env.local
```

Then fill in:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
NEXT_PUBLIC_WHATSAPP_NUMBER=919XXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://ltsharemarketinstitute.com
```

### 3. Update WhatsApp Number
Edit `lib/whatsapp.ts` — replace `919XXXXXXXXX` with actual number (91 + 10-digit number).

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
/app                      → All pages (App Router)
  page.tsx                → Homepage
  /courses/page.tsx       → Courses page
  /demo/page.tsx          → FREE Demo (main lead page)
  /testimonials/page.tsx  → Student reviews
  /instructor/page.tsx    → Instructor profile
  /blog/page.tsx          → Blog listing
  /blog/[slug]/page.tsx   → Blog detail (SSG)
  /contact/page.tsx       → Contact + Google Maps
  layout.tsx              → Root layout
  globals.css             → Global styles
  sitemap.ts              → Auto-generated sitemap.xml
  robots.ts               → robots.txt

/components               → Reusable components
  Navbar.tsx              → Sticky navbar with mobile drawer
  Footer.tsx              → Footer with links + social
  LeadForm.tsx            → Form with validation + EmailJS + WhatsApp
  WhatsAppButton.tsx      → Floating WhatsApp button
  CourseCard.tsx          → Course card with dual CTA
  TestimonialCard.tsx     → Review card with star rating
  BlogCard.tsx            → Blog preview card
  AnimatedCounter.tsx     → Intersection observer counter
  ExitPopup.tsx           → Exit intent popup
  ScrollProgress.tsx      → Reading progress bar

/lib                      → Data and utilities
  courses-data.ts         → All course information
  testimonials-data.ts    → Student testimonials
  blog-data.ts            → 6 SEO blog articles
  whatsapp.ts             → WhatsApp URL builder
```

---

## 📧 EmailJS Setup

1. Go to [emailjs.com](https://www.emailjs.com/) → Create free account
2. Add Email Service (Gmail/Outlook)
3. Create Email Template with these variables:
   - `{{from_name}}` — Student name
   - `{{from_phone}}` — Phone number
   - `{{from_city}}` — City
   - `{{message}}` — Full message
4. Copy Service ID, Template ID, Public Key → paste in `.env.local`

---

## 📱 WhatsApp Setup

In `lib/whatsapp.ts`, change:
```ts
export const WHATSAPP_NUMBER = "919XXXXXXXXX"; 
// Replace with: "91" + your 10-digit number
// Example: "919876543210"
```

---

## 🚀 Deployment on Hostinger

### Build for Production
```bash
npm run build
```

### For Static Export (upload to hosting)
Add to `next.config.mjs`:
```js
const nextConfig = {
  output: 'export',
  // ...existing config
};
```
Then run `npm run build` → upload the `out/` folder to Hostinger.

### For Node.js Hosting
Upload entire project, run `npm install && npm run build && npm start`.

---

## 🔍 SEO Features

- ✅ Metadata API on every page
- ✅ Organization JSON-LD schema
- ✅ LocalBusiness JSON-LD schema  
- ✅ Article JSON-LD on blog posts
- ✅ Course JSON-LD schema
- ✅ Auto-generated sitemap.xml
- ✅ robots.txt
- ✅ Semantic HTML (article, section, nav, main)
- ✅ Alt tags on all images
- ✅ Pune city keywords throughout
- ✅ Canonical URLs
- ✅ Open Graph + Twitter cards
- ✅ Mobile-first responsive

---

## 🎨 Design System

Colors:
- Navy: `#040812`, `#0A0F1E`, `#0D1528`
- Blue: `#1A6BFF` (brand), `#4D8FFF` (light)
- Green: `#00D26A` (profit/CTA)
- Gold: `#F5C518` (ratings)

Fonts: Inter + Space Grotesk (Google Fonts)

---

## 📞 Contact Info to Update

Search and replace `9XXXXXXXXX` with actual phone number in:
- `components/Navbar.tsx`
- `components/Footer.tsx`
- `lib/whatsapp.ts`
- `app/contact/page.tsx`

---

Made with ❤️ for L&T Share Market Institute, Pune
