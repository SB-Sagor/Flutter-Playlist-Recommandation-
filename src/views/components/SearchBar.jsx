import React from 'react';

export const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-container animate-fade-in delay-1">
      <span className="search-icon">🔍</span>
      <input 
        type="text" 
        className="search-input" 
        placeholder="Search topics, questions, or creators..." 
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};