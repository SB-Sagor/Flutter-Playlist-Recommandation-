import React from 'react';

export const Sidebar = ({ activeTab, onTabChange, title, subtitle }) => {
  const tabs = [
    { id: 'roadmap', label: 'Mountain Roadmap', icon: '🏔️' },
    { id: 'playlists', label: 'Playlists Roadmap', icon: '🛣️' },
    { id: 'compiler', label: 'Dart Compiler', icon: '💻' },
    { id: 'topics', label: 'Topic-wise Videos', icon: '📺' },
    { id: 'docs', label: 'Docs & Resources', icon: '📚' },
    { id: 'interview', label: 'Interview Prep', icon: '💼' }
  ];

  return (
    <aside className="sidebar">
      <div style={{ marginBottom: '40px' }}>
        <h1 className="app-title">Flutter<br/>Journey</h1>
        <div className="app-subtitle">A curated path to mastery</div>
      </div>
      
      <nav className="nav-menu">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            <span style={{ fontSize: '18px' }}>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </nav>
      
      <div style={{ marginTop: 'auto', fontSize: '12px', color: 'var(--text-light)', lineHeight: '1.5' }}>
        Built for juniors & beginners. <br/>
        Recommended by peers.
      </div>
    </aside>
  );
};
