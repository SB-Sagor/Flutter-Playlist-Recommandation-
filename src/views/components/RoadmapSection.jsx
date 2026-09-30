import React from 'react';

const roadmapData = [
  {
    title: 'Basics of Dart',
    children: ['Dart Pad', 'Variables', 'Built-in Types', 'Functions', 'Operators', 'Control Flow']
  },
  {
    title: 'Development Environment',
    children: ['Flutter CLI', 'FVM', 'VS Code', 'Android Studio', 'IntelliJ']
  },
  {
    title: 'Widgets',
    children: ['Responsive', 'Inherited', 'Stateless', 'Stateful', 'Material', 'Cupertino']
  },
  {
    title: 'Working with Assets',
    children: ['Fonts', 'Images', 'Other File Types']
  },
  {
    title: 'Version Control',
    children: ['Git', 'GitHub', 'Repo Hosting']
  },
  {
    title: 'Package Managers',
    children: ['pub.dev', 'dart pub']
  },
  {
    title: 'Design Principles',
    children: ['Dependency Injection', 'SOLID', 'OOP']
  },
  {
    title: 'Working with APIs',
    children: ['JSON', 'Web Sockets', 'GraphQL', 'RESTful APIs']
  },
  {
    title: 'Storage',
    children: ['SQLite', 'Shared Preferences', 'Firebase']
  },
  {
    title: 'Advanced Dart',
    children: ['Streams', 'Futures', 'Collections', 'Isolates', 'Async / Await']
  },
  {
    title: 'State Management',
    children: ['Provider', 'Riverpod', 'BLoC', 'Redux', 'ChangeNotifier']
  },
  {
    title: 'Reactive Programming',
    children: ['RxDart']
  },
  {
    title: 'Animations',
    children: ['Animation Controller', 'Animated Builder', 'Hero', 'Opacity']
  },
  {
    title: 'Flutter Internals',
    children: ['Render Objects', '3 Trees', 'Immutability']
  },
  {
    title: 'Dev Tools',
    children: ['Flutter Inspector', 'Memory Allocation']
  },
  {
    title: 'Testing',
    children: ['Unit Testing', 'Widget Testing', 'Integration Testing']
  },
  {
    title: 'CI / CD',
    children: ['Fast Lane', 'Codemagic', 'GitHub Actions']
  },
  {
    title: 'Analytics',
    children: ['Firebase Analytics', 'Google Analytics']
  },
  {
    title: 'Deployment',
    children: ['AppStore', 'Playstore']
  }
];

export const RoadmapSection = () => {
  const numNodes = roadmapData.length;
  const rowHeight = 250;
  const startOffset = 150;
  const endOffset = 150;
  const totalHeight = startOffset + numNodes * rowHeight + endOffset;

  let d = `M 500, 0 L 500, ${startOffset}`;
  for (let i = 0; i < numNodes; i++) {
    const startY = startOffset + i * rowHeight;
    const endY = startY + rowHeight;
    if (i % 2 === 0) { // Curve Right
      d += ` C 900, ${startY}, 900, ${endY}, 500, ${endY}`;
    } else { // Curve Left
      d += ` C 100, ${startY}, 100, ${endY}, 500, ${endY}`;
    }
  }
  d += ` L 500, ${totalHeight}`;

  return (
    <div className="animate-fade-in delay-2" style={{ backgroundColor: '#FAF5F0', padding: '60px 0', minHeight: '100vh', fontFamily: '"Nunito", "Segoe UI", system-ui, sans-serif' }}>
      
      {/* Header aligned with image style */}
      <div style={{ textAlign: 'center', marginBottom: '60px', padding: '0 20px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '800', letterSpacing: '2px', color: '#2C2C2C', textTransform: 'uppercase', margin: '0 0 16px 0' }}>
          KEY SKILLS REQUIRED FOR A FLUTTER DEVELOPER:
        </h2>
        <h1 style={{ fontSize: '48px', fontWeight: '800', color: '#EE5B6A', margin: 0, letterSpacing: '-1px' }}>
          A Beginner's Roadmap
        </h1>
      </div>

      <div style={{ position: 'relative', width: '100%', maxWidth: '1000px', margin: '0 auto', height: `${totalHeight}px` }}>
        
        {/* SVG Path */}
        <svg 
          width="100%" 
          height="100%" 
          viewBox={`0 0 1000 ${totalHeight}`} 
          preserveAspectRatio="none" 
          style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
        >
          <defs>
            <linearGradient id="snakeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#A3CBA0" />
              <stop offset="25%" stopColor="#D9CF84" />
              <stop offset="50%" stopColor="#EBB26A" />
              <stop offset="75%" stopColor="#ED8A76" />
              <stop offset="100%" stopColor="#ED6A71" />
            </linearGradient>
          </defs>
          
          {/* Thick solid path */}
          <path d={d} fill="none" stroke="url(#snakeGradient)" strokeWidth="80" strokeLinecap="butt" />
          
          {/* Dashed white path inside */}
          <path d={d} fill="none" stroke="#FFFFFF" strokeWidth="6" strokeDasharray="24 24" strokeLinecap="butt" />
        </svg>

        {/* HTML Nodes */}
        {roadmapData.map((item, i) => {
          const isRight = i % 2 === 0;
          const xPos = isRight ? '80%' : '20%';
          const yPos = `${startOffset + i * rowHeight + (rowHeight / 2)}px`;

          return (
            <div key={i} style={{
              position: 'absolute',
              top: yPos,
              left: xPos,
              width: 0,
              height: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10
            }}>
              
              {/* Circle Icon */}
              <div style={{
                position: 'absolute',
                width: '64px', 
                height: '64px',
                borderRadius: '50%',
                background: '#2C2C2C',
                color: 'white',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '22px', 
                fontWeight: '800',
                border: '6px solid #FAF5F0',
                boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
                zIndex: 2,
                transition: 'transform 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                {i + 1}
              </div>

              {/* Text Box */}
              <div style={{
                position: 'absolute',
                [isRight ? 'right' : 'left']: '55px', // distance from center to text
                width: 'clamp(160px, 30vw, 260px)',
                textAlign: isRight ? 'right' : 'left',
                background: 'rgba(250, 245, 240, 0.8)',
                padding: '12px',
                borderRadius: '12px',
                backdropFilter: 'blur(4px)'
              }}>
                <h3 style={{ 
                  color: '#EE5B6A', 
                  fontSize: '20px', 
                  fontWeight: '800', 
                  margin: '0 0 8px 0',
                  lineHeight: '1.2'
                }}>
                  {item.title}
                </h3>
                <p style={{ 
                  color: '#4A4A4A', 
                  fontSize: '14px', 
                  margin: 0, 
                  fontWeight: '700', 
                  lineHeight: '1.5'
                }}>
                  {item.children.join(', ')}
                </p>
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};
