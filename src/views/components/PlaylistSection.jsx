// src/components/PlaylistSection.jsx
import React from 'react';

export const PlaylistSection = ({ phases }) => {
  if (phases.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '40px', color: '#64748B' }}>
        No matching playlists or courses found.
      </div>
    );
  }

  return (
    <>
      <p>A sequential list of courses containing verified content trackers. Choose your current experience level to begin streaming.</p>

      {phases.map((phase) => (
        <div key={phase.id}>
          <h3 className="phase-title">{phase.title}</h3>
          
          {phase.cards.map((card) => (
            <div key={card.id} className="resource-card">
              <span className={`badge ${card.levelClass}`}>{card.level}</span>
              <div className="card-title">{card.title}</div>
              <div className="card-creator">{card.creator}</div>
              <div className="card-desc">{card.description}</div>
              <a 
                href={card.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-link"
              >
                Open Playlist ↗
              </a>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default PlaylistSection;