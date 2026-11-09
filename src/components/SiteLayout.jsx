import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const pageMetadata = [
  { path: '/', title: 'KRM Human Capital Solutions | SME Employment Compliance & People Partner', description: 'Practical employment compliance and people solutions for South African SMEs.' },
  { path: '/legacy', title: 'About KRM | Human Capital Solutions', description: 'Learn about KRM Human Capital Solutions and its practical approach to Compliance, Capability and Culture.' },
  { path: '/services', title: 'HR & Employment Compliance Services | KRM', description: 'Explore employment compliance, HR documentation, recruitment, performance and employee relations support.' },
  { path: '/service-pillars', title: 'Compliance, Capability & Culture | KRM', description: 'Explore the three pillars behind KRM Human Capital Solutions.' },
  { path: '/how-we-work', title: 'How KRM Works | Human Capital Solutions', description: 'Discover how KRM assesses business needs and recommends practical HR support.' },
  { path: '/hr-templates', title: 'HR Resources for South African SMEs | KRM', description: 'Practical HR guidance and resources for South African small and medium-sized businesses.' },
  { path: '/workplace-risk-check', title: 'Workplace Compliance Check | KRM', description: 'Use KRM’s initial workplace screening to identify employment compliance topics to review.' },
  { path: '/vacancies', title: 'Careers & Vacancies | KRM Human Capital Solutions', description: 'Explore recruitment opportunities published by KRM Human Capital Solutions.' },
  { path: '/digital-solutions', title: 'Website Design, E-Commerce & Digital Solutions | KRM', description: 'KRM Digital Solutions helps businesses build their online presence with custom website design, e-commerce websites, application design, and ongoing website support and maintenance.' },
  { path: '/contact', title: 'Contact KRM | Request an HR Consultation', description: 'Contact KRM Human Capital Solutions about employment compliance, HR support or a consultation.' },
];

const navItems = [
  ['/', 'Home'],
  ['/legacy', 'About Us'],
  ['/services', 'Services'],
  ['/hr-templates', 'Resources'],
  ['/vacancies', 'Vacancies'],
  ['/digital-solutions', 'Digital Solutions'],
  ['/contact', 'Contact'],
];

export function Logo({ dark = false }) {
  return (
    <span className={`brand-lockup ${dark ? 'brand-lockup-dark' : ''}`}>
      <span className={`logo-mark ${dark ? 'logo-mark-dark' : ''}`}>KRM</span>
      <span className="brand-full-name">Human Capital Solutions</span>
    </span>
  );
}

export default function SiteLayout({ children }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const serviceSlug = location.pathname.split('/')[2];
    const serviceTitles = {
      compliance: ['Employment Compliance Support for SMEs | KRM', 'Employment compliance reviews, UIF and COIDA support, labour-law guidance and employee-file audits for South African SMEs.'],
      documentation: ['Employment Contracts, Policies & HR Documentation | KRM', 'Employment contracts, workplace policies, employee handbooks and practical HR documentation for South African businesses.'],
      recruitment: ['Affordable SME Recruitment Services | KRM', 'Practical recruitment support for SMEs, including job profiling, candidate screening, interviews and onboarding.'],
      performance: ['Performance Management Support | KRM', 'Performance reviews, KPIs, probation management and practical performance improvement support for SMEs.'],
      'employee-relations': ['Employee & Labour Relations Support | KRM', 'Practical guidance for disciplinary processes, grievances, poor performance, retrenchment and CCMA preparation.'],
      'organisation-change': ['Organisational Development & Change | KRM', 'Workforce planning, organisational structure reviews, restructuring and change-management support.'],
      'outsourced-hr': ['Outsourced HR Support for SMEs | KRM', 'Flexible ongoing HR support for small and growing businesses without a full in-house HR department.'],
    };

    const metadata = pageMetadata.find((page) => page.path === location.pathname);
    const serviceMeta = serviceTitles[serviceSlug];
    const title = metadata?.title || (serviceMeta ? serviceMeta[0] : 'Page Not Found | KRM Human Capital Solutions');
    const description = metadata?.description || (serviceMeta ? serviceMeta[1] : 'Explore KRM Human Capital Solutions for practical employment compliance and people support for South African SMEs.');
    const canonicalUrl = `https://krmhcs.co.za${location.pathname}`;
    const isProductionHost = window.location.hostname === 'krmhcs.co.za' || window.location.hostname === 'www.krmhcs.co.za';

    document.title = title;

    function setMeta(selector, attribute, value, create) {
      let element = document.head.querySelector(selector);
      if (!element && create) {
        element = document.createElement('meta');
        Object.entries(create).forEach(([key, item]) => element.setAttribute(key, item));
        document.head.appendChild(element);
      }
      if (element) element.setAttribute(attribute, value);
    }

    setMeta('meta[name="description"]', 'content', description, { name: 'description' });
    setMeta('meta[name="robots"]', 'content', isProductionHost ? 'index, follow' : 'noindex, nofollow', { name: 'robots' });
    setMeta('meta[property="og:title"]', 'content', title, { property: 'og:title' });
    setMeta('meta[property="og:description"]', 'content', description, { property: 'og:description' });
    setMeta('meta[property="og:type"]', 'content', 'website', { property: 'og:type' });
    setMeta('meta[property="og:url"]', 'content', canonicalUrl, { property: 'og:url' });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
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

