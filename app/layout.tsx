import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ExitPopup from "@/components/ExitPopup";

export const metadata: Metadata = {
  metadataBase: new URL("https://ltsharemarketinstitute.com"),
  title: {
    default: "Stock Market Course in Pune | L&T Share Market Institute",
    template: "%s | L&T Share Market Institute Pune",
  },
  description:
    "Learn stock market trading from experts in Pune. Join L&T Share Market Institute for beginner to advanced courses, options trading, and live market sessions. Free demo class available.",
  keywords: [
    "stock market course pune",
    "trading institute pune",
    "share market classes pune",
    "options trading course pune",
    "stock market training pune",
    "L&T share market institute",
    "technical analysis course pune",
    "equity trading course",
    "SEBI compliant course",
    "free demo stock market class",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ltsharemarketinstitute.com",
    siteName: "L&T Share Market Institute",
    title: "Stock Market Course in Pune | L&T Share Market Institute",
    description:
      "Pune's premier stock market institute. Beginner to advanced courses. 1000+ students trained. Free demo class available.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "L&T Share Market Institute Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stock Market Course in Pune | L&T Share Market Institute",
    description:
      "Learn stock market trading from experts in Pune. Free demo class available.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "L&T Share Market Institute",
  url: "https://ltsharemarketinstitute.com",
  logo: "https://ltsharemarketinstitute.com/logo.png",
  description:
    "Pune's premier SEBI-compliant stock market trading institute offering beginner, advanced, and options trading courses.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pune, Maharashtra",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411001",
    addressCountry: "IN",
  },
  telephone: "+91-9XXXXXXXXX",
  email: "info@ltsharemarketinstitute.com",
  sameAs: [
    "https://youtube.com/@ltsharemarketinstitute",
    "https://instagram.com/ltsharemarketinstitute",
    "https://facebook.com/ltsharemarketinstitute",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="bg-navy-950 text-slate-200 antialiased">
        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <ExitPopup />
      </body>
    </html>
  );
}
