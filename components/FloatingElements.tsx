'use client';

import { motion } from 'framer-motion';

/**
 * Floating UI elements matching actual Oath app SwiftUI designs
 *
 * Design specs from SwiftUI:
 * - Card border radius: 16px
 * - Left accent edge: 6px
 * - Padding: 14px horizontal, 12px vertical
 * - Title: 16px bold
 * - Emerald primary: #0FAA77
 * - Emerald deep: #067B60
 * - Emerald bright: #23E1B2
 * - Miss/mango bg: #FFD27A
 * - Surface dark: #1F2124
 */

// Theme colors from ThemeManager.swift
const colors = {
  emerald: {
    primary: '#0FAA77',
    deep: '#067B60',
    bright: '#23E1B2',
  },
  miss: {
    bg: '#FFD27A',
    border: '#FFC34D',
    ink: '#111216',
  },
  categories: {
    work: '#3B82F6',      // blue
    exercise: '#22C55E',  // green
    personal: '#F97316',  // orange
    health: '#EF4444',    // red
    finance: '#EAB308',   // yellow
  },
  light: {
    bg: '#FFFFFF',
    surface: '#FAFBFC',
    text: '#111827',
    secondary: '#6B7280',
  },
  dark: {
    bg: '#000000',
    surface: '#1F2124',
    text: '#FFFFFF',
    secondary: '#9CA3AF',
  }
};

// Task Card component matching SwiftUI TaskCardView
function TaskCard({
  title,
  dayLabel,
  time,
  category,
  categoryColor,
  status,
}: {
  title: string;
  dayLabel: string;
  time: string;
  category: string;
  categoryColor: string;
  status?: 'honored' | 'missed' | 'active';
}) {
  const isHonored = status === 'honored';
  const isMissed = status === 'missed';
  const edgeColor = isMissed ? colors.miss.bg : categoryColor;

  return (
    <div
      className="flex overflow-hidden rounded-[16px] bg-white"
      style={{
        boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 4px 6px rgba(0,0,0,0.04)',
      }}
    >
      {/* Left accent edge - 6px */}
      <div
        className="w-[6px] flex-shrink-0"
        style={{ backgroundColor: edgeColor }}
      />

      {/* Card content */}
      <div className="flex-1 px-[14px] py-[12px]">
        {/* Row 1: Day label + Type badge */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[11px] font-bold tracking-wide text-gray-500 uppercase">
            {dayLabel}
          </span>
          <span
            className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold"
            style={{
              backgroundColor: `${colors.emerald.primary}1F`,
              color: colors.emerald.primary,
            }}
          >
            <svg className="w-[9px] h-[9px]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Task
          </span>
        </div>

        {/* Row 2: Title */}
        <p
          className={`text-[16px] font-bold mb-2 ${isHonored ? 'line-through text-gray-400' : 'text-gray-900'}`}
        >
          {title}
        </p>

        {/* Row 3: Category + Status/Time */}
        <div className="flex items-center justify-between">
          {/* Category badge */}
          <span
            className="flex items-center gap-1 px-2 py-[3px] rounded-lg text-[11px] font-medium"
            style={{
              backgroundColor: `${categoryColor}26`,
              color: categoryColor,
            }}
          >
            {category}
          </span>

          {/* Status chip or Time */}
          {isHonored ? (
            <span
              className="px-2.5 py-1 rounded-[11px] text-[12px] font-bold text-white"
              style={{
                background: `linear-gradient(135deg, ${colors.emerald.primary}, ${colors.emerald.deep})`,
              }}
            >
              Honored
            </span>
          ) : isMissed ? (
            <span
              className="px-2.5 py-1 rounded-[11px] text-[12px] font-bold"
              style={{
                backgroundColor: colors.miss.bg,
                color: colors.miss.ink,
              }}
            >
              Missed
            </span>
          ) : (
            <span
              className="px-2.5 py-1 rounded-[12px] text-[12px] font-bold tracking-wide"
              style={{
                backgroundColor: `${colors.emerald.primary}1A`,
                color: colors.emerald.primary,
                border: `0.5px solid ${colors.emerald.primary}24`,
              }}
            >
              {time}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// Honor Rate Card matching SwiftUI HeroHonorRate
function HonorRateCard({ rate }: { rate: number }) {
  return (
    <div
      className="relative overflow-hidden rounded-[20px] px-6 py-8 text-center"
      style={{
        background: `linear-gradient(180deg, ${colors.emerald.bright} 0%, ${colors.emerald.primary} 50%, ${colors.emerald.deep} 100%)`,
        boxShadow: `0 10px 24px ${colors.emerald.primary}66, 0 15px 35px rgba(0,0,0,0.12)`,
      }}
    >
      {/* Light reflection overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.28) 30%, transparent 70%)',
        }}
      />

      {/* Specular highlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.42) 0%, transparent 20%)',
        }}
      />

      {/* Border overlay */}
      <div
        className="absolute inset-0 rounded-[20px] pointer-events-none"
        style={{
          border: '2px solid rgba(255,255,255,0.45)',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0.3) 100%)',
          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-baseline justify-center gap-0.5 mb-4">
          <span
            className="text-[64px] font-bold text-white leading-none"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
          >
            {rate}
          </span>
          <span className="text-[32px] font-semibold text-white/75 -translate-y-2">%</span>
        </div>
        <div className="flex items-center justify-center gap-1.5 text-white/90">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-[14px] font-semibold">Honor rate</span>
        </div>
      </div>
    </div>
  );
}

// Notification card
function NotificationCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div
      className="flex items-center gap-3 p-4 rounded-[16px] bg-white w-[280px]"
      style={{
        boxShadow: '0 4px 12px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.04)',
      }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          background: `linear-gradient(135deg, ${colors.emerald.bright}, ${colors.emerald.primary})`,
        }}
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[11px] text-gray-500">Oath Reminder</p>
        <p className="text-[14px] font-semibold text-gray-900 truncate">{title}</p>
        <p className="text-[12px] text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Task Card - Top Left */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-[12%] left-[3%] md:left-[8%] hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-[260px]"
        >
          <TaskCard
            title="Complete quarterly report"
            dayLabel="Today"
            time="5:00 PM"
            category="Work"
            categoryColor={colors.categories.work}
            status="active"
          />
        </motion.div>
      </motion.div>

      {/* Exercise Task - Top Right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-[12%] right-[3%] md:right-[8%] hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="w-[240px]"
        >
          <TaskCard
            title="Morning run - 5K"
            dayLabel="Tomorrow"
            time="6:30 AM"
            category="Exercise"
            categoryColor={colors.categories.exercise}
            status="active"
          />
        </motion.div>
      </motion.div>

      {/* Finance Task - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-[22%] left-[5%] md:left-[12%] hidden md:block"
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="w-[250px]"
        >
          <TaskCard
            title="Review monthly budget"
            dayLabel="Friday"
            time="7:00 PM"
            category="Finance"
            categoryColor={colors.categories.finance}
            status="active"
          />
        </motion.div>
      </motion.div>

      {/* Health Task - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute bottom-[18%] right-[5%] md:right-[12%] hidden md:block"
      >
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          className="w-[300px]"
        >
          <TaskCard
            title="Schedule dentist appointment"
            dayLabel="Today"
            time="12:00 PM"
            category="Health"
            categoryColor={colors.categories.health}
            status="honored"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
