import { Link, useParams } from 'react-router-dom';

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
    intro: 'Understand where your business stands, identify employment risks, and get a clear plan for what to address first.',
    items: ['UIF registration and maintenance', 'COIDA registration and Return of Earnings', 'Letter of Good Standing support', 'Employment Equity support where applicable', 'Labour-law compliance audits and BCEA reviews', 'HR file and employee record audits'],
    deliverables: 'Compliance report, risk assessment, prioritised action plan and compliance tracking.',
  },
  {
    id: 'documentation',
    number: '02',
    pillar: 'Compliance',
    title: 'Contracts, Policies & HR Documentation',
    intro: 'Create clearer, more consistent employment documentation tailored to your workplace and reviewed for relevant requirements.',
    items: ['Permanent, fixed-term and executive contracts', 'Independent contractor agreements and probation clauses', 'Leave, disciplinary, grievance and remote-work policies', 'POPIA-related employee policies, harassment and whistleblowing policies', 'Job descriptions, offer letters, promotion letters and warning templates', 'Employee handbooks and HR starter packs'],
    deliverables: 'A tailored HR starter pack, employee handbook or policy manual based on your needs.',
  },
  {
    id: 'recruitment',
    number: '03',
    pillar: 'Capability',
    title: 'Affordable SME Recruitment',
    intro: 'Recruitment support designed around small and growing businesses, not just filling a vacancy.',
    items: ['Job profiling and role requirements', 'Recruitment advertising and candidate screening', 'Interviews and reference checks', 'Competency-based interview guides', 'Onboarding support', 'Recruitment Process Outsourcing (RPO) options'],
    deliverables: 'A clearer recruitment process, structured candidate assessment and onboarding support.',
  },
  {
    id: 'performance',
    number: '04',
    pillar: 'Capability',
    title: 'Performance Management',
    intro: 'Help people understand what good performance looks like and give managers a fair, structured way to support it.',
    items: ['KPI, KPA and SMART goal development', 'Performance review templates and frameworks', 'Probation management', 'Manager coaching', 'Performance Improvement Plans (PIPs)'],
    deliverables: 'Individual or departmental scorecards and a practical quarterly review framework.',
  },
  {
    id: 'employee-relations',
    number: '05',
    pillar: 'Culture',
    title: 'Employee & Labour Relations',
    intro: 'Practical guidance through sensitive workplace matters, with fair processes and appropriate documentation.',
    items: ['Disciplinary processes and hearing chairing', 'Grievance investigations', 'Poor-performance and incapacity processes', 'Retrenchment process support', 'CCMA preparation'],
    deliverables: 'Process guidance and documentation shaped to the matter and the applicable requirements.',
  },
  {
    id: 'organisation-change',
    number: '06',
    pillar: 'Culture',
    title: 'Organisational Development & Change',
    intro: 'Support organisations as roles, structures, systems and working practices evolve.',
    items: ['Organisational structure reviews and role clarification', 'Workforce planning and job evaluation', 'Restructuring and merger support', 'New-system implementation and culture change', 'Stakeholder analysis and change-impact assessment'],
    deliverables: 'Depending on project scope: communication plan, readiness survey and change roadmap.',
  },
  {
    id: 'outsourced-hr',
    number: '07',
    pillar: 'All three pillars',
    title: 'Outsourced HR Support',
    intro: 'Access ongoing HR support without the cost of building a full in-house department.',
    items: ['Monthly HR support retainers', 'Tailored packages for defined business needs', 'Compliance follow-ups and HR administration', 'Manager guidance and employee-process support'],
    deliverables: 'Agreed scope, service boundaries and support rhythm defined with each client.',
  },
];

