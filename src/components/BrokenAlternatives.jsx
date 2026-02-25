import { useStaggerAnimation } from '../hooks/useScrollAnimation';

const cards = [
  {
    icon: '⭐',
    label: 'Platform ratings',
    quote:
      'I have 100% job success and top rating... still getting ghosted on proposals.',
  },
  {
    icon: '🔒',
    label: 'Marketplace lock-in',
    quote:
      'If you start over, you lose every review you worked hard for.',
  },
  {
    icon: '💸',
    label: 'Pay-to-play directories',
    quote:
      "It's 100% pay to play. Your agency won't even show up unless you pay.",
  },
  {
    icon: '🤷',
    label: 'Client testimonials',
    quote:
      "Time after time, I'd deliver a project, get a 'thank you' and... that was it.",
  },
];

export default function BrokenAlternatives() {
  const containerRef = useStaggerAnimation();

  return (
    <section
      id="sound-familiar"
      className="py-20 md:py-28"
      style={{ backgroundColor: 'var(--color-surface-alt)' }}
    >
      <div ref={containerRef} className="max-w-[1000px] mx-auto px-6">
        <div className="text-center mb-14 animate-on-scroll">
          <p className="section-label mb-4">SOUND FAMILIAR?</p>
          <h2 className="section-heading mb-4">
            The tools that were supposed to help aren't helping
          </h2>
          <p className="text-[16px] max-w-[550px] mx-auto"
             style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>
            We've heard these from hundreds of freelancers and agency owners. You've probably said at least one of them.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {cards.map((card) => (
            <div
              key={card.label}
              className="animate-on-scroll card-hover rounded-2xl p-6 border"
              style={{
                backgroundColor: 'var(--color-surface-alt)',
                borderColor: 'var(--color-border)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              }}
            >
              <span className="text-[24px] block mb-3">{card.icon}</span>
              <h3 className="text-[16px] font-semibold mb-3"
                  style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-body)' }}>
                {card.label}
              </h3>
              <p className="text-[14px] leading-[1.6]"
                 style={{
                   color: 'var(--color-text-secondary)',
                   fontFamily: 'var(--font-heading)',
                   fontStyle: 'italic',
                 }}>
                "{card.quote}"
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center animate-on-scroll max-w-[650px] mx-auto">
          <p className="text-[16px] leading-[1.7]"
             style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}>
            TrustVerifi is different. You own your proof. It goes where you go. Nobody can paywall it, delete it, or lock it behind a platform you're trying to leave.
          </p>
        </div>
      </div>
    </section>
  );
}
