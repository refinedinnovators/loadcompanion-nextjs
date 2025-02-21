import type { StaticImageData } from 'next/image'

// Static images with dimensions
const DatOneScreen = {
  src: '/images/screenshots/dat-one.png',
  width: 1280,
  height: 720
}
const SylectusScreen = {
  src: '/images/screenshots/sylectus-board.png',
  width: 1280,
  height: 720
}

// GIFs
const OneClickEmailGif = '/images/gifs/one-click-email.gif'
const OneGoogleMapsGif = '/images/gifs/one-google-maps.gif'
const CalcGif = '/images/gifs/calculator.gif'
const lcMapGif = '/images/gifs/lc-maps.gif'
const EmailEditorGif = '/images/gifs/email-editor.gif'
const ClipboardGif = '/images/gifs/clipboard.gif'
const SylectusGoogleMapsGif = '/images/gifs/sylectus-google-maps.gif'
const SylectusEmailEditorGif = '/images/gifs/sylectus-email-editor.gif'

export type PointerType = {
  x: number
  y: number
  title: string
  description: string
  gif?: string
}

export type GalleryImageType = {
  src: string
  alt: string
  width: number
  height: number
  pointers?: PointerType[]
}

const GalleryContent: GalleryImageType[] = [
  {
    ...DatOneScreen,
    alt: 'Dat One',
    pointers: [
      {
        x: 9.7,
        y: 33,
        title: 'Google Maps',
        description:
          'Plan routes and calculate miles directly from DAT.com with integrated Google Maps support. Save time and optimize dispatching workflow.',
        gif: OneGoogleMapsGif,
      },
      {
        x: 53,
        y: 74,
        title: 'Instant RPM Calculator',
        description:
          'Calculate costs, profits, and rates per mile instantly, empowering you with real-time financial insights.',
        gif: CalcGif,
      },
      {
        x: 30.6,
        y: 74,
        title: 'Load Companion Map',
        description:
          'When you open a load, the extension automatically integrates a map with comprehensive load details, helping you evaluate its suitability at a glance.',
        gif: lcMapGif,
      },
      {
        x: 30.6,
        y: 95.7,
        title: 'Load Companion Weather Widget',
        description:
          'When you open a load, the extension provides destination-specific weather details alongside the load information, making it easier to make a decision.',
      },
      {
        x: 75,
        y: 33.3,
        title: 'One-Click Email',
        description:
          'Send booking requests with a single click, seamlessly integrated with Gmail and Outlook. Customize emails instantly without leaving your workflow.',
        gif: OneClickEmailGif,
      },
      {
        x: 9,
        y: 79.1,
        title: 'Click-to-Call',
        description:
          'Click to Call is a feature that allows users to initiate a phone call directly from the load board with a single click.',
      },
      {
        x: 13.05,
        y: 88.4,
        title: 'One-Click Email from Comments',
        description:
          'Send emails directly from comments when an email address is mentioned, streamlining your workflow further.',
      },
      {
        x: 77.8,
        y: 39.2,
        title: 'Built in email editor',
        description:
          'Effortlessly customize emails with our built-in editor. Make quick adjustments directly from your dashboard for precise, on-point trucking communications.',
        gif: EmailEditorGif,
      },
      {
        x: 75,
        y: 26.5,
        title: 'Clipboard Assistant',
        description:
          'Effortlessly copy load details with a single click for quick and convenient access.',
        gif: ClipboardGif,
      },
    ],
  },
  {
    ...SylectusScreen,
    alt: 'Sylectus',
    pointers: [
      {
        x: 85,
        y: 56.7,
        title: 'Google Maps',
        description:
          'Plan routes and calculate miles directly from DAT.com with integrated Google Maps support. Save time and optimize dispatching workflow.',
        gif: SylectusGoogleMapsGif,
      },
      {
        x: 18.7,
        y: 66.7,
        title: 'One-Click Email',
        description:
          'Send booking requests with a single click, seamlessly integrated with Gmail and Outlook. Customize emails instantly without leaving your workflow.',
        gif: OneClickEmailGif,
      },
      {
        x: 20,
        y: 45,
        title: 'Built in email editor',
        description:
          'Effortlessly customize emails with our built-in editor. Make quick adjustments directly from your dashboard for precise, on-point trucking communications.',
        gif: SylectusEmailEditorGif,
      },
      {
        x: 22.5,
        y: 57.3,
        title: 'Clipboard Assistant',
        description:
          'Effortlessly copy load details with a single click for quick and convenient access.',
        gif: ClipboardGif,
      },
    ],
  },
]

export default GalleryContent
