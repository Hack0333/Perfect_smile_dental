import Hero from '../components/Hero';
import AboutDoctor from '../components/AboutDoctor';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Reviews from '../components/Reviews';
import Gallery from '../components/Gallery';
import Appointment from '../components/Appointment';
import Contact from '../components/Contact';
import { Phone } from 'lucide-react';

export default function Home() {
  const handleScrollTo = (id) => {
    const targetElement = document.querySelector(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Hero />
      <AboutDoctor />

      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mt-16 rounded-[2.25rem] border border-[color:var(--border)] bg-[color:var(--card-bg)] p-8 shadow-2xl shadow-[rgba(91,141,239,0.12)] dark:border-[color:var(--border)] dark:bg-[color:var(--card-bg)] dark:shadow-[rgba(15,23,42,0.25)] sm:p-10 lg:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-dental-blue dark:text-cyber-cyan">Ready for your best smile?</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[color:var(--text-primary)] dark:text-[color:var(--text-primary)] sm:text-4xl">Book a consultation with Dr. Aola Imcha today.</h2>
              <p className="text-base leading-8 text-[color:var(--text-body)] dark:text-[color:var(--text-muted)] sm:text-lg">Enjoy fast access to premium dental care in Dimapur, with a patient-first experience and a confident smile outcome.</p>
            </div>
            <button
              onClick={() => handleScrollTo('#appointment')}
              className="inline-flex items-center justify-center rounded-full bg-dental-blue px-8 py-4 text-sm font-semibold text-white shadow-2xl shadow-dental-blue/20 transition duration-300 hover:-translate-y-0.5 hover:bg-dental-blue-dark dark:px-9 dark:bg-cyber-cyan dark:hover:bg-cyber-cyan-dark"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      <Services />
      <WhyChooseUs />

      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mt-16 rounded-[2.25rem] border border-[color:var(--border)] bg-[color:var(--surface-soft)] p-8 shadow-2xl shadow-[rgba(91,141,239,0.12)] dark:border-[color:var(--border)] dark:bg-[color:var(--page-surface)]/80 dark:shadow-[rgba(15,23,42,0.2)] sm:p-10 lg:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-dental-blue dark:text-cyber-cyan">Comfort-driven care</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[color:var(--text-primary)] dark:text-[color:var(--text-primary)] sm:text-4xl">Pain-free dental procedures in a soothing modern setting.</h2>
              <p className="text-base leading-8 text-[color:var(--text-body)] dark:text-[color:var(--text-muted)] sm:text-lg">Our advanced sterilization, gentle anesthesia, and expert team deliver exceptional results with minimal discomfort.</p>
            </div>
            <a
              href="tel:9862565250"
              className="inline-flex items-center justify-center rounded-full border border-dental-blue px-8 py-4 text-sm font-semibold text-dental-blue transition duration-300 hover:-translate-y-0.5 hover:bg-dental-blue/10 dark:border-cyber-cyan dark:text-cyber-cyan dark:hover:bg-cyber-cyan/10"
            >
              <Phone size={18} className="mr-2" />
              Call 9862565250
            </a>
          </div>
        </div>
      </div>

      <Reviews />
      <Gallery />
      <Appointment />
      <Contact />
    </>
  );
}
