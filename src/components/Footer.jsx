import { Link } from 'react-router-dom';
import { Heart, Phone, MapPin, Mail } from 'lucide-react';

const InstagramIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const treatments = [
    'Dental Implants',
    'Root Canal Treatment',
    'Braces & Aligners',
    'Teeth Whitening',
    'Smile Makeovers',
    'Laser Dentistry',
  ];

  return (
    <footer className="bg-[color:var(--page-surface)] text-[color:var(--text-secondary)]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-[color:var(--primary)]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--primary)] shadow-sm shadow-[rgba(14,165,233,0.15)]">
              Perfect Smile
            </div>
            <p className="text-lg font-semibold text-[color:var(--text-primary)]">Dental Care & Implant Centre</p>
            <p className="max-w-sm leading-7 text-[color:var(--text-secondary)]">
              Modern, comfortable, and affordable dental care in NST Colony, Dimapur. Your smile is our signature.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/perfectsmiledental" target="_blank" rel="noopener noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--page-surface)] text-[color:var(--text-secondary)] transition hover:border-cyber-cyan hover:text-cyber-cyan">
                <InstagramIcon size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--page-surface)] text-[color:var(--text-secondary)] transition hover:border-dental-blue hover:text-dental-blue">
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-[color:var(--text-primary)]">Quick Links</h4>
            <ul className="mt-6 space-y-3 text-sm text-[color:var(--text-secondary)]">
              <li>
                <Link to="/" className="transition hover:text-[color:var(--text-primary)]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition hover:text-[color:var(--text-primary)]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="transition hover:text-white">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="transition hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="transition hover:text-white">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-[color:var(--text-primary)]">Treatments</h4>
            <ul className="mt-6 space-y-3 text-sm text-[color:var(--text-secondary)]">
              {treatments.map((treatment) => (
                <li key={treatment}>
                  <Link to="/services" className="transition hover:text-[color:var(--text-primary)]">
                    {treatment}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-[color:var(--text-muted)]">Contact Info</h4>
            <ul className="mt-6 space-y-4 text-sm text-[color:var(--text-muted)]">
              <li className="flex gap-3">
                <span className="mt-1 text-dental-blue"><MapPin size={18} /></span>
                <span>Arcadia Building, Below Axis Bank, NST Colony, Dimapur, Nagaland</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-cyber-cyan"><Phone size={18} /></span>
                <a href="tel:9862565250" className="transition hover:text-white">9862565250</a>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-[color:var(--text-muted)]"><Mail size={18} /></span>
                <a href="mailto:info@perfectsmiledental.com" className="transition hover:text-white">info@perfectsmiledental.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[color:var(--border)] bg-[color:var(--page-surface)]/90 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-xs text-[color:var(--text-secondary)] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {currentYear} Perfect Smile Dental Care. All Rights Reserved.</p>
          <p className="flex items-center gap-2">Made with <Heart size={14} className="text-pink-500" /> for a healthier smile.</p>
        </div>
      </div>
    </footer>
  );
}
