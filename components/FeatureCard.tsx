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
      className="bg-oath-bg-surface border border-oath-hairline rounded-oath-lg p-8 text-center hover:shadow-oath-lg transition-shadow duration-300"
    >
      <div className="w-12 h-12 mx-auto mb-4 text-oath-emerald-primary">
        {icon}
      </div>
      <h3 className="text-heading-md mb-3 text-oath-text">{title}</h3>
      <p className="text-body text-oath-text-secondary leading-relaxed">{description}</p>
    </motion.div>
  );
}
