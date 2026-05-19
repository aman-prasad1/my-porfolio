'use client';

export default function AnimatedBackground() {
  return (
    <>
      <div className="parchment-bg" aria-hidden="true" />

      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden',
      }}>
        {/* Large compass watermark */}
        <svg viewBox="0 0 200 200" style={{
          position: 'absolute', top: '8%', right: '5%', width: '200px', height: '200px', opacity: 0.035,
        }}>
          <g fill="none" stroke="#2c1810" strokeWidth="1">
            <circle cx="100" cy="100" r="90" />
            <circle cx="100" cy="100" r="80" />
            <circle cx="100" cy="100" r="4" fill="#2c1810" />
            {[0,45,90,135,180,225,270,315].map((angle) => (
              <line key={angle} x1="100" y1="20" x2="100" y2="30"
                transform={`rotate(${angle} 100 100)`} strokeWidth="1.5" />
            ))}
            <polygon points="100,12 104,85 100,75 96,85" fill="#2c1810" opacity="0.8" />
            <polygon points="100,188 104,115 100,125 96,115" fill="#2c1810" opacity="0.4" />
            <polygon points="12,100 85,96 75,100 85,104" fill="#2c1810" opacity="0.4" />
            <polygon points="188,100 115,96 125,100 115,104" fill="#2c1810" opacity="0.4" />
          </g>
          {['N','E','S','W'].map((d, i) => (
            <text key={d} x="100" y="100" fill="#2c1810" fontSize="8"
              fontFamily="MedievalSharp" textAnchor="middle"
              transform={`rotate(${i*90} 100 100) translate(0, -68)`}>
              {d}
            </text>
          ))}
        </svg>

        {/* Self-drawing treasure map dotted path */}
        <svg style={{
          position: 'absolute', top: '15%', left: 0, width: '100%', height: '70%', opacity: 0.04,
        }} viewBox="0 0 1200 800" fill="none">
          <path className="map-path"
            d="M 80 100 Q 200 50, 350 150 Q 500 250, 600 120 Q 700 10, 850 180 Q 950 300, 1100 200"
            stroke="#5c3a1e" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 10" />
          <path className="map-path" style={{ animationDelay: '1s' }}
            d="M 150 500 Q 300 400, 500 520 Q 650 600, 800 450 Q 900 350, 1050 500"
            stroke="#5c3a1e" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 8" />
        </svg>

        {/* Scattered X marks */}
        {[
          { top: '18%', left: '10%', size: 22, rot: 15 },
          { top: '50%', left: '88%', size: 18, rot: -10 },
          { top: '75%', left: '12%', size: 16, rot: 22 },
          { top: '88%', left: '78%', size: 20, rot: -18 },
          { top: '35%', left: '70%', size: 14, rot: 8 },
        ].map((m, i) => (
          <svg key={i} viewBox="0 0 30 30" style={{
            position: 'absolute', top: m.top, left: m.left,
            width: `${m.size}px`, height: `${m.size}px`, opacity: 0.06,
            transform: `rotate(${m.rot}deg)`,
          }}>
            <line x1="5" y1="5" x2="25" y2="25" stroke="#8b1a1a" strokeWidth="3" strokeLinecap="round" />
            <line x1="25" y1="5" x2="5" y2="25" stroke="#8b1a1a" strokeWidth="3" strokeLinecap="round" />
          </svg>
        ))}

        {/* Anchor bottom left */}
        <svg viewBox="0 0 100 120" style={{
          position: 'absolute', bottom: '6%', left: '3%', width: '80px', opacity: 0.03,
        }}>
          <g fill="none" stroke="#2c1810" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="50" cy="15" r="10" />
            <line x1="50" y1="25" x2="50" y2="95" />
            <line x1="30" y1="55" x2="70" y2="55" />
            <path d="M 50 95 Q 50 105, 30 110" />
            <path d="M 50 95 Q 50 105, 70 110" />
          </g>
        </svg>

        {/* Ship wheel bottom right */}
        <svg viewBox="0 0 100 100" style={{
          position: 'absolute', bottom: '10%', right: '4%', width: '90px', opacity: 0.025,
          animation: 'compass-pulse 8s ease-in-out infinite',
        }}>
          <g fill="none" stroke="#2c1810" strokeWidth="2">
            <circle cx="50" cy="50" r="30" />
            <circle cx="50" cy="50" r="8" />
            {[0,45,90,135,180,225,270,315].map((a) => (
              <line key={a} x1="50" y1="50" x2="50" y2="15"
                transform={`rotate(${a} 50 50)`} />
            ))}
          </g>
        </svg>
      </div>
    </>
  );
}
