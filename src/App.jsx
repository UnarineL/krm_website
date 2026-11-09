import { Link, Routes, Route } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import Vacancies from './Vacancies';
import { KRMHome, KRMServices, KRMServicePage, PillarsPage, HowWeWorkPage } from './KRMContent';
import {
  Legacy,
  HRTemplates,
  WorkplaceRiskCheck,
  DigitalSolutions,
  Contact,
} from './pages';

function NotFound() {
  return (
    <section className="content section-pad krm-not-found">
      <span className="eyebrow">404 · Page not found</span>
      <h1 className="serif">This page isn't here.</h1>
      <p>The page may have moved or the address may be incorrect. You can return to the KRM homepage or explore our services.</p>
      <div className="hero-actions">
        <Link className="button" to="/">Back to Home</Link>
        <Link className="text-link" to="/services">Explore Services</Link>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<KRMHome />} />
        <Route path="/legacy" element={<Legacy />} />
        <Route path="/services" element={<KRMServices />} />
        <Route path="/service-pillars" element={<PillarsPage />} />
        <Route path="/how-we-work" element={<HowWeWorkPage />} />
        <Route path="/services/:slug" element={<KRMServicePage />} />
        <Route path="/hr-templates" element={<HRTemplates />} />
        <Route path="/workplace-risk-check" element={<WorkplaceRiskCheck />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/digital-solutions" element={<DigitalSolutions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </SiteLayout>
  );
}
