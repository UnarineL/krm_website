import { Link, useParams } from 'react-router-dom';
import { Logo } from './components/SiteLayout';

const assessmentHref = 'mailto:info@krmhcs.co.za?subject=Book%20a%20KRM%20Compliance%20Assessment';
const consultationHref = 'mailto:info@krmhcs.co.za?subject=Request%20a%20Free%20KRM%20Consultation';

function BookingLink({ children, light = false }) {
  return <Link className={`button ${light ? 'button-light' : ''}`} to="/contact">{children}</Link>;
}

function SectionTitle({ eyebrow, title, text }) {
  return <div className="section-heading">
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2 className="serif">{title}</h2>
    {text && <p>{text}</p>}
  </div>;
}

const pillars = [
  {
    number: '01',
    name: 'Compliance',
    summary: 'Protect your business with practical employment compliance support.',
    services: ['UIF and COIDA support', 'Labour-law compliance reviews', 'HR and employee-file audits', 'Employment contracts and policies'],
    href: '/services/compliance',
    className: 'compliance',
  },
  {
    number: '02',
    name: 'Capability',
    summary: 'Give your people and managers the structure to perform.',
    services: ['Affordable SME recruitment', 'Performance management', 'KPIs, KPAs and SMART goals', 'Leadership and manager support'],
    href: '/services/recruitment',
    className: 'capability',
  },
  {
    number: '03',
    name: 'Culture',
    summary: 'Build healthier workplaces and guide teams through change.',
    services: ['Employee and labour relations', 'Organisational design', 'Change management', 'Employee engagement'],
    href: '/services/employee-relations',
    className: 'culture',
  },
];

const serviceSections = [
  {
    id: 'compliance',
    number: '01',
    pillar: 'Compliance',
    title: 'Employment Compliance',
    heroLines: ['Employment', 'Compliance'],
    intro: 'Understand where your business stands, identify employment risks, and get a clear plan for what to address first.',
    items: ['UIF registration and maintenance', 'COIDA registration and Return of Earnings', 'Letter of Good Standing support', 'Employment Equity support where applicable', 'Labour-law compliance audits and BCEA reviews', 'HR file and employee record audits'],
    deliverables: 'Compliance report, risk assessment, prioritised action plan and compliance tracking.',
  },
  {
    id: 'documentation',
    number: '02',
    pillar: 'Compliance',
    title: 'Contracts, Policies & HR Documentation',
    heroLines: ['Contracts, Policies &', 'HR Documentation'],
    intro: 'Create clearer, more consistent employment documentation tailored to your workplace and reviewed for relevant requirements.',
    items: ['Permanent, fixed-term and executive contracts', 'Independent contractor agreements and probation clauses', 'Leave, disciplinary, grievance and remote-work policies', 'POPIA-related employee policies, harassment and whistleblowing policies', 'Job descriptions, offer letters, promotion letters and warning templates', 'Employee handbooks and HR starter packs'],
    deliverables: 'A tailored HR starter pack, employee handbook or policy manual based on your needs.',
  },
  {
    id: 'recruitment',
    number: '03',
    pillar: 'Capability',
    title: 'Affordable SME Recruitment',
    heroLines: ['Affordable SME', 'Recruitment'],
    intro: 'Recruitment support designed around small and growing businesses, not just filling a vacancy.',
    items: ['Job profiling and role requirements', 'Recruitment advertising and candidate screening', 'Interviews and reference checks', 'Competency-based interview guides', 'Onboarding support', 'Recruitment Process Outsourcing (RPO) options'],
    deliverables: 'A clearer recruitment process, structured candidate assessment and onboarding support.',
  },
  {
    id: 'performance',
    number: '04',
    pillar: 'Capability',
    title: 'Performance Management',
    heroLines: ['Performance', 'Management'],
    intro: 'Help people understand what good performance looks like and give managers a fair, structured way to support it.',
    items: ['KPI, KPA and SMART goal development', 'Performance review templates and frameworks', 'Probation management', 'Manager coaching', 'Performance Improvement Plans (PIPs)'],
    deliverables: 'Individual or departmental scorecards and a practical quarterly review framework.',
  },
  {
    id: 'employee-relations',
    number: '05',
    pillar: 'Culture',
    title: 'Employee & Labour Relations',
    heroLines: ['Employee & Labour', 'Relations'],
    intro: 'Practical guidance through sensitive workplace matters, with fair processes and appropriate documentation.',
    items: ['Disciplinary processes and hearing chairing', 'Grievance investigations', 'Poor-performance and incapacity processes', 'Retrenchment process support', 'CCMA preparation'],
    deliverables: 'Process guidance and documentation shaped to the matter and the applicable requirements.',
  },
  {
    id: 'organisation-change',
    number: '06',
    pillar: 'Culture',
    title: 'Organisational Development & Change',
    heroLines: ['Organisational', 'Development & Change'],
    intro: 'Support organisations as roles, structures, systems and working practices evolve.',
    items: ['Organisational structure reviews and role clarification', 'Workforce planning and job evaluation', 'Restructuring and merger support', 'New-system implementation and culture change', 'Stakeholder analysis and change-impact assessment'],
    deliverables: 'Depending on project scope: communication plan, readiness survey and change roadmap.',
  },
  {
    id: 'outsourced-hr',
    number: '07',
    pillar: 'All three pillars',
    title: 'Outsourced HR Support',
    heroLines: ['Outsourced HR', 'Support'],
    intro: 'Access ongoing HR support without the cost of building a full in-house department.',
    items: ['Monthly HR support retainers', 'Tailored packages for defined business needs', 'Compliance follow-ups and HR administration', 'Manager guidance and employee-process support'],
    deliverables: 'Agreed scope, service boundaries and support rhythm defined with each client.',
  },
];

