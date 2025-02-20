import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms and Conditions - LoadCompanion",
  description:
    "Review the terms and conditions, including our refund policy, for using LoadCompanion. Learn about our policies, limitations, and your rights as a user.",
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
