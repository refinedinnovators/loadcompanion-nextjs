import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Mail, Send } from 'lucide-react'

interface LinkGroup {
  title: string
  links: Array<{
    title: string
    href: string
    icon?: React.ElementType
  }>
}

interface SocialMedia {
  title: string
  link: string
}

interface FooterType {
  description: string
  copyright: string
  email: string
  telegram: SocialMedia
  facebook: SocialMedia
  instagram: SocialMedia
}

const footerData: FooterType = {
  description:
    'Load Companion is designed to streamline the load booking process, enhance productivity, and simplify workload management for users on platforms like DAT One, and Sylectus.',
  copyright: 'Refined Innovators LLC, All Rights Reserved',
  email: 'help@refinedinnovators.com',
  telegram: {
    title: 'Telegram',
    link: 'https://t.me/loadcompanion',
  },
  facebook: {
    title: 'Facebook',
    link: 'https://www.facebook.com/share/7bYqG7AcLpRM6ftm/?mibextid=eQY6cl',
  },
  instagram: {
    title: 'Instagram',
    link: 'https://www.instagram.com/loadcompanion',
  },
}

const getLinkGroups = (): LinkGroup[] => [
  {
    title: 'Pages',
    links: [
      {
        title: 'Features',
        href: '/#features',
      },
      {
        title: 'Pricing',
        href: '/#pricing',
      },
      {
        title: 'FAQ',
        href: '/#faq',
      },
      {
        title: 'Get Started',
        href: '/get-started',
      },
    ],
  },
  {
    title: 'Support',
    links: [
      {
        title: 'Submit Bugs',
        href: `mailto:${footerData.email}?subject=Bug%20Report`,
      },
      {
        title: 'Contact Us',
        href: '/contact',
      },
    ],
  },
  {
    title: 'Legal',
    links: [
      {
        title: 'Terms & Conditions',
        href: '/terms',
      },
      {
        title: 'Privacy Policy',
        href: '/privacy',
      },
    ],
  },
  {
    title: 'Contact',
    links: [{ title: 'Email', href: `mailto:${footerData.email}`, icon: Mail }],
  },
]

export function Footer() {
  const linkGroups = getLinkGroups()

  return (
    <footer className="border-t border-gray-800 bg-[#0A0A0B]">
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/logos/lc-logo.png"
                alt="Load Companion Logo"
                width={48}
                height={48}
                className="h-12 w-12"
                priority={true}
                quality={75}
              />
              <span className="font-bold text-xl text-white">
                Load Companion
              </span>
            </Link>
            <p className="text-base text-gray-400">{footerData.description}</p>
            <div className="flex space-x-6">
              <a
                href={footerData.facebook.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#4F46E5]"
              >
                <span className="sr-only">{footerData.facebook.title}</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href={footerData.instagram.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#4F46E5]"
              >
                <span className="sr-only">{footerData.instagram.title}</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href={footerData.telegram.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#4F46E5]"
              >
                <span className="sr-only">{footerData.telegram.title}</span>
                <Send className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0 sm:grid-cols-2 md:grid-cols-4">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-base font-medium text-white">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-4">
                  {group.links.map((link) => (
                    <li key={link.title}>
                      {link.href.startsWith('mailto:') ? (
                        <a
                          href={link.href}
                          className="text-base text-gray-400 hover:text-[#4F46E5] flex items-center"
                        >
                          {link.icon &&
                            React.createElement(link.icon, {
                              className: 'h-5 w-5 mr-2',
                            })}
                          {link.title}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-base text-gray-400 hover:text-[#4F46E5] flex items-center"
                        >
                          {link.icon &&
                            React.createElement(link.icon, {
                              className: 'h-5 w-5 mr-2',
                            })}
                          {link.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} {footerData.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
