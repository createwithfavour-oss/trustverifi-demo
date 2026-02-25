import { useStaggerAnimation } from '../hooks/useScrollAnimation';

const steps = [
  {
    number: 1,
    title: 'Set up your review request',
    description:
      "Pick a recent client. Add the project details. Choose the specific questions you want them to answer. We've got templates if you're not sure where to start.",
    time: '~3 min',
  },
  {
    number: 2,
    title: 'Your client fills it in',
    description:
      "They get a clean, guided form. No signup required on their end. They answer your questions, add their perspective, and submit.",
    time: '~5 min for them',
  },
  {
    number: 3,
    title: 'Share your proof everywhere',
    description:
      "You get a verified review with real specifics. Drop it in proposals, post it on LinkedIn, embed it on your site. Your trust profile starts building from day one.",
    time: 'Instant',
  },
];

export default function HowItWorks() {
  const containerRef = useStaggerAnimation();

  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div ref={containerRef} className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-14 animate-on-scroll">
          <p className="section-label mb-4">HOW IT WORKS</p>
          <h2 className="section-heading mb-4">
            From signup to shareable proof in minutes
          </h2>
          <p className="text-[16px] max-w-[500px] mx-auto"
             style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>
            You don't need to set up your entire profile first. Just send one review request.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 items-stretch">
          {steps.map((step, i) => (
            <div key={step.number} className="flex-1 flex items-start animate-on-scroll">
              {/* Step Card */}
              <div className="flex-1 text-center px-4 md:px-8">
                {/* Number Circle */}
                <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center text-white text-[18px] font-bold"
                     style={{
                       background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-secondary))',
                       fontFamily: 'var(--font-body)',
                     }}>
                  {step.number}
                </div>

                <h3 className="text-[18px] font-semibold mb-3"
                    style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-body)' }}>
                  {step.title}
                </h3>

                <p className="text-[15px] leading-[1.6] mb-4 max-w-[320px] mx-auto"
                   style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>
                  {step.description}
                </p>

                {/* Time Pill */}
                <span className="pill bg-[#38bdf8]/8 text-[#38bdf8] border border-[#38bdf8]/15 !text-[11px]">
                  {step.time}
                </span>
              </div>

              {/* Arrow Connector (hidden on mobile and after last) */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center self-center shrink-0 mx-[-12px]">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--color-border)' }}>
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
