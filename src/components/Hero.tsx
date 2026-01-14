"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Shield, FileCheck, Calculator } from 'lucide-react';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="relative min-h-[95vh] w-full overflow-hidden flex items-center pt-28 pb-24">
            {/* Enhanced Background with Rich Visual Design */}
            <div className="absolute inset-0 z-0">
                {/* Base Gradient with Depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 via-primary-900 to-primary-950" />
                
                {/* Animated Gradient Orbs */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-accent/20 via-primary-600/30 to-transparent rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-primary-700/25 via-accent/15 to-transparent rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-3xl" />
                
                {/* Grid Pattern Overlay - More Visible */}
                <div className="absolute inset-0 opacity-15" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }} />
                
                {/* Decorative Geometric Shapes */}
                <div className="absolute top-20 right-20 w-40 h-40 border-3 border-white/15 rounded-2xl rotate-12 shadow-2xl" />
                <div className="absolute top-40 right-60 w-24 h-24 border-2 border-accent/30 rounded-lg rotate-45" />
                <div className="absolute bottom-40 left-20 w-36 h-36 border-3 border-white/15 rounded-2xl -rotate-12 shadow-2xl" />
                <div className="absolute bottom-60 left-60 w-20 h-20 border-2 border-accent/30 rounded-full" />
                
                {/* Diagonal Lines Pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)'
                }} />
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" style={{
                    animation: 'shimmer 8s ease-in-out infinite'
                }} />
                
                {/* Floating Particles */}
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-white/20 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${15 + Math.random() * 10}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
                
                {/* Parallax Mouse Follow Effect */}
                <div 
                    className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-accent/5 via-transparent to-transparent rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none"
                    style={{
                        transform: `translate(calc(-50% + ${(mousePosition.x - 50) * 0.5}px), calc(-50% + ${(mousePosition.y - 50) * 0.5}px))`,
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-20 w-full">
                <div className="container-custom grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6 md:space-y-8 animate-fade-in-up">
                        {/* Enhanced Badge with Animation */}
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-white/25 bg-gradient-to-r from-white/15 to-white/5 backdrop-blur-md text-white text-sm font-semibold shadow-lg hover:scale-105 transition-transform duration-300 group/badge">
                            <div className="relative">
                                <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-75" />
                                <div className="relative w-2 h-2 bg-accent rounded-full" />
                            </div>
                            <span className="group-hover/badge:text-accent transition-colors">Chartered Accountants</span>
                            <span className="text-white/60">·</span>
                            <span className="text-white/80">Bengaluru</span>
                        </div>

                        {/* Enhanced Headline with Gradient and Animation */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                            <span className="block animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                                Trusted Tax, Audit &
                            </span>
                            <span 
                                className="block bg-gradient-to-r from-white via-accent/30 to-white bg-clip-text text-transparent animate-fade-in-up"
                                style={{ animationDelay: '0.2s' }}
                            >
                                Compliance Experts
                            </span>
                            <span 
                                className="block text-2xl sm:text-3xl md:text-4xl font-medium text-white/80 mt-2 animate-fade-in-up"
                                style={{ animationDelay: '0.3s' }}
                            >
                                for Businesses & Individuals
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl">
                            We simplify regulatory complexity with <span className="font-semibold text-white">proactive advice</span>, <span className="font-semibold text-white">precise execution</span>, and <span className="font-semibold text-white">disciplined quality controls</span>.
                        </p>

                        {/* Enhanced Service Cards with Stagger Animation */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { title: 'Tax & GST', desc: 'Advisory, filings, assessments', icon: Calculator, delay: '0.4s' },
                                { title: 'Audit & Controls', desc: 'Statutory, internal, process reviews', icon: FileCheck, delay: '0.5s' },
                                { title: 'Compliance Desk', desc: 'ROC, TDS, payroll, regulatory', icon: Shield, delay: '0.6s' },
                                { title: 'Business Support', desc: 'Accounting, MIS, strategic insights', icon: TrendingUp, delay: '0.7s' },
                            ].map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div 
                                        key={item.title} 
                                        className="group relative flex items-start gap-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/15 backdrop-blur-md p-4 hover:from-white/15 hover:to-white/10 hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up"
                                        style={{ animationDelay: item.delay }}
                                    >
                                        <div className="relative flex-shrink-0">
                                            <div className="absolute inset-0 bg-accent/20 rounded-lg blur-md group-hover:blur-lg group-hover:scale-110 transition-all duration-300" />
                                            <div className="relative w-10 h-10 bg-gradient-to-br from-accent/30 to-accent/10 rounded-lg flex items-center justify-center border border-white/20 group-hover:rotate-6 transition-transform duration-300">
                                                <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white font-bold text-base md:text-lg mb-1 group-hover:text-accent transition-colors">{item.title}</p>
                                            <p className="text-white/70 text-xs md:text-sm leading-relaxed group-hover:text-white/90 transition-colors">{item.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        

                        {/* Enhanced CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-accent to-accent/80 rounded-lg shadow-lg hover:shadow-xl hover:from-accent hover:to-accent transition-all duration-300 hover:scale-105 overflow-hidden"
                            >
                                <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                                <span className="relative z-10">Speak with a CA</span>
                                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                href="/services"
                                className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-white/10 backdrop-blur-md border-2 border-white/25 rounded-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 shadow-lg"
                            >
                                Explore Services
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
                                        Why Clients Choose Us
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
                                        { icon: TrendingUp, title: 'Growth Focused', desc: 'Strategic advisory', color: 'from-green-400/20 to-green-600/10' },
                                        { icon: FileCheck, title: 'Compliance Ready', desc: 'Regulatory expertise', color: 'from-blue-400/20 to-blue-600/10' },
                                        { icon: Calculator, title: 'Precise Execution', desc: 'Accurate results', color: 'from-purple-400/20 to-purple-600/10' },
                                        { icon: Shield, title: 'Secure & Confidential', desc: 'ICAI standards', color: 'from-accent/20 to-accent/10' },
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
                                    <p className="text-sm font-semibold text-white/90 mb-3 uppercase tracking-wider">Key Benefits</p>
                                    <ul className="space-y-3 text-white/90 text-sm">
                                        {[
                                            'Partner-led oversight with clear timelines',
                                            'Structured documentation & audit trails',
                                            'Controls-focused regulatory approach',
                                            'Confidentiality protocols aligned to ICAI'
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
