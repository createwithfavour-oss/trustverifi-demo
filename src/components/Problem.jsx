import { useStaggerChildren } from '../hooks/useScrollAnimation';

export default function Problem() {
  const ref = useStaggerChildren();

  return (
    <section style={{ backgroundColor: 'var(--color-surface)', padding: '80px 0' }}>
      <div ref={ref} style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: 48 }}>
          <p className="section-label">THE PROBLEM</p>
          <h2 className="section-heading">You do the work. Your proof doesn't show it.</h2>
        </div>

        <div className="fade-in" style={{ maxWidth: 700, margin: '0 auto 40px' }}>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', marginBottom: 20 }}>
            You grew a client's revenue by 40%. Their review says "pleasure to work with." You launched three campaigns that doubled their leads. The testimonial reads "highly recommended." The actual work is invisible.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', marginBottom: 20 }}>
            And it's not your client's fault. They don't know what to say. They procrastinate, write something vague, or ask you to draft it yourself. Which defeats the whole point.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>
            Meanwhile, the platforms that are supposed to help have their own problems. Your Upwork reviews don't transfer. Clutch charges $1,500/month. Google won't list you if you're fully remote. Your reputation is scattered across platforms that don't serve you, locked behind paywalls you didn't agree to.
          </p>
        </div>

        <div className="fade-in" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16, marginBottom: 40 }}>
          {['Great to work with!', 'Highly recommended!', 'Would hire again!'].map((t, i) => (
            <div key={i} style={{
              padding: '16px 24px', borderRadius: 16,
              background: '#fff', border: '1px solid #e0e0e0',
              color: 'var(--color-text-tertiary)', fontSize: 14,
              fontFamily: 'var(--font-body)', fontStyle: 'italic',
              opacity: 0.55, boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}>"{t}"</div>
          ))}
        </div>

        <div className="fade-in" style={{ maxWidth: 600, margin: '0 auto' }}>
          <blockquote style={{ paddingLeft: 20, borderLeft: '3px solid var(--color-accent)', margin: 0 }}>
            <p style={{ fontSize: 15, lineHeight: 1.7, fontFamily: 'var(--font-heading)', fontStyle: 'italic', color: 'var(--color-text-secondary)', marginBottom: 8 }}>
              "Time after time, I'd deliver a project, get a 'thank you' and... that was it. No testimonial. No public feedback."
            </p>
            <cite style={{ fontSize: 12, fontStyle: 'normal', color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)' }}>— Indie Hackers community</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
