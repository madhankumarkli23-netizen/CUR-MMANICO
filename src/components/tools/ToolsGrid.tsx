import Link from 'next/link';
import { Calculator, Home, ReceiptIndianRupee, Clock, Calendar } from 'lucide-react';

const tools = [
  {
    id: 'income-tax-calculator',
    icon: Calculator,
    title: 'Income Tax Estimator',
    description: 'Calculate estimated income tax liability for FY 2025-26',
  },
  {
    id: 'hra-calculator',
    icon: Home,
    title: 'HRA Exemption Calculator',
    description: 'Estimate House Rent Allowance exemption amount',
  },
  {
    id: 'gst-calculator',
    icon: ReceiptIndianRupee,
    title: 'GST Interest & Late Fee',
    description: 'Calculate GST interest and late fee for delayed filing',
  },
  {
    id: 'advance-tax-reminder',
    icon: Clock,
    title: 'Advance Tax Reminder',
    description: 'Check advance tax due dates and installment amounts',
  },
  {
    id: 'tds-due-date-checker',
    icon: Calendar,
    title: 'TDS Due Date Checker',
    description: 'View TDS deduction and filing due dates',
  },
];

export default function ToolsGrid() {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">
          Choose a Tool
        </h2>
        <p className="text-neutral-600">
          Select a calculator or tool from the options below
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.id}
              href={`/tools/${tool.id}`}
              className="group relative p-8 bg-white border border-neutral-200 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary-900/10 hover:-translate-y-1 text-left overflow-hidden block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary-50 group-hover:bg-primary-900 flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary-700 group-hover:text-accent transition-colors duration-300" aria-hidden="true" />
                </div>

                <h3 className="text-xl font-bold font-serif text-primary-950 mb-3 group-hover:text-primary-700 transition-colors">
                  {tool.title}
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  {tool.description}
                </p>

                <div className="mt-6 flex items-center text-primary-600 font-medium text-sm group-hover:text-primary-800">
                  Open Tool <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
