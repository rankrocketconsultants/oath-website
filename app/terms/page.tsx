import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service - Oath',
  description: 'Terms of service for the Oath iOS app',
};

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-heading-xl mb-8">Terms of Service</h1>

        <div className="space-y-8 text-oath-text-secondary leading-relaxed">
          <section>
            <p className="text-small text-oath-text-secondary mb-8">
              Last updated: October 2025
            </p>
            <p className="mb-4">
              Please read these Terms of Service ("Terms") carefully before using the Oath mobile application ("the App") operated by Oath ("we," "us," or "our").
            </p>
            <p className="mb-4">
              By accessing or using the App, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By downloading, installing, or using Oath, you accept and agree to be bound by these Terms and our Privacy Policy. These Terms apply to all users of the App.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">2. License to Use</h2>
            <p className="mb-4">
              We grant you a limited, non-exclusive, non-transferable, revocable license to use Oath for your personal, non-commercial use, subject to these Terms.
            </p>
            <p className="mb-4">
              You may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Modify, copy, or create derivative works based on the App</li>
              <li>Reverse engineer, decompile, or disassemble the App</li>
              <li>Remove any copyright or proprietary notices from the App</li>
              <li>Use the App for any illegal or unauthorized purpose</li>
              <li>Transfer or sublicense your rights to use the App</li>
            </ul>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">3. User Accounts and Data</h2>
            <p className="mb-4">
              Oath uses Apple's iCloud service to sync your data across your devices. You are responsible for maintaining the security of your Apple ID and for all activities that occur under your account.
            </p>
            <p className="mb-4">
              You retain all rights to the task data you create in Oath. We claim no ownership over your content.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">4. AI Features</h2>
            <p className="mb-4">
              Oath includes AI-powered features (Oath Keeper) that analyze task complexity and schedule notifications. While we strive for accuracy, we do not guarantee that the AI will always provide perfect or appropriate notification schedules for your needs.
            </p>
            <p className="mb-4">
              You acknowledge that AI features are provided "as is" and you use them at your own discretion.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">5. Acceptable Use</h2>
            <p className="mb-4">
              You agree not to use Oath to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the rights of others</li>
              <li>Transmit any harmful or malicious code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the App</li>
            </ul>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">6. Intellectual Property</h2>
            <p className="mb-4">
              The App and its original content, features, and functionality are owned by Oath and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p className="mb-4">
              The Oath name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Oath. You may not use these without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">7. Disclaimer of Warranties</h2>
            <p className="mb-4">
              THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
            <p className="mb-4">
              We do not warrant that the App will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">8. Limitation of Liability</h2>
            <p className="mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, OATH SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, OR OTHER INTANGIBLE LOSSES.
            </p>
            <p className="mb-4">
              In no event shall our total liability to you exceed the amount you paid for the App in the twelve (12) months prior to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">9. Indemnification</h2>
            <p className="mb-4">
              You agree to indemnify and hold harmless Oath and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including attorneys' fees) arising out of your use of the App or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">10. Termination</h2>
            <p className="mb-4">
              We reserve the right to suspend or terminate your access to the App at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason at our sole discretion.
            </p>
            <p className="mb-4">
              Upon termination, your license to use the App will immediately cease. You may delete the App from your device at any time.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">11. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these Terms at any time. We will notify you of changes by posting the updated Terms in the App and updating the "Last updated" date. Your continued use of the App after changes are posted constitutes your acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">12. Governing Law</h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">13. Apple App Store</h2>
            <p className="mb-4">
              By downloading Oath from the Apple App Store, you acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>These Terms are between you and Oath, not with Apple</li>
              <li>Apple has no obligation to furnish maintenance and support services</li>
              <li>Apple is not responsible for addressing any claims relating to the App</li>
              <li>Apple is a third-party beneficiary of these Terms and may enforce them</li>
            </ul>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">14. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <ul className="list-none space-y-2">
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:support@oath.app" className="text-oath-emerald-primary hover:underline">
                  support@oath.app
                </a>
              </li>
              <li>
                <strong>Website:</strong>{' '}
                <a href="/contact" className="text-oath-emerald-primary hover:underline">
                  Contact Form
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">15. Entire Agreement</h2>
            <p className="mb-4">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Oath regarding the use of the App and supersede all prior agreements and understandings.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
