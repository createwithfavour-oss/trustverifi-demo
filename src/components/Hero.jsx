import { useState, useEffect, useRef } from 'react';

function TrustScoreCounter({ target }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const timeout = setTimeout(() => {
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        setCount(current);
        if (current >= target) clearInterval(interval);
      }, 15);
    }, 800);

    return () => clearTimeout(timeout);
  }, [target]);

  return count;
}

function ProfileCard() {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const timer = setTimeout(() => {
      el.classList.add('visible');
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={cardRef}
      className="animate-from-right w-full max-w-[420px] rounded-2xl p-7 border border-white/10 relative"
      style={{
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
      }}
    >
      {/* Profile Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#38bdf8] to-[#818cf8] flex items-center justify-center text-white text-lg font-bold shrink-0"
             style={{ fontFamily: 'var(--font-body)' }}>
          FY
        </div>
        <div>
          <h3 className="text-white text-[16px] font-semibold m-0" style={{ fontFamily: 'var(--font-body)' }}>
            Favour Yusuf
          </h3>
          <p className="text-white/55 text-[13px] m-0 mt-0.5" style={{ fontFamily: 'var(--font-body)' }}>
            Growth & Positioning Consultant
          </p>
          <div className="flex items-center gap-1.5 mt-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#38bdf8]">
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[11px] text-[#38bdf8] font-medium" style={{ fontFamily: 'var(--font-mono)' }}>
              Identity Verified
            </span>
          </div>
        </div>
      </div>

      {/* Trust Score + Components */}
      <div className="flex gap-5 mb-6">
        {/* Score Ring */}
        <div className="relative w-[80px] h-[80px] shrink-0">
          <div
            className="w-full h-full rounded-full flex items-center justify-center"
            style={{
              background: `conic-gradient(#38bdf8 0deg, #818cf8 ${87 * 3.13}deg, rgba(255,255,255,0.08) ${87 * 3.13}deg)`,
              padding: '4px',
            }}
          >
            <div className="w-full h-full rounded-full bg-[#0f1a2e] flex flex-col items-center justify-center">
              <span className="text-white text-[24px] font-bold leading-none" style={{ fontFamily: 'var(--font-mono)' }}>
                <TrustScoreCounter target={87} />
              </span>
              <span className="text-white/40 text-[9px] font-semibold tracking-widest mt-1" style={{ fontFamily: 'var(--font-mono)' }}>
                TRUST
              </span>
            </div>
          </div>
        </div>

        {/* Score Components */}
        <div className="flex flex-col gap-2.5 flex-1 justify-center">
          {[
            { label: 'Client Reviews', value: '5/5', pct: 100 },
            { label: 'Identity', value: 'Verified', pct: 100 },
            { label: 'Work History', value: '3 confirmed', pct: 75 },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between mb-1">
                <span className="text-white/50 text-[11px]" style={{ fontFamily: 'var(--font-mono)' }}>
                  {item.label}
                </span>
                <span className="text-white/70 text-[11px]" style={{ fontFamily: 'var(--font-mono)' }}>
                  {item.value}
                </span>
              </div>
              <div className="h-[4px] rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#38bdf8] to-[#818cf8] transition-all duration-1000"
                  style={{ width: `${item.pct}%`, transitionDelay: '1s' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mini Review */}
      <div className="rounded-xl bg-white/5 border border-white/8 p-4 mb-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#fbbf24] to-[#ef4444] flex items-center justify-center text-white text-[11px] font-bold shrink-0"
               style={{ fontFamily: 'var(--font-body)' }}>
            JK
          </div>
          <div>
            <span className="text-white text-[13px] font-semibold block" style={{ fontFamily: 'var(--font-body)' }}>
              Jason K.
            </span>
            <span className="text-white/40 text-[11px]" style={{ fontFamily: 'var(--font-body)' }}>
              CEO, VertexHQ
            </span>
          </div>
        </div>
        <p className="text-white/70 text-[13px] leading-relaxed m-0 mb-3" style={{ fontFamily: 'var(--font-body)' }}>
          "Favour ran our paid campaigns for 4 months. Lead volume increased 60%. ROI averaged 3.8x. We renewed twice."
        </p>
        <div className="flex gap-2 flex-wrap">
          <span className="pill bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20 !text-[11px]">
            +60% leads
          </span>
          <span className="pill bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/20 !text-[11px]">
            3.8x ROI
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 py-2.5 rounded-[10px] bg-[#38bdf8] text-[#0B1120] text-[13px] font-semibold border-none cursor-pointer transition-all duration-200 hover:bg-[#7dd3fc]"
                style={{ fontFamily: 'var(--font-body)' }}>
          Hire
        </button>
        <button className="flex-1 py-2.5 rounded-[10px] bg-transparent text-white/70 text-[13px] font-semibold border border-white/15 cursor-pointer transition-all duration-200 hover:border-[#38bdf8] hover:text-white"
                style={{ fontFamily: 'var(--font-body)' }}>
          Shortlist
        </button>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden noise-overlay grid-overlay"
             style={{
               background: 'linear-gradient(135deg, #0B1120 0%, #162038 40%, #1a2a4a 70%, #0B1120 100%)',
             }}>
      {/* Drifting Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{
            background: 'radial-gradient(circle, #38bdf8, transparent 70%)',
            top: '-10%',
            right: '-5%',
            animation: 'drift1 20s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{
            background: 'radial-gradient(circle, #818cf8, transparent 70%)',
            bottom: '-15%',
            left: '-10%',
            animation: 'drift2 25s ease-in-out infinite',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-[120px] pb-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="flex-1 max-w-[580px]">
            {/* Pill Badge */}
            <div className="pill bg-[#38bdf8]/8 border border-[#38bdf8]/20 text-[#38bdf8] mb-8 inline-flex">
              <span className="pulse-dot" />
              <span>Free to start &middot; No credit card</span>
            </div>

            {/* Headline */}
            <h1
              className="text-white mb-6 leading-[1.12] tracking-[-0.5px]"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(36px, 4.5vw, 56px)',
                fontWeight: 400,
              }}
            >
              Verified proof that shows{' '}
              <span className="gradient-text">what you actually delivered.</span>
            </h1>

            {/* Supporting Text */}
            <p
              className="text-[16px] leading-relaxed mb-8 max-w-[500px]"
              style={{
                color: 'var(--color-text-on-dark-muted)',
                fontFamily: 'var(--font-body)',
              }}
            >
              Your clients answer specific questions about what you built, the results you drove, and why they'd hire you again. You get a trust profile with real numbers that you can share anywhere.
            </p>

            {/* CTA Row */}
            <div className="flex flex-wrap gap-4 mb-6">
              <a href="#get-started" className="btn-primary no-underline">
                Get your first verified review <span aria-hidden="true">&rarr;</span>
              </a>
              <a href="#how-it-works" className="btn-secondary no-underline">
                See how it works
              </a>
            </div>

            {/* Trust Line */}
            <p className="text-[13px] flex flex-wrap gap-x-4 gap-y-1"
               style={{ color: 'var(--color-text-on-dark-muted)', fontFamily: 'var(--font-body)' }}>
              <span>&#10003; Free tier available</span>
              <span>&#10003; 2-minute setup</span>
              <span>&#10003; No platform lock-in</span>
            </p>
          </div>

          {/* Right Column — Profile Card */}
          <div className="flex-1 flex justify-center lg:justify-end w-full">
            <ProfileCard />
          </div>
        </div>
      </div>
    </section>
  );
}
