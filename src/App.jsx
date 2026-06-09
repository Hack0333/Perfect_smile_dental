import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './hooks/ThemeProvider';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import ServiceDetail from './pages/ServiceDetail';
import Doctors from './pages/Doctors';
import GalleryPage from './pages/GalleryPage';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import ContactPage from './pages/ContactPage';
import AppointmentPage from './pages/AppointmentPage';
import NotFound from './pages/NotFound';

function AppContent() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[color:var(--page-bg)] text-[color:var(--text-primary)]">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/service/:slug" element={<ServiceDetail />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
