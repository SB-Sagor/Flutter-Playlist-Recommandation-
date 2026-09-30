import React from 'react';
import { useDashboard } from './viewmodels/useDashboard';
import { Sidebar } from './views/components/Sidebar';
import { SearchBar } from './views/components/SearchBar';
import { PlaylistSection } from './views/components/PlaylistSection';
import { InterviewSection } from './views/components/InterviewSection';
import { TopicSection } from './views/components/TopicSection';
import { DocsSection } from './views/components/DocsSection';
import { RoadmapSection } from './views/components/RoadmapSection';
import { DartPadSection } from './views/components/DartPadSection';

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
    <div className="app-container">
      <Sidebar activeTab={activeTab} onTabChange={switchTab} title={title} subtitle={subtitle} />
      
      <main className="main-content">
        <div className="animate-fade-in">
          {/* Search Header for Playlists & Interview */}
          {(activeTab === 'playlists' || activeTab === 'interview') && (
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          )}

          {/* Tab Content Routing */}
          <div className="tab-content">
            {activeTab === 'roadmap' && (
              <RoadmapSection />
            )}

            {activeTab === 'playlists' && (
              <PlaylistSection phases={phases} />
            )}

            {activeTab === 'compiler' && (
              <DartPadSection />
            )}

            {activeTab === 'topics' && (
              <TopicSection topics={topics} />
            )}

            {activeTab === 'docs' && (
              <DocsSection docs={docs} protocols={protocols} />
            )}

            {activeTab === 'interview' && (
              <InterviewSection 
                interviewData={interviewData} 
                activeSubTab={activeSubTab} 
                onSubTabChange={setActiveSubTab} 
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}