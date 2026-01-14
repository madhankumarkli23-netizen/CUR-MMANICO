'use client';

import React from 'react';
import { CheckCircle2, Shield, Users, FileCheck, Clock, Award } from 'lucide-react';

const benefits = [
    {
        icon: Users,
        title: 'Professional Competence',
        description: 'Chartered accountants with expertise across taxation, audit, accounting, and regulatory compliance domains',
    },
    {
        icon: FileCheck,
        title: 'Structured Service Delivery',
        description: 'Systematic approach to engagements with defined scope, timelines, and documentation requirements',
    },
    {
        icon: CheckCircle2,
        title: 'Comprehensive Service Coverage',
        description: 'Direct tax, indirect tax (GST), audit, accounting, corporate compliance, and advisory services',
    },
    {
        icon: Clock,
        title: 'Systematic Documentation',
        description: 'Maintenance of working papers, engagement documentation, and audit trails following established protocols',
    },
    {
        icon: Shield,
        title: 'Confidentiality Protocols',
        description: 'Strict adherence to confidentiality requirements and data security measures aligned with regulatory requirements',
    },
    {
        icon: Award,
        title: 'Regulatory Compliance',
        description: 'Services rendered in accordance with applicable laws, regulations, and regulatory requirements',
    },
];

export default function ValueProposition() {
    return (
        <section className="section-padding bg-gradient-to-b from-white to-neutral-50/30">
            <div className="container-custom">
                <div className="section-heading">
                    <div className="inline-block px-4 py-2 bg-primary-100 border border-primary-200 rounded-full mb-4">
                        <span className="text-sm font-semibold text-primary-800">Our Approach</span>
                    </div>
                    <h2 className="section-title">
                        Our Approach to Professional Service Delivery
                    </h2>
                    <p className="section-subtitle">
                        We provide professional chartered accountancy services with emphasis on structured engagement approach, systematic documentation, and regulatory compliance
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={index}
                                className="group card p-7 hover:shadow-2xl hover:border-primary-300 hover:-translate-y-2 transition-all duration-200 relative overflow-hidden bg-gradient-to-br from-white via-white to-neutral-50/60 border-2"
                            >
                                {/* Enhanced gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 via-primary-50/0 to-transparent group-hover:from-primary-50/50 group-hover:via-primary-50/30 group-hover:to-transparent transition-all duration-200"></div>
                                
                                {/* Subtle shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-500 pointer-events-none"></div>
                                
                                <div className="relative z-10 flex items-start gap-5">
                                    <div className="flex-shrink-0 p-4 bg-gradient-to-br from-primary-100 via-primary-50 to-primary-50 border-2 border-primary-200 rounded-xl group-hover:border-primary-500 group-hover:shadow-xl group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary-200 group-hover:via-primary-100 group-hover:to-primary-50 transition-all duration-200">
                                        <Icon className="w-7 h-7 text-primary-700 group-hover:text-primary-900 group-hover:scale-110 transition-all duration-200" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg text-neutral-900 mb-2 group-hover:text-primary-700 transition-colors duration-300" style={{ fontFamily: 'var(--font-serif-pro), Georgia, serif', letterSpacing: '-0.015em', lineHeight: '1.3' }}>
                                            {benefit.title}
                                        </h3>
                                        <p className="text-sm text-neutral-600 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif', lineHeight: '1.7' }}>
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
