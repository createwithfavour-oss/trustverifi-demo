import { useStaggerAnimation } from '../hooks/useScrollAnimation';

function TypicalReviewCard() {
  return (
    <div
      className="animate-on-scroll rounded-2xl p-7 border flex-1 min-w-[300px]"
      style={{
        backgroundColor: 'var(--color-surface-alt)',
        borderColor: 'var(--color-border)',
      }}
    >
      {/* Badge */}
      <div
        className="pill bg-gray-100 text-[var(--color-text-tertiary)] border border-gray-200 mb-5 !text-[10px]"
      >
        TYPICAL PLATFORM REVIEW
      </div>

      {/* Stars */}
      <div className="flex gap-0.5 mb-4 text-[20px]" style={{ color: 'var(--color-warning)' }}>
        {'★★★★★'.split('').map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>

      {/* Review Text */}
      <p
        className="text-[15px] leading-[1.6] mb-6"
        style={{
          fontFamily: 'var(--font-heading)',
          fontStyle: 'italic',
          color: 'var(--color-text-secondary)',
        }}
      >
        "Thank you for your hard work. Your work helped our product start off well. Highly recommended!"
      </p>

      {/* Divider */}
      <div className="h-px mb-5" style={{ backgroundColor: 'var(--color-border)' }} />

      {/* What a prospect learns */}
      <p className="text-[12px] font-semibold mb-3 tracking-wide uppercase"
         style={{ color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-body)' }}>
        What a prospect learns:
      </p>
      <ul className="list-none flex flex-col gap-2.5">
        {[
          'What was delivered',
          'Specific results',
          'Timeline',
          'Whether to hire them',
        ].map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-[14px]"
              style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>
            <span className="text-[var(--color-error)] text-[14px] font-bold shrink-0">&#10005;</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function VerifiedReviewCard() {
  return (
    <div
      className="animate-on-scroll rounded-2xl p-7 border flex-1 min-w-[300px] relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(56,189,248,0.05), rgba(129,140,248,0.05))',
        borderColor: 'var(--color-accent)',
        boxShadow: '0 8px 40px rgba(56, 189, 248, 0.08)',
      }}
    >
      {/* Badge */}
      <div className="pill bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/25 mb-5 !text-[10px]">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-[#38bdf8]">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        TRUSTVERIFI VERIFIED REVIEW
      </div>

      {/* Project Context */}
      <div className="mb-5">
        <p className="text-[13px] font-semibold mb-1"
           style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-body)' }}>
          Project: Paid Acquisition Campaigns
        </p>
        <p className="text-[12px]"
           style={{ color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)' }}>
          Duration: 4 months &middot; Verified client identity
        </p>
      </div>

      {/* Q&A Blocks */}
      <div className="flex flex-col gap-4 mb-5">
        {[
          {
            q: 'What did they deliver?',
            a: 'Full management of Facebook and Google ad campaigns. Creative, targeting, budget optimization, and weekly reporting.',
          },
          {
            q: 'What results did you see?',
            a: 'Lead volume increased by 60%. Average ROI was 3.8x across both channels. Cost per lead dropped from $47 to $19.',
          },
          {
            q: 'Would you hire them again?',
            a: "Already renewed twice. They're managing our Q2 campaigns now.",
          },
        ].map((block) => (
          <div key={block.q}>
            <p className="text-[12px] font-semibold mb-1"
               style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-mono)' }}>
              Q: {block.q}
            </p>
            <p className="text-[14px] leading-[1.6]"
               style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>
              {block.a}
            </p>
          </div>
        ))}
      </div>

      {/* Metric Pills */}
      <div className="flex flex-wrap gap-2 mb-5">
        {[
          { icon: '📈', text: '+60% leads' },
          { icon: '💰', text: '3.8x ROI' },
          { icon: '📉', text: '$47→$19 CPL' },
        ].map((m) => (
          <span key={m.text} className="pill bg-[#38bdf8]/8 text-[#38bdf8] border border-[#38bdf8]/15 !text-[11px]">
            {m.icon} {m.text}
          </span>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px mb-5" style={{ backgroundColor: 'var(--color-border)' }} />

      {/* What a prospect learns */}
      <p className="text-[12px] font-semibold mb-3 tracking-wide uppercase"
         style={{ color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-body)' }}>
        What a prospect learns:
      </p>
      <ul className="list-none flex flex-col gap-2.5">
        {[
          'Exactly what was delivered',
          'Specific, verified results',
          'Timeline and scope',
          'Enough to make a hiring decision',
        ].map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-[14px]"
              style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>
            <span className="text-[var(--color-success)] text-[14px] font-bold shrink-0">&#10003;</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Comparison() {
  const containerRef = useStaggerAnimation();

  return (
    <section
      id="comparison"
      className="py-20 md:py-28"
      style={{ backgroundColor: 'var(--color-surface-alt)' }}
    >
      <div ref={containerRef} className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-14 animate-on-scroll">
          <p className="section-label mb-4">THE DIFFERENCE</p>
          <h2 className="section-heading mb-4">
            Same project. Same happy client. Different proof.
          </h2>
          <p className="text-[16px] max-w-[500px] mx-auto"
             style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>
            One of these reviews gets someone hired. The other one doesn't.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <TypicalReviewCard />
          <VerifiedReviewCard />
        </div>

        {/* Below Cards */}
        <div className="text-center animate-on-scroll">
          <p className="text-[16px] mb-6"
             style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>
            This is the difference between a testimonial and verified proof.
          </p>
          <a href="#get-started" className="btn-primary no-underline" style={{ color: '#0B1120' }}>
            Get started free <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
