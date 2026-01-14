import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://manicoca.com';

export const metadata: Metadata = {
  title: 'Tax & Compliance Tools',
  description: 'Privacy-first calculators and tools for income tax, GST, TDS, and compliance planning. All calculations happen locally in your browser. Indicative estimates only, not professional advice.',
  keywords: 'tax calculator Bengaluru, GST calculator, income tax calculator, TDS calculator, HRA calculator, tax tools, compliance tools',
  openGraph: {
    title: 'Tax & Compliance Tools',
    description: 'Privacy-first calculators and tools for income tax, GST, TDS, and compliance planning',
    type: 'website',
    url: `${siteUrl}/tools`,
  },
  alternates: {
    canonical: `${siteUrl}/tools`,
  },
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
