import { Link } from 'react-router-dom';
import './vacancies.css';

const vacancyPlaceholders = [
  {
    number: '01',
    title: 'Previous vacancy',
    status: 'Details to be confirmed',
    text: 'KRM will add the role title, advert, requirements and application details for this past vacancy.',
  },
  {
    number: '02',
    title: 'Previous vacancy',
    status: 'Details to be confirmed',
    text: 'This listing is a review placeholder. Confirmed vacancy information will replace it before publication.',
  },
  {
    number: '03',
    title: 'Previous vacancy',
    status: 'Details to be confirmed',
    text: 'Additional historical vacancies can be included here once the final list and supporting information are supplied.',
  },
];

export default function Vacancies() {
  return (
    <>
      <section className="vacancies-hero">
        <div className="content vacancies-hero-inner">
          <span className="eyebrow eyebrow-light">Careers at KRM</span>
          <h1 className="serif">Find your next opportunity.</h1>
          <p>Explore vacancy announcements shared by KRM Human Capital Solutions. This page is being prepared for the previous vacancies and further details KRM would like to publish.</p>
        </div>
      </section>

      <section className="content vacancies-section">
        <div className="vacancies-heading">
          <div>
            <span className="eyebrow">Vacancies</span>
            <h2 className="serif">Previous opportunities</h2>
          </div>
          <p>Past advertisements will be organised here so visitors can review each opportunity and its relevant application information.</p>
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

        <p className="vacancies-review-note">Review draft: these are layout placeholders, not live job adverts. Vacancy titles, closing dates, requirements and application instructions should be confirmed by KRM before this page is published.</p>
      </section>

      <section className="vacancies-contact">
        <div className="content vacancies-contact-inner">
          <div>
            <span className="eyebrow eyebrow-light">Stay connected</span>
            <h2 className="serif">Have a question about an opportunity?</h2>
            <p>Contact KRM for assistance with vacancy information.</p>
          </div>
          <Link className="button button-light" to="/contact">Contact KRM</Link>
        </div>
      </section>
    </>
  );
}
