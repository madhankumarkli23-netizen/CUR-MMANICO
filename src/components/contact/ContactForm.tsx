'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, AlertCircle, CheckCircle2 } from 'lucide-react';

const serviceCategories = [
  'Direct Tax',
  'Indirect Tax (GST)',
  'Audit & Assurance',
  'Accounting & Compliance',
  'Corporate / ROC Compliance',
  'Advisory',
  'Other',
];

function ContactFormContent() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get('service');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: preselectedService || '',
    message: '',
    contactMode: 'email',
    preferredTime: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Send email notification
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit enquiry');
      }

      // Send WhatsApp message
      const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919632818089';
      const whatsappMessage = encodeURIComponent(
        `📧 *New Contact Enquiry*\n\n` +
        `*Name:* ${formData.name}\n` +
        `*Email:* ${formData.email}\n` +
        `${formData.phone ? `*Phone:* ${formData.phone}\n` : ''}` +
        `${formData.service ? `*Service Category:* ${formData.service}\n` : ''}` +
        `*Preferred Contact Mode:* ${formData.contactMode || 'Email'}\n` +
        `${formData.preferredTime ? `*Preferred Time:* ${formData.preferredTime}\n` : ''}\n` +
        `*Message:*\n${formData.message}\n\n` +
        `Please respond to the client as per their preferred contact mode.`
      );
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
      
      // Open WhatsApp
      window.open(whatsappUrl, '_blank');

      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          contactMode: 'email',
          preferredTime: '',
        });
      }, 3000);
    } catch (err) {
      setError('Failed to submit enquiry. Please try again or contact us directly.');
      console.error('Contact form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  return (
    <div className="bg-neutral-50 rounded-lg p-8 border border-neutral-200">
      <h2 className="text-2xl font-bold text-neutral-900 mb-6">Send an Enquiry</h2>

      {/* Security Warning */}
      <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-red-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
        <div>
          <p className="text-sm font-medium text-red-900 mb-1">Security Warning</p>
          <p className="text-xs text-red-800">
            Do not share passwords, OTPs, bank credentials, or highly sensitive documents through this form or email. Such information should only be shared through secure, authenticated channels during an active engagement.
          </p>
        </div>
      </div>

      {submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-700" aria-hidden="true" />
          </div>
          <h3 className="text-lg font-semibold text-green-900 mb-2">Enquiry Received!</h3>
          <p className="text-sm text-green-800 mb-2">
            We&apos;ve received your enquiry and sent it to <strong>info@mmanico.com</strong>
          </p>
          <p className="text-xs text-green-700">
            We&apos;ll review your enquiry and respond as per your preferred contact mode.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
              Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 text-base"
              style={{ fontSize: '16px' }}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 text-base"
              style={{ fontSize: '16px' }}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
              Phone <span className="text-neutral-500 text-xs">(Optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 text-base"
              style={{ fontSize: '16px' }}
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
              Service Category
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 text-base"
              style={{ fontSize: '16px', minHeight: '44px' }}
            >
              <option value="">Select a category</option>
              {serviceCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
              Message <span className="text-red-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 resize-none text-base"
              placeholder="Please describe your enquiry..."
              style={{ fontSize: '16px' }}
            />
          </div>

          <div>
            <label htmlFor="contactMode" className="block text-sm font-medium text-neutral-700 mb-2">
              Preferred Contact Mode
            </label>
            <select
              id="contactMode"
              name="contactMode"
              value={formData.contactMode}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 text-base"
              style={{ fontSize: '16px', minHeight: '44px' }}
            >
              <option value="email">Email</option>
              <option value="phone">Phone Call</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
          </div>

          <div>
            <label htmlFor="preferredTime" className="block text-sm font-medium text-neutral-700 mb-2">
              Preferred Time <span className="text-neutral-500 text-xs">(Optional)</span>
            </label>
            <input
              type="text"
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              placeholder="e.g., Weekday mornings, after 6 PM"
              className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 text-base"
              style={{ fontSize: '16px' }}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary-700 text-white py-3 rounded-md hover:bg-primary-800 active:bg-primary-900 transition-colors font-medium flex items-center justify-center touch-manipulation disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ minHeight: '44px' }}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" aria-hidden="true" />
                Send Enquiry
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="bg-neutral-50 rounded-lg p-8 border border-neutral-200 h-96 animate-pulse"></div>}>
      <ContactFormContent />
    </Suspense>
  );
}
