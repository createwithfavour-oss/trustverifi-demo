import { useState } from 'react';
import { useStaggerChildren } from '../hooks/useScrollAnimation';

const pillarsData = {
  individual: [
    { icon: '📝', title: 'Reviews that show what you did', description: "You set the questions. Your client fills in the specifics. The deliverables, the metrics, the timeline. No more \"great to work with\" and nothing else.", hover: "Your client doesn't have to figure out what to write. They answer your questions. You get proof with real numbers." },
    { icon: '📊', title: 'A trust score that shows its work', description: 'Not a mystery number. Every score breaks down into visible components. Verified identity, confirmed work relationships, authenticated reviews. All of it checkable.', hover: 'Anyone viewing your profile can see exactly how your score was built. Transparent by design.' },
    { icon: '🔗', title: 'Proof that travels with you', description: 'Add your trust profile to proposals, emails, LinkedIn, your website. One link. One QR code. Everything a prospect needs to verify you.', hover: "When you leave Upwork, your reviews stay there. TrustVerifi proof goes wherever you go." },
  ],
  business: [
    { icon: '📝', title: 'Reviews that show what you did', description: 'Systematize review collection across your team. Each service line gets its own questions. Clients answer with real deliverables and ROI instead of generic praise.', hover: 'Automate review requests after project milestones. Build a library of structured proof across every service you offer.' },
    { icon: '📊', title: 'A trust score that shows its work', description: "A transparent credibility score for your agency. Every component visible. Team verification status, review authenticity, relationship history. No black box.", hover: "Prospects see the methodology behind your score. No pay-to-play manipulation. No hidden algorithms." },
    { icon: '🔗', title: 'Proof that travels with you', description: "Embed trust widgets on your site. Add verified badges to proposals. Share your team's trust profile in pitch decks and RFP responses.", hover: "Your reputation doesn't live on Clutch's servers anymore. It lives wherever you put it." },
  ],
};

export default function Pillars({ activeTab, setActiveTab }) {
  const ref = useStaggerChildren();
  const [hovered, setHovered] = useState(null);
  const pillars = pillarsData[activeTab];

  return (
    <section id="what-you-get" style={{ backgroundColor: '#fff', padding: '80px 0' }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: 32 }}>
          <p className="section-label">WHAT YOU GET</p>
          <h2 className="section-heading">Proof that works as hard as you do</h2>
        </div>

        {/* Toggle */}
        <div className="fade-in" style={{ display: 'flex', justifyContent: 'center', marginBottom: 56 }}>
          <div className="tv-toggle">
            <button className={`tv-toggle-btn ${activeTab === 'individual' ? 'active' : ''}`} onClick={() => setActiveTab('individual')}>Individual</button>
            <button className={`tv-toggle-btn ${activeTab === 'business' ? 'active' : ''}`} onClick={() => setActiveTab('business')}>Business</button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 24 }}>
          {pillars.map((p, i) => (
            <div
              key={`${activeTab}-${i}`}
              className="fade-in visible tv-card"
              style={{ cursor: 'default', animation: `fadeInUp 0.4s ease-out ${i * 0.1}s both` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <span style={{ fontSize: 32, display: 'block', marginBottom: 16 }}>{p.icon}</span>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12, color: 'var(--color-text-primary)', fontFamily: 'var(--font-body)' }}>{p.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>{p.description}</p>
              <div style={{
                maxHeight: hovered === i ? 80 : 0,
                opacity: hovered === i ? 1 : 0,
                marginTop: hovered === i ? 12 : 0,
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}>
                <p style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--color-accent)', fontFamily: 'var(--font-body)' }}>{p.hover}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
