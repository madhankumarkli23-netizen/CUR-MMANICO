'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white shadow-md py-3`}
    >
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 md:gap-4 group"
            aria-label="M MANI & CO Home"
          >
            <div className="flex items-center gap-1.5">
              <div className="relative h-7 w-7 md:h-8 md:w-8 flex-shrink-0">
                <Image
                  src="/ca-india-logo.png"
                  alt="CA Logo"
                  fill
                  sizes="32px"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="flex flex-col leading-tight">
                <span
                  className="text-base md:text-lg font-bold tracking-tight text-primary-900"
                  style={{
                    fontFamily: 'var(--font-serif-pro), serif',
                  }}
                >
                  M MANI & CO
                </span>
                <span
                  className="text-[10px] md:text-xs uppercase font-semibold tracking-[0.16em] text-primary-700"
                >
                  Chartered Accountants
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-200 border-b-2 ${isActive
                    ? 'text-accent border-accent font-semibold'
                    : 'text-primary-900 border-transparent hover:text-accent hover:border-accent'
                    }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md transition-colors text-primary-900 hover:bg-neutral-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
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
            <div className="flex flex-col space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${isActive
                      ? 'text-primary-700 bg-primary-50 font-semibold'
                      : 'text-neutral-700 hover:text-primary-700 hover:bg-primary-50'
                      }`}
                    aria-current={isActive ? 'page' : undefined}
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
