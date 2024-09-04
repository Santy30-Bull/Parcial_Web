import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { ErrorComponent } from './components/ErrorComponent';
import { Navbar } from './components/NavBar';
import { HomePage } from './components/pages/HomePage';
import { ContactUs } from './components/ContactUs';
import { SecretPage } from './components/pages/SecretPage';

function AppContent() {
  const location = useLocation();
  const isSecretPage = location.pathname === '/1234/secret';
  return (
    <>
      {!isSecretPage && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/1234/secret" element={<SecretPage />} />
        <Route path="*" element={<ErrorComponent />} />
      </Routes>
      {!isSecretPage && <ContactUs />}
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
