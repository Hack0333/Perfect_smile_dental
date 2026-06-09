import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const handleLScroll = (e) => {
      if (e.detail && e.detail.scroll) {
        setIsVisible(e.detail.scroll.y > 400);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    document.addEventListener('lscroll', handleLScroll);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      document.removeEventListener('lscroll', handleLScroll);
    };
  }, []);

  const scrollToTop = () => {
    if (typeof window === 'undefined') return;

    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center bg-dental-blue dark:bg-cyber-cyan text-white shadow-lg cursor-pointer transition-all duration-300 z-50 hover:bg-dental-blue-dark dark:hover:bg-cyber-cyan-dark hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'
      }`}
      aria-label="Scroll to top"
      id="scroll-to-top"
    >
      <ChevronUp size={24} />
    </button>
  );
}
