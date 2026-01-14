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
  title: "ICAI Registered Chartered Accountants in Bengaluru | Tax, Audit & Compliance - M MANI & CO",
  description: "ICAI registered chartered accountancy firm in Bengaluru, Karnataka. Professional income tax compliance, GST, statutory audit, accounting, and corporate regulatory services. Trusted CA firm with expertise in tax planning, audit, and compliance.",
  keywords: "ICAI registered CA firm Bengaluru, chartered accountants Bengaluru, CA firm Bengaluru, tax compliance, GST, audit services, income tax, corporate compliance, accounting services Karnataka, ICAI registered firm",
  authors: [{ name: "M MANI & CO" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "M MANI & CO - ICAI Registered Chartered Accountants",
    title: "ICAI Registered Chartered Accountants in Bengaluru | M MANI & CO",
    description: "ICAI registered professional tax, audit, accounting, and compliance services in Bengaluru, Karnataka",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://cur-mmanico.vercel.app",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${sourceSerif.variable}`}>
      <head>
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
      </body>
    </html>
  );
}
