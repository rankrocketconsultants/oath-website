import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-oath-bg-surface border-t border-oath-hairline mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-oath-emerald-primary to-oath-emerald-deep bg-clip-text text-transparent">
                Oath
              </span>
            </div>
            <p className="text-oath-text-secondary text-small max-w-sm">
              Keep your word. Honor your commitments.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-oath-text mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-oath-text-secondary hover:text-oath-emerald-primary transition-colors text-small">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-oath-text-secondary hover:text-oath-emerald-primary transition-colors text-small">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-oath-text-secondary hover:text-oath-emerald-primary transition-colors text-small">
                  About
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-oath-text-secondary hover:text-oath-emerald-primary transition-colors text-small">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-oath-text mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-oath-text-secondary hover:text-oath-emerald-primary transition-colors text-small">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-oath-text-secondary hover:text-oath-emerald-primary transition-colors text-small">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-oath-text-secondary hover:text-oath-emerald-primary transition-colors text-small">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-oath-hairline">
          <p className="text-oath-text-secondary text-small text-center">
            © {currentYear} Oath. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
