import React from 'react';

export const DartPadSection = () => {
  return (
    <div className="animate-fade-in delay-2" style={{ paddingBottom: '40px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 className="section-title" style={{ fontSize: '32px', color: 'var(--text-color)', marginBottom: '8px' }}>
          Dart & Flutter Compiler
        </h2>
        <p className="section-subtitle" style={{ color: 'var(--text-muted)' }}>
          Practice Dart code and visualize Flutter UI designs live directly in your browser.
        </p>
      </div>
      
      <div style={{ 
        width: '100%', 
        height: '75vh', 
        minHeight: '650px', 
        borderRadius: '16px', 
        overflow: 'hidden', 
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        border: '1px solid rgba(0,0,0,0.05)',
        backgroundColor: '#1C1C1C'
      }}>
        <iframe 
          src="https://dartpad.dev/embed-flutter.html?theme=dark&run=true&split=60" 
          width="100%" 
          height="100%" 
          style={{ border: 'none' }}
          title="DartPad Interactive Compiler"
        />
      </div>
      
      <div style={{ marginTop: '20px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '14px' }}>
        Powered by <a href="https://dartpad.dev" target="_blank" rel="noreferrer" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>DartPad</a>. You can write both pure Dart and Flutter UI code here.
      </div>
    </div>
  );
};
