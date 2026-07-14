// src/components/TabNavigation.jsx
import React from 'react';

// এখানে নিশ্চিত করা হয়েছে যে প্রপস হিসেবে onTabChange-ই রিসিভ হচ্ছে
export const TabNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'playlists', label: '1. Full Playlists' },
    { id: 'topics', label: '2. Topic-Wise Index' },
    { id: 'docs', label: '3. Docs & Animation Gems' },
    { id: 'interview', label: '4. Interview Prep' }
  ];

  return (
    <div className="tabs-nav">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => {
            // সেফটি চেক: প্রপস হিসেবে ফাংশনটি আসলেই এসেছে কি না নিশ্চিত করা
            if (typeof onTabChange === 'function') {
              onTabChange(tab.id);
            } else {
              console.error("onTabChange is not passed correctly to TabNavigation component!");
            }
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;