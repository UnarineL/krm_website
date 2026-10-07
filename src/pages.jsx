import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './components/SiteLayout';

const digitalServices = [
  {
    title: 'Custom Website Design',
    text: 'Tailored websites that reflect your brand identity, built to engage users and convert visitors into customers.',
  },
  {
    title: 'E-Commerce Website Design',
    text: 'Scalable online stores designed for seamless shopping experiences, secure transactions, and optimized conversions.',
  },
  {
    title: 'Application Design',
    text: 'Intuitive, visually refined applications engineered to deliver value and enhance user engagement.',
  },
  {
    title: 'Website Support & Maintenance',
    text: 'Dedicated post-launch support to keep your site secure, updated, and aligned with your evolving business goals.',
  },
];

const process = [
  ['01', 'Discover', 'Understand your brand, goals and audience.'],
  ['02', 'Design', 'Concepts built around your identity and content.'],
  ['03', 'Build', 'Development on WordPress CMS, with integrations where needed.'],
  ['04', 'Launch', 'Site goes live within the 7–17 day turnaround window.'],
  ['05', 'Support', 'Ongoing maintenance keeps the site current.'],
];

const riskQuestions = [
  'Are your employee contracts up to date and signed?',
  'Do you have a clear, written disciplinary process that you actually follow?',
  'Have you dealt with underperformance issues properly?',
  'Do your managers understand the difference between misconduct and poor performance?',
  'Have employees received, understood, and acknowledged workplace policies?',
  'Are employee records such as leave, contracts, warnings, and performance notes up to date?',
  'Would you be confident handling a CCMA case if one was opened against your business?',
  'Are incidents, warnings, and performance discussions documented consistently?',
  'Do you have a structured onboarding process for new employees?',
  'Are your contracts, policies, and workplace processes reviewed for applicable labour requirements?',
  'Are roles, responsibilities, and reporting lines clearly documented?',
];

const templates = [
  { title: 'HR policies and procedures', text: 'Practical documents for structuring consistent workplace processes.' },
  { title: 'Employment documentation', text: 'Templates supporting key employee lifecycle activities.' },
  { title: 'Performance management', text: 'Documents to help managers approach performance matters consistently.' },
  { title: 'Workplace relations', text: 'Resources for day-to-day employee relations and workplace administration.' },
];

