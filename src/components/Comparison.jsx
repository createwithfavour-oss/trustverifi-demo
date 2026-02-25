import { useStaggerChildren } from '../hooks/useScrollAnimation';

function TypicalCard() {
  return (
    <div className="fade-in" style={{
      flex: 1, minWidth: 300, borderRadius: 16, padding: 28,
      background: '#fff', border: '1px solid #e0e0e0',
      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', padding: '5px 14px', borderRadius: 20, background: '#f3f3f3', color: '#999', fontSize: 10, fontWeight: 600, fontFamily: 'var(--font-mono)', letterSpacing: 0.5, marginBottom: 20, textTransform: 'uppercase' }}>
        TYPICAL PLATFORM REVIEW
      </div>
      <div style={{ display: 'flex', gap: 2, marginBottom: 16, fontSize: 22, color: '#fbbf24' }}>
        {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
      </div>
      <p style={{ fontSize: 15, lineHeight: 1.6, fontFamily: 'var(--font-heading)', fontStyle: 'italic', color: 'var(--color-text-secondary)', marginBottom: 24 }}>
        "Thank you for your hard work. Your work helped our product start off well. Highly recommended!"
      </p>
      <div style={{ height: 1, background: '#eee', marginBottom: 20 }} />
      <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-body)', marginBottom: 12 }}>What a prospect learns:</p>
      {['What was delivered', 'Specific results', 'Timeline', 'Whether to hire them'].map(item => (
        <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, fontSize: 14, color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>
          <span style={{ color: '#ef4444', fontWeight: 700, fontSize: 14 }}>✕</span>{item}
        </div>
      ))}
    </div>
  );
}

function VerifiedCard() {
  return (
    <div className="fade-in" style={{
      flex: 1, minWidth: 300, borderRadius: 16, padding: 28,
      background: 'linear-gradient(135deg, rgba(56,189,248,0.04), rgba(129,140,248,0.04))',
      border: '2px solid #38bdf8', boxShadow: '0 8px 40px rgba(56,189,248,0.1)',
    }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 14px', borderRadius: 20, background: 'rgba(56,189,248,0.1)', color: '#38bdf8', fontSize: 10, fontWeight: 600, fontFamily: 'var(--font-mono)', letterSpacing: 0.5, marginBottom: 20, textTransform: 'uppercase', border: '1px solid rgba(56,189,248,0.25)' }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ color: '#38bdf8' }}>
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        TRUSTVERIFI VERIFIED REVIEW
      </div>
      <div style={{ marginBottom: 20 }}>
        <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)', fontFamily: 'var(--font-body)', marginBottom: 4 }}>Project: Paid Acquisition Campaigns</p>
        <p style={{ fontSize: 12, color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)' }}>Duration: 4 months · Verified client identity</p>
      </div>
      {[
        { q: 'What did they deliver?', a: 'Full management of Facebook and Google ad campaigns. Creative, targeting, budget optimization, and weekly reporting.' },
        { q: 'What results did you see?', a: 'Lead volume increased by 60%. Average ROI was 3.8x across both channels. Cost per lead dropped from $47 to $19.' },
        { q: 'Would you hire them again?', a: "Already renewed twice. They're managing our Q2 campaigns now." },
      ].map(b => (
        <div key={b.q} style={{ marginBottom: 16 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: '#38bdf8', fontFamily: 'var(--font-mono)', marginBottom: 4 }}>Q: {b.q}</p>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>{b.a}</p>
        </div>
      ))}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
        {['📈 +60% leads', '💰 3.8x ROI', '📉 $47→$19 CPL'].map(m => (
          <span key={m} style={{ display: 'inline-flex', padding: '4px 12px', borderRadius: 20, background: 'rgba(56,189,248,0.08)', color: '#38bdf8', border: '1px solid rgba(56,189,248,0.15)', fontSize: 11, fontFamily: 'var(--font-mono)', fontWeight: 500 }}>{m}</span>
        ))}
      </div>
      <div style={{ height: 1, background: '#e0e0e0', marginBottom: 20 }} />
      <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-body)', marginBottom: 12 }}>What a prospect learns:</p>
      {['Exactly what was delivered', 'Specific, verified results', 'Timeline and scope', 'Enough to make a hiring decision'].map(item => (
        <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, fontSize: 14, color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>
          <span style={{ color: '#22c55e', fontWeight: 700, fontSize: 14 }}>✓</span>{item}
        </div>
      ))}
    </div>
  );
}

export default function Comparison() {
  const ref = useStaggerChildren();
  return (
    <section id="comparison" style={{ backgroundColor: '#fff', padding: '80px 0' }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: 56 }}>
          <p className="section-label">THE DIFFERENCE</p>
          <h2 className="section-heading" style={{ marginBottom: 12 }}>Same project. Same happy client. Different proof.</h2>
          <p style={{ fontSize: 16, color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', maxWidth: 500, margin: '0 auto' }}>One of these reviews gets someone hired. The other one doesn't.</p>
        </div>
        <div className="flex flex-col md:flex-row" style={{ gap: 24, marginBottom: 48 }}>
          <TypicalCard />
          <VerifiedCard />
        </div>
        <div className="fade-in" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 16, color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', marginBottom: 24 }}>This is the difference between a testimonial and verified proof.</p>
          <a href="#get-started" className="btn-primary">Get started free →</a>
        </div>
      </div>
    </section>
  );
}
