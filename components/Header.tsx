'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-oath-bg border-b border-oath-hairline backdrop-blur-sm bg-opacity-95">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-oath-emerald-primary to-oath-emerald-deep bg-clip-text text-transparent">
            Oath.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/features" className="text-oath-text hover:text-oath-emerald-primary transition-colors">
            Features
          </Link>
          <Link href="/about" className="text-oath-text hover:text-oath-emerald-primary transition-colors">
            About
          </Link>
          <Link href="/faq" className="text-oath-text hover:text-oath-emerald-primary transition-colors">
            FAQ
          </Link>
          <Link
            href="#download"
            className="px-6 py-2 bg-gradient-to-br from-oath-emerald-primary to-oath-emerald-deep text-white rounded-oath-md font-semibold hover:shadow-oath-md transition-all"
          >
            Download
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-oath-text"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-oath-hairline bg-oath-bg"
          >
            <div className="px-6 py-4 space-y-4">
              <Link
                href="/features"
                className="block py-2 text-oath-text hover:text-oath-emerald-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/about"
                className="block py-2 text-oath-text hover:text-oath-emerald-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/faq"
                className="block py-2 text-oath-text hover:text-oath-emerald-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="#download"
                className="block w-full py-3 text-center bg-gradient-to-br from-oath-emerald-primary to-oath-emerald-deep text-white rounded-oath-md font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Download
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
