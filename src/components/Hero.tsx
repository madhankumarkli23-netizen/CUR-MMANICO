"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Shield, FileCheck, Calculator } from 'lucide-react';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

    useEffect(() => {
        let rafId: number;
        let lastTime = 0;
        const throttleDelay = 100; // Throttle to 10fps instead of 60fps

        const handleMouseMove = (e: MouseEvent) => {
            const now = Date.now();
            if (now - lastTime < throttleDelay) return;
            lastTime = now;

            rafId = requestAnimationFrame(() => {
                setMousePosition({
                    x: (e.clientX / window.innerWidth) * 100,
                    y: (e.clientY / window.innerHeight) * 100,
                });
            });
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <section className="relative min-h-[95vh] w-full overflow-hidden flex items-center pb-24" style={{ minHeight: '-webkit-fill-available', paddingTop: `calc(clamp(4.5rem, 12vw, 6rem) + env(safe-area-inset-top, 0px))` }}>
            {/* Enhanced Background with Rich Visual Design */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Base Gradient with Depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950" />
                
                {/* Animated Gradient Orbs - Slower on mobile */}
                <div 
                    className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] bg-gradient-to-br from-accent/20 via-primary-600/30 to-transparent rounded-full blur-3xl animate-pulse"
                    style={{
                        transform: 'translate3d(0, 0, 0)',
                        willChange: 'transform, opacity',
                        animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                    }}
                />
                <div 
                    className="absolute bottom-0 left-0 w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] bg-gradient-to-tr from-primary-700/25 via-accent/15 to-transparent rounded-full blur-3xl"
                    style={{
                        transform: 'translate3d(0, 0, 0)',
                        willChange: 'transform, opacity'
                    }}
                />
                <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] bg-primary-600/10 rounded-full blur-3xl"
                    style={{
                        transform: 'translate3d(-50%, -50%, 0)',
                        willChange: 'transform'
                    }}
                />
                
                {/* Grid Pattern Overlay - Optimized for mobile */}
                <div 
                    className="absolute inset-0 opacity-10 md:opacity-15" 
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                        transform: 'translate3d(0, 0, 0)',
                        willChange: 'transform'
                    }}
                />
                
                {/* Decorative Geometric Shapes */}
                <div className="absolute top-20 right-20 w-40 h-40 border-3 border-white/15 rounded-2xl rotate-12 shadow-2xl" />
                <div className="absolute top-40 right-60 w-24 h-24 border-2 border-accent/30 rounded-lg rotate-45" />
                <div className="absolute bottom-40 left-20 w-36 h-36 border-3 border-white/15 rounded-2xl -rotate-12 shadow-2xl" />
                <div className="absolute bottom-60 left-60 w-20 h-20 border-2 border-accent/30 rounded-full" />
                
                {/* Diagonal Lines Pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)'
                }} />
                
                {/* Shimmer Effect - Slower on mobile */}
                <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" 
                    style={{
                        animation: 'shimmer 12s ease-in-out infinite',
                        transform: 'translate3d(0, 0, 0)',
                        willChange: 'transform'
                    }}
                />
                
                {/* Floating Particles - Reduced for better performance */}
                {[...Array(3)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-white/15 rounded-full hidden lg:block"
                        style={{
                            left: `${20 + i * 30}%`,
                            top: `${30 + i * 20}%`,
                            animation: `float ${20 + i * 5}s ease-in-out infinite`,
                            animationDelay: `${i * 2}s`,
                            transform: 'translate3d(0, 0, 0)',
                            willChange: 'transform'
                        }}
                    />
                ))}
                
                {/* Parallax Mouse Follow Effect - Slower on mobile */}
                <div 
                    className="absolute top-1/2 left-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-radial from-accent/3 via-transparent to-transparent rounded-full blur-2xl pointer-events-none"
                    style={{
                        transform: `translate3d(calc(-50% + ${(mousePosition.x - 50) * 0.3}px), calc(-50% + ${(mousePosition.y - 50) * 0.3}px), 0)`,
                        transition: 'transform 0.6s ease-out',
                        willChange: 'transform'
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-20 w-full">
                <div className="container-custom grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6 md:space-y-8 relative z-30">
                        {/* Enhanced Badge with Animation - More Beautiful */}
                        <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border-2 border-white/30 bg-gradient-to-r from-white/25 via-white/15 to-white/10 text-white text-sm font-semibold shadow-xl hover:scale-105 hover:border-accent/50 transition-all duration-200 group/badge animate-fade-in-up backdrop-blur-sm" style={{ animationDelay: '0.1s' }}>
                            <div className="relative">
                                <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-75" />
                                <div className="relative w-2.5 h-2.5 bg-accent rounded-full shadow-lg shadow-accent/50" />
                            </div>
                            <span className="group-hover/badge:text-accent transition-colors duration-200 font-bold">Chartered Accountants</span>
                            <span className="text-white/70">·</span>
                            <span className="text-white/90 font-medium">Bengaluru, Karnataka</span>
                        </div>

                        {/* Enhanced Headline with Gradient and Animation - Optimized */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]" style={{ fontFamily: 'var(--font-serif-pro), Georgia, serif', letterSpacing: '-0.03em' }}>
                            <span className="block animate-fade-in-up" style={{ animationDelay: '0.05s' }}>
                                Professional Chartered Accountancy
                            </span>
                            <span 
                                className="block bg-gradient-to-r from-white via-accent/30 to-white bg-clip-text text-transparent animate-fade-in-up"
                                style={{ animationDelay: '0.1s' }}
                            >
                                Services in Bengaluru
                            </span>
                            <span 
                                className="block text-xl sm:text-2xl md:text-3xl font-semibold text-white/85 mt-3 animate-fade-in-up"
                                style={{ animationDelay: '0.15s', fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '-0.01em', lineHeight: '1.3' }}
                            >
                                Tax, Audit, Accounting & Compliance
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl" style={{ fontFamily: 'var(--font-inter), sans-serif', lineHeight: '1.75', fontWeight: 400 }}>
                            Comprehensive professional services in taxation, audit, accounting, and regulatory compliance. We assist businesses and individuals in meeting their statutory obligations and financial reporting requirements.
                        </p>

                        {/* Enhanced Service Cards with Stagger Animation - Now Clickable */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { title: 'Tax & GST', desc: 'Advisory, filings, assessments', icon: Calculator, delay: '0.2s', href: '/services' },
                                { title: 'Audit & Controls', desc: 'Statutory, internal, process reviews', icon: FileCheck, delay: '0.25s', href: '/services' },
                                { title: 'Compliance Desk', desc: 'ROC, TDS, payroll, regulatory', icon: Shield, delay: '0.3s', href: '/services' },
                                { title: 'Business Support', desc: 'Accounting, MIS, strategic insights', icon: TrendingUp, delay: '0.35s', href: '/services' },
                            ].map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={item.title}
                                        href={item.href}
                                        className="group relative flex items-start gap-4 rounded-xl bg-gradient-to-br from-white/20 via-white/12 to-white/8 border-2 border-white/30 p-4 hover:from-white/30 hover:via-white/20 hover:to-white/15 hover:border-accent/60 transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-1 animate-fade-in-up cursor-pointer"
                                        style={{ animationDelay: item.delay, position: 'relative', zIndex: 30 }}
                                    >
                                        {/* Enhanced glow effect on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:via-accent/5 group-hover:to-accent/0 rounded-xl transition-all duration-300 pointer-events-none" />
                                        
                                        {/* Icon container with enhanced design */}
                                        <div className="relative flex-shrink-0 z-10">
                                            <div className="absolute inset-0 bg-accent/30 rounded-lg blur-lg group-hover:blur-xl group-hover:scale-125 group-hover:bg-accent/40 transition-all duration-300" />
                                            <div className="relative w-12 h-12 bg-gradient-to-br from-accent/40 via-accent/30 to-accent/20 rounded-xl flex items-center justify-center border-2 border-white/30 group-hover:border-accent/60 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-accent/50">
                                                <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                                            </div>
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="flex-1 z-10">
                                            <p className="text-white font-bold text-base md:text-lg mb-1.5 group-hover:text-accent transition-colors duration-200" style={{ fontFamily: 'var(--font-serif-pro), Georgia, serif', letterSpacing: '-0.01em', lineHeight: '1.3' }}>{item.title}</p>
                                            <p className="text-white/75 text-xs md:text-sm leading-relaxed group-hover:text-white/95 transition-colors duration-200" style={{ fontFamily: 'var(--font-inter), sans-serif', lineHeight: '1.6' }}>{item.desc}</p>
                                        </div>
                                        
                                        {/* Arrow indicator */}
                                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                                            <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform duration-200" />
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                        

                        {/* Enhanced CTA Buttons - More Beautiful */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-2 relative z-30">
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center justify-center gap-3 px-10 py-4.5 text-base font-bold text-white bg-gradient-to-r from-accent via-accent/90 to-accent/80 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-accent/50 hover:from-accent hover:via-accent hover:to-accent active:scale-95 transition-all duration-200 hover:scale-105 overflow-hidden touch-manipulation cursor-pointer"
                                style={{ minHeight: '48px', position: 'relative', zIndex: 30 }}
                            >
                                {/* Enhanced shine effect */}
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                                <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 pointer-events-none" />
                                <span className="relative z-10 flex items-center gap-2">
                                    <span>Consult with Us</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                                </span>
                            </Link>

                            <Link
                                href="/services"
                                className="group relative inline-flex items-center justify-center px-10 py-4.5 text-base font-semibold text-white bg-white/20 backdrop-blur-md border-2 border-white/30 rounded-xl hover:bg-white/30 hover:border-accent/60 active:scale-95 transition-all duration-200 hover:scale-105 shadow-xl hover:shadow-2xl touch-manipulation cursor-pointer overflow-hidden"
                                style={{ minHeight: '48px', position: 'relative', zIndex: 30 }}
                            >
                                {/* Subtle glow effect */}
                                <span className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                <span className="relative z-10 flex items-center gap-2">
                                    <span>View Services</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Premium Presentation-Style Visual Card */}
                    <div className="hidden lg:block animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                        <div className="relative rounded-3xl border-2 border-white/25 bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-2xl p-10 shadow-2xl overflow-hidden group hover:shadow-[0_30px_80px_rgba(0,0,0,0.4)] transition-all duration-500">
                            {/* Animated Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary-600/10 opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                            
                            {/* Animated Radial Gradient */}
                            <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            
                            {/* Decorative Corner Elements - Enhanced with Animation */}
                            <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-accent/40 rounded-tl-3xl shadow-lg group-hover:border-accent/60 transition-colors" />
                            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-accent/40 rounded-br-3xl shadow-lg group-hover:border-accent/60 transition-colors" />
                            
                            {/* Floating Badge Icons with Enhanced Animation */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-accent/30 to-accent/10 rounded-full flex items-center justify-center backdrop-blur-xl border-4 border-white/20 shadow-2xl animate-pulse group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                <Shield className="w-16 h-16 text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            
                            {/* Floating Accent Elements */}
                            <div className="absolute top-4 right-4 w-3 h-3 bg-accent rounded-full animate-ping opacity-75" />
                            <div className="absolute bottom-4 left-4 w-2 h-2 bg-accent/50 rounded-full animate-pulse" />
                            
                            <div className="space-y-6 text-white relative z-10">
                                {/* Header Section with Enhanced Typography */}
                                <div className="relative">
                                    <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-white via-accent/30 to-white bg-clip-text text-transparent group-hover:from-white group-hover:via-accent group-hover:to-white transition-all duration-500">
                                        Service Characteristics
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <div className="w-20 h-1.5 bg-gradient-to-r from-accent to-accent/50 rounded-full group-hover:w-24 transition-all duration-300" />
                                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse group-hover:scale-125 transition-transform" />
                                        <div className="flex-1 h-px bg-gradient-to-r from-accent/50 to-transparent opacity-50" />
                                    </div>
                                </div>
                                
                                {/* Icon Grid - Enhanced */}
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { icon: TrendingUp, title: 'Professional Competence', desc: 'Expertise across domains', color: 'from-green-400/20 to-green-600/10' },
                                        { icon: FileCheck, title: 'Regulatory Compliance', desc: 'Adherence to standards', color: 'from-blue-400/20 to-blue-600/10' },
                                        { icon: Calculator, title: 'Systematic Approach', desc: 'Structured processes', color: 'from-purple-400/20 to-purple-600/10' },
                                        { icon: Shield, title: 'Client Confidentiality', desc: 'Regulatory compliance', color: 'from-accent/20 to-accent/10' },
                                    ].map((item, index) => {
                                        const Icon = item.icon;
                                        return (
                                            <div key={index} className="group/card relative bg-gradient-to-br from-white/15 to-white/5 rounded-xl p-5 border-2 border-white/15 backdrop-blur-md hover:border-accent/50 hover:from-white/20 hover:to-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
                                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover/card:opacity-100 transition-opacity duration-300`} />
                                                {/* Shine Effect */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-700" />
                                                <div className="relative z-10">
                                                    <div className="w-12 h-12 bg-gradient-to-br from-accent/30 to-accent/10 rounded-lg flex items-center justify-center mb-3 border border-white/20 group-hover/card:scale-110 group-hover/card:rotate-6 transition-all duration-300 group-hover/card:shadow-lg group-hover/card:shadow-accent/30">
                                                        <Icon className="w-6 h-6 text-white group-hover/card:scale-110 transition-transform" />
                                                    </div>
                                                    <p className="text-base font-bold mb-1 group-hover/card:text-accent transition-colors">{item.title}</p>
                                                    <p className="text-xs text-white/70 group-hover/card:text-white/90 transition-colors">{item.desc}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                
                                {/* Benefits List - Enhanced */}
                                <div className="pt-5 border-t-2 border-white/15">
                                    <p className="text-sm font-semibold text-white/90 mb-3 uppercase tracking-wider">Service Characteristics</p>
                                    <ul className="space-y-3 text-white/90 text-sm">
                                        {[
                                            'Structured engagement approach with defined scope',
                                            'Systematic documentation and working papers',
                                            'Compliance-focused service delivery',
                                            'Confidentiality protocols in accordance with regulatory requirements'
                                        ].map((benefit, index) => (
                                            <li key={index} className="flex items-start gap-3 group/li">
                                                <div className="relative mt-1">
                                                    <div className="absolute inset-0 bg-accent/30 rounded-full blur-sm group-hover/li:blur-md transition-all" />
                                                    <div className="relative w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                                                </div>
                                                <span className="group-hover/li:text-white transition-colors">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <span className="text-xs text-white/60 uppercase tracking-wider group-hover:text-white transition-colors">Scroll</span>
                    <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-2 group-hover:border-accent/60 transition-colors shadow-lg backdrop-blur-sm bg-white/5">
                        <div className="w-1.5 h-3 bg-gradient-to-b from-accent to-accent/60 rounded-full animate-bounce" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
