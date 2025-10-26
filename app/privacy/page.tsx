import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy - Oath',
  description: 'Privacy policy for the Oath iOS app',
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-heading-xl mb-8">Privacy Policy</h1>

        <div className="space-y-8 text-oath-text-secondary leading-relaxed">
          <section>
            <p className="text-small text-oath-text-secondary mb-8">
              Last updated: October 2025
            </p>
            <p className="mb-4">
              Oath ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our iOS mobile application.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">Information We Collect</h2>

            <h3 className="text-heading-md mb-3 text-oath-text">Personal Data</h3>
            <p className="mb-4">
              When you use Oath, we may collect the following information:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Tasks and commitments you create</li>
              <li>Task titles, descriptions, and scheduled times</li>
              <li>Honor and miss tracking data</li>
              <li>Usage data and app interaction information</li>
            </ul>

            <h3 className="text-heading-md mb-3 text-oath-text">Automatically Collected Data</h3>
            <p className="mb-4">
              We may automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Device type and operating system</li>
              <li>App usage statistics</li>
              <li>Crash reports and performance data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Provide and maintain the Oath app functionality</li>
              <li>Power the AI notification scheduling system (Oath Keeper)</li>
              <li>Sync your data across your devices via iCloud</li>
              <li>Improve app performance and user experience</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Detect and prevent technical issues or fraudulent activity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">Data Storage and Security</h2>
            <p className="mb-4">
              Your task data is stored locally on your device and synced via Apple's iCloud service. We do not store your personal task data on our own servers. We implement appropriate technical and organizational security measures to protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">Third-Party Services</h2>
            <p className="mb-4">
              Oath may use third-party services for analytics and performance monitoring. These services may collect information used to identify you. The third-party services we use include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Apple Analytics</li>
              <li>CloudKit (for iCloud sync)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">Data Sharing and Disclosure</h2>
            <p className="mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations or valid legal requests</li>
              <li>To protect our rights, property, or safety, or that of our users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">Your Rights</h2>
            <p className="mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of data collection (note: this may limit app functionality)</li>
              <li>Export your data in a portable format</li>
            </ul>
            <p className="mb-4">
              To exercise these rights, please contact us at the email address below.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">Children's Privacy</h2>
            <p className="mb-4">
              Oath is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we discover that we have collected information from a child under 13, we will delete it immediately.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">International Data Transfers</h2>
            <p className="mb-4">
              Your data may be transferred to and stored on servers located outside your country of residence. By using Oath, you consent to such transfers.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-none space-y-2">
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:privacy@oath.app" className="text-oath-emerald-primary hover:underline">
                  privacy@oath.app
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
        </div>
      </main>
      <Footer />
    </>
  );
}
