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

export const metadata: Metadata = {
  title: "Chartered Accountants in Bengaluru | Tax, Audit & Compliance - M MANI & CO",
  description: "Professional chartered accountancy firm in Bengaluru, Karnataka. Comprehensive income tax compliance, GST, statutory audit, accounting, and corporate regulatory services. Trusted CA firm with expertise in tax planning, audit, and compliance.",
  keywords: "chartered accountants Bengaluru, CA firm Bengaluru, tax compliance, GST, audit services, income tax, corporate compliance, accounting services Karnataka, chartered accountancy firm",
  authors: [{ name: "M MANI & CO" }],
  creator: "M MANI & CO",
  publisher: "M MANI & CO",
  metadataBase: new URL('https://cur-mmanico.vercel.app'),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "M MANI & CO - Chartered Accountants",
    title: "Chartered Accountants in Bengaluru | Tax, Audit & Compliance - M MANI & CO",
    description: "Professional chartered accountancy firm in Bengaluru, Karnataka. Comprehensive income tax compliance, GST, statutory audit, accounting, and corporate regulatory services.",
    url: "https://cur-mmanico.vercel.app",
    // Add Open Graph image when available
    // images: [
    //   {
    //     url: '/og-image.jpg',
    //     width: 1200,
    //     height: 630,
    //     alt: 'M MANI & CO - Chartered Accountants',
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chartered Accountants in Bengaluru | M MANI & CO",
    description: "Professional tax, audit, accounting, and compliance services in Bengaluru, Karnataka",
    // Add Twitter image when available
    // images: ['/twitter-image.jpg'],
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
    canonical: "https://cur-mmanico.vercel.app",
  },
  verification: {
    // Add verification codes when available
    // google: 'your-google-verification-code',
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
      </body>
    </html>
  );
}
