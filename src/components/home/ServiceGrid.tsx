'use client';

import React from 'react';
import Link from 'next/link';

const services = [
    { name: 'Company Formation', href: '/services' },
    { name: 'Income Tax Compliance', href: '/services' },
    { name: 'GST Advisory', href: '/services' },
    { name: 'Statutory Audit', href: '/services' },
    { name: 'Tax Audit', href: '/services' },
    { name: 'Internal Audit', href: '/services' },
    { name: 'Bookkeeping', href: '/services' },
    { name: 'Payroll Processing', href: '/services' },
    { name: 'Annual Filings', href: '/services' },
    { name: 'TDS Compliance', href: '/services' },
    { name: 'Transfer Pricing', href: '/services' },
    { name: 'FEMA Advisory', href: '/services' },
];

export default function ServiceGrid() {
    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="section-heading">
                    <div className="inline-block px-4 py-2 bg-primary-100 border border-primary-200 rounded-full mb-4">
                        <span className="text-sm font-semibold text-primary-800">Service Coverage</span>
                    </div>
                    <h2 className="section-title">
                        Service Coverage
                    </h2>
                    <p className="section-subtitle">
                        Comprehensive range of chartered accountancy services across taxation, audit, compliance, and advisory
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.href}
                            className="card p-6 text-center hover:shadow-2xl hover:border-primary-400 hover:-translate-y-2 transition-all duration-200 group relative overflow-hidden bg-gradient-to-br from-white via-white to-neutral-50/40 border-2"
                        >
                            {/* Enhanced background gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 via-primary-50/0 to-transparent group-hover:from-primary-50/70 group-hover:via-primary-50/40 group-hover:to-transparent transition-all duration-200"></div>
                            
                            {/* Subtle shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-500 pointer-events-none"></div>
                            
                            <span className="text-sm font-bold text-neutral-800 group-hover:text-primary-800 relative z-10 transition-colors duration-200" style={{ fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.01em', lineHeight: '1.5' }}>
                                {service.name}
                            </span>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <p className="text-sm text-neutral-500">
                        For detailed information on specific services, please contact us
                    </p>
                </div>
            </div>
        </section>
    );
}
