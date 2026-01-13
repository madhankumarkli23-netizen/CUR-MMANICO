"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Motion (BGM) */}
            <div className="absolute inset-0 z-0" style={{ backgroundColor: 'rgb(0, 73, 146)' }}>
                {/* Visual texture overlay */}
                <div className="absolute inset-0 opacity-50" style={{
                    background: 'linear-gradient(to bottom right, rgb(0, 73, 146), rgb(0, 73, 146), rgba(212, 175, 55, 0.05))'
                }} />
                <div className="w-full h-full bg-[length:200%_200%] animate-gradient-slow opacity-90" style={{
                    background: 'linear-gradient(to bottom right, rgb(0, 73, 146), rgb(0, 73, 146), rgb(0, 73, 146))'
                }} />

                {/* Abstract animated shapes - iOS compatible */}
                <div
                    className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full animate-pulse"
                    style={{
                        filter: 'blur(60px)',
                        transform: 'translate3d(0, 0, 0)',
                        willChange: 'transform, opacity',
                        WebkitTransform: 'translate3d(0, 0, 0)',
                        opacity: 0.7
                    }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full animate-pulse"
                    style={{
                        filter: 'blur(60px)',
                        transform: 'translate3d(0, 0, 0)',
                        willChange: 'transform, opacity',
                        WebkitTransform: 'translate3d(0, 0, 0)',
                        animationDelay: '1s',
                        opacity: 0.7
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto space-y-4 md:space-y-5 animate-fade-in-up">
                    {/* Firm Name - Premium serif font */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-2">
                        M MANI & CO
                    </h1>

                    {/* Tagline - Elegant small-caps */}
                    <p className="text-base sm:text-lg md:text-xl text-accent font-light italic">
                        Financial & Legal
                    </p>

                    {/* Profession - Clear */}
                    <p className="text-lg sm:text-xl md:text-2xl text-white font-semibold mt-2">
                        Chartered Accountants
                    </p>

                    {/* Location - Refined uppercase */}
                    <p className="text-sm sm:text-base md:text-lg text-white/90 font-normal">
                        Bengaluru, Karnataka
                    </p>

                    {/* Divider */}
                    <div className="h-px w-16 bg-white/30 mx-auto my-4"></div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm md:text-base text-white/85 max-w-2xl mx-auto font-light leading-relaxed px-2">
                        Professional CA firm providing income tax, GST, audit, accounting, and compliance services in Bengaluru.
                    </p>

                    {/* Service Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-5 max-w-2xl mx-auto pt-5 pb-2 px-2">
                        <div className="text-center py-2">
                            <p className="text-white font-medium text-xs sm:text-sm md:text-base mb-1">Tax Advisory</p>
                            <p className="text-xs text-white/70">Income Tax, GST & TDS</p>
                        </div>
                        <div className="text-center py-2">
                            <p className="text-white font-medium text-xs sm:text-sm md:text-base mb-1">Audit Services</p>
                            <p className="text-xs text-white/70">Statutory & Internal</p>
                        </div>
                        <div className="text-center py-2">
                            <p className="text-white font-medium text-xs sm:text-sm md:text-base mb-1">Compliance</p>
                            <p className="text-xs text-white/70">ROC & Regulatory</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-5">
                        <Link
                            href="/contact"
                            className="group relative px-8 py-4 bg-accent hover:bg-accent-light text-primary-950 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent/50 flex items-center gap-2"
                        >
                            Contact Us
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="/services"
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium rounded-full border border-white/20 transition-all duration-300"
                        >
                            View Services
                        </Link>
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
