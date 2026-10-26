import { Link } from 'react-router-dom';

const bookingHref = 'mailto:info@krmhcs.co.za?subject=Free%2020-minute%20HR%20check-in';

const serviceGroups = [
  {
    number: '01',
    title: 'Hiring',
    intro: 'So new colleagues start strong and leave on good terms.',
    items: [
      'Clear job descriptions and role profiles that attract the right people',
      'Full support through hiring, from shortlisting to offer',
      'Onboarding that helps new employees settle in and understand your culture',
      'Respectful offboarding, including exit interviews that give you honest feedback',
    ],
  },
  {
    number: '02',
    title: 'Growing and Keeping Your People',
    intro: 'Because people stay where they can learn and grow.',
    items: [
      'Training needs assessments and coaching or development recommendations',
      'Practical training for managers on handling conflict and building good working relationships',
      'Skills development planning and reporting (WSP/ATR) that also supports your B-BBEE goals',
      'Employee surveys, recognition, and wellbeing programmes that show people they’re valued',
    ],
  },
  {
    number: '03',
    title: 'Benefits and Fair Treatment',
    intro: 'So employees understand what they earn and trust how decisions are made.',
    items: [
      'Help with employee benefits questions and payroll queries',
      'Employment contracts, policies, and procedures that are clear, fair, and legally sound',
      'Guidance on disciplinary, grievance, and other labour relations matters',
    ],
  },
  {
    number: '04',
    title: 'Staying Compliant, Stress-Free',
    intro: 'So you can focus on running your business, not chasing deadlines.',
    items: [
      'HR compliance health checks: we show you what’s in place, what’s missing, and how to fix it',
      'COIDA and UIF registration and annual submissions, including Return of Earnings',
      'Employment Equity, B-BBEE, and Skills Development compliance',
      'POPIA support for employee data',
    ],
  },
  {
    number: '05',
    title: 'Smarter HR for Growing Teams',
    intro: 'So decisions about people are based on facts, not guesswork.',
    items: [
      'HR strategy and planning that fits where your business is heading',
      'HR technology that cuts admin and saves time',
      'Simple workforce reports and insights that show trends, risks, and opportunities',
    ],
  },
];

const reasons = [
  ['People first, always.', 'Fair processes, clear expectations, and a workplace people want to stay in.'],
  ['Compliance without the headache.', 'We handle the paperwork and deadlines.'],
  ['Practical, not theoretical.', 'Over 15 years of hands-on HR experience across media, mining, IT and other working environments.'],
  ['Fair, transparent pricing.', 'You’ll know what you’re paying and what you’re getting.'],
];

const steps = [
  ['01', 'Talk to us.', 'A relaxed conversation about your team and challenges.'],
  ['02', 'We assess.', 'A quick review of what’s working and what needs attention.'],
  ['03', 'We recommend.', 'A clear, prioritised plan with transparent pricing.'],
  ['04', 'We support.', 'Once-off projects or ongoing support, whichever suits you.'],
];

function BookingButton({ children = 'Book a free 20-minute HR check-in', light = false }) {
  return <a className={`button ${light ? 'button-light' : ''}`} href={bookingHref}>{children}</a>;
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="serif">{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export function KRMHome() {
  return (
    <>
      <section className="home-hero krm-home-hero">
        <div className="home-hero-mark"><span className="logo-mark logo-mark-dark">KRM</span></div>
        <div className="content hero-content">
          <span className="eyebrow eyebrow-light">KRM Human Capital Solutions</span>
          <h1 className="serif">Build a better workplace. Protect your business.</h1>
          <p>We help South African SMEs build workplaces where people are hired well, treated fairly, and supported to grow, while keeping the business compliant and protected.</p>
          <div className="hero-actions">
            <BookingButton light />
            <Link className="text-link text-link-light" to="/services">Explore our HR services</Link>
          </div>
        </div>
      </section>

      <section className="band band-tint">
        <div className="content split">
          <div>
            <span className="eyebrow">Why KRM Human Capital Solutions</span>
            <h2 className="serif">People first. Practical support. Clear direction.</h2>
          </div>
          <p>Good HR should help people do their best work while giving business owners confidence that important workplace responsibilities are being handled fairly and carefully.</p>
        </div>
        <div className="content krm-reasons">
          {reasons.map(([title, text]) => (
            <article className="krm-reason" key={title}>
              <span className="krm-check">✓</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="content section-pad">
        <SectionTitle eyebrow="How we can help" title="Practical HR support at every stage." text="From bringing the right people into your business to keeping workplace processes clear and compliant, KRM helps you focus on running and growing your team." />
        <div className="krm-service-cards">
          {serviceGroups.map((service) => (
            <Link className="krm-service-card" to="/services" key={service.number}>
              <span>{service.number}</span>
              <h3 className="serif">{service.title}</h3>
              <p>{service.intro}</p>
              <small>Explore services ↗</small>
            </Link>
          ))}
        </div>
        <div className="krm-inline-cta"><BookingButton>Not sure where to start? Book a free HR check-in →</BookingButton></div>
      </section>

      <section className="band band-teal">
        <div className="content centered krm-how-heading">
          <span className="eyebrow eyebrow-light">How it works</span>
          <h2 className="serif">A clear way forward, together.</h2>
          <p>Start with a conversation. Leave with a better understanding of what your business needs next.</p>
        </div>
        <div className="content krm-steps">
          {steps.map(([number, title, text]) => (
            <article className="krm-step" key={number}>
              <span>{number}</span><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content section-pad krm-industries">
        <div>
          <SectionTitle eyebrow="Who we work with" title="HR support that fits your business." text="We support businesses in construction, mining, IT, and logistics, from owner-managed SMEs to growing teams that don’t yet have an in-house HR department." />
          <BookingButton />
        </div>
        <div className="krm-industry-list" aria-label="Industries served">
          {['Construction', 'Mining', 'IT', 'Logistics'].map((industry, index) => (
            <div key={industry}><span>0{index + 1}</span><strong>{industry}</strong></div>
          ))}
        </div>
      </section>

      <section className="cta krm-final-cta">
        <div className="content">
          <span className="eyebrow">Start with a conversation</span>
          <h2 className="serif">Let’s make your next HR decision clearer.</h2>
          <p>Book a free 20-minute HR check-in to talk through your team, your challenges, and where KRM can help.</p>
          <BookingButton />
        </div>
      </section>
    </>
  );
}

export function KRMServices() {
  return (
    <>
      <section className="page-intro">
        <div className="content">
          <span className="eyebrow">Human Capital Solutions</span>
          <h1 className="serif">Practical HR support for growing businesses.</h1>
          <p>From hiring and development to fair workplace processes and compliance, KRM helps South African SMEs support their people and protect their business.</p>
          <div className="krm-services-intro-cta"><BookingButton /></div>
        </div>
      </section>
      <section className="content section-pad krm-service-details">
        {serviceGroups.map((service) => (
          <article className="krm-service-detail" key={service.number}>
            <div className="krm-service-detail-number">{service.number}</div>
            <div>
              <h2 className="serif">{service.title}</h2>
              <p className="krm-service-intro">{service.intro}</p>
              <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </article>
        ))}
      </section>
      <section className="band band-tint">
        <div className="content centered krm-services-close">
          <span className="eyebrow">Not sure where to start?</span>
          <h2 className="serif">Let’s talk through what your business needs.</h2>
          <p>A free 20-minute HR check-in is a simple first step. We’ll discuss your situation and help identify what may need attention.</p>
          <BookingButton />
        </div>
      </section>
    </>
  );
}
