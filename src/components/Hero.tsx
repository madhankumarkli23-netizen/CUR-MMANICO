"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[78vh] w-full overflow-hidden flex items-center pt-28 pb-16">
            {/* Background Motion (BGM) */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,73,146,0.95),rgba(0,73,146,0.9),rgba(0,73,146,0.85))]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_30%)]" />
                <div className="w-full h-full bg-[length:200%_200%] animate-gradient-slow opacity-60" style={{
                    background: 'linear-gradient(to bottom right, rgba(0, 73, 146, 0.6), rgba(0, 73, 146, 0.7), rgba(0, 73, 146, 0.65))'
                }} />
            </div>

            {/* Content */}
            <div className="relative z-20 w-full">
                <div className="container-custom grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6 md:space-y-7 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white text-sm font-medium">
                            ICAI-registered Chartered Accountants · Bengaluru
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                            Trusted tax, audit, and compliance experts for businesses and individuals
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-2xl">
                            We simplify regulatory complexity with proactive advice, precise execution, and disciplined quality controls.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { title: 'Tax & GST', desc: 'Advisory, filings, assessments' },
                                { title: 'Audit & Controls', desc: 'Statutory, internal, process reviews' },
                                { title: 'Compliance Desk', desc: 'ROC, TDS, payroll, regulatory' },
                                { title: 'Business Support', desc: 'Accounting, MIS, strategic insights' },
                            ].map((item) => (
                                <div key={item.title} className="flex items-start gap-3 rounded-lg bg-white/5 border border-white/10 p-3">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                                    <div>
                                        <p className="text-white font-semibold text-sm md:text-base">{item.title}</p>
                                        <p className="text-white/70 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1">
                            <Link
                                href="/contact"
                                className="btn-primary inline-flex items-center gap-2 px-7 py-3 text-base"
                            >
                                Speak with a CA
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/services"
                                className="btn-secondary px-7 py-3 text-base bg-white/10 border-white/20 text-white hover:bg-white/15"
                            >
                                Explore services
                            </Link>
                        </div>
                    </div>

                    <div className="hidden lg:block">
                        <div className="relative rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                            <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
                            <div className="space-y-4 text-white">
                                <p className="text-lg font-semibold">Why clients choose us</p>
                                <ul className="space-y-3 text-white/80 text-sm">
                                    <li className="flex gap-2">
                                        <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                                        <span>Partner-led oversight with clear response timelines</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                                        <span>Structured documentation, working papers, and audit trails</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                                        <span>Controls-focused approach that anticipates regulatory scrutiny</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                                        <span>Confidentiality protocols aligned to ICAI guidance</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
                    <div className="w-1 h-3 bg-accent rounded-full animate-scroll-down" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