function PageIntro({ eyebrow, title, text, dark = false }) {
  return (
    <section className={`page-intro ${dark ? 'page-intro-dark' : ''}`}>
      <div className="content">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="serif">{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="serif">{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function CTA({ title = "Let's build something great together.", text = 'Reach out and let’s talk about your goals, your timeline, and how we can help.' }) {
  return (
    <section className="cta">
      <div className="content">
        <h2 className="serif">{title}</h2>
        <p>{text}</p>
        <Link className="button" to="/contact">Get in touch</Link>
      </div>
    </section>
  );
}

export function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-mark"><Logo dark /></div>
        <div className="content hero-content">
          <span className="eyebrow eyebrow-light">Human Capital Solutions</span>
          <h1 className="serif">People, practice and progress.</h1>
          <p>Practical human capital support, workplace resources and digital solutions for organisations ready to move forward.</p>
          <div className="hero-actions">
            <Link className="button button-light" to="/services">Explore services</Link>
            <Link className="text-link text-link-light" to="/legacy">Discover KRM</Link>
          </div>
        </div>
      </section>

      <section className="band band-tint">
        <div className="content split">
          <div><span className="eyebrow">KRM</span><h2 className="serif">A practical partner for the work behind the work.</h2></div>
          <p>From people and workplace matters to practical resources and digital solutions, KRM brings structure to the areas that keep organisations moving.</p>
        </div>
      </section>

      <section className="content section-pad">
        <SectionHeading eyebrow="What we do" title="Clear support. Useful tools. Thoughtful solutions." />
        <div className="service-preview">
          <Link to="/services" className="service-preview-item"><span>01</span><strong>Human Capital & Consulting</strong><small>Explore</small></Link>
          <Link to="/hr-templates" className="service-preview-item"><span>02</span><strong>HR Templates</strong><small>Explore</small></Link>
          <Link to="/workplace-risk-check" className="service-preview-item"><span>03</span><strong>Workplace Risk Check</strong><small>Explore</small></Link>
          <Link to="/digital-solutions" className="service-preview-item"><span>04</span><strong>Digital Solutions</strong><small>Explore</small></Link>
        </div>
      </section>

      <section className="band band-teal">
        <div className="content centered">
          <span className="eyebrow eyebrow-light">Digital Solutions</span>
          <h2 className="serif">Collaborate with the World's Best</h2>
          <p>in design & development</p>
          <Link className="button button-light" to="/digital-solutions">Explore Digital Solutions</Link>
        </div>
      </section>

      <section className="content section-pad narrow-copy">
        <SectionHeading eyebrow="Legacy" title="Experience matters when the work matters." text="The KRM story, people and principles give context to the work we do today." />
        <Link className="text-link" to="/legacy">Explore the KRM legacy →</Link>
      </section>

      <CTA />
    </>
  );
}

export function Legacy() {
  return (
    <>
      <PageIntro
        eyebrow="Legacy"
        title="The story behind KRM."
        text="A considered look at the experience, principles and evolution behind the organisation."
      />
      <section className="content section-pad">
        <div className="editorial">
          <div>
            <span className="eyebrow">01 · The foundation</span>
            <h2 className="serif">Built around people, practical thinking and long-term value.</h2>
          </div>
          <p>Client-approved history and company milestones can live here. We have deliberately left this section ready for the confirmed KRM story rather than inventing a corporate history.</p>
        </div>
        <div className="editorial editorial-reverse">
          <div>
            <span className="eyebrow">02 · The approach</span>
            <h2 className="serif">Experience should make the next decision clearer.</h2>
          </div>
          <p>KRM’s legacy section is designed as an editorial story rather than a conventional list of dates, awards or generic claims.</p>
        </div>
      </section>
      <CTA title="Bring the next chapter into focus." />
    </>
  );
}

export function Services() {
  return (
    <>
      <PageIntro eyebrow="Services" title="Practical support across the employee lifecycle." text="A structured home for KRM’s human capital and consulting services." />
      <section className="content section-pad">
        <div className="service-list">
          <article className="service-detail">
            <span className="service-number">01</span>
            <div><h2 className="serif">Human Capital & Consulting</h2><p>Practical HR and workplace support shaped around the needs of each organisation.</p></div>
          </article>
          <article className="service-detail">
            <span className="service-number">02</span>
            <div><h2 className="serif">Workplace Compliance</h2><p>Support for building clearer policies, processes and workplace practices.</p></div>
          </article>
          <article className="service-detail">
            <span className="service-number">03</span>
            <div><h2 className="serif">HR Resources</h2><p>Useful templates and documents that make recurring HR work easier to manage.</p></div>
          </article>
          <article className="service-detail">
            <span className="service-number">04</span>
            <div><h2 className="serif">Workplace Risk</h2><p>A practical way to identify areas that may deserve closer attention.</p></div>
          </article>
        </div>
      </section>
      <CTA title="Need help with a workplace matter?" text="Tell us what you are dealing with and we can point you toward the right KRM service." />
    </>
  );
}

export function HRTemplates() {
  return (
    <>
      <PageIntro eyebrow="HR Templates" title="Useful documents for everyday HR work." text="A focused resource library for practical workplace administration and people management." />
      <section className="content section-pad">
        <div className="resource-grid">
          {templates.map((template, index) => (
            <article className="resource-card" key={template.title}>
              <span className="resource-index">0{index + 1}</span>
              <h2 className="serif">{template.title}</h2>
              <p>{template.text}</p>
              <button className="text-button" type="button">View resource →</button>
            </article>
          ))}
        </div>
        <p className="small-note">Template catalogue, pricing and access rules can be connected here once the KRM resource list is confirmed.</p>
      </section>
    </>
  );
}

export function WorkplaceRiskCheck() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = Object.values(answers).filter((answer) => answer === 'yes').length;
  const answered = Object.keys(answers).length;

  function answer(index, value) {
    setSubmitted(false);
    setAnswers((current) => ({ ...current, [index]: value }));
  }

  return (
    <>
      <PageIntro eyebrow="HR Compliance & Workplace Risk Check" title="See where your workplace may need attention." text="Answer a short set of practical questions to identify areas worth reviewing. This is an initial screening tool, not legal advice." />
      <section className="content section-pad">
        <div className="risk-intro">
          <div><span className="eyebrow">Assessment</span><h2 className="serif">Work through the questions at your own pace.</h2></div>
          <div className="risk-progress"><strong>{answered}/{riskQuestions.length}</strong><span>answered</span></div>
        </div>
        <div className="risk-list">
          {riskQuestions.map((question, index) => (
            <div className="risk-question" key={question}>
              <div><span>{String(index + 1).padStart(2, '0')}</span><p>{question}</p></div>
              <div className="answer-buttons">
                <button className={answers[index] === 'yes' ? 'selected' : ''} type="button" onClick={() => answer(index, 'yes')}>Yes</button>
                <button className={answers[index] === 'no' ? 'selected' : ''} type="button" onClick={() => answer(index, 'no')}>No</button>
              </div>
            </div>
          ))}
        </div>
        <div className="risk-submit">
          <button className="button" type="button" onClick={() => setSubmitted(true)} disabled={answered === 0}>See my risk result</button>
        </div>
        {submitted && (
          <div className="risk-result" role="status">
            <span className="eyebrow">Initial result</span>
            <h2 className="serif">{score} areas marked yes out of {answered} answered.</h2>
            <p>This screening highlights topics to review. A KRM consultation can provide context and determine the appropriate next step.</p>
            <Link className="button" to="/contact">Talk to KRM</Link>
          </div>
        )}
      </section>
    </>
  );
}

export function DigitalSolutions() {
  return (
    <>
      <section className="ds-hero">
        <div className="ds-logo-ring"><Logo dark /></div>
        <h1 className="serif">Collaborate with the World's Best</h1>
        <div className="ds-sub">in design &amp; development</div>
      </section>

      {digitalServices.map((service, index) => (
        <section className={`ds-band ${index % 2 ? 'teal' : 'tint'}`} key={service.title}>
          <div className="feature">
            <h2>{service.title}</h2>
            <p className={index % 2 === 0 ? 'serif feature-serif' : ''}>{service.text}</p>
          </div>
        </section>
      ))}

      <section className="ds-process content">
        <SectionHeading title="Our Process" />
        <div className="process-list">
          {process.map(([number, title, text]) => (
            <div className="process-step" key={number}>
              <span className="process-number">{number}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="ds-spec">
        <SectionHeading title="Launch Your Project" />
        <div className="spec-grid">
          <div><strong>7–17 Days</strong><span>Turnaround</span></div>
          <div><strong>WordPress</strong><span>CMS</span></div>
          <div><strong>Social & Email</strong><span>Integrations</span></div>
          <div><strong>1–8 Pages</strong><span>Scope</span></div>
        </div>
      </section>

      <section className="content ds-work">
        <SectionHeading title="Recent Work" />
        <div className="work-placeholder"><span>Projects will be added here</span></div>
      </section>

      <section className="content ds-faq">
        <SectionHeading title="FAQ" />
        {[
          ['How long does a project take?', '7–17 days, depending on scope.'],
          ['What platform is the site built on?', 'WordPress CMS.'],
          ['Do you support the site after launch?', 'Yes, dedicated post-launch support keeps the site secure, updated and aligned with your goals.'],
          ['Can you integrate social media and email?', 'Yes, social media and email integration is included.'],
        ].map(([q, a]) => <details className="faq-item" key={q}><summary>{q}</summary><p>{a}</p></details>)}
      </section>

      <section className="ds-promise"><p>“We don't just build websites — we craft digital experiences that inspire confidence, strengthen your brand, and drive business growth.”</p></section>
      <CTA title="Let's Build Something Great Together" text="Reach out and let's talk about your business goals, your timeline, and how we can help you get there." />
    </>
  );
}

export function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Let's talk about what you need." text="Tell KRM a little about your organisation, your challenge or the work you would like to discuss." />
      <section className="content section-pad contact-grid">
        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <label>Name<input name="name" placeholder="Your name" required /></label>
          <label>Email<input type="email" name="email" placeholder="you@example.com" required /></label>
          <label>Organisation<input name="organisation" placeholder="Organisation" /></label>
          <label>What can we help with?<textarea name="message" rows="7" placeholder="Tell us a little about what you need." required /></label>
          <button className="button" type="submit">Send enquiry</button>
        </form>
        <aside className="contact-side">
          <span className="eyebrow">Direct contact</span>
          <a href="mailto:info@krmhcs.co.za">info@krmhcs.co.za</a>
          <p>Phone and social details can be added here once confirmed.</p>
        </aside>
      </section>
    </>
  );
}