import React from 'react';

export const DocsSection = ({ docs, protocols }) => {
  return (
    <div className="animate-fade-in delay-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ marginBottom: '40px' }}>
        <h2 className="section-title">Docs & Resources</h2>
        <p className="section-subtitle">A hand-selected registry of verified core guidelines and packages.</p>
      </div>
      
      {/* SaaS-style Horizontal List for Docs */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '56px' }}>
        {docs.map((doc) => (
          <div key={doc.id} style={{
            background: 'var(--bg-primary)',
            borderRadius: '12px',
            padding: '20px 24px',
            boxShadow: 'var(--shadow-sm)',
            border: doc.isPrime ? '1px solid var(--accent-hover)' : '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            transition: 'all 0.2s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.01)';
            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
          }}>
            
            {/* Left Icon Block */}
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: doc.isPrime ? 'var(--accent-color)' : 'var(--bg-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <span style={{ fontSize: '20px', color: doc.isPrime ? '#FFFFFF' : 'var(--accent-hover)' }}>
                {doc.title.includes('Official') ? '📘' : doc.title.includes('Pub.dev') ? '📦' : doc.title.includes('Visual') ? '🎨' : doc.title.includes('Screenshots') ? '📱' : doc.title.includes('Icon') ? '🖼️' : '🧩'}
              </span>
            </div>

            {/* Content Body */}
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
                <h3 style={{ fontSize: '18px', color: 'var(--text-main)', margin: 0, fontWeight: '700' }}>
                  {doc.title}
                </h3>
                {doc.isPrime && (
                  <span style={{
                    background: 'var(--accent-light)',
                    color: 'var(--accent-hover)',
                    fontSize: '11px',
                    fontWeight: '700',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    textTransform: 'uppercase'
                  }}>
                    Core
                  </span>
                )}
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>
                {doc.desc}
              </p>
            </div>
            
            {/* Action Button */}
            <a 
              href={doc.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: doc.isPrime ? 'var(--accent-color)' : 'transparent',
                color: doc.isPrime ? '#FFFFFF' : 'var(--text-main)',
                fontWeight: '600',
                padding: '10px 20px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '14px',
                border: doc.isPrime ? 'none' : '1px solid var(--border-color)',
                transition: 'all 0.2s ease',
                flexShrink: 0
              }}
              onMouseEnter={(e) => {
                if (!doc.isPrime) {
                  e.currentTarget.style.background = 'var(--bg-secondary)';
                } else {
                  e.currentTarget.style.opacity = '0.9';
                }
              }}
              onMouseLeave={(e) => {
                if (!doc.isPrime) {
                  e.currentTarget.style.background = 'transparent';
                } else {
                  e.currentTarget.style.opacity = '1';
                }
              }}
            >
              {doc.btnText}
            </a>
          </div>
        ))}
      </div>

      {/* Terminal Style Protocols */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '16px', fontWeight: '700' }}>
          Infrastructure Protocols
        </h3>
        
        <div style={{ 
          background: '#1A202C', 
          borderRadius: '12px', 
          overflow: 'hidden',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)'
        }}>
          {/* Terminal Header */}
          <div style={{ 
            background: '#2D3748', 
            padding: '12px 16px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px' 
          }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FC8181' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F6E05E' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#68D391' }} />
            <span style={{ marginLeft: '12px', fontSize: '13px', color: '#A0AEC0', fontFamily: 'monospace' }}>
              bash ~ protocols.sh
            </span>
          </div>

          {/* Terminal Body */}
          <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', fontFamily: 'monospace', fontSize: '14px', lineHeight: '1.6' }}>
            {protocols.map((protocol, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ color: '#68D391' }}>➜</span>
                <div style={{ flex: 1, color: '#E2E8F0' }}>
                  {protocol.includes('flutter doctor') ? (
                    <>Execute <span style={{ color: '#F6E05E' }}>flutter doctor</span> inside your command shell profile before building views to confirm structural alignments.</>
                  ) : protocol.includes('dartpad.dev') ? (
                    <>Deploy isolated testing scripts into DartPad (<span style={{ color: '#63B3ED' }}>dartpad.dev</span>) to instantly verify simple functional concepts without overheads.</>
                  ) : (
                    protocol
                  )}
                </div>
              </div>
            ))}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px' }}>
              <span style={{ color: '#68D391' }}>➜</span>
              <span style={{ width: '8px', height: '16px', background: '#E2E8F0', animation: 'blink 1s step-end infinite' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
