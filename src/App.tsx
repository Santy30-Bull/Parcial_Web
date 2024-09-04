import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { ErrorComponent } from './components/ErrorComponent';
import { Navbar } from './components/NavBar';
import { HomePage } from './components/pages/HomePage';
import { Footer } from './components/Footer';
import { SecretPage } from './components/pages/SecretPage';
import { EventPage } from './components/pages/EventsPage';
import { MakeupProductsPage } from './components/pages/MakeupProductsPage';
import {ModelsPage} from './components/pages/ModelsPage';
import {SalesPage} from './components/pages/SalesPage';
import {ContactUsPage} from './components/pages/ContactPage';

function AppContent() {
  const location = useLocation();
  const isSecretPage = location.pathname === '/1234/secret';
  return (
    <>
      {!isSecretPage && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path='/products' element={<MakeupProductsPage />} />
        <Route path="/models" element={<ModelsPage />} />
        <Route path="/sales" element={<SalesPage/>} />
        <Route path="/contact" element={<ContactUsPage/>} />
        <Route path="/1234/secret" element={<SecretPage />} />
        <Route path="*" element={<ErrorComponent />} />
      </Routes>
      {!isSecretPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
