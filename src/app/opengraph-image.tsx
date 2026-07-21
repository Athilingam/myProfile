import { ImageResponse } from 'next/og';
import { siteConfig } from '@/constants/site';

export const runtime = 'edge';
export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, #020617 0%, #0F172A 55%, #1D4FD7 140%)',
        padding: '72px',
        color: 'white',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 18,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #2563EB, #06B6D4)',
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          AS
        </div>
        <div style={{ fontSize: 26, color: '#94A3B8' }}>athilingam.dev</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ fontSize: 30, color: '#60A5FA', fontWeight: 600 }}>
          AI Mobile Solutions Architect
        </div>
        <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05 }}>
          Athilingam Subramanian
        </div>
        <div style={{ fontSize: 30, color: '#CBD5E1', maxWidth: 900 }}>
          Building Scalable Mobile Experiences Powered by AI
        </div>
      </div>

      <div style={{ display: 'flex', gap: 40, fontSize: 24, color: '#94A3B8' }}>
        <span>11+ years</span>
        <span>50+ apps</span>
        <span>30+ clients</span>
        <span>15+ countries</span>
      </div>
    </div>,
    { ...size },
  );
}
