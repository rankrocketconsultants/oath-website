'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import FeatureCard from '@/components/FeatureCard';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="oath-gradient-hero-emerald text-white px-6 py-20 md:py-32">
          <div className="max-w-4xl mx-auto">
            {/* Large Brand Mark */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-center"
            >
              Oath.
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-center"
            >
              The only app that helps you honor oaths, not just make them.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl mb-8 opacity-95 leading-relaxed text-center"
            >
              AI analyzes every commitment and schedules smart notifications. Track honored vs. missed—brutal honesty about keeping your word.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center"
            >
              <Button href="#download" variant="primary" className="text-lg px-10 py-4">
                Download for iOS
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              What makes Oath different
            </h2>
            <p className="text-oath-text-secondary text-xl">
              Not just another to-do app. Oath focuses on what matters: keeping your word.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              icon={
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              }
              title="AI-Powered Notifications"
              description="Oath Keeper analyzes task complexity and schedules appropriate notifications. A complex project gets days of reminders, a simple errand gets one."
            />

            <FeatureCard
              icon={
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
              title="Honor Tracking"
              description="See which commitments you honored vs. which you missed. Honest accountability for personal growth, without gamification or guilt."
            />

            <FeatureCard
              icon={
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="Lightning-Fast Entry"
              description="Type 'Walk the dogs 11:30 PM' and Oath creates the task instantly. Natural language processing means no forms, no friction."
            />

            <FeatureCard
              icon={
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              }
              title="Beautiful Simplicity"
              description="Clean, distraction-free interface. No gamification, no streaks, no guilt-tripping. Just tasks, events, and honest tracking."
            />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-oath-bg-surface py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                How it works
              </h2>
              <p className="text-oath-text-secondary text-xl">
                Three simple steps to honoring your commitments
              </p>
            </motion.div>

            <div className="space-y-16">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div className="order-2 md:order-1">
                  <div className="w-12 h-12 rounded-full bg-oath-emerald-primary text-white flex items-center justify-center text-2xl font-bold mb-4">
                    1
                  </div>
                  <h3 className="text-heading-md mb-3">Create</h3>
                  <p className="text-oath-text-secondary text-lg">
                    Add commitments instantly with natural language. "Walk the dogs 11:30 PM" becomes a task in seconds.
                  </p>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  <div className="relative w-64 h-96 bg-gray-200 rounded-oath-lg overflow-hidden shadow-oath-xl">
                    <Image
                      src="/images/screenshots/IMG_4273.PNG"
                      alt="Oath app home screen"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div className="flex justify-center">
                  <div className="relative w-64 h-96 bg-gray-200 rounded-oath-lg overflow-hidden shadow-oath-xl">
                    <Image
                      src="/images/screenshots/IMG_4277.PNG"
                      alt="Oath AI analysis"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="w-12 h-12 rounded-full bg-oath-emerald-primary text-white flex items-center justify-center text-2xl font-bold mb-4">
                    2
                  </div>
                  <h3 className="text-heading-md mb-3">Get Reminded</h3>
                  <p className="text-oath-text-secondary text-lg">
                    Oath Keeper analyzes complexity and schedules smart notifications. Complex tasks get multi-day reminders, simple ones get timely alerts.
                  </p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div className="order-2 md:order-1">
                  <div className="w-12 h-12 rounded-full bg-oath-emerald-primary text-white flex items-center justify-center text-2xl font-bold mb-4">
                    3
                  </div>
                  <h3 className="text-heading-md mb-3">Honor</h3>
                  <p className="text-oath-text-secondary text-lg">
                    Mark commitments honored or missed. Honest tracking shows your real accountability—no hiding, just facts.
                  </p>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  <div className="relative w-64 h-96 bg-gray-200 rounded-oath-lg overflow-hidden shadow-oath-xl">
                    <Image
                      src="/images/screenshots/IMG_4281.PNG"
                      alt="Oath ledger tracking"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI Showcase Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Smart notifications that understand complexity
            </h2>
            <p className="text-oath-text-secondary text-xl">
              Not all tasks are equal. Oath Keeper adapts to what you're actually trying to accomplish.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Simple Task Example */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-oath-bg-surface rounded-oath-lg p-6 mb-4">
                <p className="font-semibold text-lg mb-2">Simple task</p>
                <p className="text-oath-text-secondary">"Take out trash 8 PM"</p>
              </div>
              <div className="space-y-2">
                <div className="border border-oath-emerald-primary rounded-oath-lg p-3 text-small" style={{ backgroundColor: 'var(--oath-surface)', color: 'var(--oath-text)' }}>
                  ✓ 7:45 PM: Reminder in 15 minutes
                </div>
              </div>
              <p className="text-caption text-oath-text-secondary mt-4">
                One timely reminder
              </p>
            </motion.div>

            {/* Complex Task Example */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-oath-bg-surface rounded-oath-lg p-6 mb-4">
                <p className="font-semibold text-lg mb-2">Complex task</p>
                <p className="text-oath-text-secondary">"Complete quarterly report Friday 5 PM"</p>
              </div>
              <div className="space-y-2">
                <div className="border border-oath-emerald-primary rounded-oath-lg p-3 text-small" style={{ backgroundColor: 'var(--oath-surface)', color: 'var(--oath-text)' }}>
                  ✓ Monday: Start gathering data
                </div>
                <div className="border border-oath-emerald-primary rounded-oath-lg p-3 text-small" style={{ backgroundColor: 'var(--oath-surface)', color: 'var(--oath-text)' }}>
                  ✓ Tuesday: Continue analysis
                </div>
                <div className="border border-oath-emerald-primary rounded-oath-lg p-3 text-small" style={{ backgroundColor: 'var(--oath-surface)', color: 'var(--oath-text)' }}>
                  ✓ Thursday: Begin writing report
                </div>
                <div className="border border-oath-emerald-primary rounded-oath-lg p-3 text-small" style={{ backgroundColor: 'var(--oath-surface)', color: 'var(--oath-text)' }}>
                  ✓ Friday 2 PM: Final review
                </div>
                <div className="border border-oath-emerald-primary rounded-oath-lg p-3 text-small" style={{ backgroundColor: 'var(--oath-surface)', color: 'var(--oath-text)' }}>
                  ✓ Friday 4:30 PM: Due in 30 minutes
                </div>
              </div>
              <p className="text-caption text-oath-text-secondary mt-4">
                Multiple strategic reminders over days
              </p>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="download" className="oath-gradient-hero-emerald text-white px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Start honoring your commitments
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Download Oath for iOS and keep your word—to yourself and others.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                href="https://apps.apple.com"
                className="bg-black hover:bg-gray-900 text-white px-8 py-4 text-lg"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold -mt-1">App Store</div>
                  </div>
                </div>
              </Button>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
