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
      className={`fixed left-0 right-0 top-0 z-50 bg-white/95 backdrop-blur transition-all duration-200 ${
        isScrolled ? 'shadow-md' : 'shadow-sm'
      }`}
      style={{
        paddingTop: 'calc(0.2rem + env(safe-area-inset-top, 0px))',
        paddingBottom: '0.2rem',
      }}
    >
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex min-h-[64px] items-center justify-between gap-2 sm:gap-3 md:gap-4 md:min-h-[86px] lg:min-h-[100px]">
          <Link
            href="/"
            className="group flex min-w-0 flex-1 items-center gap-0 md:flex-none md:shrink-0"
            aria-label="M MANI & CO Home"
          >
            <div className="-mr-1.5 flex h-12 w-12 shrink-0 items-center justify-center sm:-mr-2 sm:h-14 sm:w-14 md:-mr-2 md:h-20 md:w-20 lg:-mr-2.5 lg:h-24 lg:w-24">
              <img
                src="/ca-india-logo.png"
                alt="CA Logo"
                className="h-full w-full object-contain object-right"
              />
            </div>

            <div className="-ml-1 flex min-w-0 flex-col justify-center leading-none sm:-ml-1.5 md:-ml-2 lg:-ml-2.5">
              <span
                className="whitespace-nowrap font-serif text-[1.2rem] font-bold tracking-[-0.03em] text-primary-900 sm:text-[1.34rem] md:text-[1.85rem] md:tracking-tight lg:text-[2.05rem]"
              >
                M Mani & Co
              </span>
              <span
                className="mt-0.5 whitespace-nowrap font-sans text-[0.47rem] font-semibold uppercase tracking-[0.12em] text-primary-700 sm:text-[0.54rem] sm:tracking-[0.13em] md:text-[0.62rem] md:tracking-[0.16em] lg:text-[0.68rem]"
              >
                Chartered Accountants
              </span>
            </div>
          </Link>

          <div className="hidden shrink-0 items-center space-x-1 md:flex lg:space-x-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative rounded-lg px-4 py-2.5 text-[0.9rem] font-medium transition-all duration-200 touch-manipulation lg:px-5 ${
                    isActive
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

          <button
            type="button"
            className="flex items-center justify-center rounded-md p-3 text-primary-900 transition-colors hover:bg-neutral-100 touch-manipulation md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
            style={{ minWidth: '44px', minHeight: '44px', alignSelf: 'center' }}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

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
