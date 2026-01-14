'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2, Award, Users, Shield, FileCheck } from 'lucide-react';

const stats = [
  {
    icon: FileCheck,
    value: 'Tax & GST',
    label: 'Direct & Indirect Taxation',
    sublabel: 'Comprehensive tax compliance services',
    color: 'text-primary-700',
    bgColor: 'bg-primary-50',
    borderColor: 'border-primary-100',
  },
  {
    icon: Shield,
    value: 'Audit & Assurance',
    label: 'Statutory & Internal Audit',
    sublabel: 'Independent audit and review services',
    color: 'text-primary-700',
    bgColor: 'bg-primary-50',
    borderColor: 'border-primary-100',
  },
  {
    icon: Award,
    value: 'Corporate Compliance',
    label: 'ROC & Regulatory Services',
    sublabel: 'Company law and compliance support',
    color: 'text-primary-700',
    bgColor: 'bg-primary-50',
    borderColor: 'border-primary-100',
  },
];

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="section-padding bg-gradient-to-b from-neutral-50 to-white relative">
      <div className="container-custom relative z-10">
        <div className="section-heading">
          <div className="inline-block px-4 py-2 bg-primary-100 border border-primary-200 rounded-full mb-4">
            <span className="text-sm font-semibold text-primary-800">Core Areas</span>
          </div>
          <h2 className="section-title">
            Core Service Areas
          </h2>
          <p className="section-subtitle">
            Comprehensive chartered accountancy services across taxation, audit, and corporate compliance domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`group card card-hover p-9 text-center bg-gradient-to-br from-white via-white to-neutral-50/60 border-2 ${isVisible ? 'animate-fade-in' : 'opacity-0'}
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-500 pointer-events-none"></div>
                
                <div className="relative z-10">
                  {/* Enhanced Icon */}
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-100 via-primary-50 to-primary-50 border-2 border-primary-200 shadow-lg mb-6 group-hover:scale-110 group-hover:shadow-xl group-hover:border-primary-400 group-hover:bg-gradient-to-br group-hover:from-primary-200 group-hover:via-primary-100 group-hover:to-primary-50 transition-all duration-200">
                    <Icon className="w-10 h-10 text-primary-700 group-hover:scale-110 transition-transform duration-200" />
                  </div>

                  {/* Value */}
                  <div className="text-2xl md:text-3xl font-bold text-primary-700 mb-2" style={{ fontFamily: 'var(--font-serif-pro), Georgia, serif', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                    {stat.value}
                  </div>

                  {/* Label */}
                  <p className="text-neutral-900 font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-serif-pro), Georgia, serif', letterSpacing: '-0.015em', lineHeight: '1.3' }}>
                    {stat.label}
                  </p>

                  {/* Sublabel */}
                  <p className="text-sm text-neutral-600" style={{ fontFamily: 'var(--font-inter), sans-serif', lineHeight: '1.6' }}>
                    {stat.sublabel}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Practice Values */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group bg-white rounded-xl p-6 border-2 border-neutral-200 shadow-sm hover:shadow-lg hover:border-primary-200 hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all duration-300">
              <Shield className="w-6 h-6 text-primary-700" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mb-2" style={{ fontFamily: 'var(--font-serif-pro), Georgia, serif', letterSpacing: '-0.015em', lineHeight: '1.3' }}>Integrity</h3>
            <p className="text-sm text-neutral-600 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif', lineHeight: '1.7' }}>Adherence to professional ethics and transparent conduct in all engagements</p>
          </div>
          <div className="group bg-white rounded-xl p-6 border-2 border-neutral-200 shadow-sm hover:shadow-lg hover:border-primary-200 hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all duration-300">
              <CheckCircle2 className="w-6 h-6 text-primary-700" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mb-2" style={{ fontFamily: 'var(--font-serif-pro), Georgia, serif', letterSpacing: '-0.015em', lineHeight: '1.3' }}>Confidentiality</h3>
            <p className="text-sm text-neutral-600 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif', lineHeight: '1.7' }}>Strict protection of client information in accordance with regulatory requirements</p>
          </div>
          <div className="group bg-white rounded-xl p-6 border-2 border-neutral-200 shadow-sm hover:shadow-lg hover:border-primary-200 hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all duration-300">
              <Award className="w-6 h-6 text-primary-700" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mb-2" style={{ fontFamily: 'var(--font-serif-pro), Georgia, serif', letterSpacing: '-0.015em', lineHeight: '1.3' }}>Due Care</h3>
            <p className="text-sm text-neutral-600 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif', lineHeight: '1.7' }}>Diligent application of professional knowledge and compliance with applicable standards</p>
          </div>
        </div>
      </div>
    </section>
  );
}
