import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  FileText,
  ReceiptIndianRupee,
  ShieldCheck,
  Calculator,
  Building2,
  Users,
  TrendingUp,
  ClipboardCheck,
  ArrowRight,
} from 'lucide-react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import UpdatesPreview from '@/components/home/UpdatesPreview';
import InsightsPreview from '@/components/home/InsightsPreview';
import StatsSection from '@/components/home/StatsSection';
import ValueProposition from '@/components/home/ValueProposition';
import ServiceGrid from '@/components/home/ServiceGrid';
import Script from 'next/script';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://manicoca.com';

export const metadata: Metadata = {
  title: 'Chartered Accountants in Bengaluru | Tax, Audit & Compliance',
  description: 'Professional chartered accountancy firm in Bengaluru, Karnataka. Comprehensive income tax compliance, GST, statutory audit, accounting, and corporate regulatory services. ICAI compliant, informational only.',
  keywords: 'chartered accountants Bengaluru Bangalore, CA firm Bengaluru, tax compliance, GST, audit services, income tax, corporate compliance, accounting services Karnataka',
  openGraph: {
    title: 'Chartered Accountants in Bengaluru | Tax, Audit & Compliance',
    description: 'Professional chartered accountancy firm in Bengaluru, Karnataka. Comprehensive income tax compliance, GST, statutory audit, accounting, and corporate regulatory services.',
    type: 'website',
    url: siteUrl,
  },
  alternates: {
    canonical: siteUrl,
  },
};

