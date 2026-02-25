const personaData = {
  individual: {
    heading: 'For freelancers and independent professionals',
    description: "You sell services directly to clients. You've lost deals because someone else had more visible proof. You've asked for testimonials and gotten ghosted. Or gotten something so generic it's useless.",
    pains: [
      "Your Upwork reviews don't transfer when you go direct",
      'Clients say "just tell me what to write" when you ask for a testimonial',
      "Your best work is invisible because the review doesn't show the numbers",
    ],
    quote: '"Just remember, you\'re starting from zero on Upwork, no matter how good you are."',
    quoteSource: '— r/Upwork',
    cta: 'Get your first verified review',
  },
  business: {
    heading: 'For agencies and service businesses',
    description: "You run a service business and your reputation is scattered across directories, Google reviews, and client conversations. Collecting proof from clients feels like pulling teeth. And the directories that used to work are now charging more for worse leads.",
    pains: [
      'Clutch charges $1,500/month and the lead quality is dropping',
      "You can't get a Google Business Profile because you're fully remote",
      'Your case studies take weeks to produce and are stale by the time they\'re done',
    ],
    quote: '"It\'s 100% pay to play. Your agency won\'t even show up in search unless you pay."',
    quoteSource: '— r/PPC',
    cta: 'Start building verified proof',
  },
};

export default function WhoItsFor({ activeTab, setActiveTab }) {
  const data = personaData[activeTab];

  return (
    <section id="who-its-for" style={{ backgroundColor: 'var(--color-surface)', padding: '80px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <p className="section-label">WHO IT'S FOR</p>
          <h2 className="section-heading">Built for professionals who win clients on trust</h2>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 56 }}>
          <div className="tv-toggle">
            <button className={`tv-toggle-btn ${activeTab === 'individual' ? 'active' : ''}`} onClick={() => setActiveTab('individual')}>Individual</button>
            <button className={`tv-toggle-btn ${activeTab === 'business' ? 'active' : ''}`} onClick={() => setActiveTab('business')}>Business</button>
          </div>
        </div>

        <div key={activeTab} style={{ animation: 'fadeInUp 0.4s ease-out' }}>
          <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 16, color: 'var(--color-text-primary)', fontFamily: 'var(--font-body)' }}>{data.heading}</h3>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)', marginBottom: 32 }}>{data.description}</p>

          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {data.pains.map((pain, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 15, lineHeight: 1.5, color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>
                <span style={{ color: '#ef4444', fontSize: 10, marginTop: 6, flexShrink: 0 }}>●</span>
                {pain}
              </li>
            ))}
          </ul>

          <blockquote style={{ paddingLeft: 20, borderLeft: '3px solid var(--color-accent)', margin: '0 0 32px' }}>
            <p style={{ fontSize: 15, lineHeight: 1.7, fontFamily: 'var(--font-heading)', fontStyle: 'italic', color: 'var(--color-text-secondary)', marginBottom: 8 }}>{data.quote}</p>
            <cite style={{ fontSize: 12, fontStyle: 'normal', color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)' }}>{data.quoteSource}</cite>
          </blockquote>

          <a href="#get-started" className="btn-primary">{data.cta} →</a>
        </div>
      </div>
    </section>
  );
}
