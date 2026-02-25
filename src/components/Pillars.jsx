import { useState } from 'react';
import { useStaggerAnimation } from '../hooks/useScrollAnimation';

const pillarsData = {
  individual: [
    {
      icon: '📝',
      title: 'Reviews that show what you did',
      description:
        "You set the questions. Your client fills in the specifics. The deliverables, the metrics, the timeline. No more \"great to work with\" and nothing else.",
      hover: "Your client doesn't have to figure out what to write. They answer your questions. You get proof with real numbers.",
    },
    {
      icon: '📊',
      title: 'A trust score that shows its work',
      description:
        'Not a mystery number. Every score breaks down into visible components. Verified identity, confirmed work relationships, authenticated reviews. All of it checkable.',
      hover: 'Anyone viewing your profile can see exactly how your score was built. Transparent by design.',
    },
    {
      icon: '🔗',
      title: 'Proof that travels with you',
      description:
        'Add your trust profile to proposals, emails, LinkedIn, your website. One link. One QR code. Everything a prospect needs to verify you.',
      hover: "When you leave Upwork, your reviews stay there. TrustVerifi proof goes wherever you go.",
    },
  ],
  business: [
    {
      icon: '📝',
      title: 'Reviews that show what you did',
      description:
        'Systematize review collection across your team. Each service line gets its own questions. Clients answer with real deliverables and ROI instead of generic praise.',
      hover: 'Automate review requests after project milestones. Build a library of structured proof across every service you offer.',
    },
    {
      icon: '📊',
      title: 'A trust score that shows its work',
      description:
        "A transparent credibility score for your agency. Every component visible. Team verification status, review authenticity, relationship history. No black box.",
      hover: "Prospects see the methodology behind your score. No pay-to-play manipulation. No hidden algorithms.",
    },
    {
      icon: '🔗',
      title: 'Proof that travels with you',
      description:
        "Embed trust widgets on your site. Add verified badges to proposals. Share your team's trust profile in pitch decks and RFP responses.",
      hover: "Your reputation doesn't live on Clutch's servers anymore. It lives wherever you put it.",
    },
  ],
};

export default function Pillars({ activeTab, setActiveTab }) {
  const containerRef = useStaggerAnimation();
  const [hoveredCard, setHoveredCard] = useState(null);
  const pillars = pillarsData[activeTab];

  return (
    <section
      id="what-you-get"
      className="py-20 md:py-28"
      style={{ backgroundColor: 'var(--color-surface-alt)' }}
    >
      <div ref={containerRef} className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-8 animate-on-scroll">
          <p className="section-label mb-4">WHAT YOU GET</p>
          <h2 className="section-heading mb-6">
            Proof that works as hard as you do
          </h2>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-14 animate-on-scroll">
          <div className="inline-flex rounded-full p-1 border"
               style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
            <button
              className={`px-6 py-2.5 rounded-full text-[14px] font-semibold border-none cursor-pointer transition-all duration-300 ${
                activeTab === 'individual'
                  ? 'bg-[#38bdf8] text-[#0B1120]'
                  : 'bg-transparent text-[var(--color-text-tertiary)]'
              }`}
              style={{ fontFamily: 'var(--font-body)' }}
              onClick={() => setActiveTab('individual')}
            >
              Individual
            </button>
            <button
              className={`px-6 py-2.5 rounded-full text-[14px] font-semibold border-none cursor-pointer transition-all duration-300 ${
                activeTab === 'business'
                  ? 'bg-[#38bdf8] text-[#0B1120]'
                  : 'bg-transparent text-[var(--color-text-tertiary)]'
              }`}
              style={{ fontFamily: 'var(--font-body)' }}
              onClick={() => setActiveTab('business')}
            >
              Business
            </button>
          </div>
        </div>

        {/* Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={`${activeTab}-${i}`}
              className="animate-on-scroll card-hover rounded-2xl p-7 border cursor-default"
              style={{
                backgroundColor: 'var(--color-surface-alt)',
                borderColor: hoveredCard === i ? 'rgba(56,189,248,0.3)' : 'var(--color-border)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              }}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <span className="text-[28px] block mb-4">{pillar.icon}</span>
              <h3 className="text-[18px] font-semibold mb-3"
                  style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-body)' }}>
                {pillar.title}
              </h3>
              <p className="text-[15px] leading-[1.6] mb-0"
                 style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>
                {pillar.description}
              </p>

              {/* Hover Reveal */}
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: hoveredCard === i ? '80px' : '0',
                  opacity: hoveredCard === i ? 1 : 0,
                  marginTop: hoveredCard === i ? '12px' : '0',
                }}
              >
                <p className="text-[13px] leading-[1.5]"
                   style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-body)' }}>
                  {pillar.hover}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
