import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#what-you-get' },
    { label: 'Who It\'s For', href: '#who-its-for' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B1120]/85 backdrop-blur-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#38bdf8] to-[#818cf8] flex items-center justify-center text-white text-xs font-bold"
               style={{ fontFamily: 'var(--font-body)' }}>
            TV
          </div>
          <span className="text-white font-semibold text-[16px]" style={{ fontFamily: 'var(--font-body)' }}>
            TrustVerifi
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/55 hover:text-white text-[14px] font-medium transition-colors duration-200 no-underline"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="text-white/55 hover:text-white text-[14px] font-medium transition-colors duration-200 no-underline"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Log In
          </a>
          <a
            href="#get-started"
            className="btn-primary !py-2.5 !px-5 !text-[14px] no-underline"
          >
            Get Started Free
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[2px] bg-white transition-transform duration-200 ${mobileOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
          <span className={`block w-5 h-[2px] bg-white transition-opacity duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[2px] bg-white transition-transform duration-200 ${mobileOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0B1120]/95 backdrop-blur-lg border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-white text-[15px] font-medium no-underline"
              style={{ fontFamily: 'var(--font-body)' }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="text-white/70 hover:text-white text-[15px] font-medium no-underline"
            style={{ fontFamily: 'var(--font-body)' }}
            onClick={() => setMobileOpen(false)}
          >
            Log In
          </a>
          <a
            href="#get-started"
            className="btn-primary !text-center !justify-center no-underline"
            onClick={() => setMobileOpen(false)}
          >
            Get Started Free
          </a>
        </div>
      )}
    </nav>
  );
}
