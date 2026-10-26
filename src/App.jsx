import { Routes, Route } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import Vacancies from './Vacancies';
import { KRMHome, KRMServices } from './KRMContent';
import {
  Legacy,
  HRTemplates,
  WorkplaceRiskCheck,
  DigitalSolutions,
  Contact,
} from './pages';

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<KRMHome />} />
        <Route path="/legacy" element={<Legacy />} />
        <Route path="/services" element={<KRMServices />} />
        <Route path="/hr-templates" element={<HRTemplates />} />
        <Route path="/workplace-risk-check" element={<WorkplaceRiskCheck />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/digital-solutions" element={<DigitalSolutions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </SiteLayout>
  );
}
