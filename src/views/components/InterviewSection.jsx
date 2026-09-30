import React, { useState } from 'react';

export const InterviewSection = ({ interviewData, activeSubTab, onSubTabChange }) => {
  const [closedIds, setClosedIds] = useState([]);

  const toggleQuestion = (id) => {
    setClosedIds(prev => 
      prev.includes(id) ? prev.filter(closedId => closedId !== id) : [...prev, id]
    );
  };

  if (!interviewData) return null;

  return (
    <div className="animate-fade-in delay-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center' }}>
        <h2 className="section-title">Interview Preparation</h2>
        <p className="section-subtitle">Frequently asked questions across different experience levels.</p>
      </div>
      
      <div className="interview-filters" style={{ justifyContent: 'center' }}>
        <button 
          className={`filter-chip ${activeSubTab === 'all' ? 'active' : ''}`}
          onClick={() => onSubTabChange('all')}
        >
          All Levels
        </button>
        {interviewData.categories.map((cat, idx) => (
          <button 
            key={idx}
            className={`filter-chip ${activeSubTab === cat.id ? 'active' : ''}`}
            onClick={() => onSubTabChange(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: '800px' }}>
        {interviewData.questions.length === 0 && (
          <div>No questions found for this search/category.</div>
        )}
        
        {interviewData.questions.map((q) => {
          const isOpen = !closedIds.includes(q.id);
          return (
            <div key={q.id} className={`qa-card ${isOpen ? 'open' : ''}`}>
              <div className="qa-header" onClick={() => toggleQuestion(q.id)}>
                <div className="qa-question">
                  <span style={{ color: 'var(--accent-color)', marginRight: '8px' }}>Q.</span>
                  {q.question}
                </div>
                <div className="qa-icon">▼</div>
              </div>
              <div className="qa-body">
                <div className="badge badge-topic" style={{ marginBottom: '16px' }}>{q.topic}</div>
                
                <div className="qa-answer" style={{ marginBottom: '16px' }}>
                  <strong style={{ color: 'var(--text-main)' }}>English: </strong>
                  <span dangerouslySetInnerHTML={{ __html: q.answer.replace(/\n/g, '<br/>') }} />
                </div>
                
                {q.answerBn && (
                  <div className="qa-answer" style={{ marginBottom: '16px', color: '#4B5563' }}>
                    <strong style={{ color: 'var(--text-main)' }}>বাংলা: </strong>
                    <span dangerouslySetInnerHTML={{ __html: q.answerBn.replace(/\n/g, '<br/>') }} />
                  </div>
                )}
                
                {q.example && (
                  <div className="qa-answer" style={{ 
                    marginTop: '16px', 
                    padding: '12px 16px', 
                    background: 'var(--bg-primary)', 
                    borderLeft: '4px solid var(--accent-color)',
                    borderRadius: '0 8px 8px 0',
                    fontStyle: 'italic'
                  }}>
                    <strong style={{ color: 'var(--accent-color)', fontStyle: 'normal' }}>Example: </strong>
                    <span dangerouslySetInnerHTML={{ __html: q.example.replace(/\n/g, '<br/>') }} />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};