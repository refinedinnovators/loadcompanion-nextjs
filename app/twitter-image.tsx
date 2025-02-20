import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Load Companion - Trucking Automation Made Simple'
export const size = {
  width: 1200,
  height: 600,
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
            marginBottom: '32px',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://loadcompanion.com/images/logos/lc-logo.png"
            alt="Load Companion Logo"
            width="100"
            height="100"
            style={{ marginRight: '20px' }}
          />
          <div
            style={{
              fontSize: '56px',
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
            fontSize: '28px',
            color: '#374151',
            textAlign: 'center',
            marginTop: '20px',
          }}
        >
          Trucking Automation Made Simple
        </div>
        <div
          style={{
            display: 'flex',
            gap: '24px',
            marginTop: '32px',
          }}
        >
          {['DAT Power', 'DAT One', 'Sylectus'].map((platform) => (
            <div
              key={platform}
              style={{
                padding: '12px 24px',
                background: '#F3F4F6',
                borderRadius: '8px',
                fontSize: '20px',
                color: '#4B5563',
              }}
            >
              {platform}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
