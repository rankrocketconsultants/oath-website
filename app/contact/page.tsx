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
            <div className="space-y-8">
              <div>
                <h2 className="text-heading-md mb-4">Get in Touch</h2>
                <p className="text-oath-text-secondary mb-6">
                  Whether you have questions, feedback, or need support, we're here to help.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-oath-text mb-2">Email</h3>
                <a
                  href="mailto:support@oath.app"
                  className="text-oath-emerald-primary hover:underline"
                >
                  support@oath.app
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-oath-text mb-2">Support</h3>
                <p className="text-oath-text-secondary">
                  For app-specific issues, check out our <a href="/faq" className="text-oath-emerald-primary hover:underline">FAQ page</a> for quick answers to common questions.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-oath-text mb-2">Privacy & Legal</h3>
                <p className="text-oath-text-secondary">
                  Questions about data privacy or terms of service? Visit our{' '}
                  <a href="/privacy" className="text-oath-emerald-primary hover:underline">Privacy Policy</a>
                  {' '}or{' '}
                  <a href="/terms" className="text-oath-emerald-primary hover:underline">Terms of Service</a>
                  {' '}pages.
                </p>
              </div>

              <div className="bg-oath-bg-surface rounded-oath-lg p-6">
                <h3 className="font-semibold text-oath-text mb-3">Response Time</h3>
                <p className="text-oath-text-secondary text-small">
                  We typically respond to inquiries within 24-48 hours during business days. For urgent issues, please include "URGENT" in your subject line.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
