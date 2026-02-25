const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Features', href: '#what-you-get' },
  { label: 'Pricing', href: '#' },
  { label: 'Help', href: '#' },
  { label: 'Contact Us', href: '#' },
];

const policies = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookie Policy', href: '#' },
  { label: 'Verification Policy', href: '#' },
  { label: 'Trust & Safety Guidelines', href: '#' },
];

function SocialIcon({ path, viewBox = '0 0 24 24', label }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors duration-200 no-underline"
    >
      <svg width="16" height="16" viewBox={viewBox} fill="currentColor">
        <path d={path} />
      </svg>
    </a>
  );
}

export default function Footer() {
  return (
    <footer
      className="py-16 md:py-20"
      style={{ backgroundColor: '#080e1c' }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2.5 no-underline mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#38bdf8] to-[#818cf8] flex items-center justify-center text-white text-xs font-bold"
                   style={{ fontFamily: 'var(--font-body)' }}>
                TV
              </div>
              <span className="text-white font-semibold text-[16px]" style={{ fontFamily: 'var(--font-body)' }}>
                TrustVerifi
              </span>
            </a>
            <p className="text-[13px] mb-5"
               style={{ color: 'var(--color-text-on-dark-muted)', fontFamily: 'var(--font-body)' }}>
              The trust layer for the internet
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <SocialIcon
                label="LinkedIn"
                path="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
              <SocialIcon
                label="X/Twitter"
                path="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              />
              <SocialIcon
                label="Instagram"
                path="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
              />
              <SocialIcon
                label="YouTube"
                path="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z M9.545 15.568V8.432L15.818 12l-6.273 3.568z"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-[14px] font-semibold mb-4"
                style={{ fontFamily: 'var(--font-body)' }}>
              Quick Links
            </h4>
            <ul className="list-none flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}
                     className="text-[13px] hover:text-white transition-colors duration-200 no-underline"
                     style={{ color: 'var(--color-text-on-dark-muted)', fontFamily: 'var(--font-body)' }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-white text-[14px] font-semibold mb-4"
                style={{ fontFamily: 'var(--font-body)' }}>
              Policies
            </h4>
            <ul className="list-none flex flex-col gap-2.5">
              {policies.map((link) => (
                <li key={link.label}>
                  <a href={link.href}
                     className="text-[13px] hover:text-white transition-colors duration-200 no-underline"
                     style={{ color: 'var(--color-text-on-dark-muted)', fontFamily: 'var(--font-body)' }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <h4 className="text-white text-[14px] font-semibold mb-4"
                style={{ fontFamily: 'var(--font-body)' }}>
              Get Started
            </h4>
            <p className="text-[13px] leading-[1.6] mb-4"
               style={{ color: 'var(--color-text-on-dark-muted)', fontFamily: 'var(--font-body)' }}>
              Send your first structured review request in under 3 minutes.
            </p>
            <a href="#get-started"
               className="btn-primary !py-2.5 !px-5 !text-[13px] no-underline">
              Get Started Free
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-[12px]"
             style={{ color: 'var(--color-text-on-dark-muted)', fontFamily: 'var(--font-body)' }}>
            Copyright 2026 &copy; TrustVerifi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
