import { useStaggerChildren } from '../hooks/useScrollAnimation';

const steps = [
  { number: 1, title: 'Set up your review request', description: "Pick a recent client. Add the project details. Choose the specific questions you want them to answer. We've got templates if you're not sure where to start.", time: '~3 min' },
  { number: 2, title: 'Your client fills it in', description: "They get a clean, guided form. No signup required on their end. They answer your questions, add their perspective, and submit.", time: '~5 min for them' },
  { number: 3, title: 'Share your proof everywhere', description: "You get a verified review with real specifics. Drop it in proposals, post it on LinkedIn, embed it on your site. Your trust profile starts building from day one.", time: 'Instant' },
];

export default function HowItWorks() {
  const ref = useStaggerChildren();

  return (
    <section id="how-it-works" style={{ backgroundColor: 'var(--color-surface)', padding: '80px 0' }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: 56 }}>
          <p className="section-label">HOW IT WORKS</p>
          <h2 className="section-heading" style={{ marginBottom: 12 }}>From signup to shareable proof in minutes</h2>
          <p style={{ fontSize: 16, color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', maxWidth: 500, margin: '0 auto' }}>
            You don't need to set up your entire profile first. Just send one review request.
          </p>
        </div>

        <div className="flex flex-col md:flex-row" style={{ alignItems: 'flex-start', gap: 0 }}>
          {steps.map((step, i) => (
            <div key={step.number} className="fade-in" style={{ flex: 1, display: 'flex', alignItems: 'flex-start' }}>
              <div style={{ flex: 1, textAlign: 'center', padding: '0 16px' }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%', margin: '0 auto 20px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
                  color: '#fff', fontSize: 18, fontWeight: 700, fontFamily: 'var(--font-body)',
                }}>{step.number}</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12, color: 'var(--color-text-primary)', fontFamily: 'var(--font-body)' }}>{step.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', marginBottom: 16, maxWidth: 320, margin: '0 auto 16px' }}>{step.description}</p>
                <span style={{ display: 'inline-flex', padding: '4px 14px', borderRadius: 20, background: 'rgba(56,189,248,0.08)', color: '#38bdf8', border: '1px solid rgba(56,189,248,0.15)', fontSize: 11, fontFamily: 'var(--font-mono)', fontWeight: 500 }}>{step.time}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:flex" style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', flexShrink: 0, margin: '0 -12px' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{ color: '#ddd' }}>
                    <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
