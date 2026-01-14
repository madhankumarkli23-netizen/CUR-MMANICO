import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  pages: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Resources', href: '/resources' },
    { name: 'Tools', href: '/tools' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Disclaimer', href: '/disclaimer' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Use', href: '/terms' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary-900 text-neutral-300 overflow-hidden">
      {/* Enhanced Background with Consistent Design */}
      <div className="absolute inset-0 z-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950" />
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-primary-700/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-primary-800/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.7s' }}></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container-custom py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Firm Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              {/* CA India Logo */}
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/ca-india-logo.png"
                  alt="ICAI Chartered Accountant"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div className="flex flex-col justify-center -space-y-0.5">
                <span className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-serif-pro), Georgia, serif', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                  M MANI & CO
                </span>
                <span className="text-sm text-neutral-300 font-semibold uppercase" style={{ fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.1em', lineHeight: '1.3' }}>
                  Chartered Accountants
                </span>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-md">
              Tax, audit, accounting, and compliance support for individuals and businesses.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <MapPin className="w-5 h-5 text-white flex-shrink-0" aria-hidden="true" />
                </div>
                <address className="text-sm pt-2 not-italic leading-relaxed">
                  <p className="mb-0.5">Muji Square, 5th Floor</p>
                  <p className="mb-0.5">No. 164, 9th Main Road, HSR Layout</p>
                  <p className="mb-0.5">Bengaluru - 560102, Karnataka</p>
                  <a
                    href="https://g.page/m-mani-co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-300 hover:text-white text-xs font-medium mt-1 inline-block transition-colors"
                  >
                    View on Google Maps →
                  </a>
                </address>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Phone className="w-5 h-5 text-white flex-shrink-0" aria-hidden="true" />
                </div>
                <a
                  href="tel:+919632818089"
                  className="text-sm hover:text-white transition-colors font-medium"
                >
                  +91 96328 18089
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Mail className="w-5 h-5 text-white flex-shrink-0" aria-hidden="true" />
                </div>
                <a
                  href="mailto:info@mmanico.com"
                  className="text-sm hover:text-white transition-colors font-medium"
                >
                  info@mmanico.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4" style={{ fontFamily: 'var(--font-serif-pro), Georgia, serif', letterSpacing: '-0.015em', lineHeight: '1.3' }}>Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.pages.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-4" style={{ fontFamily: 'var(--font-serif-pro), Georgia, serif', letterSpacing: '-0.015em', lineHeight: '1.3' }}>Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Compliance Disclaimer */}
        <div className="mt-12 pt-8 border-t border-primary-800">
          <div className="bg-primary-800/50 rounded-lg p-6 mb-8">
            <p className="text-xs text-neutral-300 leading-relaxed">
              <strong className="text-white">Important Notice:</strong> This website is for informational purposes and does not constitute solicitation or advertisement. Professional services will be provided in accordance with applicable laws and the ICAI Code of Ethics.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
            <p>
              &copy; {currentYear} M MANI & CO. All rights reserved.
            </p>
            <p className="text-xs">
              Professional services subject to engagement terms
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
