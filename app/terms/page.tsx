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

            <h3 className="text-heading-sm mb-3 text-oath-text">Account Responsibility</h3>
            <p className="mb-4">
              You are responsible for maintaining the security of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized access or security breaches.
            </p>

            <h3 className="text-heading-sm mb-3 text-oath-text">Account Eligibility</h3>
            <p className="mb-4">
              You must be at least 13 years old to use Oath. If you are under 18, you represent that you have your parent or guardian's permission to use the App. By using Oath, you represent and warrant that you meet these requirements.
            </p>

            <h3 className="text-heading-sm mb-3 text-oath-text">Your Content Ownership</h3>
            <p className="mb-4">
              You retain all ownership rights to the content you create in Oath, including tasks, events, commitments, notes, and other data ("Your Content"). We claim no ownership over Your Content.
            </p>

            <h3 className="text-heading-sm mb-3 text-oath-text">License Grant to Oath</h3>
            <p className="mb-4">
              By using Oath, you grant us a worldwide, non-exclusive, royalty-free license to use, host, store, reproduce, modify, create derivative works from, communicate, publish, and distribute Your Content solely for the purposes of:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Providing and operating the App and its features</li>
              <li>Powering AI features like Oath Keeper (notification scheduling) and insights generation</li>
              <li>Syncing Your Content across your devices via Supabase and Apple's iCloud</li>
              <li>Creating aggregated, anonymized insights and analytics (as described in our Privacy Policy)</li>
              <li>Improving our services, developing new features, and training AI models on anonymized usage patterns (such as timing patterns, completion rates, and notification response times—not your specific task content)</li>
              <li>Complying with legal obligations and enforcing our policies</li>
            </ul>
            <p className="mb-4">
              <strong>Important Clarification:</strong> "Anonymized metadata" means usage patterns like "users typically schedule tasks 3 days in advance" or "morning tasks have higher completion rates." We do NOT use your specific task titles, descriptions, or personal content to train general-purpose AI models, and we do NOT share your task content with OpenAI or other third parties for AI training purposes.
            </p>
            <p className="mb-4">
              This license continues even after you stop using Oath for Content we reasonably need to retain for legal, operational, or analytical purposes. However, if you delete Your Content, we will cease active use (except for backups and anonymized data).
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
            <h2 className="text-heading-md mb-4 text-oath-text">5. Subscriptions, Payments, and Refunds</h2>

            <h3 className="text-heading-sm mb-3 text-oath-text">Subscription Services</h3>
            <p className="mb-4">
              Oath may offer subscription-based premium features ("Subscription Services"). If you purchase a subscription:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Auto-Renewal:</strong> Subscriptions automatically renew at the end of each billing period unless you cancel before the renewal date</li>
              <li><strong>Pricing:</strong> Subscription fees are charged in advance and are non-refundable, except as required by applicable law or as described below</li>
              <li><strong>Price Changes:</strong> We may change subscription prices at any time, with notice before the next billing cycle</li>
              <li><strong>Payment Processing:</strong> Payments are processed by Apple through the App Store, subject to Apple's terms and policies</li>
            </ul>

            <h3 className="text-heading-sm mb-3 text-oath-text">Cancellation</h3>
            <p className="mb-4">
              You may cancel your subscription at any time through your Apple ID account settings. Cancellation takes effect at the end of the current billing period, and you will retain access until then. No refunds are provided for unused portions of the subscription period.
            </p>

            <h3 className="text-heading-sm mb-3 text-oath-text">Refunds</h3>
            <p className="mb-4">
              Subscription fees are generally non-refundable. However:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Apple Refunds:</strong> You may request a refund directly from Apple within the timeframe specified in Apple's refund policy (typically 90 days). Apple evaluates each refund request on a case-by-case basis.</li>
              <li><strong>Legal Requirements:</strong> In certain jurisdictions (such as the EU), you may have a right to cancel within 14 days and receive a refund, subject to applicable law.</li>
              <li><strong>Exceptional Circumstances:</strong> We may, at our sole discretion, provide refunds in exceptional circumstances. Contact support@oath.app to request consideration.</li>
            </ul>

            <h3 className="text-heading-sm mb-3 text-oath-text">Free Trials</h3>
            <p className="mb-4">
              We may offer free trial periods for Subscription Services. If you do not cancel before the trial period ends, you will be automatically charged for the subscription. You may only use one free trial per account.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">6. Third-Party Services</h2>
            <p className="mb-4">
              Oath uses third-party services to provide certain features and functionality:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Supabase:</strong> Backend database, authentication, and cloud sync services</li>
              <li><strong>OpenAI:</strong> Powers AI features including Oath Keeper notification scheduling and insights generation</li>
              <li><strong>Apple iCloud:</strong> Cloud storage and device sync</li>
              <li><strong>Apple Analytics:</strong> App performance monitoring and crash reporting</li>
            </ul>
            <p className="mb-4">
              Your use of these third-party services through Oath is subject to their respective terms of service and privacy policies. We are not responsible for the actions, content, or services of these third parties. Third-party service failures, outages, or changes may affect Oath's functionality, and we are not liable for such impacts.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">7. Acceptable Use and Prohibited Conduct</h2>
            <p className="mb-4">
              You agree to use Oath only for lawful purposes and in accordance with these Terms. You agree NOT to:
            </p>

            <h3 className="text-heading-sm mb-3 text-oath-text">Illegal and Harmful Activities</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Violate any applicable local, state, national, or international law or regulation</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the App</li>
              <li>Transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable</li>
              <li>Impersonate any person or entity, or falsely state or misrepresent your affiliation with a person or entity</li>
              <li>Engage in any form of fraud, phishing, or other deceptive practices</li>
            </ul>

            <h3 className="text-heading-sm mb-3 text-oath-text">Security and Technical Restrictions</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Attempt to gain unauthorized access to any portion of the App, other accounts, computer systems, or networks connected to the App</li>
              <li>Probe, scan, or test the vulnerability of the App or any system or network</li>
              <li>Circumvent, disable, or otherwise interfere with security-related features of the App</li>
              <li>Use any robot, spider, scraper, or other automated means to access the App</li>
              <li>Introduce viruses, malware, worms, logic bombs, or other malicious or technologically harmful material</li>
              <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the App</li>
            </ul>

            <h3 className="text-heading-sm mb-3 text-oath-text">Violations and Consequences</h3>
            <p className="mb-4">
              Violation of these acceptable use provisions may result in immediate termination of your account and access to the App, without notice and without refund. We reserve the right to cooperate with law enforcement authorities in investigating and prosecuting violations.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">8. Intellectual Property</h2>
            <p className="mb-4">
              The App and its original content, features, and functionality are owned by Oath and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p className="mb-4">
              The Oath name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Oath. You may not use these without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">9. Disclaimer of Warranties</h2>
            <p className="mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>IMPLIED WARRANTIES OF MERCHANTABILITY</li>
              <li>IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE</li>
              <li>IMPLIED WARRANTIES OF NON-INFRINGEMENT</li>
              <li>WARRANTIES THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS</li>
            </ul>
            <p className="mb-4">
              WE DO NOT WARRANT THAT YOUR USE OF THE APP WILL MEET YOUR REQUIREMENTS OR EXPECTATIONS, THAT THE OPERATION OF THE APP WILL BE UNINTERRUPTED OR ERROR-FREE, OR THAT DEFECTS WILL BE CORRECTED.
            </p>
            <p className="mb-4">
              Some jurisdictions do not allow the exclusion of certain warranties, so some of the above exclusions may not apply to you. In such cases, our liability will be limited to the fullest extent permitted by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">10. Limitation of Liability</h2>
            <p className="mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL OATH, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
              <li>ANY LOSS OF PROFITS, REVENUES, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES</li>
              <li>ANY DAMAGES RESULTING FROM YOUR ACCESS TO OR USE OF (OR INABILITY TO ACCESS OR USE) THE APP</li>
              <li>ANY DAMAGES RESULTING FROM ANY CONDUCT OR CONTENT OF THIRD PARTIES OR OTHER USERS</li>
              <li>ANY UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT</li>
            </ul>
            <p className="mb-4">
              THE LIMITATIONS IN THIS SECTION APPLY WHETHER THE ALLEGED LIABILITY IS BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR ANY OTHER BASIS, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
            </p>
            <p className="mb-4">
              <strong>MAXIMUM LIABILITY CAP:</strong> TO THE EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR YOUR USE OF THE APP SHALL NOT EXCEED THE GREATER OF: (A) ONE HUNDRED DOLLARS ($100 USD) OR (B) THE TOTAL AMOUNT YOU PAID TO OATH FOR THE APP IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY.
            </p>
            <p className="mb-4">
              Some jurisdictions do not allow the limitation or exclusion of liability for incidental or consequential damages, so the above limitations may not apply to you. In such cases, our liability will be limited to the fullest extent permitted by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">11. Indemnification</h2>
            <p className="mb-4">
              You agree to defend, indemnify, and hold harmless Oath and its officers, directors, employees, contractors, agents, licensors, and suppliers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Your violation of these Terms</li>
              <li>Your use or misuse of the App</li>
              <li>Your violation of any rights of another person or entity</li>
              <li>Your violation of any applicable laws, rules, or regulations</li>
              <li>Your Content or any content you submit, post, or transmit through the App</li>
            </ul>
            <p className="mb-4">
              We reserve the right, at our own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, and in such case, you agree to cooperate with our defense.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">12. Dispute Resolution: Binding Arbitration and Class Action Waiver</h2>

            <p className="mb-4">
              <strong>PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT.</strong>
            </p>

            <h3 className="text-heading-sm mb-3 text-oath-text">Agreement to Arbitrate</h3>
            <p className="mb-4">
              You and Oath agree that any dispute, claim, or controversy arising out of or relating to these Terms or your use of the App (collectively, "Disputes") will be resolved through binding individual arbitration, except as specified below.
            </p>
            <p className="mb-4">
              Arbitration uses a neutral arbitrator instead of a judge or jury, is less formal than court, uses different discovery rules, and has limited appeal rights. Arbitration is final and binding.
            </p>

            <h3 className="text-heading-sm mb-3 text-oath-text">Exceptions to Arbitration</h3>
            <p className="mb-4">
              Either party may pursue a Dispute in small claims court if the Dispute qualifies for small claims court. Additionally, either party may seek injunctive or other equitable relief in court to prevent infringement or misuse of intellectual property rights. You or Oath may also bring a Dispute to the attention of federal, state, or local agencies that may seek relief on your behalf.
            </p>

            <h3 className="text-heading-sm mb-3 text-oath-text">Arbitration Procedures</h3>
            <p className="mb-4">
              Arbitration will be conducted by the American Arbitration Association (AAA) under its Consumer Arbitration Rules. The AAA's rules and fee information are available at www.adr.org. The arbitration will be held in the United States county where you live or work, or another mutually agreed location.
            </p>
            <p className="mb-4">
              If your claim is for $10,000 or less, you may choose whether the arbitration will be conducted solely on the basis of written submissions, through a telephonic hearing, or by an in-person hearing. For claims over $10,000, the arbitrator will decide the hearing format.
            </p>

            <h3 className="text-heading-sm mb-3 text-oath-text">Arbitration Fees</h3>
            <p className="mb-4">
              We will pay all AAA filing, administration, and arbitrator fees for claims of $10,000 or less, unless the arbitrator finds the arbitration frivolous. For claims over $10,000, the AAA rules will govern fee allocation.
            </p>

            <h3 className="text-heading-sm mb-3 text-oath-text">Class Action Waiver</h3>
            <p className="mb-4">
              <strong>YOU AND OATH AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.</strong>
            </p>
            <p className="mb-4">
              Unless both you and Oath agree otherwise, the arbitrator may not consolidate more than one person's claims and may not preside over any form of class, collective, consolidated, or representative proceeding. If this class action waiver is found to be unenforceable, then the entire arbitration agreement shall be null and void.
            </p>

            <h3 className="text-heading-sm mb-3 text-oath-text">Jury Trial Waiver</h3>
            <p className="mb-4">
              <strong>YOU AND OATH WAIVE ANY CONSTITUTIONAL AND STATUTORY RIGHTS TO SUE IN COURT AND HAVE A TRIAL IN FRONT OF A JUDGE OR A JURY.</strong> You and Oath are instead electing to have claims and disputes resolved by arbitration.
            </p>

            <h3 className="text-heading-sm mb-3 text-oath-text">Opt-Out Right</h3>
            <p className="mb-4">
              You have the right to opt out of this arbitration agreement. To opt out, you must notify us in writing within 30 days of first accepting these Terms. Your opt-out notice must include your name, address, email address, and a clear statement that you wish to opt out of this arbitration agreement. Send opt-out notices to:
            </p>
            <p className="mb-4 ml-6">
              <strong>Email:</strong> support@oath.app<br/>
              <strong>Subject Line:</strong> Arbitration Opt-Out
            </p>
            <p className="mb-4">
              If you opt out, you and Oath agree that Disputes will be resolved in courts located in California, United States, and you consent to personal jurisdiction in such courts.
            </p>

            <h3 className="text-heading-sm mb-3 text-oath-text">Changes to Arbitration Provision</h3>
            <p className="mb-4">
              If we make material changes to this arbitration provision, we will notify you and you will have 30 days from the date of notice to opt out of the changes. If you do not opt out, the new arbitration terms will apply to all future Disputes.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">13. Termination</h2>
            <p className="mb-4">
              We reserve the right to suspend or terminate your access to the App at any time, with or without cause, with or without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason in our sole discretion.
            </p>
            <p className="mb-4">
              You may terminate your account and cease using the App at any time by deleting the App from your devices and discontinuing use.
            </p>
            <p className="mb-4">
              Upon termination:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Your license to use the App will immediately cease</li>
              <li>You will lose access to Your Content stored in the App</li>
              <li>We are not obligated to provide refunds for any prepaid fees or subscriptions</li>
              <li>Provisions that by their nature should survive termination will survive, including: ownership provisions, warranty disclaimers, indemnification, limitations of liability, dispute resolution, and general provisions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">14. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these Terms at any time. When we make changes, we will:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Update the "Last updated" date at the top of these Terms</li>
              <li>Post the updated Terms on our website and within the App</li>
              <li>Notify you via email (if provided) or in-app notification for material changes</li>
            </ul>
            <p className="mb-4">
              <strong>Material changes</strong> (such as changes to arbitration, liability, or data use) will become effective 30 days after notice is provided. Your continued use of the App after the effective date constitutes acceptance of the modified Terms.
            </p>
            <p className="mb-4">
              If you do not agree to the modified Terms, you must stop using the App and may delete your account.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">15. Governing Law and Jurisdiction</h2>
            <p className="mb-4">
              These Terms and any Disputes (subject to the arbitration agreement above) shall be governed by and construed in accordance with the laws of the United States and the State of California, without regard to conflict of law principles.
            </p>
            <p className="mb-4">
              If you opt out of arbitration, you agree that any legal action or proceeding arising from these Terms shall be brought exclusively in the federal or state courts located in Los Angeles County, California, and you consent to personal jurisdiction in such courts.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">16. Apple App Store Requirements</h2>
            <p className="mb-4">
              By downloading Oath from the Apple App Store, you acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Agreement with Oath:</strong> These Terms are between you and Oath only, not with Apple, Inc. ("Apple")</li>
              <li><strong>License Scope:</strong> The license granted to you is limited to a non-transferable license to use the App on Apple-branded products that you own or control</li>
              <li><strong>Maintenance and Support:</strong> Oath, not Apple, is solely responsible for providing maintenance and support services. Apple has no obligation to furnish any maintenance and support services</li>
              <li><strong>Warranties:</strong> In the event of any failure to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price for the App (if any). To the maximum extent permitted by law, Apple has no other warranty obligation with respect to the App</li>
              <li><strong>Product Claims:</strong> Oath, not Apple, is responsible for addressing any claims you have relating to the App or your possession and use of the App, including: (i) product liability claims; (ii) any claim that the App fails to conform to applicable legal or regulatory requirements; and (iii) claims arising under consumer protection or similar legislation</li>
              <li><strong>Intellectual Property:</strong> In the event of any third-party claim that the App infringes that third party's intellectual property rights, Oath, not Apple, will be solely responsible for the investigation, defense, settlement, and discharge of any such claim</li>
              <li><strong>Legal Compliance:</strong> You represent and warrant that (i) you are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a "terrorist supporting" country; and (ii) you are not listed on any U.S. Government list of prohibited or restricted parties</li>
              <li><strong>Third-Party Beneficiary:</strong> Apple and Apple's subsidiaries are third-party beneficiaries of these Terms, and upon your acceptance of these Terms, Apple will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as a third-party beneficiary</li>
              <li><strong>Contact Information:</strong> For questions, support, or complaints regarding the App, contact Oath at support@oath.app</li>
            </ul>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">17. General Provisions</h2>

            <h3 className="text-heading-sm mb-3 text-oath-text">Severability</h3>
            <p className="mb-4">
              If any provision of these Terms is found to be unlawful, void, or unenforceable, that provision shall be deemed severable and shall not affect the validity and enforceability of the remaining provisions.
            </p>

            <h3 className="text-heading-sm mb-3 text-oath-text">No Waiver</h3>
            <p className="mb-4">
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. No waiver of any provision of these Terms shall be deemed a further or continuing waiver of such provision or any other provision.
            </p>

            <h3 className="text-heading-sm mb-3 text-oath-text">Assignment</h3>
            <p className="mb-4">
              You may not assign or transfer these Terms or your rights hereunder, in whole or in part, without our prior written consent. We may assign these Terms at any time without notice to you. Any attempt by you to transfer or assign these Terms without our consent shall be null and void.
            </p>

            <h3 className="text-heading-sm mb-3 text-oath-text">Force Majeure</h3>
            <p className="mb-4">
              We shall not be liable for any failure or delay in performance under these Terms due to causes beyond our reasonable control, including acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, pandemics, strikes, or shortages of transportation facilities, fuel, energy, labor, or materials.
            </p>

            <h3 className="text-heading-sm mb-3 text-oath-text">Relationship of the Parties</h3>
            <p className="mb-4">
              Nothing in these Terms creates any agency, partnership, joint venture, employer-employee, or franchisor-franchisee relationship between you and Oath.
            </p>

            <h3 className="text-heading-sm mb-3 text-oath-text">Electronic Communications</h3>
            <p className="mb-4">
              By using the App, you consent to receive electronic communications from us. You agree that all agreements, notices, disclosures, and other communications that we provide electronically satisfy any legal requirement that such communications be in writing.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">18. Entire Agreement</h2>
            <p className="mb-4">
              These Terms, together with our <a href="/privacy" className="text-oath-emerald-primary hover:underline">Privacy Policy</a>, constitute the entire agreement between you and Oath regarding the use of the App and supersede all prior or contemporaneous understandings and agreements, whether written or oral, with respect to the App.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md mb-4 text-oath-text">19. Contact Information</h2>
            <p className="mb-4">
              If you have any questions, concerns, or complaints about these Terms, please contact us:
            </p>
            <ul className="list-none space-y-2 mb-4">
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
            <p className="mb-4">
              We will make every effort to resolve your concerns.
            </p>
          </section>

          <section className="mt-12 pt-8 border-t border-oath-text-secondary/20">
            <p className="text-small text-oath-text-secondary italic">
              By downloading, installing, accessing, or using Oath, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these Terms, do not use the App.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
