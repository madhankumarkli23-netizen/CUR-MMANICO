"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface PageHeroProps {
    title: string;
    subtitle?: string;
    parentLink?: {
        href: string;
        label: string;
    };
}

const PageHero = ({ title, subtitle, parentLink }: PageHeroProps) => {
    return (
        <section className="relative w-full overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
            {/* Enhanced Background Motion (BGM) - Matching Hero sophistication */}
            <div className="absolute inset-0 z-0">
                {/* Base Gradient with Depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 via-primary-900 to-primary-950" />
                
                {/* Animated Gradient Orbs - Enhanced */}
                <div 
                    className="absolute top-0 right-0 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-br from-accent/20 via-primary-600/30 to-transparent rounded-full blur-3xl animate-pulse"
                    style={{
                        transform: 'translate3d(0, 0, 0)',
                        willChange: 'transform, opacity',
                        WebkitTransform: 'translate3d(0, 0, 0)'
                    }}
                />
                <div 
                    className="absolute bottom-0 left-0 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-gradient-to-tr from-primary-700/25 via-accent/15 to-transparent rounded-full blur-3xl animate-pulse"
                    style={{
                        transform: 'translate3d(0, 0, 0)',
                        willChange: 'transform, opacity',
                        WebkitTransform: 'translate3d(0, 0, 0)',
                        animationDelay: '0.7s'
                    }}
                />
                <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary-600/10 rounded-full blur-3xl"
                    style={{
                        transform: 'translate3d(-50%, -50%, 0)',
                        willChange: 'transform',
                        WebkitTransform: 'translate3d(-50%, -50%, 0)'
                    }}
                />
                
                {/* Grid Pattern Overlay */}
                <div 
                    className="absolute inset-0 opacity-10 md:opacity-15"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                        transform: 'translate3d(0, 0, 0)',
                        willChange: 'transform'
                    }}
                />
                
                {/* Subtle Shimmer Effect */}
                <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"
                    style={{
                        animation: 'shimmer 8s ease-in-out infinite',
                        transform: 'translate3d(0, 0, 0)',
                        willChange: 'transform'
                    }}
                />
                
                {/* Floating Particles - Reduced for performance */}
                {[...Array(2)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-white/15 rounded-full hidden lg:block"
                        style={{
                            left: `${30 + i * 40}%`,
                            top: `${40 + i * 20}%`,
                            animation: `float ${20 + i * 5}s ease-in-out infinite`,
                            animationDelay: `${i * 3}s`,
                            transform: 'translate3d(0, 0, 0)',
                            willChange: 'transform'
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-20 container-custom text-center">
                {parentLink && (
                    <Link
                        href={parentLink.href}
                        className="inline-flex items-center text-accent hover:text-white mb-6 transition-colors duration-300 group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                        {parentLink.label}
                    </Link>
                )}

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] animate-fade-in-up" style={{ fontFamily: 'var(--font-serif-pro), Georgia, serif', letterSpacing: '-0.03em' }}>
                    {title}
                </h1>

                {subtitle && (
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-100" style={{ fontFamily: 'var(--font-inter), sans-serif', lineHeight: '1.75', fontWeight: 400 }}>
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
};

export default PageHero;
