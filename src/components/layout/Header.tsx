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
        paddingTop: `calc(0.125rem + env(safe-area-inset-top, 0px))`,
        paddingBottom: `0.125rem`,
      }}
    >
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex items-center justify-between" style={{ minHeight: '70px', height: 'auto' }}>
          {/* Logo - Clean Brand Block */}
          <Link
            href="/"
            className="flex items-center group"
            aria-label="M MANI & CO Home"
            style={{ gap: 0 }}
          >
            {/* CA Logo - Matching Full Text Block Height */}
            <div className="relative flex-shrink-0 flex items-center" style={{ width: '85px', height: '85px', marginRight: '-8px' }}>
              <img
                src="/ca-india-logo.png"
                alt="CA Logo"
                className="w-full h-full object-contain"
                style={{ 
                  display: 'block',
                  objectFit: 'contain',
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>

            {/* Firm Name Stack - Tighter spacing */}
            <div className="flex flex-col justify-center leading-none" style={{ gap: '0.05rem', marginLeft: '-6px' }}>
              {/* Primary: M Mani & Co - Larger Size */}
              <span
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-900"
                style={{
                  fontFamily: 'var(--font-serif-pro), Georgia, serif',
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  lineHeight: '1.1',
                  margin: 0,
                  padding: 0,
                  color: '#004992'
                }}
              >
                M Mani & Co
              </span>
              {/* Secondary: Chartered Accountants - Tighter spacing */}
              <span
                className="uppercase text-primary-700 text-[0.45em] md:text-[0.5em]"
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  lineHeight: '1.2',
                  margin: 0,
                  padding: 0,
                  marginTop: '0.05rem'
                }}
              >
                Chartered Accountants
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
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
