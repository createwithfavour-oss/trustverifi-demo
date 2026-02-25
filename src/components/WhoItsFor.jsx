import { useStaggerAnimation } from '../hooks/useScrollAnimation';

const personaData = {
  individual: {
    heading: 'For freelancers and independent professionals',
    description:
      "You sell services directly to clients. You've lost deals because someone else had more visible proof. You've asked for testimonials and gotten ghosted. Or gotten something so generic it's useless.",
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
    description:
      "You run a service business and your reputation is scattered across directories, Google reviews, and client conversations. Collecting proof from clients feels like pulling teeth. And the directories that used to work are now charging more for worse leads.",
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
  const containerRef = useStaggerAnimation();
  const data = personaData[activeTab];

  return (
    <section
      id="who-its-for"
      className="py-20 md:py-28"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div ref={containerRef} className="max-w-[900px] mx-auto px-6">
        <div className="text-center mb-8 animate-on-scroll">
          <p className="section-label mb-4">WHO IT'S FOR</p>
          <h2 className="section-heading mb-6">
            Built for professionals who win clients on trust
          </h2>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-14 animate-on-scroll">
          <div className="inline-flex rounded-full p-1 border"
               style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface-alt)' }}>
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

        {/* Content */}
        <div
          key={activeTab}
          className="animate-on-scroll visible"
          style={{
            animation: 'fadeInUp 0.4s var(--ease-out)',
          }}
        >
          <style>{`
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(12px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>

          <h3 className="text-[22px] font-semibold mb-4"
              style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-body)' }}>
            {data.heading}
          </h3>

          <p className="text-[15px] leading-[1.7] mb-8"
             style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>
            {data.description}
          </p>

          {/* Pain Bullets */}
          <ul className="list-none flex flex-col gap-4 mb-8">
            {data.pains.map((pain, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] leading-[1.5]"
                  style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>
                <span className="text-[var(--color-error)] text-[12px] mt-1 shrink-0">&#9679;</span>
                {pain}
              </li>
            ))}
          </ul>

          {/* Quote */}
          <blockquote
            className="pl-5 py-1 mb-8 relative"
            style={{ borderLeft: '3px solid var(--color-accent)' }}
          >
            <p className="text-[15px] leading-[1.7] mb-1"
               style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', color: 'var(--color-text-secondary)' }}>
              {data.quote}
            </p>
            <cite className="text-[12px] not-italic"
                  style={{ color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)' }}>
              {data.quoteSource}
            </cite>
          </blockquote>

          {/* CTA */}
          <a href="#get-started" className="btn-primary no-underline inline-flex" style={{ color: '#0B1120' }}>
            {data.cta} <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
