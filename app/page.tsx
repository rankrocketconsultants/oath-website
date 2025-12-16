'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setMessage(data.error || 'Something went wrong');
        return;
      }

      setStatus('success');
      setMessage('You\'re on the list!');
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('Something went wrong');
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center justify-center bg-white dark:bg-black overflow-hidden py-20 sm:py-0">
          {/* Floating UI Elements */}
          <FloatingElements />

          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 via-transparent to-transparent dark:from-emerald-950/20 dark:via-transparent dark:to-transparent" />

          {/* Hero Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-16 sm:pt-20 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-4 sm:mb-8">
                AI-Powered Commitment Tracking
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-8 tracking-tight"
            >
              Keep your word.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[15px] sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-12 w-full"
            >
              Oath understands task complexity and schedules smart reminders. Track what you honored vs. missed—honest accountability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center"
              style={{ gap: '0.25rem' }}
            >
              <Link
                href="#waitlist"
                className="px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity text-lg text-[#0B0C0D]"
                style={{ background: 'linear-gradient(135deg, #FFF9E6 0%, #EBDFA4 50%, #BFA35A 100%)' }}
              >
                Join the Waitlist
              </Link>
              <Link
                href="#features"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium text-lg py-2"
              >
                Learn more →
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Coming to iOS · Early 2026
              </p>
            </motion.div>

            {/* Mobile Task Cards Showcase - Infinite Marquee */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="sm:hidden mt-8 w-full overflow-hidden"
            >
              <motion.div
                className="flex gap-4"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                  x: {
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                }}
              >
                {/* First set of cards */}
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex gap-4 flex-shrink-0">
                    {/* Task Card 1 - Work */}
                    <div className="flex-shrink-0 w-[260px]">
                      <div
                        className="flex overflow-hidden rounded-[16px] bg-white dark:bg-[#1F2124]"
                        style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 4px 6px rgba(0,0,0,0.04)' }}
                      >
                        <div className="w-[6px] flex-shrink-0 bg-blue-500" />
                        <div className="flex-1 px-[14px] py-[12px]">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-[11px] font-bold tracking-wide text-gray-500 dark:text-gray-400 uppercase">Today</span>
                            <span className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold" style={{ backgroundColor: 'rgba(15, 170, 119, 0.12)', color: '#0FAA77' }}>
                              <svg className="w-[9px] h-[9px]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              Task
                            </span>
                          </div>
                          <p className="text-[16px] font-bold text-gray-900 dark:text-white mb-2">Complete quarterly report</p>
                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1 px-2 py-[3px] rounded-lg text-[11px] font-medium" style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)', color: '#3B82F6' }}>Work</span>
                            <span className="px-2.5 py-1 rounded-[12px] text-[12px] font-bold tracking-wide" style={{ backgroundColor: 'rgba(15, 170, 119, 0.1)', color: '#0FAA77', border: '0.5px solid rgba(15, 170, 119, 0.14)' }}>5:00 PM</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Task Card 2 - Exercise */}
                    <div className="flex-shrink-0 w-[240px]">
                      <div
                        className="flex overflow-hidden rounded-[16px] bg-white dark:bg-[#1F2124]"
                        style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 4px 6px rgba(0,0,0,0.04)' }}
                      >
                        <div className="w-[6px] flex-shrink-0 bg-green-500" />
                        <div className="flex-1 px-[14px] py-[12px]">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-[11px] font-bold tracking-wide text-gray-500 dark:text-gray-400 uppercase">Tomorrow</span>
                            <span className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold" style={{ backgroundColor: 'rgba(15, 170, 119, 0.12)', color: '#0FAA77' }}>
                              <svg className="w-[9px] h-[9px]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              Task
                            </span>
                          </div>
                          <p className="text-[16px] font-bold text-gray-900 dark:text-white mb-2">Morning run - 5K</p>
                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1 px-2 py-[3px] rounded-lg text-[11px] font-medium" style={{ backgroundColor: 'rgba(34, 197, 94, 0.15)', color: '#22C55E' }}>Exercise</span>
                            <span className="px-2.5 py-1 rounded-[12px] text-[12px] font-bold tracking-wide" style={{ backgroundColor: 'rgba(15, 170, 119, 0.1)', color: '#0FAA77', border: '0.5px solid rgba(15, 170, 119, 0.14)' }}>6:30 AM</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Task Card 3 - Honored */}
                    <div className="flex-shrink-0 w-[230px]">
                      <div
                        className="flex overflow-hidden rounded-[16px] bg-white dark:bg-[#1F2124]"
                        style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 4px 6px rgba(0,0,0,0.04)' }}
                      >
                        <div className="w-[6px] flex-shrink-0 bg-red-500" />
                        <div className="flex-1 px-[14px] py-[12px]">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-[11px] font-bold tracking-wide text-gray-500 dark:text-gray-400 uppercase">Today</span>
                            <span className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold" style={{ backgroundColor: 'rgba(15, 170, 119, 0.12)', color: '#0FAA77' }}>
                              <svg className="w-[9px] h-[9px]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              Task
                            </span>
                          </div>
                          <p className="text-[16px] font-bold line-through text-gray-400 dark:text-gray-500 mb-2">Schedule dentist</p>
                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1 px-2 py-[3px] rounded-lg text-[11px] font-medium" style={{ backgroundColor: 'rgba(239, 68, 68, 0.15)', color: '#EF4444' }}>Health</span>
                            <span className="px-2.5 py-1 rounded-[11px] text-[12px] font-bold text-white" style={{ background: 'linear-gradient(135deg, #0FAA77, #067B60)' }}>Honored</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Task Card 4 - Finance */}
                    <div className="flex-shrink-0 w-[250px]">
                      <div
                        className="flex overflow-hidden rounded-[16px] bg-white dark:bg-[#1F2124]"
                        style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 4px 6px rgba(0,0,0,0.04)' }}
                      >
                        <div className="w-[6px] flex-shrink-0 bg-yellow-500" />
                        <div className="flex-1 px-[14px] py-[12px]">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-[11px] font-bold tracking-wide text-gray-500 dark:text-gray-400 uppercase">Friday</span>
                            <span className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold" style={{ backgroundColor: 'rgba(15, 170, 119, 0.12)', color: '#0FAA77' }}>
                              <svg className="w-[9px] h-[9px]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              Task
                            </span>
                          </div>
                          <p className="text-[16px] font-bold text-gray-900 dark:text-white mb-2">Review monthly budget</p>
                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1 px-2 py-[3px] rounded-lg text-[11px] font-medium" style={{ backgroundColor: 'rgba(234, 179, 8, 0.15)', color: '#EAB308' }}>Finance</span>
                            <span className="px-2.5 py-1 rounded-[12px] text-[12px] font-bold tracking-wide" style={{ backgroundColor: 'rgba(15, 170, 119, 0.1)', color: '#0FAA77', border: '0.5px solid rgba(15, 170, 119, 0.14)' }}>7:00 PM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-32 bg-gray-50 dark:bg-[#0C0C0D]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Not another to-do app
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400" style={{ textAlign: 'center' }}>
                AI that understands your tasks. Reminders that actually help.<br /> Accountability that drives real change.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Feature 1 - AI Reminders (Blue/Work) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex overflow-hidden rounded-[16px] bg-white dark:bg-[#1F2124]"
                style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 4px 6px rgba(0,0,0,0.04)' }}
              >
                <div className="w-[6px] flex-shrink-0 bg-blue-500" />
                <div className="flex-1 p-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)' }}
                  >
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    AI-Powered Reminders
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed">
                    Oath analyzes task complexity and schedules appropriate notifications. A complex project gets days of reminders, a simple errand gets one timely alert.
                  </p>
                </div>
              </motion.div>

              {/* Feature 2 - Honor Tracking (Emerald) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex overflow-hidden rounded-[16px] bg-white dark:bg-[#1F2124]"
                style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 4px 6px rgba(0,0,0,0.04)' }}
              >
                <div className="w-[6px] flex-shrink-0 bg-[#0FAA77]" />
                <div className="flex-1 p-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'rgba(15, 170, 119, 0.15)' }}
                  >
                    <svg className="w-5 h-5 text-[#0FAA77]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Honor Tracking
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed">
                    See which commitments you honored vs. which you missed. Honest accountability for personal growth, without gamification or guilt-tripping.
                  </p>
                </div>
              </motion.div>

              {/* Feature 3 - Lightning Fast (Orange/Personal) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex overflow-hidden rounded-[16px] bg-white dark:bg-[#1F2124]"
                style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 4px 6px rgba(0,0,0,0.04)' }}
              >
                <div className="w-[6px] flex-shrink-0 bg-orange-500" />
                <div className="flex-1 p-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'rgba(249, 115, 22, 0.15)' }}
                  >
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Lightning-Fast Entry
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed">
                    Type "Walk the dogs 11:30 PM" and Oath creates the task instantly. Natural language processing means no forms, no friction, no wasted time.
                  </p>
                </div>
              </motion.div>

              {/* Feature 4 - Beautiful Simplicity (Purple/Social) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex overflow-hidden rounded-[16px] bg-white dark:bg-[#1F2124]"
                style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 4px 6px rgba(0,0,0,0.04)' }}
              >
                <div className="w-[6px] flex-shrink-0 bg-purple-500" />
                <div className="flex-1 p-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'rgba(168, 85, 247, 0.15)' }}
                  >
                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Beautiful Simplicity
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed">
                    Clean, distraction-free interface designed for focus. No gamification, no streaks, no social features. Just you and your commitments.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-32 bg-white dark:bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                How it works
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400" style={{ textAlign: 'center' }}>
                Three simple steps to honoring your commitments
              </p>
            </motion.div>

            <div className="space-y-24">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                <div className="order-2 md:order-1">
                  <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-4 block">Step 1</span>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Create</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    Add commitments instantly with natural language. "Walk the dogs 11:30 PM" becomes a task in seconds. No complicated forms or menus.
                  </p>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  {/* Light mode mockup */}
                  <div className="relative w-[280px] md:w-[320px] dark:hidden">
                    <Image
                      src="/images/mockups/home-light-cropped.png"
                      alt="Oath app home screen"
                      width={920}
                      height={1370}
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Dark mode mockup */}
                  <div className="relative w-[280px] md:w-[320px] hidden dark:block">
                    <Image
                      src="/images/mockups/home-dark-cropped.png"
                      alt="Oath app home screen"
                      width={920}
                      height={1370}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                <div className="flex justify-center">
                  {/* Light mode mockup */}
                  <div className="relative w-[280px] md:w-[320px] dark:hidden">
                    <Image
                      src="/images/mockups/notifications-light-cropped.png"
                      alt="Oath notifications"
                      width={920}
                      height={1370}
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Dark mode mockup */}
                  <div className="relative w-[280px] md:w-[320px] hidden dark:block">
                    <Image
                      src="/images/mockups/notifications-dark-cropped.png"
                      alt="Oath notifications"
                      width={920}
                      height={1370}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div>
                  <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-4 block">Step 2</span>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get Reminded</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    Oath's AI analyzes complexity and schedules smart notifications. Complex tasks get multi-day reminders, simple ones get timely alerts.
                  </p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                <div className="order-2 md:order-1">
                  <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-4 block">Step 3</span>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Honor</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    Mark commitments honored or missed. See your accountability clearly in the ledger—no hiding, just honest facts about keeping your word.
                  </p>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  {/* Light mode mockup */}
                  <div className="relative w-[280px] md:w-[320px] dark:hidden">
                    <Image
                      src="/images/mockups/ledger-light-cropped.png"
                      alt="Oath ledger tracking"
                      width={920}
                      height={1370}
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Dark mode mockup */}
                  <div className="relative w-[280px] md:w-[320px] hidden dark:block">
                    <Image
                      src="/images/mockups/ledger-dark-cropped.png"
                      alt="Oath ledger tracking"
                      width={920}
                      height={1370}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI Showcase Section */}
        <section className="py-32 bg-gray-50 dark:bg-[#0C0C0D]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Smart reminders that adapt
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400" style={{ textAlign: 'center' }}>
                Not all tasks are equal. Oath adapts to what you're actually trying to accomplish.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Simple Task Example */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white dark:bg-[#1A1A1B] rounded-3xl p-8 border border-gray-200 dark:border-gray-800"
              >
                <div className="mb-6">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Simple task</span>
                  <p className="text-xl font-semibold text-gray-900 dark:text-white mt-1">&quot;Take out trash 8 PM&quot;</p>
                </div>
                {/* Light mode container */}
                <div
                  className="rounded-2xl p-4 dark:hidden"
                  style={{
                    background: 'linear-gradient(135deg, #67e8f9 0%, #10b981 50%, #a3e635 100%)',
                  }}
                >
                  <div
                    className="flex items-start gap-3 p-3 rounded-2xl border border-white/50"
                    style={{
                      background: 'rgba(255, 255, 255, 0.55)',
                      backdropFilter: 'blur(16px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                      boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
                    }}
                  >
                    <Image src="/images/oath-icon.png" alt="Oath" width={40} height={40} className="rounded-[10px] flex-shrink-0 shadow-sm" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] font-semibold text-gray-900">Take out trash</span>
                        <span className="text-[11px] text-gray-500">7:45 PM</span>
                      </div>
                      <p className="text-[13px] text-gray-600 mt-0.5">Reminder in 15 minutes!</p>
                    </div>
                  </div>
                </div>
                {/* Dark mode container */}
                <div
                  className="hidden dark:block rounded-2xl p-4"
                  style={{
                    background: 'linear-gradient(135deg, #0e7490 0%, #065f46 50%, #164e63 100%)',
                  }}
                >
                  <div
                    className="flex items-start gap-3 p-3 rounded-2xl border border-white/15"
                    style={{
                      background: 'rgba(60, 60, 67, 0.6)',
                      backdropFilter: 'blur(16px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                      boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <Image src="/images/oath-icon.png" alt="Oath" width={40} height={40} className="rounded-[10px] flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] font-semibold text-white">Take out trash</span>
                        <span className="text-[11px] text-gray-400">7:45 PM</span>
                      </div>
                      <p className="text-[13px] text-gray-300 mt-0.5">Reminder in 15 minutes!</p>
                    </div>
                  </div>
                </div>
                <p className="mt-8 text-sm text-gray-500 dark:text-gray-500 text-center">
                  One timely reminder is all you need
                </p>
              </motion.div>

              {/* Complex Task Example */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-[#1A1A1B] rounded-3xl p-8 border border-gray-200 dark:border-gray-800"
              >
                <div className="mb-6">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Complex task</span>
                  <p className="text-xl font-semibold text-gray-900 dark:text-white mt-1">&quot;Quarterly report Friday 5 PM&quot;</p>
                </div>
                {/* Light mode container */}
                <div
                  className="rounded-2xl p-4 space-y-2 dark:hidden"
                  style={{
                    background: 'linear-gradient(135deg, #2dd4bf 0%, #10b981 50%, #0ea5e9 100%)',
                  }}
                >
                  <div className="flex items-start gap-3 p-3 rounded-2xl border border-white/50" style={{ background: 'rgba(255, 255, 255, 0.55)', backdropFilter: 'blur(16px) saturate(180%)', WebkitBackdropFilter: 'blur(16px) saturate(180%)', boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)' }}>
                    <Image src="/images/oath-icon.png" alt="Oath" width={40} height={40} className="rounded-[10px] flex-shrink-0 shadow-sm" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] font-semibold text-gray-900">Quarterly report</span>
                        <span className="text-[11px] text-gray-500">Mon</span>
                      </div>
                      <p className="text-[13px] text-gray-600 mt-0.5">Start gathering data for your report</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-2xl border border-white/50" style={{ background: 'rgba(255, 255, 255, 0.55)', backdropFilter: 'blur(16px) saturate(180%)', WebkitBackdropFilter: 'blur(16px) saturate(180%)', boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)' }}>
                    <Image src="/images/oath-icon.png" alt="Oath" width={40} height={40} className="rounded-[10px] flex-shrink-0 shadow-sm" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] font-semibold text-gray-900">Quarterly report</span>
                        <span className="text-[11px] text-gray-500">Wed</span>
                      </div>
                      <p className="text-[13px] text-gray-600 mt-0.5">Continue your analysis</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-2xl border border-white/50" style={{ background: 'rgba(255, 255, 255, 0.55)', backdropFilter: 'blur(16px) saturate(180%)', WebkitBackdropFilter: 'blur(16px) saturate(180%)', boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)' }}>
                    <Image src="/images/oath-icon.png" alt="Oath" width={40} height={40} className="rounded-[10px] flex-shrink-0 shadow-sm" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] font-semibold text-gray-900">Quarterly report</span>
                        <span className="text-[11px] text-gray-500">Fri 2 PM</span>
                      </div>
                      <p className="text-[13px] text-gray-600 mt-0.5">Time for final review before deadline</p>
                    </div>
                  </div>
                </div>
                {/* Dark mode container */}
                <div
                  className="hidden dark:block rounded-2xl p-4 space-y-2"
                  style={{
                    background: 'linear-gradient(135deg, #134e4a 0%, #064e3b 50%, #0c4a6e 100%)',
                  }}
                >
                  <div className="flex items-start gap-3 p-3 rounded-2xl border border-white/15" style={{ background: 'rgba(60, 60, 67, 0.6)', backdropFilter: 'blur(16px) saturate(180%)', WebkitBackdropFilter: 'blur(16px) saturate(180%)', boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)' }}>
                    <Image src="/images/oath-icon.png" alt="Oath" width={40} height={40} className="rounded-[10px] flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] font-semibold text-white">Quarterly report</span>
                        <span className="text-[11px] text-gray-400">Mon</span>
                      </div>
                      <p className="text-[13px] text-gray-300 mt-0.5">Start gathering data for your report</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-2xl border border-white/15" style={{ background: 'rgba(60, 60, 67, 0.6)', backdropFilter: 'blur(16px) saturate(180%)', WebkitBackdropFilter: 'blur(16px) saturate(180%)', boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)' }}>
                    <Image src="/images/oath-icon.png" alt="Oath" width={40} height={40} className="rounded-[10px] flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] font-semibold text-white">Quarterly report</span>
                        <span className="text-[11px] text-gray-400">Wed</span>
                      </div>
                      <p className="text-[13px] text-gray-300 mt-0.5">Continue your analysis</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-2xl border border-white/15" style={{ background: 'rgba(60, 60, 67, 0.6)', backdropFilter: 'blur(16px) saturate(180%)', WebkitBackdropFilter: 'blur(16px) saturate(180%)', boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)' }}>
                    <Image src="/images/oath-icon.png" alt="Oath" width={40} height={40} className="rounded-[10px] flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] font-semibold text-white">Quarterly report</span>
                        <span className="text-[11px] text-gray-400">Fri 2 PM</span>
                      </div>
                      <p className="text-[13px] text-gray-300 mt-0.5">Time for final review before deadline</p>
                    </div>
                  </div>
                </div>
                <p className="mt-8 text-sm text-gray-500 dark:text-gray-500 text-center">
                  Multiple strategic reminders over days
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-24 bg-white dark:bg-black border-y border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2">100%</p>
                <p className="text-gray-600 dark:text-gray-400">Privacy focused</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2">0</p>
                <p className="text-gray-600 dark:text-gray-400">Social features or distractions</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2">∞</p>
                <p className="text-gray-600 dark:text-gray-400">Commitment to your success</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Waitlist CTA Section */}
        <section id="waitlist" className="py-32 bg-gray-50 dark:bg-[#0C0C0D]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto px-6 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Be the first to know
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400" style={{ marginBottom: '2.25rem' }}>
              Join the waitlist and get early access when Oath launches on iOS.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading' || status === 'success'}
                className="flex-1 px-6 py-4 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1A1A1B] text-gray-900 dark:text-white placeholder-gray-500 outline-none ring-0 focus:border-[#BFA35A] transition-colors disabled:opacity-50"
                style={{ outline: 'none', boxShadow: 'none' }}
                required
              />
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity whitespace-nowrap text-[#0B0C0D] disabled:opacity-50"
                style={{ background: 'linear-gradient(135deg, #FFF9E6 0%, #EBDFA4 50%, #BFA35A 100%)' }}
              >
                {status === 'loading' ? 'Joining...' : status === 'success' ? 'Joined!' : 'Join Waitlist'}
              </button>
            </form>

            <p className="text-sm" style={{ marginTop: '1.33rem' }}>
              {status === 'success' ? (
                <span className="text-emerald-600 dark:text-emerald-400">{message}</span>
              ) : status === 'error' ? (
                <span className="text-red-500">{message}</span>
              ) : (
                <span className="text-gray-500 dark:text-gray-500">No spam. Unsubscribe anytime.</span>
              )}
            </p>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
