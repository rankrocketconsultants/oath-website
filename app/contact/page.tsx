'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success message
    // In production, integrate with Vercel Forms or Formspree
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-heading-xl mb-4">Contact Us</h1>
          <p className="text-oath-text-secondary text-lg mb-12">
            Have a question or feedback? We'd love to hear from you.
          </p>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-oath-emerald-surface border border-oath-emerald-primary rounded-oath-md p-4 mb-8"
            >
              <p className="text-oath-emerald-deep font-semibold">
                Thank you for your message! We'll get back to you soon.
              </p>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-oath-text font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-oath-hairline rounded-oath-md focus:outline-none focus:ring-2 focus:ring-oath-emerald-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-oath-text font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-oath-hairline rounded-oath-md focus:outline-none focus:ring-2 focus:ring-oath-emerald-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-oath-text font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-oath-hairline rounded-oath-md focus:outline-none focus:ring-2 focus:ring-oath-emerald-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-oath-text font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-oath-hairline rounded-oath-md focus:outline-none focus:ring-2 focus:ring-oath-emerald-primary focus:border-transparent resize-none"
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-heading-md mb-4">Get in Touch</h2>
                <p className="text-oath-text-secondary mb-6">
                  Choose the right contact for your inquiry to get a faster response.
                </p>
              </div>

              {/* Contact Categories */}
              <div className="space-y-4">
                {/* General Support */}
                <div className="border border-oath-hairline rounded-oath-lg p-4 hover:border-oath-emerald-primary transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-oath-emerald-surface rounded-oath-md flex items-center justify-center">
                      <span className="text-oath-emerald-primary text-xl">💬</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-oath-text mb-1">General Support</h3>
                      <p className="text-oath-text-secondary text-small mb-2">
                        App issues, feature questions, or general help
                      </p>
                      <a
                        href="mailto:support@theoath.app"
                        className="text-oath-emerald-primary hover:underline text-small break-all"
                      >
                        support@theoath.app
                      </a>
                    </div>
                  </div>
                </div>

                {/* Privacy & Legal */}
                <div className="border border-oath-hairline rounded-oath-lg p-4 hover:border-oath-emerald-primary transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-oath-emerald-surface rounded-oath-md flex items-center justify-center">
                      <span className="text-oath-emerald-primary text-xl">🔒</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-oath-text mb-1">Privacy & Legal</h3>
                      <p className="text-oath-text-secondary text-small mb-2">
                        Data requests, CCPA opt-outs, account deletion
                      </p>
                      <a
                        href="mailto:privacy@theoath.app"
                        className="text-oath-emerald-primary hover:underline text-small break-all"
                      >
                        privacy@theoath.app
                      </a>
                      <p className="text-oath-text-secondary text-small mt-2">
                        Response within 30 days per CCPA
                      </p>
                    </div>
                  </div>
                </div>

                {/* Security */}
                <div className="border border-oath-hairline rounded-oath-lg p-4 hover:border-oath-emerald-primary transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-oath-emerald-surface rounded-oath-md flex items-center justify-center">
                      <span className="text-oath-emerald-primary text-xl">🛡️</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-oath-text mb-1">Security Issues</h3>
                      <p className="text-oath-text-secondary text-small mb-2">
                        Report vulnerabilities or security concerns
                      </p>
                      <a
                        href="mailto:security@theoath.app"
                        className="text-oath-emerald-primary hover:underline text-small break-all"
                      >
                        security@theoath.app
                      </a>
                    </div>
                  </div>
                </div>

                {/* Billing & Subscriptions */}
                <div className="border border-oath-hairline rounded-oath-lg p-4 hover:border-oath-emerald-primary transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-oath-emerald-surface rounded-oath-md flex items-center justify-center">
                      <span className="text-oath-emerald-primary text-xl">💳</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-oath-text mb-1">Billing & Subscriptions</h3>
                      <p className="text-oath-text-secondary text-small mb-2">
                        Payment issues, refunds, subscription changes
                      </p>
                      <a
                        href="mailto:billing@theoath.app"
                        className="text-oath-emerald-primary hover:underline text-small break-all"
                      >
                        billing@theoath.app
                      </a>
                    </div>
                  </div>
                </div>

                {/* Business Inquiries */}
                <div className="border border-oath-hairline rounded-oath-lg p-4 hover:border-oath-emerald-primary transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-oath-emerald-surface rounded-oath-md flex items-center justify-center">
                      <span className="text-oath-emerald-primary text-xl">🤝</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-oath-text mb-1">Business & Partnerships</h3>
                      <p className="text-oath-text-secondary text-small mb-2">
                        Enterprise inquiries, partnerships, collaborations
                      </p>
                      <a
                        href="mailto:business@theoath.app"
                        className="text-oath-emerald-primary hover:underline text-small break-all"
                      >
                        business@theoath.app
                      </a>
                    </div>
                  </div>
                </div>

                {/* Press & Media */}
                <div className="border border-oath-hairline rounded-oath-lg p-4 hover:border-oath-emerald-primary transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-oath-emerald-surface rounded-oath-md flex items-center justify-center">
                      <span className="text-oath-emerald-primary text-xl">📰</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-oath-text mb-1">Press & Media</h3>
                      <p className="text-oath-text-secondary text-small mb-2">
                        Media inquiries, press kits, interviews
                      </p>
                      <a
                        href="mailto:press@theoath.app"
                        className="text-oath-emerald-primary hover:underline text-small break-all"
                      >
                        press@theoath.app
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time Info */}
              <div className="bg-oath-bg-surface rounded-oath-lg p-6 mt-6">
                <h3 className="font-semibold text-oath-text mb-3">Response Times</h3>
                <ul className="space-y-2 text-oath-text-secondary text-small">
                  <li className="flex items-start gap-2">
                    <span className="text-oath-emerald-primary">•</span>
                    <span><strong>General Support:</strong> 24-48 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-oath-emerald-primary">•</span>
                    <span><strong>Privacy Requests:</strong> Within 30 days (CCPA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-oath-emerald-primary">•</span>
                    <span><strong>Security Issues:</strong> 24 hours or less</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-oath-emerald-primary">•</span>
                    <span><strong>Business Inquiries:</strong> 3-5 business days</span>
                  </li>
                </ul>
                <p className="text-oath-text-secondary text-small mt-4">
                  For urgent issues, include "URGENT" in your subject line.
                </p>
              </div>

              {/* Quick Links */}
              <div className="border-t border-oath-hairline pt-6 mt-6">
                <h3 className="font-semibold text-oath-text mb-3">Quick Links</h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/faq"
                    className="text-oath-emerald-primary hover:underline text-small"
                  >
                    FAQ
                  </a>
                  <span className="text-oath-text-secondary">•</span>
                  <a
                    href="/privacy"
                    className="text-oath-emerald-primary hover:underline text-small"
                  >
                    Privacy Policy
                  </a>
                  <span className="text-oath-text-secondary">•</span>
                  <a
                    href="/terms"
                    className="text-oath-emerald-primary hover:underline text-small"
                  >
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
