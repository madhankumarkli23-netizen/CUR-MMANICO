import { Metadata } from 'next';
import ServiceAccordion from '@/components/services/ServiceAccordion';
import PageHero from '@/components/PageHero';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://manicoca.com';

export const metadata: Metadata = {
  title: 'Professional Services - Tax, Audit, Accounting & Compliance',
  description: 'Comprehensive chartered accountancy services including direct tax, indirect tax (GST), audit, accounting, corporate compliance, and advisory services for businesses and individuals in Bengaluru.',
  keywords: 'CA services Bengaluru Bangalore, tax services, GST services, audit services, accounting services, corporate compliance, ROC filing, TDS compliance',
  openGraph: {
    title: 'Professional Services - Tax, Audit, Accounting & Compliance',
    description: 'Comprehensive chartered accountancy services including tax, GST, audit, accounting, and corporate compliance',
    type: 'website',
    url: `${siteUrl}/services`,
  },
  alternates: {
    canonical: `${siteUrl}/services`,
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Professional Services"
        subtitle="Comprehensive chartered accountancy services across taxation, audit, accounting, and regulatory compliance"
      />

      {/* Services Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <ServiceAccordion />
        </div>
      </section>

      {/* Engagement Notice */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 border-2 border-neutral-200 shadow-md">
            <h3 className="text-lg font-bold text-neutral-900 mb-3" style={{ fontFamily: 'var(--font-serif-pro), Georgia, serif', letterSpacing: '-0.015em', lineHeight: '1.3' }}>
              Engagement Process
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed mb-4" style={{ fontFamily: 'var(--font-inter), sans-serif', lineHeight: '1.7' }}>
              Professional services are provided subject to formal engagement acceptance. Each engagement is assessed for competence, independence, and conflict considerations prior to acceptance. Service scope, timelines, and professional fees are determined on a case-by-case basis.
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif', lineHeight: '1.7' }}>
              For enquiries regarding any service listed above, you may reach out through our contact page. Preliminary discussions do not constitute engagement acceptance or create any professional relationship.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
