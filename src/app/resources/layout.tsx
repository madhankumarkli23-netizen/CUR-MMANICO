import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources - Tax Updates, Insights & Downloads | M MANI & CO',
  description: 'Access regulatory updates, tax insights, and downloadable resources from M MANI & CO. Stay informed about tax laws, GST updates, and compliance requirements.',
  keywords: 'tax updates, GST updates, tax insights, regulatory updates, compliance resources, tax articles, CA resources Bengaluru',
  openGraph: {
    title: 'Resources - Tax Updates & Insights | M MANI & CO',
    description: 'Regulatory updates, tax insights, and downloadable resources for businesses and individuals',
    type: 'website',
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
