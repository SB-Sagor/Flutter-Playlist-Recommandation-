// src/components/InterviewSection.jsx
import React from 'react';

export const InterviewSection = ({ interviewData, activeSubTab, onSubTabChange }) => {
  return (
    <div className="interview-section">
      <h3 className="phase-title">{interviewData.sectionTitle}</h3>
      <p style={{ color: '#64748B', marginBottom: '20px' }}>
        {interviewData.description}
      </p>

      {/* --- SUB-NAVIGATION BAR (Category Wise) --- */}
      <div 
        className="sub-tabs-nav" 
        style={{ 
          display: 'flex', 
          gap: '8px', 
          overflowX: 'auto', 
          paddingBottom: '8px', 
          marginBottom: '24px',
          borderBottom: '1px solid #E2E8F0'
        }}
      >
        {interviewData.categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSubTabChange(cat.id)}
            style={{
              padding: '6px 14px',
              fontSize: '13px',
              fontWeight: '600',
              borderRadius: '20px',
              border: '1px solid',
              borderColor: activeSubTab === cat.id ? '#2563EB' : '#E2E8F0',
              backgroundColor: activeSubTab === cat.id ? '#EFF6FF' : '#FFFFFF',
              color: activeSubTab === cat.id ? '#2563EB' : '#64748B',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease'
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* --- QUESTIONS CONTAINER --- */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {interviewData.questions.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '20px', color: '#64748B' }}>
            No questions available in this category yet.
          </div>
        ) : (
          interviewData.questions.map((item) => (
            <div 
              key={item.id} 
              className="resource-card" 
              style={{ borderLeft: '4px solid #2563EB', margin: 0 }}
            >
              <span className="badge badge-topic" style={{ marginBottom: '8px' }}>
                {item.topic}
              </span>
              <div className="card-title" style={{ fontSize: '15px', marginTop: '4px' }}>
                {item.question}
              </div>
              
              <div 
                className="card-desc" 
                style={{ 
                  marginTop: '10px', 
                  backgroundColor: '#F8FAFC', 
                  padding: '12px', 
                  borderRadius: '6px',
                  color: '#334155',
                  border: '1px solid #E2E8F0',
                  lineHeight: '1.5'
                }}
              >
                {/* ইংরেজি উত্তর */}
                <div>
                  <strong>Ans: </strong>{item.answer}
                </div>

                {/* 🛠️ বাংলা উত্তর (যদি ডেটাতে answerBn থাকে তবেই দেখাবে) */}
                {item.answerBn && (
                  <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px dashed #E2E8F0', color: '#1E293B' }}>
                    <strong style={{ color: '#2563EB' }}>বাংলা ব্যাখ্যা: </strong>{item.answerBn}
                  </div>
                )}

                {/* 🛠️ উদাহরণ/কোড (যদি ডেটাতে example থাকে তবেই দেখাবে) */}
                {item.example && (
                  <div style={{ marginTop: '10px', backgroundColor: '#F1F5F9', padding: '8px 12px', borderRadius: '4px', fontSize: '14px', color: '#475569' }}>
                    <strong>💡 উদাহরণ: </strong>
                    <pre style={{ margin: '4px 0 0 0', fontFamily: 'monospace', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                      {item.example}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default InterviewSection;