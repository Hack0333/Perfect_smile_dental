import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/images/logo/logo.png';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Doctors', to: '/doctors' },
  { name: 'Gallery', to: '/gallery' },
  { name: 'Testimonials', to: '/testimonials' },
  { name: 'Blog', to: '/blog' },
  { name: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-[color:var(--page-surface)]/95 border-b border-[color:var(--border)] shadow-xl backdrop-blur-xl'
        : 'bg-transparent'
    }`}>
      <div className="w-full max-w-6xl mx-auto px-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoImg} alt="Perfect Smile Logo" className="w-11 h-11 rounded-2xl border border-[color:var(--border)] bg-[color:var(--page-bg)] object-contain" />
          <div className="flex flex-col">
            <span className="font-title text-xl font-extrabold text-[color:var(--text-primary)] leading-none">Perfect Smile</span>
            <span className="text-[10px] font-medium text-[color:var(--text-secondary)] uppercase tracking-wider mt-0.5">Dental Care & Implant Centre</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-300 ${isActive ? 'text-dental-blue dark:text-cyber-cyan' : 'text-[color:var(--text-secondary)] hover:text-dental-blue dark:text-[color:var(--text-muted)] dark:hover:text-cyber-cyan'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/appointment"
            className="rounded-full bg-dental-blue px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-dental-blue/20 transition duration-300 hover:-translate-y-0.5 hover:bg-dental-blue-dark dark:bg-cyber-cyan dark:hover:bg-cyber-cyan-dark"
          >
            Book Appointment
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[color:var(--text-secondary)] dark:text-[color:var(--text-primary)] cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed left-0 w-full bg-[color:var(--page-surface)] border-t border-[color:var(--border)] z-80 flex flex-col px-6 py-8 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } ${
        isScrolled ? 'top-16 h-[calc(100vh-64px)]' : 'top-20 h-[calc(100vh-80px)]'
      }`}>
        <div className="flex max-h-[calc(100vh-5rem)] flex-col gap-4 overflow-y-auto pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="font-title text-lg font-semibold text-[color:var(--text-primary)] py-2 border-b border-[color:var(--border)] hover:text-[color:var(--primary)]"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/appointment"
            onClick={() => setIsOpen(false)}
            className="w-full rounded-full bg-dental-blue py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-dental-blue-dark dark:bg-cyber-cyan dark:hover:bg-cyber-cyan-dark"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
}
