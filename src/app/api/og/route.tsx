import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // Dynamic params
    const title = searchParams.has('title')
      ? searchParams.get('title')?.slice(0, 100)
      : 'Saravpreet Singh Pruthi';
      
    const subtitle = searchParams.has('subtitle')
      ? searchParams.get('subtitle')?.slice(0, 100)
      : 'Securing systems. Shipping products.';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0a0a0f',
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.05) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.05) 2%, transparent 0%)',
            backgroundSize: '100px 100px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px 80px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: 24,
                color: '#8b8b8b',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 24,
                fontFamily: 'monospace',
              }}
            >
              portfolio / 2025
            </div>
            <div
              style={{
                fontSize: 64,
                fontWeight: 600,
                color: 'white',
                lineHeight: 1.2,
                marginBottom: 24,
                fontFamily: 'sans-serif',
                letterSpacing: '-0.02em',
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 32,
                color: '#a1a1aa',
                lineHeight: 1.4,
                fontFamily: 'sans-serif',
              }}
            >
              {subtitle}
            </div>
          </div>
          
          <div
            style={{
              position: 'absolute',
              bottom: 40,
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                backgroundColor: 'white',
                borderRadius: '50%',
              }}
            />
            <div
              style={{
                fontSize: 24,
                color: 'white',
                fontFamily: 'sans-serif',
                fontWeight: 500,
              }}
            >
              Saravpreet.
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.log(`Failed to generate image: ${e instanceof Error ? e.message : String(e)}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
