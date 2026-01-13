'use client';

import React from 'react';
import { CheckCircle2, Shield, Users, FileCheck, Clock, Award } from 'lucide-react';

const benefits = [
    {
        icon: Award,
        title: 'ICAI Registered Practice',
        description: 'Chartered accountants registered with the Institute of Chartered Accountants of India',
    },
    {
        icon: Shield,
        title: 'Professional Standards',
        description: 'Service delivery in accordance with applicable professional and technical standards',
    },
    {
        icon: Users,
        title: 'Qualified Professionals',
        description: 'Team of chartered accountants and compliance professionals with relevant expertise',
    },
    {
        icon: FileCheck,
        title: 'Structured Engagement',
        description: 'Defined engagement process with clear scope, deliverables, and timelines',
    },
    {
        icon: Clock,
        title: 'Technology Enabled',
        description: 'Use of professional software and secure platforms for efficient service delivery',
    },
    {
        icon: CheckCircle2,
        title: 'Regulatory Focus',
        description: 'Compliance with income tax, GST, company law, and other applicable regulations',
    },
];

export default function ValueProposition() {
    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                        Why Engage Our Services
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        Professional chartered accountancy practice with focus on quality service delivery and regulatory compliance
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={index}
                                className="card p-6 hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 p-2 bg-primary-50 border border-primary-100 rounded-md">
                                        <Icon className="w-5 h-5 text-primary-700" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-neutral-900 mb-2">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-sm text-neutral-600 leading-relaxed">
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