export function KRMHome() {
  return <>
    <section className="home-hero krm-home-hero">
      <div className="home-hero-mark"><Logo dark /></div>
      <div className="content hero-content">
        <span className="eyebrow eyebrow-light">The SME Employment Compliance and People Partner</span>
        <h1 className="serif">HR Compliance and People Solutions for Growing South African SMEs</h1>
        <p>We help SMEs stay compliant, reduce employment risk, and build productive workplaces through practical HR solutions, without the cost of a full-time HR department.</p>
      </div>
    </section>

    <section className="content section-pad krm-home-intro">
      <SectionTitle eyebrow="The KRM approach" title="Practical people support for growing businesses." text="From employment compliance to stronger teams and healthier workplace cultures, KRM helps South African SMEs understand what they need and take the next step with confidence." />
      <div className="krm-home-links">
        <Link className="button" to="/service-pillars">Explore our service pillars</Link>
        <Link className="text-link" to="/how-we-work">See how we work →</Link>
      </div>
    </section>

    <section className="cta krm-final-cta">
      <div className="content"><span className="eyebrow">Start with a conversation</span><h2 className="serif">Let's make your next HR decision clearer.</h2><p>Tell us what your business needs. We will discuss the right next step and provide a quotation where appropriate.</p><div className="hero-actions"><BookingLink>Book a Compliance Assessment</BookingLink><Link className="button" to="/contact">Request a Free Consultation</Link></div></div>
    </section>
  </>;
}

export function PillarsPage() {
  return <>
    <section className="page-intro page-intro-services">
      <div className="page-intro-mark"><Logo dark /></div>
      <div className="content">
        <span className="eyebrow">The KRM approach</span>
        <h1 className="serif">Three pillars. One practical partner.</h1>
        <p>Every KRM service sits within Compliance, Capability or Culture, helping you find the right support for your business.</p>
      </div>
    </section>
    <section className="content section-pad">
      <div className="krm-pillars-grid">
        {pillars.map((pillar) => <article className={`krm-pillar-card ${pillar.className}`} key={pillar.name}>
          <span className="krm-pillar-number">{pillar.number}</span>
          <h2 className="serif">{pillar.name}</h2>
          <p>{pillar.summary}</p>
          <ul>{pillar.services.map((service) => <li key={service}>{service}</li>)}</ul>
          <Link className="text-link" to={pillar.href}>Explore {pillar.name} →</Link>
        </article>)}
      </div>
      <div className="krm-page-crosslinks">
        <Link className="text-link" to="/services">View the full services catalogue →</Link>
        <Link className="text-link" to="/how-we-work">See how we work →</Link>
      </div>
    </section>
    <section className="band band-tint">
      <div className="content centered krm-services-close"><span className="eyebrow">Find the right support</span><h2 className="serif">Let's talk about what your business needs.</h2><p>We can help you identify the right starting point and agree practical next steps.</p><BookingLink>Request a Consultation</BookingLink></div>
    </section>
  </>;
}

