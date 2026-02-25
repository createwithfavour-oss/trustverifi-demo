import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function FinalCTA() {
  const ref = useScrollAnimation();

  return (
    <section
      id="get-started"
      className="relative py-24 md:py-32 overflow-hidden noise-overlay grid-overlay"
      style={{
        background: 'linear-gradient(135deg, #0B1120 0%, #162038 40%, #1a2a4a 70%, #0B1120 100%)',
      }}
    >
      {/* Subtle Radial Glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.08), transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div ref={ref} className="animate-on-scroll relative z-10 max-w-[700px] mx-auto px-6 text-center">
        <h2
          className="text-white mb-6"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          Get proof that matches the work you actually did
        </h2>

        <p className="text-[16px] leading-[1.7] mb-8 max-w-[520px] mx-auto"
           style={{ color: 'var(--color-text-on-dark-muted)', fontFamily: 'var(--font-body)' }}>
          Send your first structured review request in under 3 minutes. Free to start. Your client doesn't need an account.
        </p>

        <a href="#" className="btn-primary no-underline inline-flex text-[16px] !py-4 !px-8">
          Get your first verified review <span aria-hidden="true">&rarr;</span>
        </a>

        <p className="text-[13px] mt-6 flex flex-wrap justify-center gap-x-4 gap-y-1"
           style={{ color: 'var(--color-text-on-dark-muted)', fontFamily: 'var(--font-body)' }}>
          <span>No credit card needed</span>
          <span>&middot;</span>
          <span>Free tier available</span>
          <span>&middot;</span>
          <span>Setup in minutes</span>
        </p>
      </div>
    </section>
  );
}
