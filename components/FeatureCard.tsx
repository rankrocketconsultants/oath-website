'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 0 8px rgba(15, 170, 119, 0.45), 0 0 20px rgba(15, 170, 119, 0.5), 0 0 40px rgba(15, 170, 119, 0.35), 0 0 60px rgba(15, 170, 119, 0.3), 0 8px 12px -2px rgba(0, 0, 0, 0.15)',
        transition: { duration: 0.15 }
      }}
      className="p-8 text-center"
      style={{
        backgroundColor: 'var(--oath-surface)',
        border: '2px solid var(--oath-emerald-primary)',
        borderRadius: '16px',
        boxShadow: '0 0 5px rgba(15, 170, 119, 0.3), 0 0 15px rgba(15, 170, 119, 0.35), 0 0 30px rgba(15, 170, 119, 0.25), 0 0 50px rgba(15, 170, 119, 0.2), 0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--oath-text)' }}>
        {icon}
      </div>
      <h3 className="text-heading-md mb-3 font-semibold" style={{ color: 'var(--oath-text)' }}>{title}</h3>
      <p className="text-body leading-relaxed" style={{ color: 'var(--oath-text-secondary)' }}>{description}</p>
    </motion.div>
  );
}
