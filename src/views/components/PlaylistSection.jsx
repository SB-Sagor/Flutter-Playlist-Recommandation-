import React from 'react';

export const PlaylistSection = ({ phases }) => {
  if (!phases || phases.length === 0) {
    return <div className="animate-fade-in" style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>No playlists found for your search.</div>;
  }

  return (
    <div className="animate-fade-in delay-2" style={{ maxWidth: '1000px', margin: '0 auto', paddingBottom: '60px' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h2 className="section-title">Playlist Roadmap</h2>
        <p className="section-subtitle">Follow this step-by-step video journey to master Flutter.</p>
      </div>
      
      {phases.map((phase, idx) => (
        <div key={idx} style={{ marginBottom: '48px' }}>
          <h3 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--text-main)', marginBottom: '24px', paddingBottom: '12px', borderBottom: '2px solid var(--border-color)' }}>
            {phase.title}
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {phase.cards.map((card, i) => (
              <div key={i} style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid #E1E4E8',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = 'var(--accent-color)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                e.currentTarget.style.borderColor = '#E1E4E8';
              }}>
                
                {/* Left side: Badge & Play Icon */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', minWidth: '140px' }}>
                  <div style={{
                    width: '48px', height: '48px',
                    borderRadius: '50%',
                    background: 'var(--bg-secondary)',
                    color: 'var(--accent-color)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '20px'
                  }}>
                    ▶
                  </div>
                  <span style={{
                    display: 'inline-block',
                    padding: '6px 12px',
                    borderRadius: '12px',
                    fontSize: '11px',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    textAlign: 'center',
                    backgroundColor: card.level.includes('Absolute') ? '#E6F4EA' : 
                                     card.level.includes('Upper') ? '#FCE8E6' : 
                                     card.level.includes('Intermediate') ? '#F3E8FD' : 
                                     card.level.includes('Beginner') ? '#FEF7E0' : '#E2E8F0',
                    color: card.level.includes('Absolute') ? '#137333' : 
                           card.level.includes('Upper') ? '#C5221F' : 
                           card.level.includes('Intermediate') ? '#6B1CB0' : 
                           card.level.includes('Beginner') ? '#B06000' : '#4A5568'
                  }}>
                    {card.level}
                  </span>
                </div>
                
                {/* Middle: Text Content */}
                <div style={{ flex: 1 }}>
                  <h4 style={{ 
                    fontSize: '18px', 
                    fontWeight: '700', 
                    color: '#24292E',
                    margin: '0 0 8px 0'
                  }}>
                    {card.title}
                  </h4>
                  <div style={{ 
                    color: '#586069', 
                    fontSize: '13px',
                    marginBottom: '8px',
                    fontWeight: '600'
                  }}>
                    👤 {card.creator}
                  </div>
                  <p style={{ 
                    color: '#24292E', 
                    fontSize: '15px', 
                    lineHeight: '1.5',
                    margin: '0'
                  }}>
                    {card.description}
                  </p>
                </div>
                
                {/* Right side: Button */}
                <div>
                  <a href={card.link} target="_blank" rel="noopener noreferrer" style={{ 
                    display: 'inline-block',
                    background: 'var(--accent-color)',
                    color: '#FFFFFF',
                    fontWeight: '600',
                    fontSize: '14px',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#2D3748';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--accent-color)';
                  }}>
                    Watch Now
                  </a>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};