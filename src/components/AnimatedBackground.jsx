'use client';

export default function AnimatedBackground() {
  return (
    <>
      {/* Base parchment texture — pure CSS */}
      <div className="parchment-bg" aria-hidden="true" />

      {/* Decorative floating elements */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}>
        {/* Compass rose watermark — top right */}
        <svg
          viewBox="0 0 200 200"
          style={{
            position: 'absolute',
            top: '5%',
            right: '3%',
            width: '180px',
            height: '180px',
            opacity: 0.04,
            animation: 'compass-spin 60s linear infinite',
          }}
        >
          <g fill="currentColor" color="#2c1810">
            {/* N-S-E-W points */}
            <polygon points="100,10 108,85 100,70 92,85" />
            <polygon points="100,190 108,115 100,130 92,115" />
            <polygon points="10,100 85,92 70,100 85,108" />
            <polygon points="190,100 115,92 130,100 115,108" />
            {/* Diagonal points */}
            <polygon points="35,35 88,88 78,82 82,78" opacity="0.6" />
            <polygon points="165,35 112,88 122,82 118,78" opacity="0.6" />
            <polygon points="35,165 88,112 78,118 82,122" opacity="0.6" />
            <polygon points="165,165 112,112 122,118 118,122" opacity="0.6" />
            {/* Center circle */}
            <circle cx="100" cy="100" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="3" />
          </g>
        </svg>

        {/* Anchor watermark — bottom left */}
        <svg
          viewBox="0 0 100 120"
          style={{
            position: 'absolute',
            bottom: '8%',
            left: '4%',
            width: '100px',
            height: '120px',
            opacity: 0.03,
          }}
        >
          <g fill="none" stroke="#2c1810" strokeWidth="2.5" strokeLinecap="round">
            {/* Ring */}
            <circle cx="50" cy="15" r="10" />
            {/* Shaft */}
            <line x1="50" y1="25" x2="50" y2="95" />
            {/* Crossbar */}
            <line x1="30" y1="55" x2="70" y2="55" />
            {/* Flukes */}
            <path d="M 50 95 Q 50 105, 30 110" />
            <path d="M 50 95 Q 50 105, 70 110" />
            {/* Fluke tips */}
            <line x1="30" y1="110" x2="25" y2="105" />
            <line x1="70" y1="110" x2="75" y2="105" />
          </g>
        </svg>

        {/* Scattered X marks — treasure spots */}
        {[
          { top: '20%', left: '8%', size: 20, rot: 12 },
          { top: '45%', left: '92%', size: 16, rot: -8 },
          { top: '70%', left: '15%', size: 14, rot: 20 },
          { top: '85%', left: '80%', size: 18, rot: -15 },
        ].map((mark, i) => (
          <svg
            key={i}
            viewBox="0 0 30 30"
            style={{
              position: 'absolute',
              top: mark.top,
              left: mark.left,
              width: `${mark.size}px`,
              height: `${mark.size}px`,
              opacity: 0.06,
              transform: `rotate(${mark.rot}deg)`,
            }}
          >
            <line x1="5" y1="5" x2="25" y2="25" stroke="#8b1a1a" strokeWidth="3" strokeLinecap="round" />
            <line x1="25" y1="5" x2="5" y2="25" stroke="#8b1a1a" strokeWidth="3" strokeLinecap="round" />
          </svg>
        ))}

        {/* Dotted trail paths */}
        <svg
          style={{
            position: 'absolute',
            top: '30%',
            left: '5%',
            width: '90%',
            height: '40%',
            opacity: 0.03,
          }}
          viewBox="0 0 1000 400"
          fill="none"
        >
          <path
            d="M 50 200 Q 200 50, 400 180 Q 600 310, 800 150 Q 900 80, 950 200"
            stroke="#5c3a1e"
            strokeWidth="2"
            strokeDasharray="8 12"
          />
        </svg>
      </div>
    </>
  );
}
