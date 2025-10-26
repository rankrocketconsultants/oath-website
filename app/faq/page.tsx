'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-oath-hairline rounded-oath-md overflow-hidden"
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-oath-bg-surface transition-colors"
      >
        <span className="font-semibold text-oath-text pr-4">{question}</span>
        <span className={`text-oath-emerald-primary text-2xl transform transition-transform ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-4"
        >
          <p className="text-oath-text-secondary leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What makes Oath different from other to-do apps?",
      answer: "Oath focuses on honoring commitments, not just completing tasks. We use AI to understand task complexity and schedule intelligent notifications. We also track whether you honored your commitments versus just checking them off—honest accountability without gamification."
    },
    {
      question: "How does the AI notification system work?",
      answer: "Oath Keeper analyzes each task you create and assigns it a complexity score. Simple tasks (like 'Take out trash at 8 PM') get a single timely reminder. Complex tasks (like 'Complete quarterly report by Friday') get multiple strategic notifications spread over days. The AI understands what you're actually trying to accomplish."
    },
    {
      question: "What does 'honor' tracking mean?",
      answer: "When you complete a commitment on time, you mark it as 'honored.' If you miss it, we mark it as 'missed.' Your ledger shows your honor rate over time—an honest view of how well you're keeping your word. No hiding missed commitments, just transparent accountability."
    },
    {
      question: "Does Oath have badges, streaks, or gamification?",
      answer: "No. We intentionally avoid gamification. Oath is about integrity and honest tracking, not collecting badges or maintaining streaks. We believe commitment-keeping shouldn't be turned into a game."
    },
    {
      question: "How does natural language input work?",
      answer: "Just type what you need to do in plain English. 'Walk the dogs 11:30 PM' becomes a task scheduled for 11:30 PM. 'Board meeting Friday 2 PM to 4 PM' becomes an event with start and end times. No forms, no date pickers—just type and go."
    },
    {
      question: "Where is my data stored?",
      answer: "Your task data is stored locally on your device and synced via Apple's iCloud service. We don't store your personal task data on our own servers. Your commitments remain private to you."
    },
    {
      question: "Is Oath available on Android?",
      answer: "Currently, Oath is only available for iOS. We're focused on delivering the best possible experience on iPhone first."
    },
    {
      question: "Can I share tasks or collaborate with others?",
      answer: "Not yet. Oath v1.0 is designed for personal commitment tracking. Your tasks and honor tracking are private to you. We may explore shared commitments in the future."
    },
    {
      question: "How much does Oath cost?",
      answer: "Oath is available on the App Store. Check the App Store listing for current pricing and subscription options."
    },
    {
      question: "Can I customize the accent color?",
      answer: "Yes! Oath offers two accent color options: Emerald (teal/green) and Gold (warm cream). Both work beautifully in light and dark modes."
    },
    {
      question: "Does Oath work offline?",
      answer: "Yes. You can create and manage tasks offline. When you're back online, Oath syncs your data via iCloud."
    },
    {
      question: "How do I delete my data?",
      answer: "You can delete all your data from within the app's settings. You can also contact us at privacy@oath.app to request data deletion."
    },
  ];

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
              Frequently Asked Questions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-oath-text-secondary text-xl max-w-2xl mx-auto"
            >
              Everything you need to know about Oath
            </motion.p>
          </div>
        </section>

        {/* FAQ List */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-oath-bg-surface rounded-oath-lg p-8 md:p-12 text-center"
          >
            <h2 className="text-heading-md mb-4">Still have questions?</h2>
            <p className="text-oath-text-secondary mb-6 max-w-xl mx-auto">
              We're here to help. Reach out to us and we'll get back to you as soon as possible.
            </p>
            <Button href="/contact" variant="primary">
              Contact Us
            </Button>
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
              Ready to start?
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Download Oath for iOS and honor your commitments.
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
