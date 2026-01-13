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
            className="card card-hover p-6 flex flex-col items-start gap-4"
        >
            <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-md">
                <Icon className="w-7 h-7 text-primary-700" />
            </div>

            <h3 className="text-xl font-semibold text-neutral-900">
                {title}
            </h3>

            <p className="text-neutral-600 leading-relaxed text-sm">
                {description}
            </p>

            <div className="mt-auto pt-2 flex items-center text-primary-700 font-medium text-sm">
                Learn More
                <span className="ml-2">→</span>
            </div>
        </Link>
    );
};

export default ServiceCard;
