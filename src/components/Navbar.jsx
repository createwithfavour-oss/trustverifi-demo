import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#what-you-get' },
    { label: 'Who It\'s For', href: '#who-its-for' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, height: 72,
      display: 'flex', alignItems: 'center', transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(11,17,32,0.88)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontSize: 12, fontWeight: 700, fontFamily: 'var(--font-body)',
          }}>TV</div>
          <span style={{ color: '#fff', fontWeight: 600, fontSize: 16, fontFamily: 'var(--font-body)' }}>TrustVerifi</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 32 }}>
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              color: 'rgba(255,255,255,0.55)', fontSize: 14, fontWeight: 500,
              textDecoration: 'none', fontFamily: 'var(--font-body)', transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = '#fff'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}
            >{l.label}</a>
          ))}
          <a href="#" style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, fontWeight: 500, textDecoration: 'none', fontFamily: 'var(--font-body)' }}>Log In</a>
          <a href="#get-started" className="btn-primary" style={{ padding: '10px 20px', fontSize: 14 }}>Get Started Free</a>
        </div>

        {/* Mobile */}
        <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu"
          className="md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'flex', flexDirection: 'column', gap: 5 }}>
          <span style={{ display: 'block', width: 20, height: 2, background: '#fff', transition: 'transform 0.2s', transform: mobileOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <span style={{ display: 'block', width: 20, height: 2, background: '#fff', transition: 'opacity 0.2s', opacity: mobileOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: 20, height: 2, background: '#fff', transition: 'transform 0.2s', transform: mobileOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </div>

      {mobileOpen && (
        <div style={{
          position: 'absolute', top: 72, left: 0, right: 0,
          background: 'rgba(11,17,32,0.95)', backdropFilter: 'blur(16px)',
          borderTop: '1px solid rgba(255,255,255,0.08)', padding: 24,
          display: 'flex', flexDirection: 'column', gap: 16,
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
               style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, fontWeight: 500, textDecoration: 'none', fontFamily: 'var(--font-body)' }}>{l.label}</a>
          ))}
          <a href="#" onClick={() => setMobileOpen(false)} style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, fontWeight: 500, textDecoration: 'none', fontFamily: 'var(--font-body)' }}>Log In</a>
          <a href="#get-started" className="btn-primary" onClick={() => setMobileOpen(false)} style={{ textAlign: 'center', justifyContent: 'center' }}>Get Started Free</a>
        </div>
      )}
    </nav>
  );
}
