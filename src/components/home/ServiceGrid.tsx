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
        <section className="py-16 md:py-20 bg-neutral-50">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                        Service Coverage
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        Comprehensive range of chartered accountancy services across taxation, audit, compliance, and advisory
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.href}
                            className="card p-4 text-center hover:shadow-md hover:border-primary-200 transition-all group"
                        >
                            <span className="text-sm font-medium text-neutral-700 group-hover:text-primary-700">
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
