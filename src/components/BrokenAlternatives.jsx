import { useStaggerChildren } from '../hooks/useScrollAnimation';

const cards = [
  { icon: '⭐', label: 'Platform ratings', quote: 'I have 100% job success and top rating... still getting ghosted on proposals.' },
  { icon: '🔒', label: 'Marketplace lock-in', quote: 'If you start over, you lose every review you worked hard for.' },
  { icon: '💸', label: 'Pay-to-play directories', quote: "It's 100% pay to play. Your agency won't even show up unless you pay." },
  { icon: '🤷', label: 'Client testimonials', quote: "Time after time, I'd deliver a project, get a 'thank you' and... that was it." },
];

export default function BrokenAlternatives() {
  const ref = useStaggerChildren();

  return (
    <section id="sound-familiar" style={{ backgroundColor: '#fff', padding: '80px 0' }}>
      <div ref={ref} style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: 56 }}>
          <p className="section-label">SOUND FAMILIAR?</p>
          <h2 className="section-heading" style={{ marginBottom: 12 }}>The tools that were supposed to help aren't helping</h2>
          <p style={{ fontSize: 16, color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', maxWidth: 550, margin: '0 auto' }}>
            We've heard these from hundreds of freelancers and agency owners. You've probably said at least one of them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 20, marginBottom: 48 }}>
          {cards.map(card => (
            <div key={card.label} className="fade-in tv-card">
              <span style={{ fontSize: 28, display: 'block', marginBottom: 12 }}>{card.icon}</span>
              <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12, color: 'var(--color-text-primary)', fontFamily: 'var(--font-body)' }}>{card.label}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--color-text-secondary)', fontFamily: 'var(--font-heading)', fontStyle: 'italic' }}>"{card.quote}"</p>
            </div>
          ))}
        </div>

        <div className="fade-in" style={{ textAlign: 'center', maxWidth: 650, margin: '0 auto' }}>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>
            TrustVerifi is different. You own your proof. It goes where you go. Nobody can paywall it, delete it, or lock it behind a platform you're trying to leave.
          </p>
        </div>
      </div>
    </section>
  );
}
