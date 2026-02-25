import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function TrustSignals() {
  const ref = useScrollAnimation();

  const badges = [
    { icon: '🛡️', text: 'Verification powered by ComplyCube' },
    { icon: '🔒', text: 'Your data is encrypted & secure' },
    { icon: '🌍', text: 'Built for global reach' },
  ];

  return (
    <section style={{ backgroundColor: 'var(--color-surface)', padding: '64px 0' }}>
      <div ref={ref} className="fade-in" style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 48, flexWrap: 'wrap' }}>
          {badges.map(b => (
            <div key={b.text} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 20 }}>{b.icon}</span>
              <span style={{ fontSize: 13, color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-body)' }}>{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
