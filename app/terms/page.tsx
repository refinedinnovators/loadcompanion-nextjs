'use client'

import { motion } from 'framer-motion'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'

export default function TermsAndRefundPolicyPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              Terms and Conditions
            </h1>
            <p className="text-lg font-medium text-gray-600">
              Effective Date: 01/26/2024
            </p>
            <p className="mt-4 text-gray-600 text-lg">
              These Terms and Conditions, including our Refund Policy, outline
              your rights, responsibilities, and the limitations of using
              LoadCompanion.
            </p>
          </div>

          <motion.div
            className="prose prose-lg prose-indigo mx-auto max-w-3xl mt-16"
            initial="initial"
            animate="animate"
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.section {...fadeIn}>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Welcome to LoadCompanion. These Terms and Conditions ("Terms")
                govern your use of the LoadCompanion app and any related
                services provided by Refined Innovators LLC. By accessing or
                using LoadCompanion, you agree to be bound by these Terms. If
                you do not agree with any part of the Terms, you are prohibited
                from using or accessing this extension.
              </p>
            </motion.section>

            <motion.section {...fadeIn}>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                2. Your Access to the Extension
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li className="text-gray-600">
                  <strong>Account Use:</strong> You are responsible for
                  maintaining the confidentiality of your account and password.
                </li>
                <li className="text-gray-600">
                  <strong>Acceptable Use:</strong> You agree not to use
                  LoadCompanion in any way that is unlawful, harmful, or
                  infringes on others' rights.
                </li>
              </ul>
            </motion.section>

            <motion.section {...fadeIn}>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                3. Subscription and Payment Terms
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li className="text-gray-600">
                  <strong>Auto-Renewal:</strong> Your subscription will
                  automatically renew at the end of each billing cycle unless
                  you cancel it before the renewal date. You can manage or
                  disable auto-renewal through your account settings.
                  Cancellations will take effect at the end of the current
                  billing cycle, and no refunds will be issued for the remainder
                  of the subscription term.
                </li>
                <li className="text-gray-600">
                  <strong>Payment Methods:</strong> We accept major credit
                  cards, debit cards, and other online payment methods as
                  specified during checkout. It is your responsibility to ensure
                  that a valid payment method is linked to your account. Failure
                  to maintain an active payment method may result in
                  subscription suspension or cancellation.
                </li>
              </ul>
            </motion.section>

            <motion.section {...fadeIn}>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                4. Refund Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                All subscription fees for LoadCompanion are non-refundable. Once
                your subscription is activated, we do not offer refunds for any
                reason, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li className="text-gray-600">
                  Deciding that you no longer need the service.
                </li>
                <li className="text-gray-600">
                  Failure to cancel the subscription before the renewal date.
                </li>
                <li className="text-gray-600">
                  Dissatisfaction with the service after use.
                </li>
                <li className="text-gray-600">
                  Switching to another service provider or product.
                </li>
                <li className="text-gray-600">
                  Personal or financial circumstances preventing continued use
                  of the service.
                </li>
              </ul>
            </motion.section>

            <motion.section {...fadeIn}>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                5. Intellectual Property Rights
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The extension and its original content, features, and
                functionality are and will remain the exclusive property of
                Refined Innovators and its licensors. Our intellectual property
                must not be copied, modified, distributed, sold, or leased
                without our express written consent.
              </p>
            </motion.section>

            <motion.section {...fadeIn}>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                6. Sending Grant and Email Usage
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li className="text-gray-600">
                  <strong>User Responsibility:</strong> By using LoadCompanion's
                  email-sending features, the user confirms that they have the
                  necessary rights and permissions to send emails on behalf of
                  their own account.
                </li>
                <li className="text-gray-600">
                  <strong>Compliance with Laws:</strong> The user agrees to
                  comply with all applicable laws and regulations, including
                  anti-spam laws such as the CAN-SPAM Act, GDPR, and similar
                  regulations in their jurisdiction.
                </li>
                <li className="text-gray-600">
                  <strong>Liability Disclaimer:</strong> LoadCompanion is not
                  liable for any damages or legal issues arising from the misuse
                  of our service to send emails.
                </li>
                <li className="text-gray-600">
                  <strong>Prohibited Activities:</strong> Users agree not to use
                  the service for:
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li className="text-gray-600">
                      Sending unsolicited or bulk emails (spam).
                    </li>
                    <li className="text-gray-600">
                      Harassment, fraud, or other unlawful activities.
                    </li>
                    <li className="text-gray-600">
                      Misrepresentation of identity or affiliation.
                    </li>
                  </ul>
                </li>
                <li className="text-gray-600">
                  <strong>Termination of Service:</strong> LoadCompanion
                  reserves the right to suspend or permanently terminate a
                  user's account if they are found to be in violation of these
                  terms, including misuse of the email-sending features. This
                  action may include disabling all associated services and
                  features provided by LoadCompanion without prior notice.
                </li>
                <li className="text-gray-600">
                  <strong>Agreement to Policies:</strong> By using the service,
                  users agree to adhere to LoadCompanion's Terms and Conditions,
                  Refund Policy, and Privacy Policy.
                </li>
              </ul>
            </motion.section>

            <motion.section {...fadeIn}>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                7. Indemnification
              </h2>
              <p className="text-gray-600 leading-relaxed">
                You agree to defend, indemnify, and hold harmless Refined
                Innovators and its licensee and licensors, and their employees,
                contractors, agents, officers, and directors, from and against
                any and all claims, damages, obligations, losses, liabilities,
                costs or debt, and expenses (including but not limited to
                attorney's fees), resulting from or arising out of:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li className="text-gray-600">
                  Your use and access of the extension by you or any person
                  using your account and password.
                </li>
                <li className="text-gray-600">A breach of these Terms.</li>
                <li className="text-gray-600">
                  Content posted on the extension.
                </li>
              </ul>
            </motion.section>

            <motion.section {...fadeIn}>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To the fullest extent permitted by law, Refined Innovators LLC
                shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages, or any loss of profits or
                revenues, whether incurred directly or indirectly, or any loss
                of data, use, goodwill, or other intangible losses, resulting
                from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li className="text-gray-600">
                  Your access to or use of or inability to access or use the
                  extension.
                </li>
                <li className="text-gray-600">
                  Any conduct or content of any third party on the extension.
                </li>
                <li className="text-gray-600">
                  Any content obtained from the extension.
                </li>
                <li className="text-gray-600">
                  Unauthorized access, use, or alteration of your transmissions
                  or content.
                </li>
              </ul>
            </motion.section>

            <motion.section {...fadeIn}>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                9. Liability for Downtime or Interruptions
              </h2>
              <p className="text-gray-600 leading-relaxed">
                LoadCompanion aims to provide reliable and uninterrupted
                service; however, we cannot guarantee continuous availability.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are not liable for any service interruptions, downtime, or
                delays caused by:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li className="text-gray-600">Maintenance or updates.</li>
                <li className="text-gray-600">
                  Technical issues with third-party providers or platforms
                  (e.g., email servers, cloud services).
                </li>
                <li className="text-gray-600">
                  Unforeseen events such as natural disasters, power outages, or
                  other force majeure circumstances.
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                While we strive to minimize disruptions, you acknowledge that
                temporary interruptions may occur and agree that LoadCompanion
                will not be held liable for any losses or damages resulting from
                such occurrences.
              </p>
            </motion.section>

            <motion.section {...fadeIn}>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                10. Feedback and Suggestions
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We welcome your feedback and suggestions to improve
                LoadCompanion. By providing feedback, you agree to the
                following:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li className="text-gray-600">
                  LoadCompanion may use your feedback or suggestions for any
                  purpose, including improving, modifying, or developing new
                  features or services, without any obligation to you.
                </li>
                <li className="text-gray-600">
                  You grant LoadCompanion a non-exclusive, royalty-free,
                  worldwide, perpetual, irrevocable, and transferable license to
                  use, copy, modify, distribute, and otherwise exploit your
                  feedback in any manner.
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                If you do not agree with these terms, please refrain from
                providing feedback or suggestions.
              </p>
            </motion.section>

            <motion.section {...fadeIn}>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                11. Disclaimer
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Your use of the extension is at your sole risk. The extension is
                provided on an "AS IS" and "AS AVAILABLE" basis. The extension
                is provided without warranties of any kind, whether express or
                implied, including, but not limited to, implied warranties of
                merchantability, fitness for a particular purpose,
                non-infringement, or course of performance.
              </p>
            </motion.section>

            <motion.section {...fadeIn}>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                12. Changes to These Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. We will provide notice of any
                changes by posting the new Terms on this page.
              </p>
            </motion.section>

            <motion.section {...fadeIn}>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                13. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about these Terms, please contact us
                at{' '}
                <a
                  href="mailto:help@refinedinnovators.com"
                  className="text-blue-600 hover:text-blue-800"
                >
                  help@refinedinnovators.com
                </a>
                .
              </p>
            </motion.section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
