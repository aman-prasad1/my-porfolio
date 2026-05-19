export default function ScrollIndicator() {
  return (
    <div style={{
      position: 'absolute',
      bottom: '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem',
      animation: 'float-gentle 3s ease-in-out infinite',
    }}>
      {/* Compass needle pointing down */}
      <svg
        width="24"
        height="40"
        viewBox="0 0 24 40"
        style={{ opacity: 0.5 }}
      >
        <line x1="12" y1="2" x2="12" y2="30" stroke="var(--ink-gold)" strokeWidth="2" strokeLinecap="round" />
        <polygon points="6,28 12,38 18,28" fill="var(--ink-gold)" />
      </svg>
      <span style={{
        fontFamily: 'var(--font-body)',
        fontStyle: 'italic',
        fontSize: '0.75rem',
        color: 'var(--ink-light)',
        opacity: 0.6,
        letterSpacing: '1px',
      }}>
        scroll to explore
      </span>
    </div>
  );
}
