import React from 'react';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    href: string;
}

const ServiceCard = ({ title, description, icon: Icon, href }: ServiceCardProps) => {
    return (
        <Link
            href={href}
            className="group card card-hover glass-card p-7 flex flex-col items-start gap-5 hover:shadow-2xl hover:border-primary-300/70 hover:-translate-y-2 transition-all duration-200"
        >
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-primary-100/70 via-white to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-gradient-to-br from-transparent via-primary-50/70 to-primary-100/50 opacity-60 transition-opacity duration-300 group-hover:opacity-90" />
            {/* Enhanced gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 via-primary-50/0 to-transparent group-hover:from-primary-50/50 group-hover:via-primary-50/30 group-hover:to-transparent transition-all duration-200"></div>
            
            {/* Subtle shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-500 pointer-events-none"></div>
            
            <div className="relative z-10 p-4 bg-gradient-to-br from-primary-100 via-primary-50 to-primary-50 border-2 border-primary-200 rounded-xl group-hover:border-primary-500 group-hover:shadow-xl group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary-200 group-hover:via-primary-100 group-hover:to-primary-50 transition-all duration-200">
                <Icon className="w-8 h-8 text-primary-700 group-hover:text-primary-900 group-hover:scale-110 transition-all duration-200" />
            </div>

            <h3 className="relative z-10 text-xl font-bold text-neutral-900 group-hover:text-primary-700 transition-colors duration-300" style={{ fontFamily: 'var(--font-serif-pro), Georgia, serif', letterSpacing: '-0.015em', lineHeight: '1.3' }}>
                {title}
            </h3>

            <p className="relative z-10 text-neutral-600 leading-relaxed text-sm" style={{ fontFamily: 'var(--font-inter), sans-serif', lineHeight: '1.7' }}>
                {description}
            </p>

            <div className="relative z-10 mt-auto pt-3 flex items-center text-primary-700 font-bold text-sm group-hover:text-primary-900 transition-all duration-200">
                <span>Learn More</span>
                <span className="ml-2 group-hover:translate-x-2 transition-transform duration-200 text-lg">→</span>
            </div>
        </Link>
    );
};

export default ServiceCard;
