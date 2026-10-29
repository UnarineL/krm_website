import { Link } from 'react-router-dom';
import './vacancies.css';

const vacancyPlaceholders = [
  {
    number: '01',
    title: 'Current vacancies',
    status: 'Listings added when opportunities are confirmed',
    text: 'KRM will publish available roles here with the job description, requirements, closing date and application instructions.',
  },
];

export default function Vacancies() {
  return (
    <>
      <section className="vacancies-hero">
        <div className="content vacancies-hero-inner">
          <span className="eyebrow eyebrow-light">Careers at KRM</span>
          <h1 className="serif">Explore opportunities with KRM.</h1>
          <p>KRM Human Capital Solutions shares recruitment opportunities here when vacancy details are confirmed and ready for publication.</p>
        </div>
      </section>

      <section className="content vacancies-section">
        <div className="vacancies-heading">
          <div>
            <span className="eyebrow">Vacancies</span>
            <h2 className="serif">Current vacancies</h2>
          </div>
          <p>Each listing will include the role details, requirements, closing date and instructions for applying.</p>
        </div>

        <div className="vacancy-list">
          {vacancyPlaceholders.map((vacancy) => (
            <article className="vacancy-card" key={vacancy.number}>
              <span className="vacancy-number">{vacancy.number}</span>
              <div className="vacancy-copy">
                <span className="vacancy-status">{vacancy.status}</span>
                <h3 className="serif">{vacancy.title}</h3>
                <p>{vacancy.text}</p>
              </div>
              <span className="vacancy-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>

        <p className="vacancies-review-note">No specific vacancy details have been supplied for publication yet. Confirmed job adverts and application instructions should be added here before candidates are invited to apply.</p>
      </section>

      <section className="vacancies-contact">
        <div className="content vacancies-contact-inner">
          <div>
            <span className="eyebrow eyebrow-light">Stay connected</span>
            <h2 className="serif">Need more information about a vacancy?</h2>
            <p>Contact KRM with questions about a published opportunity or its application process.</p>
          </div>
          <Link className="button button-light" to="/contact">Contact KRM</Link>
        </div>
      </section>
    </>
  );
}
