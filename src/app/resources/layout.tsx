import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://manicoca.com';

export const metadata: Metadata = {
  title: 'Resources - Tax Updates, Insights & Downloads',
  description: 'Access regulatory updates, tax insights, and downloadable resources from M MANI & CO. Stay informed about tax laws, GST updates, and compliance requirements.',
  keywords: 'tax updates Bengaluru, GST updates, tax insights, regulatory updates, compliance resources, tax articles, CA resources Bengaluru Bangalore',
  openGraph: {
    title: 'Resources - Tax Updates & Insights',
    description: 'Regulatory updates, tax insights, and downloadable resources for businesses and individuals',
    type: 'website',
    url: `${siteUrl}/resources`,
  },
  alternates: {
    canonical: `${siteUrl}/resources`,
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
