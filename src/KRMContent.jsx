import { Link, useParams } from 'react-router-dom';

const assessmentHref = 'mailto:info@krmhcs.co.za?subject=Book%20a%20KRM%20Compliance%20Assessment';
const consultationHref = 'mailto:info@krmhcs.co.za?subject=Request%20a%20Free%20KRM%20Consultation';

function BookingLink({ href = assessmentHref, children, light = false }) {
  return <a className={`button ${light ? 'button-light' : ''}`} href={href}>{children}</a>;
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
      <div className="home-hero-mark"><span className="logo-mark logo-mark-dark">KRM</span></div>
      <div className="content hero-content">
        <span className="eyebrow eyebrow-light">The SME Employment Compliance and People Partner</span>
        <h1 className="serif">HR Compliance and People Solutions for Growing South African SMEs</h1>
        <p>We help SMEs stay compliant, reduce employment risk, and build productive workplaces through practical HR solutions, without the cost of a full-time HR department.</p>
        <div className="hero-actions">
          <BookingLink light>Book a Compliance Assessment</BookingLink>
          <BookingLink href={consultationHref} light>Request a Free Consultation</BookingLink>
        </div>
      </div>
    </section>

    <section className="band band-tint">
      <div className="content split">
        <div><span className="eyebrow">A practical partner for SMEs</span><h2 className="serif">Clear advice. Less uncertainty. Stronger workplaces.</h2></div>
        <p>KRM Human Capital Solutions helps South African businesses make sense of employment responsibilities, manage workplace risk and put practical people processes in place. Get the support you need without employing a full-time HR department.</p>
      </div>
    </section>

    <section className="content section-pad">
      <SectionTitle eyebrow="The KRM approach" title="Three pillars. One practical partner." text="Every KRM service sits within Compliance, Capability or Culture, helping you find the right support for your business." />
      <div className="krm-pillars-grid">
        {pillars.map((pillar) => <article className={`krm-pillar-card ${pillar.className}`} key={pillar.name}>
          <span className="krm-pillar-number">{pillar.number}</span>
          <h3 className="serif">{pillar.name}</h3>
          <p>{pillar.summary}</p>
          <ul>{pillar.services.map((service) => <li key={service}>{service}</li>)}</ul>
          <Link className="text-link" to={pillar.href}>Explore {pillar.name} →</Link>
        </article>)}
      </div>
    </section>

    <section className="band band-teal">
      <div className="content split krm-featured-assessment">
        <div><span className="eyebrow eyebrow-light">Start with compliance</span><h2 className="serif">Know what needs attention first.</h2></div>
        <div><p>A KRM Compliance Assessment helps identify gaps, highlight potential risks and map practical next steps. The scope is tailored to your business and the requirements that apply to it.</p><BookingLink href={assessmentHref} light>Book a Compliance Assessment</BookingLink></div>
      </div>
    </section>

    <section className="content section-pad">
      <SectionTitle eyebrow="How it works" title="A clear way forward, together." text="Start with a conversation and leave with a better understanding of what your business needs next." />
      <div className="krm-steps">
        {[
          ['01', 'Talk to us', 'Tell us about your business and what you need help with.'],
          ['02', 'We assess', 'Review the situation and identify the areas that need attention.'],
          ['03', 'We recommend', 'Receive a practical way forward and a clear quotation.'],
          ['04', 'We support', 'Choose the once-off service or ongoing support that fits.'],
        ].map(([number, title, text]) => <article className="krm-step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </section>

    <section className="band band-tint">
      <div className="content split">
        <div><span className="eyebrow">Flexible HR support</span><h2 className="serif">Your HR Department, Your Way.</h2></div>
        <div><p>Choose monthly retainer support or a tailored package around your business needs. We agree the scope and deliverables with you, so you know what is included.</p><BookingLink href={consultationHref}>Request a Free Consultation</BookingLink></div>
      </div>
    </section>

    <section className="content section-pad">
      <SectionTitle eyebrow="Resources" title="Practical guidance for everyday HR." text="We are building a resource library with useful articles, checklists and guides for South African SMEs." />
      <div className="krm-resource-preview">
        {['How to Register for COIDA', 'Employee Contracts Every SME Needs', 'Common UIF Mistakes Employers Make'].map((title, index) => <article key={title}><span>0{index + 1}</span><h3 className="serif">{title}</h3><p>Coming soon. Practical guidance for employers and growing teams.</p></article>)}
      </div>
      <Link className="text-link" to="/hr-templates">Explore HR Resources →</Link>
    </section>

    <section className="cta krm-final-cta">
      <div className="content"><span className="eyebrow">Start with a conversation</span><h2 className="serif">Let's make your next HR decision clearer.</h2><p>Tell us what your business needs. We will discuss the right next step and provide a quotation where appropriate.</p><div className="hero-actions"><BookingLink>Book a Compliance Assessment</BookingLink><BookingLink href={consultationHref}>Request a Free Consultation</BookingLink></div></div>
    </section>
  </>;
}

export function KRMServices() {
  return <>
    <section className="page-intro">
      <div className="content">
        <span className="eyebrow">KRM Services</span>
        <h1 className="serif">Employment compliance and people support for SMEs.</h1>
        <p>Explore our services across Compliance, Capability and Culture. We will help you understand the options and request a quote for the support you need.</p>
        <div className="krm-services-intro-cta"><BookingLink>Book a Compliance Assessment</BookingLink><BookingLink href={consultationHref}>Request a Free Consultation</BookingLink></div>
      </div>
    </section>
    <section className="content section-pad">
      <SectionTitle eyebrow="Our service pillars" title="Find the support your business needs." />
      <div className="krm-pillar-shortcuts">{pillars.map((pillar) => <a key={pillar.name} href={pillar.href}><span>{pillar.number}</span><strong>{pillar.name}</strong><small>Explore pillar ↓</small></a>)}</div>
      <div className="krm-services-catalogue">
        {serviceSections.map((service) => <article className="krm-service-detail" id={service.id} key={service.id}>
          <div className="krm-service-detail-number">{service.number}</div>
          <div>
            <span className="eyebrow">{service.pillar}</span>
            <h2 className="serif">{service.title}</h2>
            <p className="krm-service-intro">{service.intro}</p>
            <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
            <p className="krm-deliverables"><strong>Possible deliverables:</strong> {service.deliverables}</p>
            <div className="krm-service-card-actions"><Link className="text-link" to={`/services/${service.id}`}>View service details →</Link><BookingLink href={consultationHref}>Request a Quote</BookingLink></div>
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
    <section className="page-intro">
      <div className="content">
        <span className="eyebrow">{service.pillar} · KRM Services</span>
        <h1 className="serif">{service.title}</h1>
        <p>{service.intro}</p>
        <div className="krm-services-intro-cta"><BookingLink href={consultationHref}>Request a Quote</BookingLink><BookingLink href={assessmentHref}>Book a Compliance Assessment</BookingLink></div>
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
      <div className="content centered krm-services-close"><span className="eyebrow">Next step</span><h2 className="serif">Let's discuss what your business needs.</h2><p>Tell us about your requirements and we will discuss the most appropriate next step.</p><BookingLink href={consultationHref}>Request a Quote or Consultation</BookingLink><p><Link className="text-link" to="/services">← Back to all services</Link></p></div>
    </section>
  </>;
}
