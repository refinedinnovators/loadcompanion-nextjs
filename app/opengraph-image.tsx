import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Load Companion - Automate Your Load Booking Process'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '48px',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://loadcompanion.com/images/logos/lc-logo.png"
            alt="Load Companion Logo"
            width="120"
            height="120"
            style={{ marginRight: '24px' }}
          />
          <div
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #4F46E5 0%, #7C3AED 100%)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Load Companion
          </div>
        </div>
        <div
          style={{
            fontSize: '32px',
            color: '#374151',
            textAlign: 'center',
            marginTop: '24px',
          }}
        >
          Automate Your Load Booking Process
        </div>
        <div
          style={{
            fontSize: '24px',
            color: '#6B7280',
            textAlign: 'center',
            marginTop: '16px',
          }}
        >
          Integrated with DAT Power, DAT One, and Sylectus
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
