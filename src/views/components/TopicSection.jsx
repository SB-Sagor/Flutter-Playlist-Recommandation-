import React from 'react';

export const TopicSection = ({ topics }) => {
  return (
    <div className="animate-fade-in delay-2" style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 className="section-title">Topic-wise Videos</h2>
        <p className="section-subtitle">Target precise structures and patterns by topic.</p>
      </div>
      
      <div className="grid-layout">
        {topics.map((topic) => (
          <div key={topic.id} style={{
            background: 'var(--bg-primary)',
            borderRadius: '12px',
            boxShadow: 'var(--shadow-md)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            border: '1px solid var(--border-color)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
          }}>
            {/* Removed left accent border as per user request */}
            
            <div style={{ padding: '24px 24px 24px 30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '16px' }}>
                <span style={{ 
                  display: 'inline-block', 
                  padding: '4px 10px', 
                  borderRadius: '20px', 
                  backgroundColor: 'var(--accent-light)', 
                  color: '#2D3748', 
                  fontSize: '12px', 
                  fontWeight: '700',
                  letterSpacing: '0.5px',
                  marginBottom: '12px',
                  textTransform: 'uppercase'
                }}>
                  {topic.tag}
                </span>
                <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px', fontWeight: '700' }}>
                  {topic.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                  {topic.description}
                </p>
              </div>
              
              {/* Links List */}
              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid var(--border-light)', paddingTop: '16px' }}>
                <div style={{ fontSize: '12px', color: 'var(--text-light)', fontWeight: '600', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Video Resources
                </div>
                {topic.links.map((link, idx) => (
                  <a 
                    key={idx} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--bg-secondary)',
                      color: 'var(--text-main)',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: '500',
                      transition: 'background-color 0.2s ease, color 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--accent-color)';
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                      e.currentTarget.style.color = 'var(--text-main)';
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.5)',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                    }}>
                      <span style={{ fontSize: '10px', color: '#E53E3E', marginLeft: '2px' }}>▶</span>
                    </div>
                    {link.text.replace('↳ ', '').replace(' ↗', '')}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
