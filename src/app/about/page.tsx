import { Metadata } from 'next';
import { Shield, Clock, Users, CheckCircle2 } from 'lucide-react';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'About Us - Chartered Accountants in Bengaluru | M MANI & CO',
  description: 'Professional chartered accountancy firm in Bengaluru providing tax, audit, accounting, and compliance services. Learn about our practice, values, and approach to professional service delivery.',
  keywords: 'about CA firm Bengaluru, chartered accountants Bengaluru, professional CA services, tax audit accounting firm',
  openGraph: {
    title: 'About Us - M MANI & CO Chartered Accountants',
    description: 'Professional chartered accountancy firm in Bengaluru providing comprehensive tax, audit, accounting, and compliance services',
    type: 'website',
  },
  alternates: {
    canonical: 'https://cur-mmanico.vercel.app/about',
  },
};

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Adherence to professional ethics and transparent conduct in all engagements.',
  },
  {
    icon: CheckCircle2,
    title: 'Confidentiality',
    description: 'Strict protection of client information and data security measures.',
  },
  {
    icon: Clock,
    title: 'Due Care',
    description: 'Diligent application of professional knowledge and adherence to standards.',
  },
  {
    icon: Users,
    title: 'Responsiveness',
    description: 'Timely communication and attention to client requirements.',
  },
];

const serviceAreas = [
  'Direct taxation compliance and advisory',
  'Indirect taxation (GST) services',
  'Statutory and internal audit',
  'Accounting and financial reporting',
  'ROC and corporate law compliance',
  'Payroll and TDS management',
  'Business advisory and planning',
  'Internal control assessments',
];

export default function AboutPage() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="About Our Practice"
        subtitle="Professional chartered accountancy services with focus on integrity, confidentiality, and due care"
      />

      {/* Firm Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Firm Overview
            </h2>

            <div className="prose prose-lg max-w-none text-neutral-700 space-y-5">
              <p>
                We are a professional chartered accountancy firm providing services across taxation, audit, accounting, and regulatory compliance domains. Our practice serves individuals, businesses, and organizations requiring support in meeting their statutory and financial obligations.
              </p>

              <p>
                Our service portfolio encompasses direct tax compliance and advisory, indirect taxation (GST) services, statutory and internal audit, accounting and financial reporting, ROC and corporate law compliance, payroll and TDS management, and business advisory services.
              </p>

              <p>
                We operate from Bengaluru, Karnataka, and undertake engagements across India. All services are rendered in accordance with applicable laws, regulations, and regulatory requirements, including those prescribed by the Institute of Chartered Accountants of India (ICAI).
              </p>

              <p>
                Our approach to professional practice emphasizes structured service delivery, systematic documentation, and adherence to professional ethics. We maintain strict confidentiality protocols and apply due care in all engagements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Values */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="section-heading">
            <div className="inline-block px-4 py-2 bg-primary-100 border border-primary-200 rounded-full mb-4">
              <span className="text-sm font-semibold text-primary-800">Our Values</span>
            </div>
            <h2 className="section-title">
              Professional Values
            </h2>
            <p className="section-subtitle">
              Our approach to professional practice is guided by these core principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-6 text-center shadow-sm border-2 border-neutral-200 hover:shadow-lg hover:border-primary-200 hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-white to-neutral-50/30"
                >
                  <div className="bg-gradient-to-br from-primary-100 to-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary-200 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary-700 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-700 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
              Areas of Practice
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-neutral-700">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Reach */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Geographic Reach
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Based in Bengaluru, Karnataka, we serve clients locally and undertake remote engagements across India. Our practice model accommodates both in-person and virtual service delivery, depending on client requirements and engagement nature.
            </p>
          </div>
        </div>
      </section>

      {/* Service Delivery Framework Notice */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-neutral-50 to-white rounded-xl p-8 border-2 border-neutral-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-2 bg-primary-100 rounded-lg">
                <Shield className="w-6 h-6 text-primary-700" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-neutral-900 mb-3">
                  Service Delivery Framework
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed mb-3">
                  Our professional services are delivered through a structured framework that ensures quality, compliance, and client confidentiality. Each engagement is subject to formal acceptance procedures, including assessment of our technical competence, professional independence, and potential conflicts of interest.
                </p>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  All work is performed in compliance with applicable laws, regulations, and regulatory requirements. Service scope, deliverables, timelines, and terms are established through written engagement documentation prior to commencement of work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
