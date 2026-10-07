import { Routes, Route } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import {
  Home,
  Legacy,
  Services,
  HRTemplates,
  WorkplaceRiskCheck,
  DigitalSolutions,
  Contact,
} from './pages';

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/legacy" element={<Legacy />} />
        <Route path="/services" element={<Services />} />
        <Route path="/hr-templates" element={<HRTemplates />} />
        <Route path="/workplace-risk-check" element={<WorkplaceRiskCheck />} />
        <Route path="/digital-solutions" element={<DigitalSolutions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </SiteLayout>
  );
}