import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0D0D12',
          backgroundImage: 'linear-gradient(135deg, #0D0D12 0%, #2A2A35 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Círculo mostaza decorativo */}
        <div
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            backgroundColor: '#E6A817',
            marginBottom: '40px',
            boxShadow: '0 0 60px rgba(230, 168, 23, 0.3)',
          }}
        />
        
        {/* Título principal */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 700,
            color: '#FAF8F5',
            textAlign: 'center',
            marginBottom: '20px',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
          }}
        >
          Golden Estética
        </div>
        
        {/* Subtítulo */}
        <div
          style={{
            fontSize: '32px',
            fontWeight: 400,
            color: '#E6A817',
            textAlign: 'center',
            marginBottom: '40px',
            opacity: 0.9,
          }}
        >
          España
        </div>
        
        {/* Línea decorativa */}
        <div
          style={{
            width: '100px',
            height: '2px',
            backgroundColor: '#E6A817',
            marginBottom: '30px',
            opacity: 0.6,
          }}
        />
        
        {/* Descripción */}
        <div
          style={{
            fontSize: '24px',
            fontWeight: 300,
            color: '#FAF8F5',
            textAlign: 'center',
            opacity: 0.8,
            maxWidth: '80%',
            lineHeight: 1.4,
          }}
        >
          Redefinimos la perfección con ciencia y lujo absoluto
        </div>
        
        {/* Footer con branding */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: '18px',
            fontWeight: 500,
            color: '#FAF8F5',
            opacity: 0.6,
            letterSpacing: '0.1em',
          }}
        >
          GOLDEN ESTÉTICA
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
