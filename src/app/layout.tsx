import type { Metadata } from "next";
import { Inter, Playfair_Display, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-playfair',
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-serif-pro',
  weight: ['400', '600', '700'],
});

// SEO Configuration - Get site URL from environment variable
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://manicoca.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "M Mani & Co | Chartered Accountants in Bengaluru",
    template: "%s | M Mani & Co",
  },
  description: "M Mani & Co is a professional chartered accountancy firm in Bengaluru (Bangalore), Karnataka. Comprehensive income tax compliance, GST, statutory audit, accounting, and corporate regulatory services. ICAI compliant, informational only.",
  keywords: "chartered accountants Bengaluru, CA in Bengaluru, CA in Bangalore, CA firm Bengaluru Bangalore, tax compliance, GST, audit services, income tax, corporate compliance, accounting services Karnataka, chartered accountancy firm",
  authors: [{ name: "M MANI & CO" }],
  creator: "M MANI & CO",
  publisher: "M MANI & CO",
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "M MANI & CO - Chartered Accountants",
    title: "M Mani & Co | Chartered Accountants in Bengaluru",
    description: "M Mani & Co is a professional chartered accountancy firm in Bengaluru (Bangalore), Karnataka. Comprehensive income tax compliance, GST, statutory audit, accounting, and corporate regulatory services.",
    url: siteUrl,
    // Add Open Graph image when available
    // images: [
    //   {
    //     url: `${siteUrl}/og-image.jpg`,
    //     width: 1200,
    //     height: 630,
    //     alt: 'M MANI & CO - Chartered Accountants',
    //   },
    // ],
  },
  twitter: {
    card: "summary",
    title: "M Mani & Co | Chartered Accountants in Bengaluru",
    description: "M Mani & Co provides professional tax, audit, accounting, and compliance services in Bengaluru (Bangalore), Karnataka",
    // Add Twitter image when available
    // images: [`${siteUrl}/twitter-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Add verification codes when available
    // After setting up Google Search Console, add: google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  category: 'Professional Services',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover', // For iOS safe area support
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#004992' },
    { media: '(prefers-color-scheme: dark)', color: '#003366' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${sourceSerif.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon.png" />
        <link rel="shortcut icon" href="/icon.png" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        {/* Preload critical animations */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @media (prefers-reduced-motion: no-preference) {
              body {
                animation: fadeIn 0.3s ease-out;
              }
            }
          `
        }} />
        {/* JSON-LD Structured Data - SEO Backend Only */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "M MANI & CO",
              "legalName": "M MANI & CO",
              "alternateName": "M MANI & CO Chartered Accountants",
              "url": siteUrl,
              "logo": `${siteUrl}/ca-india-logo.png`,
              "description": "Professional chartered accountancy firm providing comprehensive tax, audit, accounting, and compliance services in Bengaluru, Karnataka, India.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Muji Square, 5th Floor, No. 164, 9th Main Road, HSR Layout",
                "addressLocality": "Bengaluru",
                "addressRegion": "Karnataka",
                "postalCode": "560102",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "12.9169",
                "longitude": "77.6413"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+919632818089",
                "contactType": "Customer Service",
                "email": "info@mmanico.com",
                "areaServed": "IN",
                "availableLanguage": ["en", "hi"]
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Bengaluru"
                },
                {
                  "@type": "State",
                  "name": "Karnataka"
                },
                {
                  "@type": "Country",
                  "name": "India"
                }
              ],
              "sameAs": [
                `${siteUrl}`,
                "https://g.page/m-mani-co"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              "name": "M MANI & CO",
              "description": "Professional chartered accountancy firm providing comprehensive tax, audit, accounting, and compliance services in Bengaluru, Karnataka.",
              "url": siteUrl,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Muji Square, 5th Floor, No. 164, 9th Main Road, HSR Layout",
                "addressLocality": "Bengaluru",
                "addressRegion": "Karnataka",
                "postalCode": "560102",
                "addressCountry": "IN"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Bengaluru"
                },
                {
                  "@type": "Country",
                  "name": "India"
                }
              ],
              "serviceType": [
                "Tax Compliance",
                "Income Tax Services",
                "GST Compliance",
                "Audit Services",
                "Statutory Audit",
                "Tax Audit",
                "Accounting Services",
                "Corporate Compliance",
                "ROC Compliance",
                "TDS Compliance"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "M MANI & CO - Chartered Accountants",
              "url": siteUrl,
              "description": "Professional chartered accountancy firm in Bengaluru, Karnataka providing tax, audit, accounting, and compliance services.",
              "publisher": {
                "@type": "Organization",
                "name": "M MANI & CO"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