export function KRMHome() {
  return <>
    <section className="home-hero krm-home-hero">
      <div className="home-hero-mark" aria-hidden="true"><span className="logo-mark logo-mark-dark">KRM</span></div>
      <div className="content hero-content">
        <span className="eyebrow eyebrow-light">The SME Employment Compliance and People Partner</span>
        <h1 className="serif">HR Compliance and People Solutions for Growing South African SMEs</h1>
        <p>We help SMEs stay compliant, reduce employment risk, and build productive workplaces through practical HR solutions, without the cost of a full-time HR department.</p>
        <div className="hero-actions">
          <Link className="button button-light" to="/services">Explore KRM Services</Link>
          <Link className="text-link text-link-light" to="/contact">Talk to KRM</Link>
        </div>
      </div>
    </section>

    <section className="content section-pad krm-home-intro">
      <div className="krm-home-intro-heading">
        <span className="eyebrow">The KRM approach</span>
        <h2 className="serif">A practical partner for the work behind the work.</h2>
      </div>
      <div className="krm-home-intro-copy">
        <p>KRM helps South African SMEs create stronger people foundations through three connected areas of support: Compliance, Capability and Culture.</p>
        <p>Whether you are strengthening employment practices, supporting your managers or building a healthier workplace, we help you identify a practical next step.</p>
        <div className="krm-pillar-tags" aria-label="KRM service pillars">
          <span>Compliance</span>
          <span>Capability</span>
          <span>Culture</span>
        </div>
      </div>
    </section>

    <section className="content section-pad krm-home-services">
      <SectionTitle
        eyebrow="What KRM does"
        title="Clear support for the people side of your business."
        text="Explore the areas where KRM can help, from employment compliance to practical people support."
      />
      <div className="service-preview">
        <Link to="/services#compliance" className="service-preview-item">
          <span>01</span><strong>Employment Compliance</strong><small>Explore services</small>
        </Link>
        <Link to="/services#recruitment" className="service-preview-item">
          <span>02</span><strong>People & Performance</strong><small>Explore services</small>
        </Link>
        <Link to="/services#employee-relations" className="service-preview-item">
          <span>03</span><strong>Workplace Culture & Relations</strong><small>Explore services</small>
        </Link>
        <Link to="/digital-solutions" className="service-preview-item">
          <span>04</span><strong>Digital Solutions</strong><small>Explore services</small>
        </Link>
      </div>
      <Link className="text-link" to="/services">View all KRM services →</Link>
    </section>

    <section className="cta krm-final-cta">
      <div className="content">
        <span className="eyebrow">Start with a conversation</span>
        <h2 className="serif">Let's make your next HR decision clearer.</h2>
        <p>Tell us what your business needs. We will discuss the right next step and provide a quotation where appropriate.</p>
        <div className="hero-actions">
          <BookingLink>Book a Compliance Assessment</BookingLink>
          <Link className="button" to="/contact">Request a Free Consultation</Link>
        </div>
      </div>
    </section>
  </>;
}

export function KRMServices() {
  return <>
    <section className="page-intro page-intro-services">
      <div className="content">
        <span className="eyebrow">KRM Services</span>
        <h1 className="serif">Employment compliance and people support for SMEs.</h1>
        <p>Explore our services across Compliance, Capability and Culture. We will help you understand the options and request a quote for the support you need.</p>
      </div>
    </section>
    <section className="content section-pad">
      <SectionTitle eyebrow="Our service pillars" title="Find the support your business needs." />
      <div className="krm-pillar-shortcuts">{pillars.map((pillar) => <Link key={pillar.name} to={pillar.href}><span>{pillar.number}</span><strong>{pillar.name}</strong><small>Explore pillar ↓</small></Link>)}</div>
      <div className="krm-services-catalogue">
        {serviceSections.map((service) => <article className="krm-service-detail" id={service.id} key={service.id}>
          <div className="krm-service-detail-number">{service.number}</div>
          <div>
            <span className="eyebrow">{service.pillar}</span>
            <h2 className="serif">{service.title}</h2>
            <p className="krm-service-intro">{service.intro}</p>
            <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
            <p className="krm-deliverables"><strong>Possible deliverables:</strong> {service.deliverables}</p>
            <div className="krm-service-card-actions"><Link className="text-link" to={`/services/${service.id}`}>View service details →</Link><Link className="button" to="/contact">Request a Quote</Link></div>
          </div>
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
    <section className="page-intro page-intro-services">
      <div className="content">
        <span className="eyebrow">{service.pillar} · KRM Services</span>
        <h1 className="serif">{service.title}</h1>
        <p>{service.intro}</p>
      </div>
    </section>
    <section className="content section-pad krm-service-page-body">
      <div className="krm-service-page-copy">
        <span className="eyebrow">How we can help</span>
        <h2 className="serif">Practical support, shaped around your business.</h2>
        <p>We start by understanding your organisation, the issue you need to address and the requirements that apply. KRM then discusses an appropriate scope of support and provides a quotation before work begins.</p>
      </div>
      <div className="krm-service-page-list">
        <h2 className="serif">Services may include</h2>
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
