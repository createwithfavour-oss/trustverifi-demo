import { useStaggerAnimation } from '../hooks/useScrollAnimation';

export default function Problem() {
  const containerRef = useStaggerAnimation();

  const genericReviews = [
    'Great to work with!',
    'Highly recommended!',
    'Would hire again!',
  ];

  return (
    <section
      id="the-problem"
      className="py-20 md:py-28"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div ref={containerRef} className="max-w-[1000px] mx-auto px-6">
        <div className="text-center mb-12 animate-on-scroll">
          <p className="section-label mb-4">THE PROBLEM</p>
          <h2 className="section-heading mb-6">
            You do the work. Your proof doesn't show it.
          </h2>
        </div>

        <div className="max-w-[720px] mx-auto animate-on-scroll">
          <p
            className="text-[16px] leading-[1.7] mb-6"
            style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
          >
            You grew a client's revenue by 40%. Their review says "pleasure to work with." You launched three campaigns that doubled their leads. The testimonial reads "highly recommended." The actual work is invisible.
          </p>
          <p
            className="text-[16px] leading-[1.7] mb-6"
            style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
          >
            And it's not your client's fault. They don't know what to say. They procrastinate, write something vague, or ask you to draft it yourself. Which defeats the whole point.
          </p>
          <p
            className="text-[16px] leading-[1.7] mb-10"
            style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
          >
            Meanwhile, the platforms that are supposed to help have their own problems. Your Upwork reviews don't transfer. Clutch charges $1,500/month. Google won't list you if you're fully remote. Your reputation is scattered across platforms that don't serve you, locked behind paywalls you didn't agree to.
          </p>
        </div>

        {/* Generic vs Specific Visual */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 animate-on-scroll">
          {genericReviews.map((text, i) => (
            <div
              key={i}
              className="px-6 py-4 rounded-2xl border text-center opacity-50"
              style={{
                backgroundColor: 'var(--color-surface-alt)',
                borderColor: 'var(--color-border)',
                fontFamily: 'var(--font-body)',
                color: 'var(--color-text-tertiary)',
                fontSize: '14px',
                fontStyle: 'italic',
              }}
            >
              "{text}"
            </div>
          ))}
        </div>

        {/* Pull Quote */}
        <div className="animate-on-scroll max-w-[600px] mx-auto">
          <blockquote
            className="pl-5 py-1 relative"
            style={{
              borderLeft: '3px solid var(--color-accent)',
            }}
          >
            <p
              className="text-[15px] leading-[1.7] mb-2"
              style={{
                fontFamily: 'var(--font-heading)',
                fontStyle: 'italic',
                color: 'var(--color-text-secondary)',
              }}
            >
              "Time after time, I'd deliver a project, get a 'thank you' and... that was it. No testimonial. No public feedback."
            </p>
            <cite
              className="text-[12px] not-italic"
              style={{ color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)' }}
            >
              — Indie Hackers community
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
