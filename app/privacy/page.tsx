"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
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
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">Privacy Policy</h1>
            <p className="text-lg font-medium text-gray-600">Effective Date: 01/26/2024</p>
            <p className="mt-4 text-gray-600 text-lg">
              This Privacy Policy outlines how LoadCompanion collects, uses, maintains, and discloses information from
              its users.
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
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                This Privacy Policy outlines how LoadCompanion collects, uses, maintains, and discloses information from
                its users.
              </p>
            </motion.section>

            <motion.section {...fadeIn}>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Web Browser Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Our extension may use "cookies" to enhance user experience. Users can set their web browser to refuse
                cookies or to alert when cookies are being sent. However, some parts of the extension may not function
                properly.
              </p>
            </motion.section>

            <motion.section {...fadeIn}>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Use of Collected Information</h2>
              <p className="text-gray-600 leading-relaxed">LoadCompanion uses collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li className="text-gray-600">To operate and maintain our extension efficiently.</li>
                <li className="text-gray-600">To improve customer service and respond to support needs.</li>
                <li className="text-gray-600">To personalize user experience and understand how our services are used.</li>
                <li className="text-gray-600">To send periodic emails regarding updates or other product-related information.</li>
              </ul>
            </motion.section>

            <motion.section {...fadeIn}>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Protection of Information</h2>
              <p className="text-gray-600 leading-relaxed">
                We adopt appropriate data collection, storage, and processing practices and security measures to protect
                against unauthorized access, alteration, disclosure, or destruction of personal information.
              </p>
            </motion.section>

            <motion.section {...fadeIn}>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Sharing Personal Information</h2>
              <p className="text-gray-600 leading-relaxed">We do not sell, trade, or rent users' personal identification information.</p>
              <p className="text-gray-600 leading-relaxed">We may disclose your information in the following scenarios:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li className="text-gray-600">
                  <strong>Legal Obligations:</strong> If required to do so by law or in response to valid requests by
                  public authorities (e.g., a court or a government agency).
                </li>
                <li className="text-gray-600">
                  <strong>Business Transfers:</strong> In connection with, or during negotiations of, any merger, sale
                  of company assets, financing, or acquisition of all or a portion of our business to another company.
                </li>
              </ul>
            </motion.section>

            <motion.section {...fadeIn}>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Compliance with Google's Limited Use Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We adhere to the Google API Services User Data Policy, including the Limited Use requirements, in our
                use and transfer of information received from Google APIs.
              </p>
            </motion.section>

            <motion.section {...fadeIn}>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Handling Email Permissions</h2>
              <p className="text-gray-600 leading-relaxed">For the functionality of our "gmail.send" (Gmail) and "Mail.Send" (Outlook) features:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li className="text-gray-600">
                  <strong>Access:</strong> Access to these features is only sought to enhance the app's core functions.
                </li>
                <li className="text-gray-600">
                  <strong>Privacy:</strong> We do not retain or distribute your email address without your direct
                  consent.
                </li>
                <li className="text-gray-600">
                  <strong>No Marketing:</strong> Emails sent via our app are never used for marketing purposes.
                </li>
                <li className="text-gray-600">
                  <strong>Control:</strong> You have the full freedom to withdraw our access at any time via your
                  account settings.
                </li>
              </ul>
            </motion.section>

            <motion.section {...fadeIn}>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Changes to This Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to update or change our Privacy Policy at any time. We will notify users of any
                changes by posting the new Privacy Policy on this page.
              </p>
            </motion.section>

            <motion.section {...fadeIn}>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Your Acceptance of These Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By using this extension, you signify your acceptance of this policy. If you do not agree, please do not
                use our extension. Continued use signifies acceptance of any changes.
              </p>
            </motion.section>

            <motion.section {...fadeIn}>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Contacting Us</h2>
              <p className="text-gray-600 leading-relaxed">
                For questions about this Privacy Policy, contact us at{" "}
                <a href="mailto:help@refinedinnovators.com" className="text-blue-600 hover:text-blue-800">
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

