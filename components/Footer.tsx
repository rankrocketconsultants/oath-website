import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-[#0C0C0D] border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-semibold text-gray-900 dark:text-white">
              Oath
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-sm leading-relaxed">
              Keep your word. AI-powered commitment tracking that helps you honor what matters.
            </p>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-500">
              Coming to iOS · Early 2026
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            © 2026 Oath App LLC. All rights reserved.
          </p>
          <Link
            href="#waitlist"
            className="text-sm font-medium text-gray-900 dark:text-white hover:opacity-70 transition-opacity"
          >
            Join the Waitlist →
          </Link>
        </div>
      </div>
    </footer>
  );
}
