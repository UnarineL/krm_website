import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const navItems = [
  ['/', 'Home'],
  ['/legacy', 'About'],
  ['/services', 'Services'],
  ['/hr-templates', 'Resources'],
  ['/vacancies', 'Vacancies'],
  ['/digital-solutions', 'Digital Solutions'],
  ['/contact', 'Contact'],
];

function Logo({ dark = false }) {
  return <span className={`logo-mark ${dark ? 'logo-mark-dark' : ''}`}>KRM</span>;
}

export default function SiteLayout({ children }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  function handleNavigation(to) {
    setOpen(false);

    if (location.pathname === to) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  return (
    <div className="site">
      <header className="site-header">
        <Link className="brand" to="/" onClick={() => handleNavigation('/')} aria-label="KRM home">
          <Logo />
        </Link>

        <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navItems.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => handleNavigation(to)}
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
            <div className="footer-label">CONTACT</div>
            <a href="mailto:info@krmhcs.co.za">info@krmhcs.co.za</a>
          </div>
          <div className="footer-meta">
            <div>© {new Date().getFullYear()} KRM Human Capital Solutions (Pty) Ltd</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export { Logo };
