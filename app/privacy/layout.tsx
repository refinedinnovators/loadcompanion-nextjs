import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - LoadCompanion',
  description:
    'Learn about how LoadCompanion collects, uses, maintains, and discloses information from its users.',
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
