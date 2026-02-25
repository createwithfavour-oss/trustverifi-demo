import { useState, useEffect } from 'react';

function TrustScoreCounter({ target }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let current = 0;
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        current += 1;
        setCount(current);
        if (current >= target) clearInterval(interval);
      }, 15);
    }, 800);
    return () => { clearTimeout(timeout); clearInterval(interval); };
  }, [target]);
  return count;
}

function ProfileCard() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 400);
    return () => clearTimeout(t);
  }, []);

  const cardStyle = {
    width: '100%', maxWidth: 400, borderRadius: 20, padding: 28,
    border: '1px solid rgba(255,255,255,0.1)',
    background: 'rgba(255,255,255,0.05)',
    backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateX(0)' : 'translateX(30px)',
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
  };

  return (
    <div style={cardStyle}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
        <div style={{
          width: 56, height: 56, borderRadius: 14, flexShrink: 0,
          background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontSize: 18, fontWeight: 700, fontFamily: 'var(--font-body)',
        }}>FY</div>
        <div>
          <div style={{ color: '#fff', fontSize: 16, fontWeight: 600, fontFamily: 'var(--font-body)' }}>Favour Yusuf</div>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, fontFamily: 'var(--font-body)', marginTop: 2 }}>Growth & Positioning Consultant</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ color: '#38bdf8' }}>
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: 11, color: '#38bdf8', fontWeight: 500, fontFamily: 'var(--font-mono)' }}>Identity Verified</span>
          </div>
        </div>
      </div>

      {/* Trust Score */}
      <div style={{ display: 'flex', gap: 20, marginBottom: 24 }}>
        <div style={{
          width: 80, height: 80, borderRadius: '50%', flexShrink: 0, padding: 4,
          background: `conic-gradient(#38bdf8 0deg, #818cf8 ${87*3.13}deg, rgba(255,255,255,0.08) ${87*3.13}deg)`,
        }}>
          <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#0f1a2e', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#fff', fontSize: 24, fontWeight: 700, fontFamily: 'var(--font-mono)', lineHeight: 1 }}>
              <TrustScoreCounter target={87} />
            </span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 9, fontWeight: 600, letterSpacing: 2, fontFamily: 'var(--font-mono)', marginTop: 4 }}>TRUST</span>
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center' }}>
          {[ { l: 'Client Reviews', v: '5/5', p: 100 }, { l: 'Identity', v: 'Verified', p: 100 }, { l: 'Work History', v: '3 confirmed', p: 75 } ].map(b => (
            <div key={b.l}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-mono)' }}>{b.l}</span>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-mono)' }}>{b.v}</span>
              </div>
              <div style={{ height: 4, borderRadius: 4, background: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
                <div style={{ height: '100%', borderRadius: 4, width: `${b.p}%`, background: 'linear-gradient(90deg, #38bdf8, #818cf8)' }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mini Review */}
      <div style={{ borderRadius: 14, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', padding: 16, marginBottom: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <div style={{
            width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
            background: 'linear-gradient(135deg, #fbbf24, #ef4444)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontSize: 11, fontWeight: 700, fontFamily: 'var(--font-body)',
          }}>JK</div>
          <div>
            <div style={{ color: '#fff', fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-body)' }}>Jason K.</div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, fontFamily: 'var(--font-body)' }}>CEO, VertexHQ</div>
          </div>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, lineHeight: 1.6, fontFamily: 'var(--font-body)', margin: '0 0 12px' }}>
          "Favour ran our paid campaigns for 4 months. Lead volume increased 60%. ROI averaged 3.8x. We renewed twice."
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', padding: '4px 12px', borderRadius: 20, background: 'rgba(56,189,248,0.1)', color: '#38bdf8', border: '1px solid rgba(56,189,248,0.2)', fontSize: 11, fontFamily: 'var(--font-mono)', fontWeight: 500 }}>+60% leads</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', padding: '4px 12px', borderRadius: 20, background: 'rgba(34,197,94,0.1)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.2)', fontSize: 11, fontFamily: 'var(--font-mono)', fontWeight: 500 }}>3.8x ROI</span>
        </div>
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: 12 }}>
        <button style={{ flex: 1, padding: '10px 0', borderRadius: 10, border: 'none', background: '#38bdf8', color: '#0B1120', fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-body)', cursor: 'pointer' }}>Hire</button>
        <button style={{ flex: 1, padding: '10px 0', borderRadius: 10, border: '1px solid rgba(255,255,255,0.15)', background: 'transparent', color: 'rgba(255,255,255,0.7)', fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-body)', cursor: 'pointer' }}>Shortlist</button>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="noise-overlay grid-overlay" style={{
      background: 'linear-gradient(135deg, #0B1120 0%, #162038 40%, #1a2a4a 70%, #0B1120 100%)',
      minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', opacity: 0.07, background: 'radial-gradient(circle, #38bdf8, transparent 70%)', top: '-10%', right: '-5%', animation: 'drift1 20s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', opacity: 0.05, background: 'radial-gradient(circle, #818cf8, transparent 70%)', bottom: '-15%', left: '-10%', animation: 'drift2 25s ease-in-out infinite' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1200, margin: '0 auto', padding: '120px 24px 80px', width: '100%' }}>
        <div className="flex flex-col lg:flex-row" style={{ alignItems: 'center', gap: 64 }}>
          <div style={{ flex: 1, maxWidth: 580 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 20, background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.2)', color: '#38bdf8', fontSize: 12, fontFamily: 'var(--font-mono)', fontWeight: 500, marginBottom: 32 }}>
              <span className="pulse-dot" />
              <span>Free to start · No credit card</span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px, 4.5vw, 56px)', fontWeight: 400, lineHeight: 1.12, letterSpacing: -0.5, color: '#fff', marginBottom: 24 }}>
              Verified proof that shows{' '}
              <span className="gradient-text">what you actually delivered.</span>
            </h1>

            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)', marginBottom: 32, maxWidth: 500 }}>
              Your clients answer specific questions about what you built, the results you drove, and why they'd hire you again. You get a trust profile with real numbers that you can share anywhere.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 24 }}>
              <a href="#get-started" className="btn-primary">Get your first verified review →</a>
              <a href="#how-it-works" className="btn-secondary">See how it works</a>
            </div>

            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-body)', display: 'flex', flexWrap: 'wrap', gap: '4px 16px' }}>
              <span>✓ Free tier available</span>
              <span>✓ 2-minute setup</span>
              <span>✓ No platform lock-in</span>
            </p>
          </div>

          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', width: '100%' }}>
            <ProfileCard />
          </div>
        </div>
      </div>
    </section>
  );
}
