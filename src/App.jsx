// src/App.jsx
import React from 'react';
import { useDashboard } from './hooks/useDashboard';
import { TabNavigation } from './components/TabNavigation';
import { SearchBar } from './components/SearchBar';
import { PlaylistSection } from './components/PlaylistSection';
import { InterviewSection } from './components/InterviewSection';

export default function App() {
  const {
    title,
    subtitle,
    phases,
    topics,
    docs,
    protocols,
    interviewData,
    activeTab,
    activeSubTab,
    setActiveSubTab,
    searchQuery,
    setSearchQuery,
    switchTab
  } = useDashboard();

  return (
    <div className="container">
      {/* Title Header Blocks */}
      <h1>{title}</h1>
      <div className="subtitle">{subtitle}</div>

      {/* Tab Controls */}
      <TabNavigation activeTab={activeTab} onTabChange={switchTab} />

      {/* Search Input Bar component (এখন প্লেলিস্ট এবং ইন্টারভিউ দুই ট্যাবেই দেখাবে) */}
      {(activeTab === 'playlists' || activeTab === 'interview') && (
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      )}

      {/* Conditional Tab Rendering */}
      <div className="tab-content active">
        {activeTab === 'playlists' && (
          <PlaylistSection phases={phases} />
        )}

        {activeTab === 'topics' && (
          <>
            <p>Target precise native engine structures and coding patterns directly depending on your current development milestones:</p>
            <div className="topic-grid">
              {topics.map((topic) => (
                <div key={topic.id} className="topic-box">
                  <div>
                    <span className="badge badge-topic">{topic.tag}</span>
                    <strong>{topic.title}</strong>
                    <p>{topic.description}</p>
                  </div>
                  <div className="topic-links">
                    {topic.links.map((link, idx) => (
                      <a 
                        key={idx} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-link"
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'docs' && (
          <>
            <p>A hand-selected registry of verified core guidelines directories, motion design specs, and open-source packages filters:</p>
            <div className="docs-grid">
              {docs.map((doc) => (
                <div 
                  key={doc.id} 
                  className={`doc-box ${doc.isPrime ? 'doc-box-prime' : ''}`}
                >
                  <strong>{doc.title}</strong>
                  <p>{doc.desc}</p>
                  <a 
                    href={doc.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-link"
                  >
                    {doc.btnText}
                  </a>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'interview' && (
          <InterviewSection 
            interviewData={interviewData} 
            activeSubTab={activeSubTab} 
            onSubTabChange={setActiveSubTab} 
          />
        )}
      </div>

      {/* Core Infrastructure Protocol Frameworks */}
      <h3 className="phase-title" style={{ marginTop: '48px' }}>Core Infrastructure Protocols</h3>
      <ul className="protocol-list">
        {protocols.map((protocol, index) => (
          <li key={index}>
            {protocol.includes('flutter doctor') ? (
              <>Execute <code>flutter doctor</code> inside your command shell profile before building views to confirm structural alignments.</>
            ) : protocol.includes('dartpad.dev') ? (
              <>Deploy isolated testing scripts into DartPad (<code>dartpad.dev</code>) to instantly verify simple functional concepts without overheads.</>
            ) : (
              protocol
            )}
          </li>
        ))}
      </ul>

      {/* Paywall Isolation Footer Notification */}
      <div className="footer-note">
        This roadmap is completely free and maps directly back to reliable open distribution channels. No hidden paywall access frameworks required.
      </div>
    </div>
  );
}