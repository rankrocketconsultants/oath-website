'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export default function Features() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-oath-bg-surface px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-heading-xl md:text-5xl mb-6"
            >
              Features that help you honor your commitments
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-oath-text-secondary text-xl max-w-2xl mx-auto"
            >
              Oath is built on honesty, intelligence, and simplicity. Every feature serves one purpose: helping you keep your word.
            </motion.p>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="max-w-7xl mx-auto px-6 py-20 space-y-32">
          {/* AI-Powered Notifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-heading-lg mb-4">AI-Powered Notifications</h2>
              <p className="text-oath-text-secondary text-lg mb-6 leading-relaxed">
                Oath Keeper, our AI system, analyzes every task you create and determines its complexity. Simple tasks get a single timely reminder. Complex projects get strategic notifications spread over days.
              </p>
              <p className="text-oath-text-secondary text-lg mb-6 leading-relaxed">
                No more drowning in notifications or missing important deadlines. The AI adapts to what you're actually trying to accomplish.
              </p>
              <ul className="space-y-3 text-oath-text-secondary">
                <li className="flex items-start">
                  <span className="text-oath-emerald-primary mr-2">✓</span>
                  Complexity scoring for every task
                </li>
                <li className="flex items-start">
                  <span className="text-oath-emerald-primary mr-2">✓</span>
                  Adaptive notification schedules
                </li>
                <li className="flex items-start">
                  <span className="text-oath-emerald-primary mr-2">✓</span>
                  Context-aware timing
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative w-64 h-96 bg-gray-200 rounded-oath-lg overflow-hidden shadow-oath-xl">
                <Image
                  src="/images/screenshots/IMG_4277.PNG"
                  alt="AI-powered notifications"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Honor Tracking */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center md:order-1"
            >
              <div className="relative w-64 h-96 bg-gray-200 rounded-oath-lg overflow-hidden shadow-oath-xl">
                <Image
                  src="/images/screenshots/IMG_4281.PNG"
                  alt="Honor tracking ledger"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:order-2"
            >
              <h2 className="text-heading-lg mb-4">Honest Honor Tracking</h2>
              <p className="text-oath-text-secondary text-lg mb-6 leading-relaxed">
                Oath doesn't just track completion—it tracks whether you honored your commitments. When you miss something, we acknowledge it. No hiding, no excuses, just transparent accountability.
              </p>
              <p className="text-oath-text-secondary text-lg mb-6 leading-relaxed">
                Your ledger shows your honor rate over time, helping you understand patterns and improve your follow-through.
              </p>
              <ul className="space-y-3 text-oath-text-secondary">
                <li className="flex items-start">
                  <span className="text-oath-emerald-primary mr-2">✓</span>
                  Honor rate tracking by day, week, month
                </li>
                <li className="flex items-start">
                  <span className="text-oath-emerald-primary mr-2">✓</span>
                  Honest accounting of misses
                </li>
                <li className="flex items-start">
                  <span className="text-oath-emerald-primary mr-2">✓</span>
                  Performance insights over time
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Lightning-Fast Entry */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-heading-lg mb-4">Lightning-Fast Entry</h2>
              <p className="text-oath-text-secondary text-lg mb-6 leading-relaxed">
                Creating a task should take 2 seconds. Type in natural language and Oath understands what you mean.
              </p>
              <p className="text-oath-text-secondary text-lg mb-6 leading-relaxed">
                "Walk the dogs 11:30 PM" → Task created with scheduled time.<br />
                "Board meeting Friday 2 PM to 4 PM" → Event with start and end times.<br />
                "Submit quarterly report next Friday 5 PM" → Task with deadline.
              </p>
              <ul className="space-y-3 text-oath-text-secondary">
                <li className="flex items-start">
                  <span className="text-oath-emerald-primary mr-2">✓</span>
                  Natural language processing
                </li>
                <li className="flex items-start">
                  <span className="text-oath-emerald-primary mr-2">✓</span>
                  Automatic time parsing
                </li>
                <li className="flex items-start">
                  <span className="text-oath-emerald-primary mr-2">✓</span>
                  No forms or friction
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative w-64 h-96 bg-gray-200 rounded-oath-lg overflow-hidden shadow-oath-xl">
                <Image
                  src="/images/screenshots/IMG_4273.PNG"
                  alt="Fast task entry"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Beautiful Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center md:order-1"
            >
              <div className="relative w-64 h-96 bg-gray-200 rounded-oath-lg overflow-hidden shadow-oath-xl">
                <Image
                  src="/images/screenshots/IMG_4273.PNG"
                  alt="Beautiful clean design"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:order-2"
            >
              <h2 className="text-heading-lg mb-4">Beautiful Simplicity</h2>
              <p className="text-oath-text-secondary text-lg mb-6 leading-relaxed">
                Clean, focused interface that doesn't create additional mental load. We believe white space is a feature, not wasted space.
              </p>
              <p className="text-oath-text-secondary text-lg mb-6 leading-relaxed">
                No gamification. No badges. No streaks. Just commitments, organized clearly, with intelligent support to help you honor them.
              </p>
              <ul className="space-y-3 text-oath-text-secondary">
                <li className="flex items-start">
                  <span className="text-oath-emerald-primary mr-2">✓</span>
                  Light and dark modes
                </li>
                <li className="flex items-start">
                  <span className="text-oath-emerald-primary mr-2">✓</span>
                  Emerald or Gold accent colors
                </li>
                <li className="flex items-start">
                  <span className="text-oath-emerald-primary mr-2">✓</span>
                  Distraction-free design
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="oath-gradient-hero-emerald text-white px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-heading-lg md:text-4xl mb-4">
              Ready to honor your commitments?
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Download Oath for iOS and experience commitment tracking powered by AI.
            </p>
            <Button href="#download" className="bg-black hover:bg-gray-900">
              Download for iOS
            </Button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
