import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function FinalCTA() {
  const ref = useScrollAnimation();

  return (
    <section id="get-started" className="noise-overlay grid-overlay" style={{
      background: 'linear-gradient(135deg, #0B1120 0%, #162038 40%, #1a2a4a 70%, #0B1120 100%)',
      padding: '96px 0', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', width: 600, height: 600, borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(56,189,248,0.08), transparent 70%)',
        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
      }} />

      <div ref={ref} className="fade-in" style={{ position: 'relative', zIndex: 10, maxWidth: 700, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 400, lineHeight: 1.2, color: '#fff', marginBottom: 24 }}>
          Get proof that matches the work you actually did
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)', marginBottom: 32, maxWidth: 520, margin: '0 auto 32px' }}>
          Send your first structured review request in under 3 minutes. Free to start. Your client doesn't need an account.
        </p>
        <a href="#" className="btn-primary" style={{ fontSize: 16, padding: '16px 32px' }}>
          Get your first verified review →
        </a>
        <p style={{ fontSize: 13, marginTop: 24, color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-body)', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4px 16px' }}>
          <span>No credit card needed</span>
          <span>·</span>
          <span>Free tier available</span>
          <span>·</span>
          <span>Setup in minutes</span>
        </p>
      </div>
    </section>
  );
}
