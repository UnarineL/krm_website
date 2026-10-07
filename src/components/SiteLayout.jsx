import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  ['/', 'Home'],
  ['/legacy', 'Legacy'],
  ['/services', 'Services'],
  ['/hr-templates', 'HR Templates'],
  ['/workplace-risk-check', 'Risk Check'],
  ['/digital-solutions', 'Digital Solutions'],
  ['/contact', 'Contact'],
];

function Logo({ dark = false }) {
  return <span className={`logo-mark ${dark ? 'logo-mark-dark' : ''}`}>KRM</span>;
}

export default function SiteLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="site">
      <header className="site-header">
        <Link className="brand" to="/" onClick={() => setOpen(false)} aria-label="KRM home">
          <Logo />
        </Link>

        <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navItems.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          className={`menu-button ${open ? 'is-open' : ''}`}
          type="button"
          aria-expanded={open}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <div className="footer-label">CONTACTS</div>
            <a href="mailto:info@krmhcs.co.za">info@krmhcs.co.za</a>
          </div>
          <div className="footer-meta">
            <div>© Copyright Reserved</div>
            <div>KRM Human Capital Solutions (Pty) Ltd</div>
            <div>REG: 2022/835367/07</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export { Logo };