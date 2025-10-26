'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export default function About() {
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
              Keep your word. Honor your commitments.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-oath-text-secondary text-xl max-w-2xl mx-auto"
            >
              Oath helps people honor their commitments through intelligent reminders and meaningful tracking.
            </motion.p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-heading-lg mb-6">Our Mission</h2>
            <p className="text-oath-text-secondary text-lg mb-6 leading-relaxed">
              We believe that keeping your word—to yourself and others—is the foundation of personal growth and integrity. Too many task apps focus on productivity metrics and completion rates, but they miss what really matters: honoring the commitments you make.
            </p>
            <p className="text-oath-text-secondary text-lg mb-6 leading-relaxed">
              An "honored" task is worth more than a hundred checked boxes. That's why Oath tracks not just what you completed, but what you promised versus what you delivered.
            </p>
          </motion.div>
        </section>

        {/* Core Values */}
        <section className="bg-oath-bg-surface py-20">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-heading-lg text-center mb-16"
            >
              Our Core Values
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-heading-md mb-3">Commitment Over Completion</h3>
                <p className="text-oath-text-secondary leading-relaxed">
                  We measure success not just by what gets done, but by honoring the promises you make. An "honored" task is worth more than a hundred checked boxes.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-heading-md mb-3">Honesty & Accountability</h3>
                <p className="text-oath-text-secondary leading-relaxed">
                  Oath encourages brutal honesty. When you miss a commitment, we acknowledge it. No hiding, no excuses—just transparent tracking of what you promised versus what you delivered.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-heading-md mb-3">Intelligent Support</h3>
                <p className="text-oath-text-secondary leading-relaxed">
                  Our AI (Oath Keeper) understands that not all tasks are equal. A complex project needs different preparation time than a simple errand. We adapt notifications to match reality.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-heading-md mb-3">Simplicity & Focus</h3>
                <p className="text-oath-text-secondary leading-relaxed">
                  Clean, distraction-free interface. No gamification, no streaks, no guilt-tripping. Just tasks, events, and honest tracking.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-heading-md mb-3">Personal Integrity</h3>
                <p className="text-oath-text-secondary leading-relaxed">
                  Oath is a tool for self-improvement, not social comparison. Your commitments are private, your progress is yours alone.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-heading-lg mb-6">The Problem We're Solving</h2>
            <p className="text-oath-text-secondary text-lg mb-6 leading-relaxed">
              People make commitments to themselves and others but struggle to honor them. Traditional to-do apps focus on completion without acknowledging the <em>weight</em> of a commitment.
            </p>
            <p className="text-oath-text-secondary text-lg mb-6 leading-relaxed">
              "Submit tax documents" carries more gravity than "Buy milk," but apps treat them the same. They send you a single reminder 15 minutes before both are due, as if all tasks require equal preparation.
            </p>
            <p className="text-oath-text-secondary text-lg mb-6 leading-relaxed">
              Worse, when you miss something, most apps just let it slide—or worse, try to motivate you with badges and streaks. We wanted something honest.
            </p>
          </motion.div>
        </section>

        {/* Our Solution */}
        <section className="bg-oath-bg-surface py-20">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-heading-lg mb-6">Our Solution</h2>
              <p className="text-oath-text-secondary text-lg mb-6 leading-relaxed">
                Oath uses AI to understand task complexity and creates intelligent notification schedules. It tracks whether you <strong>honored</strong> your commitments, not just whether you checked boxes.
              </p>
              <p className="text-oath-text-secondary text-lg mb-6 leading-relaxed">
                A simple task like "Take out trash at 8 PM" gets a single timely reminder. A complex project like "Complete quarterly report by Friday 5 PM" gets strategic notifications spread over days—time to gather data, time to analyze, time to write, time for final review.
              </p>
              <p className="text-oath-text-secondary text-lg mb-6 leading-relaxed">
                And when you miss something? We acknowledge it honestly. Your ledger shows the facts: what you honored versus what you missed. No judgment, no guilt—just accountability.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Vision */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-heading-lg mb-6">Our Vision</h2>
            <p className="text-oath-text-secondary text-lg mb-6 leading-relaxed">
              A world where people keep their word—to themselves first, and to others always. Where a person's commitments are matched by their actions, and where technology supports integrity instead of just productivity.
            </p>
            <p className="text-oath-text-secondary text-lg mb-6 leading-relaxed">
              We're not interested in making you "more productive." We're interested in helping you become someone who honors their commitments.
            </p>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="oath-gradient-hero-emerald text-white px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-heading-lg md:text-4xl mb-4">
              Join us in honoring commitments
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Download Oath for iOS and start keeping your word.
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
