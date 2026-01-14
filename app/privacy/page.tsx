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

            <h3 className="text-heading-sm mb-3 text-oath-text">Account and Profile Information</h3>
            <p className="mb-4">
              When you create an account or use Oath, we collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Email address (if provided for account creation)</li>
              <li>Authentication credentials (handled securely via Supabase)</li>
              <li>Account preferences and settings</li>
            </ul>

            <h3 className="text-heading-sm mb-3 text-oath-text">Task and Commitment Data</h3>
            <p className="mb-4">
              The core content you create in Oath:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Tasks, events, and commitments you create</li>
              <li>Task titles, descriptions, notes, and scheduled times</li>
              <li>Honor and miss tracking data (completion status)</li>
              <li>Ledger metrics, streaks, and performance statistics</li>
              <li>AI-generated insights and recommendations</li>
            </ul>

            <h3 className="text-heading-sm mb-3 text-oath-text">Behavioral and Usage Data</h3>
            <p className="mb-4">
              Information about how you interact with Oath:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>App usage patterns and feature interactions</li>
              <li>Notification response times and patterns</li>
              <li>AI notification complexity scores and scheduling data</li>
              <li>Session duration and frequency</li>
              <li>Navigation paths and user flows</li>
            </ul>

            <h3 className="text-heading-sm mb-3 text-oath-text">Automatically Collected Technical Data</h3>
            <p className="mb-4">
              We automatically collect certain technical information:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Device type, model, and operating system version</li>
              <li>App version and build information</li>
              <li>IP address and general location (city/region level)</li>
              <li>Crash reports, error logs, and performance data</li>
              <li>Device identifiers (for analytics and crash reporting)</li>
            </ul>

            <h3 className="text-heading-sm mb-3 text-oath-text">Contact Form and Communications</h3>
            <p className="mb-4">
              When you contact us through our website contact form or email us directly, we collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Your name and email address</li>
              <li>Subject line and message content</li>
              <li>Any attachments you send</li>
            </ul>
            <p className="mb-4">
              We use this information solely to respond to your inquiry, provide customer support, and improve our services. Contact form submissions are retained for 2 years for support and legal compliance purposes.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Provide Services:</strong> Deliver and maintain the Oath app functionality</li>
              <li><strong>AI Features:</strong> Power the AI notification scheduling system (Oath Keeper) and generate personalized insights</li>
              <li><strong>Data Sync:</strong> Sync your data across your devices via iCloud and Supabase</li>
              <li><strong>Product Improvement:</strong> Analyze usage patterns to improve app performance and develop new features</li>
              <li><strong>Customer Support:</strong> Respond to your inquiries and provide technical assistance</li>
              <li><strong>Security:</strong> Detect and prevent technical issues, fraudulent activity, and security threats</li>
              <li><strong>Marketing & Analytics:</strong> Understand user behavior, measure app effectiveness, and market our services</li>
              <li><strong>Research & Insights:</strong> Create aggregated, anonymized insights about productivity trends and user behavior</li>
            </ul>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">Data Storage and Security</h2>
            <p className="mb-4">
              Your task data is stored securely using:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Local Storage:</strong> Data is stored locally on your device</li>
              <li><strong>Cloud Sync:</strong> Synced via Supabase (PostgreSQL) and Apple's iCloud service for backup and multi-device access</li>
              <li><strong>Encryption:</strong> Data is encrypted in transit using industry-standard TLS/SSL protocols</li>
            </ul>
            <p className="mb-4">
              We implement appropriate technical and organizational security measures to protect your information, including encryption, access controls, and secure third-party service providers. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">Third-Party Services</h2>
            <p className="mb-4">
              Oath uses third-party services to provide, improve, and analyze our app. These services may collect information used to identify you. The third-party services we use include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Supabase:</strong> Backend database and authentication services</li>
              <li><strong>OpenAI:</strong> Powers AI-driven features including notification scheduling (Oath Keeper) and insights generation</li>
              <li><strong>Apple Analytics:</strong> App performance and crash reporting</li>
              <li><strong>CloudKit:</strong> iCloud sync functionality</li>
            </ul>
            <p className="mb-4">
              These service providers are bound by contractual obligations to keep your information confidential and use it only for the purposes for which we disclose it to them.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">Data Sharing and Disclosure</h2>

            <h3 className="text-heading-sm mb-3 text-oath-text">What We Don't Do</h3>
            <p className="mb-4">
              We do not sell identifiable personal information (such as your name, email, or specific task content) to third parties.
            </p>

            <h3 className="text-heading-sm mb-3 text-oath-text">Aggregated and Anonymized Data</h3>
            <p className="mb-4">
              We may aggregate and anonymize your usage data to create statistical insights that cannot identify you individually. This anonymized data may be used for:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Product improvement and feature development</li>
              <li>Industry research and productivity insights</li>
              <li>Marketing and advertising our services</li>
              <li>Sharing with business partners, advertisers, or research institutions to better understand productivity trends</li>
            </ul>
            <p className="mb-4">
              For example, we may share insights like "70% of users complete tasks scheduled in the morning" without revealing any individual user's data.
            </p>

            <h3 className="text-heading-sm mb-3 text-oath-text">AI Model Training</h3>
            <p className="mb-4">
              <strong>What We Do:</strong> We use anonymized usage patterns to improve Oath's AI features. For example, we analyze patterns like "users typically schedule tasks 3 days in advance" or "morning tasks have higher completion rates" to make the Oath Keeper notification system smarter.
            </p>
            <p className="mb-4">
              <strong>What We DON'T Do:</strong> We do NOT use your specific task titles, descriptions, or personal content to train general-purpose AI models. We do NOT share your task content with OpenAI or any third party for AI model training. Your tasks remain private.
            </p>
            <p className="mb-4">
              <strong>Specifically:</strong> Anonymized metadata includes timing patterns, completion rates, notification response times, and feature usage statistics—never the actual content of your tasks or commitments.
            </p>

            <h3 className="text-heading-sm mb-3 text-oath-text">Other Sharing Circumstances</h3>
            <p className="mb-4">
              We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>With your consent:</strong> When you explicitly authorize us to share your data</li>
              <li><strong>Service providers:</strong> With third parties who assist in providing our services (as described in the Third-Party Services section)</li>
              <li><strong>Legal compliance:</strong> To comply with legal obligations, valid legal requests, or to protect our rights, property, or safety</li>
              <li><strong>Business transfers:</strong> In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business</li>
            </ul>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">Your Rights and Choices</h2>

            <h3 className="text-heading-sm mb-3 text-oath-text">Data Rights</h3>
            <p className="mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Access:</strong> Request access to the personal data we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Deletion:</strong> Request deletion of your data (subject to legal obligations)</li>
              <li><strong>Portability:</strong> Export your data in a portable format</li>
              <li><strong>Restrict Processing:</strong> Request that we limit how we use your data</li>
            </ul>

            <h3 className="text-heading-sm mb-3 text-oath-text">California Privacy Rights (CCPA)</h3>
            <p className="mb-4">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Right to Know:</strong> Request details about what personal information we collect, use, and share</li>
              <li><strong>Right to Delete:</strong> Request deletion of your personal information</li>
              <li><strong>Right to Opt-Out:</strong> Opt-out of the sharing of aggregated/anonymized data for advertising or analytics purposes</li>
              <li><strong>Right to Non-Discrimination:</strong> Exercise your privacy rights without discriminatory treatment</li>
            </ul>

            <h3 className="text-heading-sm mb-3 text-oath-text">How to Opt-Out of Data Sharing (CCPA)</h3>
            <p className="mb-4">
              California residents can opt out of data sharing for advertising and analytics purposes through two methods:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Email:</strong> Send a request to <a href="mailto:privacy@theoath.app" className="text-oath-emerald-primary hover:underline">privacy@theoath.app</a> with "California Privacy Rights - Opt-Out" in the subject line. Include your name and email address associated with your Oath account.</li>
              <li><strong>Website:</strong> Visit our <a href="/do-not-sell" className="text-oath-emerald-primary hover:underline">Do Not Sell My Personal Information</a> page to submit an opt-out request.</li>
            </ul>
            <p className="mb-4">
              We will process your request within 30 days and send you a confirmation email. Once opted out, we will not share your anonymized data with third parties for advertising or analytics purposes, though we may still use it internally to improve the app.
            </p>
            <p className="mb-4">
              For all other California privacy rights requests, contact us at privacy@theoath.app with "California Privacy Rights" in the subject line.
            </p>

            <h3 className="text-heading-sm mb-3 text-oath-text">Exercising Your Rights</h3>
            <p className="mb-4">
              To exercise any of these rights, please contact us at the email address provided below. We will respond to your request within 30 days. Note that opting out of certain data collection may limit app functionality.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">Data Retention and Deletion</h2>

            <h3 className="text-heading-sm mb-3 text-oath-text">How Long We Keep Your Data</h3>
            <p className="mb-4">
              We retain your personal data for as long as necessary to provide you with Oath's services and fulfill the purposes described in this Privacy Policy:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Active Account Data:</strong> Retained while your account is active and you continue to use Oath</li>
              <li><strong>After Account Deletion:</strong> Deleted from active systems within 30 days of account deletion request</li>
              <li><strong>Backup Systems:</strong> May remain in backup systems for up to 90 days, then permanently deleted</li>
              <li><strong>Anonymized Data:</strong> Aggregated, anonymized data (that cannot identify you) may be retained indefinitely for analytics and product improvement</li>
              <li><strong>Contact Form Data:</strong> Retained for 2 years after submission for support and legal compliance purposes</li>
              <li><strong>Legal Requirements:</strong> Data subject to legal holds, investigations, or required by law will be retained as necessary</li>
            </ul>

            <h3 className="text-heading-sm mb-3 text-oath-text">How to Delete Your Data</h3>
            <p className="mb-4">
              You can request deletion of your data through multiple methods:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>In-App:</strong> Delete your account through the app settings (Account → Delete Account)</li>
              <li><strong>Email:</strong> Send a request to <a href="mailto:privacy@theoath.app" className="text-oath-emerald-primary hover:underline">privacy@theoath.app</a> with "Data Deletion Request" in the subject line</li>
            </ul>
            <p className="mb-4">
              Upon receiving your deletion request, we will:
            </p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Verify your identity to prevent unauthorized deletions</li>
              <li>Delete your data from active systems within 30 days</li>
              <li>Remove backups within 90 days</li>
              <li>Send you a confirmation email when deletion is complete</li>
            </ol>
            <p className="mb-4">
              <strong>Important Note:</strong> Data deletion is permanent and cannot be undone. You will lose access to all tasks, commitments, and historical data. We recommend exporting your data before deletion if you want to keep a copy.
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
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.
            </p>
            <p className="mb-4">
              <strong>Material Changes:</strong> If we make material changes that significantly affect your privacy rights or how we use your data, we will:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Notify you at least 30 days in advance via email (if provided) or in-app notification</li>
              <li>Update the "Last updated" date at the top of this policy</li>
              <li>Provide you an opportunity to opt-out before the changes take effect</li>
            </ul>
            <p className="mb-4">
              <strong>Minor Changes:</strong> For non-material changes, we will update the policy and the "Last updated" date. Your continued use of Oath after changes become effective constitutes acceptance of the revised policy.
            </p>
            <p className="mb-4">
              We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
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
                <a href="mailto:privacy@theoath.app" className="text-oath-emerald-primary hover:underline">
                  privacy@theoath.app
                </a>
              </li>
              <li>
                <strong>Website:</strong>{' '}
                <a href="https://theoath.app/contact" className="text-oath-emerald-primary hover:underline">
                  https://theoath.app/contact
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
