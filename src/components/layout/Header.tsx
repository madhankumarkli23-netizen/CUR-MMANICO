'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Resources', href: '/resources' },
  { name: 'Tools', href: '/tools' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white shadow-sm`}
      style={{
        paddingTop: `calc(0.05rem + env(safe-area-inset-top, 0px))`,
        paddingBottom: `0.05rem`,
      }}
    >
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex items-center justify-between" style={{ minHeight: 'clamp(60px, 12vw, 68px)', height: 'auto', gap: '1rem' }}>
          {/* Logo - Clean Brand Block */}
          <Link
            href="/"
            className="flex items-start group flex-shrink-0"
            aria-label="M MANI & CO Home"
            style={{ gap: 0, alignItems: 'flex-start', maxWidth: 'calc(100% - 200px)' }}
          >
            {/* CA Logo - Matching Full Text Block Height - Responsive */}
            <div className="relative flex-shrink-0" style={{ 
              width: 'clamp(60px, 12vw, 85px)', 
              height: 'clamp(70px, 14vw, 95px)', 
              marginRight: 'clamp(-8px, -1vw, -8px)'
            }}>
              <img
                src="/ca-india-logo.png"
                alt="CA Logo"
                className="w-full h-full object-contain"
                style={{ 
                  display: 'block',
                  objectFit: 'contain',
                  width: '100%',
                  height: '100%',
                  objectPosition: 'top'
                }}
              />
            </div>

            {/* Firm Name Stack - Tighter spacing - Responsive */}
            <div className="flex flex-col justify-start leading-none flex-shrink-0" style={{ 
              gap: '0.05rem', 
              marginLeft: 'clamp(-6px, -1vw, -6px)',
              alignSelf: 'flex-start'
            }}>
              {/* Primary: M Mani & Co - Larger Size - Responsive */}
              <span
                className="font-bold text-primary-900"
                style={{
                  fontFamily: 'var(--font-serif-pro), Georgia, serif',
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  lineHeight: '1.1',
                  margin: 0,
                  padding: 0,
                  color: '#004992',
                  fontSize: 'clamp(1.25rem, 4vw, 2.25rem)'
                }}
              >
                M Mani & Co
              </span>
              {/* Secondary: Chartered Accountants - Tighter spacing - Responsive */}
              <span
                className="uppercase text-primary-700"
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  lineHeight: '1.2',
                  margin: 0,
                  padding: 0,
                  marginTop: '0.05rem',
                  fontSize: 'clamp(0.45em, 1.2vw, 0.5em)'
                }}
              >
                Chartered Accountants
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 flex-shrink-0">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg touch-manipulation ${isActive
                    ? 'text-white bg-primary-700 font-semibold shadow-md'
                    : 'text-primary-900 hover:text-primary-700 hover:bg-primary-50 active:text-primary-800 active:bg-primary-100'
                    }`}
                  aria-current={isActive ? 'page' : undefined}
                  style={{ minHeight: '44px', display: 'flex', alignItems: 'center' }}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-3 rounded-md transition-colors text-primary-900 hover:bg-neutral-100 touch-manipulation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
            style={{ minWidth: '44px', minHeight: '44px' }}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-slide-down">
            <div className="flex flex-col space-y-2 mt-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 touch-manipulation ${isActive
                    ? 'text-white bg-primary-700 font-semibold shadow-md'
                    : 'text-neutral-700 hover:text-primary-700 hover:bg-primary-50 active:bg-primary-100'
                    }`}
                  aria-current={isActive ? 'page' : undefined}
                  style={{ minHeight: '44px', display: 'flex', alignItems: 'center' }}
                >
                  {item.name}
                </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
