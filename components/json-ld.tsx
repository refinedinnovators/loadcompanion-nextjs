export default function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Load Companion',
    applicationCategory: 'Transportation & Logistics Software',
    operatingSystem: 'Chrome Extension',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description:
      'Load Companion is a powerful browser extension that automates load booking, rate calculations, and email communications for trucking companies. Integrated with DAT Power, DAT One, and Sylectus.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
    },
    author: {
      '@type': 'Organization',
      name: 'Refined Innovators LLC',
      url: 'https://loadcompanion.com',
      sameAs: [
        'https://www.linkedin.com/company/loadcompanion',
        'https://twitter.com/loadcompanion',
      ],
      logo: {
        '@type': 'ImageObject',
        url: 'https://loadcompanion.com/images/logos/lc-logo.png',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'support@loadcompanion.com',
      },
    },
    featureList: [
      'One-click load booking',
      'Automated rate calculations',
      'Email automation',
      'Google Maps integration',
      'Weather information',
      'DAT Power integration',
      'DAT One integration',
      'Sylectus integration',
    ],
    screenshot: {
      '@type': 'ImageObject',
      url: 'https://loadcompanion.com/images/screenshots/dat-one.png',
      caption: 'Load Companion Dashboard',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
