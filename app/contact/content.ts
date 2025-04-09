export const contactPageHeader = {
  kicker: 'Contact Us',
  title: "We're Here to Help.",
  description:
    "Our team is available to assist you with any questions or concerns you may have. Feel free to reach out through any of the channels below, and we'll get back to you as soon as possible.",
}

export const emailCardContent = {
  email: 'help@refinedinnovators.com',
  label: 'PRIMARY CONTACT',
  description:
    'For the quickest response, reach out to us via email. We typically respond within 24 hours.',
  benefits: ['24/7 Support', 'Fast Response Time', 'Technical Assistance'],
}

type IconName = 'Send' | 'Facebook' | 'Instagram'

interface SocialLink {
  iconName: IconName
  title: string
  content: string
  link: string
}

export const socialLinks: SocialLink[] = [
  {
    iconName: 'Send',
    title: 'Telegram',
    content: '@loadcompanion',
    link: 'https://t.me/loadcompanion',
  },
  {
    iconName: 'Facebook',
    title: 'Facebook',
    content: 'LoadCompanion',
    link: 'https://www.facebook.com/share/7bYqG7AcLpRM6ftm/?mibextid=eQY6cl',
  },
  {
    iconName: 'Instagram',
    title: 'Instagram',
    content: '@loadcompanion',
    link: 'https://www.instagram.com/loadcompanion',
  },
]
