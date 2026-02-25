import { useScrollAnimation } from '../hooks/useScrollAnimation';

const badges = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    text: 'Verification powered by ComplyCube',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    text: 'Your data is encrypted & secure',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    text: 'Built for global reach',
  },
];

export default function TrustSignals() {
  const ref = useScrollAnimation();

  return (
    <section
      className="py-16 md:py-20"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div ref={ref} className="animate-on-scroll max-w-[900px] mx-auto px-6">
        {/* Trust Badges Row */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12">
          {badges.map((badge) => (
            <div
              key={badge.text}
              className="flex items-center gap-3"
            >
              <span style={{ color: 'var(--color-text-tertiary)' }}>
                {badge.icon}
              </span>
              <span className="text-[13px]"
                    style={{ color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-body)' }}>
                {badge.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
