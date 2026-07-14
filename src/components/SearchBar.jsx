// src/components/SearchBar.jsx
import React from 'react';

export const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-container" style={{ marginBottom: '24px' }}>
      <input
        type="text"
        placeholder="Search playlists, creators, or topics..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '100%',
          padding: '12px 16px',
          fontSize: '14px',
          border: '1px solid #E2E8F0',
          borderRadius: '8px',
          backgroundColor: '#FFFFFF',
          color: '#1E293B',
          boxSizing: 'border-box',
          outline: 'none',
          transition: 'border-color 0.2s ease'
        }}
        onFocus={(e) => e.target.style.borderColor = '#2563EB'}
        onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
      />
    </div>
  );
};

export default SearchBar;