const practiceAreas = [
  {
    icon: FileText,
    title: 'Income-tax compliance & advisory',
    description: 'Comprehensive tax planning, return filing, and advisory services for individuals and entities.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: ReceiptIndianRupee,
    title: 'GST compliance',
    description: 'Registration, return filing, reconciliation, and advisory for goods and services tax matters.',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: ShieldCheck,
    title: 'Audit & assurance',
    description: 'Statutory, tax, and internal audit services maintaining regulatory compliance.',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: Calculator,
    title: 'Accounting & MIS',
    description: 'Bookkeeping, financial statements, and management information system support.',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    icon: Building2,
    title: 'ROC / Company law compliances',
    description: 'Incorporation, annual filings, and ongoing corporate regulatory compliance.',
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    icon: Users,
    title: 'Payroll & TDS compliance',
    description: 'Payroll processing, tax deduction at source computation, and filing requirements.',
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    iconColor: 'text-pink-600',
  },
  {
    icon: TrendingUp,
    title: 'Business advisory',
    description: 'Financial planning, budgeting, and strategic business guidance.',
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
  {
    icon: ClipboardCheck,
    title: 'Internal controls & process review',
    description: 'Assessment and enhancement of internal control systems and operational processes.',
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Hero />

      {/* Value Proposition */}
      <ValueProposition />

      {/* Practice Areas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="section-heading">
            <div className="section-badge mb-4">
              <span>Our Services</span>
            </div>
            <h2 className="section-title">
              Professional Services
            </h2>
            <p className="section-subtitle">
              Comprehensive professional services across direct taxation, indirect taxation (GST), audit and assurance, accounting, corporate compliance, and advisory domains. Serving clients in Bengaluru, Karnataka and across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((area, index) => (
              <ServiceCard
                key={index}
                title={area.title}
                description={area.description}
                icon={area.icon}
                href="/services"
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="btn-primary inline-flex items-center gap-2"
            >
              View all services
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <StatsSection />
      </section>

      {/* Service Coverage Grid */}
      <ServiceGrid />

      {/* How Engagement Works */}
      <section className="py-12 md:py-16 bg-neutral-50 relative overflow-hidden">
        <div className="absolute -top-12 right-10 h-72 w-72 rounded-full bg-primary-50/70 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-primary-100/40 blur-3xl" />
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <div className="section-badge mb-4">
              <span>Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              How Engagement Works
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              A structured, transparent approach to professional service delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                number: '1',
                title: 'Initial Enquiry',
                description: 'Submit your enquiry through our contact form, email, or WhatsApp. Share basic details about your requirements.'
              },
              {
                number: '2',
                title: 'Preliminary Discussion',
                description: 'We assess the scope, our competence, independence, and any conflict considerations before proceeding.'
              },
              {
                number: '3',
                title: 'Engagement Letter',
                description: 'Upon acceptance, we provide a formal engagement letter outlining scope, timeline, deliverables, and fee structure.'
              },
              {
                number: '4',
                title: 'Service Delivery',
                description: 'Work is performed with regular communication, quality checks, and timely delivery of agreed outputs.'
              }
            ].map((step, index) => (
              <div key={index} className="group relative">
                <div className="glass-card p-6 border-2 border-neutral-200/70 shadow-sm hover:shadow-xl hover:border-primary-300/70 hover:-translate-y-2 transition-all duration-300 h-full bg-gradient-to-br from-white via-white to-neutral-50/30">
                  <div className="absolute -top-16 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-primary-100/60 via-white to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                  {/* Enhanced gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 via-primary-50/0 to-transparent group-hover:from-primary-50/40 group-hover:via-primary-50/20 group-hover:to-transparent transition-all duration-300"></div>
                  
                  <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-primary-100 to-primary-50 border-2 border-primary-200 text-primary-700 flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:border-primary-400 transition-all duration-300">
                    {step.number}
                  </div>
                  <h3 className="relative z-10 text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-700 transition-colors duration-300" style={{ fontFamily: 'var(--font-serif-pro), Georgia, serif', letterSpacing: '-0.015em', lineHeight: '1.3' }}>
                    {step.title}
                  </h3>
                  <p className="relative z-10 text-sm text-neutral-600 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif', lineHeight: '1.7' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-neutral-600 max-w-3xl mx-auto">
              <strong>Note:</strong> Preliminary discussions or website enquiries do not constitute engagement acceptance or create any professional relationship. Services are provided subject to formal engagement terms.
            </p>
          </div>
        </div>
      </section>

      {/* Document Security & Confidentiality */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="bg-gradient-to-br from-primary-50 via-primary-50/80 to-primary-100 rounded-2xl p-8 md:p-12 border-2 border-primary-200 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary-700 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-2" style={{ fontFamily: 'var(--font-serif-pro), Georgia, serif', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                  Document Security & Confidentiality
                </h2>
                <p className="text-neutral-700 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif', lineHeight: '1.75' }}>
                  All client information and documents are handled with strict confidentiality protocols in accordance with regulatory requirements and applicable guidelines.
                </p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-neutral-700">
              <div className="flex items-start gap-2">
                <span className="text-primary-700 font-bold">•</span>
                <p>Access to client data is limited to engagement team members on a need-to-know basis</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary-700 font-bold">•</span>
                <p>Physical and digital documents are stored securely with appropriate access controls</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary-700 font-bold">•</span>
                <p>Confidentiality obligations continue beyond the term of engagement</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary-700 font-bold">•</span>
                <p>We maintain regulatory compliance for data security and client privacy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Updates Preview */}
      <UpdatesPreview />

      {/* Insights Preview */}
      <InsightsPreview />

      {/* CTA Section */}
      <section className="relative section-padding bg-primary-900 text-white overflow-hidden">
        {/* Enhanced Background with Consistent Design */}
        <div className="absolute inset-0 z-0">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 via-primary-900 to-primary-950" />
          
          {/* Animated Gradient Orbs */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary-700/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary-800/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.7s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl"></div>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
          
          {/* Subtle Shimmer */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
        </div>

        <div className="container-custom text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <span className="text-sm font-semibold text-white">Let&apos;s Connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif-pro), Georgia, serif', letterSpacing: '-0.025em', lineHeight: '1.15' }}>
            Need Professional Assistance?
          </h2>
          <p className="text-xl text-neutral-200 mb-10 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif', lineHeight: '1.75' }}>
            For enquiries regarding tax, audit, accounting, or compliance matters, you may reach out to us.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center px-10 py-5 bg-white text-primary-900 rounded-lg hover:bg-neutral-100 active:bg-neutral-200 transition-all font-bold text-lg shadow-2xl touch-manipulation"
            style={{ minHeight: '44px' }}
          >
            Get in Touch
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-custom py-10 md:py-12">
          <div className="glass-card border border-primary-100/60 bg-gradient-to-r from-white via-primary-50/40 to-white px-6 py-6 md:px-8 md:py-7 shadow-lg">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="section-badge mb-3">
                  <span>ICAI Compliance Notice</span>
                </div>
                <p className="text-sm text-neutral-700 max-w-2xl">
                  This website is maintained in accordance with ICAI guidelines and is for informational purposes only. Professional services are offered only through formal engagement.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/disclaimer" className="btn-secondary">
                  Read Disclaimer
                </Link>
                <Link href="/terms" className="btn-secondary">
                  Terms of Use
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Schema for Homepage */}
      <Script
        id="schema-breadcrumb-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
              }
            ]
          })
        }}
      />
    </div>
  );
}