export function HowWeWorkPage() {
  const steps = [
    ['01', 'Talk to us', 'Tell us about your business and what you need help with.'],
    ['02', 'We assess', 'We review the situation and identify the areas that need attention.'],
    ['03', 'We recommend', 'You receive a practical way forward and a clear quotation.'],
    ['04', 'We support', 'Choose the once-off service or ongoing support that fits.'],
  ];

  return <>
    <section className="page-intro page-intro-services">
      <div className="page-intro-mark"><Logo dark /></div>
      <div className="content">
        <span className="eyebrow">How we work</span>
        <h1 className="serif">A clear way forward, together.</h1>
        <p>Start with a conversation and leave with a better understanding of what your business needs next.</p>
      </div>
    </section>
    <section className="content section-pad krm-how-page">
      <div className="krm-steps">
        {steps.map(([number, title, text]) => <article className="krm-step" key={number}><span>{number}</span><h2>{title}</h2><p>{text}</p></article>)}
      </div>
    </section>
    <section className="band band-tint">
      <div className="content centered krm-services-close"><span className="eyebrow">Your next step</span><h2 className="serif">Let's start with a conversation.</h2><p>Tell us what is happening in your business and we will help you understand the next step.</p><BookingLink>Request a Free Consultation</BookingLink></div>
    </section>
  </>;
}

export function KRMServices() {
  return <>
    <section className="page-intro page-intro-services">
      <div className="page-intro-mark"><Logo dark /></div>
      <div className="content">
        <span className="eyebrow">KRM Services</span>
        <h1 className="serif">Employment compliance and people support for SMEs.</h1>
        <p>Explore our services across Compliance, Capability and Culture. We will help you understand the options and request a quote for the support you need.</p>
      </div>
    </section>
    <section className="content section-pad krm-services-section">
      <SectionTitle eyebrow="Our services" title="Practical support for every stage of your business." text="Explore the services that help your business stay compliant, strengthen its people practices and build a healthier workplace." />
      <div className="krm-services-grid">
        {serviceSections.map((service) => <article className="krm-service-tile" key={service.id}>
          <span className="eyebrow">{service.pillar}</span>
          <h2>{service.title}</h2>
          <p>{service.intro}</p>
          <Link className="button" to={`/services/${service.id}`}>Learn More</Link>
        </article>)}
      </div>
    </section>
    <section className="band band-tint">
      <div className="content centered krm-services-close"><span className="eyebrow">Not sure where to start?</span><h2 className="serif">Let's talk through what your business needs.</h2><p>Request a free consultation. We can discuss your situation, identify the relevant service and outline the next steps.</p><BookingLink href={consultationHref}>Request a Free Consultation</BookingLink></div>
    </section>
  </>;
}


export function KRMServicePage() {
  const { slug } = useParams();
  const service = serviceSections.find((item) => item.id === slug);

  if (!service) {
    return <section className="content section-pad"><span className="eyebrow">KRM Services</span><h1 className="serif">Service not found</h1><p>This service page may have moved. Explore the full list of KRM services instead.</p><Link className="button" to="/services">View all services</Link></section>;
  }

  return <>
    <section className="page-intro page-intro-services krm-service-page-hero">
      <div className="page-intro-mark"><Logo dark /></div>
      <div className="content">
        <span className="eyebrow">{service.pillar} · KRM Services</span>
        <h1 className="serif">{service.heroLines.map((line) => <span key={line}>{line}</span>)}</h1>
        <p>{service.intro}</p>
      </div>
    </section>
    <section className="content section-pad krm-service-page-body krm-service-page-body-single">
      <div className="krm-service-page-list">
        <h2 className="serif">Services</h2>
        <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
        <div className="krm-deliverables"><strong>Possible deliverables:</strong> {service.deliverables}</div>
        <p className="small-note">The exact service scope and deliverables depend on your organisation's needs and the agreed quotation. KRM support is not a guarantee of a particular legal or regulatory outcome.</p>
      </div>
    </section>
    <section className="band band-tint">
      <div className="content centered krm-services-close"><span className="eyebrow">Next step</span><h2 className="serif">Let's discuss what your business needs.</h2><p>Tell us about your requirements and we will discuss the most appropriate next step.</p><Link className="button" to="/contact">Request a Quote or Consultation</Link><p><Link className="text-link" to="/services">← Back to all services</Link></p></div>
    </section>
  </>;
}
