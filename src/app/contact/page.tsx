import { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://manicoca.com';

export const metadata: Metadata = {
  title: 'Contact Us - Chartered Accountants in Bengaluru HSR Layout',
  description: 'Contact M MANI & CO for professional chartered accountancy services. Located at Muji Square, 5th Floor, HSR Layout, Bengaluru - 560102, Karnataka. Enquiries regarding tax, audit, accounting, and compliance services.',
  keywords: 'contact CA firm Bengaluru Bangalore, chartered accountant contact HSR Layout, CA firm Bengaluru address, tax consultant Bengaluru HSR Layout, CA firm near me, chartered accountants HSR Layout',
  openGraph: {
    title: 'Contact Us - Chartered Accountants in Bengaluru',
    description: 'Contact M MANI & CO for professional chartered accountancy services in Bengaluru, Karnataka',
    type: 'website',
    url: `${siteUrl}/contact`,
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero */}
      <PageHero
        title="Get in Touch"
        subtitle="For enquiries regarding professional services, please reach out using the details below"
      />

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8" style={{ fontFamily: 'var(--font-serif-pro), Georgia, serif', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-700" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Office Address</h3>
                    <address className="text-neutral-600 not-italic leading-relaxed">
                      <p className="mb-1">Muji Square, 5th Floor</p>
                      <p className="mb-1">No. 164, 9th Main Road</p>
                      <p className="mb-1">HSR Layout</p>
                      <p className="mb-1">Bengaluru - 560102</p>
                      <p>Karnataka, India</p>
                    </address>
                    <a
                      href="https://g.page/m-mani-co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-700 hover:text-primary-800 text-sm font-medium mt-2 inline-flex items-center gap-1 transition-colors"
                    >
                      View on Google Maps
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-700" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Phone</h3>
                    <a
                      href="tel:+919632818089"
                      className="text-neutral-600 hover:text-primary-700 transition-colors"
                    >
                      +91 96328 18089
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-700" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Email</h3>
                    <a
                      href="mailto:info@mmanico.com"
                      className="text-neutral-600 hover:text-primary-700 transition-colors"
                    >
                      info@mmanico.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-700" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/919632818089"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-600 hover:text-green-700 transition-colors"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 bg-gradient-to-br from-neutral-50 to-white rounded-xl p-6 border-2 border-neutral-200 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-primary-700" />
                  </div>
                  <h3 className="font-bold text-lg text-neutral-900">Important Notice</h3>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Enquiries do not constitute engagement acceptance or create any professional relationship. All professional services are subject to formal engagement terms and conditions. We assess each enquiry for competence, independence, and conflict considerations before accepting any engagement.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
