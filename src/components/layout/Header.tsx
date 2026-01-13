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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
        : 'bg-transparent py-4'
        }`}
    >
      <nav className="container-custom" aria-label="Main navigation">
        <div className={`flex items-center justify-between transition-all duration-200 ${isScrolled ? 'h-16' : 'h-20'
          }`}>
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 md:gap-4 group"
            aria-label="M MANI & CO Home"
          >
            <div className="flex items-center gap-3 md:gap-4">
              <div className={`relative flex-shrink-0 rounded-lg border transition-all duration-200 ${isScrolled
                ? 'h-12 w-12 md:h-14 md:w-14 border-neutral-200 bg-white shadow-sm'
                : 'h-14 w-14 md:h-16 md:w-16 border-white/40 bg-white/20 shadow'
                }`}>
                <Image
                  src="/ca-logo-final.png"
                  alt="CA Logo"
                  fill
                  sizes="64px"
                  className={`object-contain transition-all duration-200 ${isScrolled ? 'brightness-0 opacity-90' : 'brightness-0 invert'}`}
                  priority
                />
              </div>

              <div className="flex flex-col leading-tight">
                <span
                  className={`font-bold tracking-tight transition-all duration-200 ${isScrolled
                    ? 'text-xl md:text-2xl text-primary-900'
                    : 'text-2xl md:text-3xl text-white'
                    }`}
                  style={{
                    fontFamily: 'var(--font-serif-pro), serif',
                  }}
                >
                  M MANI & CO
                </span>
                <span
                  className={`uppercase font-semibold tracking-[0.16em] transition-all duration-200 ${isScrolled
                    ? 'text-xs md:text-sm text-primary-700'
                    : 'text-sm md:text-base text-white/90'
                    }`}
                >
                  Chartered Accountants
                </span>
                <span
                  className={`hidden sm:block text-[11px] font-medium transition-all duration-200 ${isScrolled ? 'text-neutral-500' : 'text-white/80'
                    }`}
                >
                  ICAI Registered · Bengaluru
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
                    : isScrolled
                      ? 'text-primary-900 border-transparent hover:text-accent hover:border-accent'
                      : 'text-white/90 border-transparent hover:text-white hover:border-accent'
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
            className={`md:hidden p-2 rounded-md transition-colors ${isScrolled ? 'text-primary-900 hover:bg-neutral-100' : 'text-white hover:bg-white/10'
              }`}
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
