export default function ScrollIndicator() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.4rem',
      animation: 'float-gentle 3s ease-in-out infinite',
      padding: '0.5rem 0',
    }}>
      <svg width="22" height="36" viewBox="0 0 24 40" style={{ opacity: 0.45 }}>
        <line x1="12" y1="2" x2="12" y2="28" stroke="var(--ink-gold)" strokeWidth="2" strokeLinecap="round" />
        <polygon points="6,26 12,36 18,26" fill="var(--ink-gold)" />
      </svg>
      <span style={{
        fontFamily: 'var(--font-body)',
        fontStyle: 'italic',
        fontSize: '0.7rem',
        color: 'var(--ink-light)',
        opacity: 0.55,
        letterSpacing: '1px',
      }}>
        scroll to explore
      </span>
    </div>
  );
}
