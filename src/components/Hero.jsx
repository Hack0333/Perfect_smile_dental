import { Check, Calendar, Phone } from 'lucide-react';
import doctorImg from '../assets/images/doctor/doctor.png';
import clinicImg from '../assets/images/clinic/reception.png';

export default function Hero() {
  const features = ['Modern Equipment', 'Experienced Dentists', 'Pain-Free Treatments', '650+ Positive Reviews'];

  const handleScrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-visible min-h-screen bg-[color:var(--page-bg)] py-24 dark:bg-[color:var(--page-bg)] sm:py-28 lg:pb-0">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,_rgba(0,112,243,0.18),_transparent_35%)] dark:bg-[radial-gradient(circle_at_top,_rgba(6,182,212,0.18),_transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-dental-blue/20 bg-dental-blue/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-dental-blue shadow-sm shadow-dental-blue/5 dark:border-cyber-cyan/30 dark:bg-cyber-cyan/10 dark:text-cyber-cyan">
              Premium Dental Care in Dimapur
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-extrabold tracking-tight text-[color:var(--text-primary)] dark:text-white sm:text-5xl lg:text-6xl">
                Smile with confidence through modern dental care.
              </h1>
              <p className="max-w-xl text-base leading-8 text-[color:var(--text-body)] dark:text-[color:var(--text-muted)] sm:text-lg">
                Perfect Smile Dental Care & Implant Centre combines advanced dentistry with compassionate service to deliver elegant, long-lasting results.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 rounded-3xl border border-[color:var(--border)] bg-[color:var(--card-bg)] p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-[color:var(--border)] dark:bg-[color:var(--card-bg)]">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-dental-blue/10 text-dental-blue dark:bg-cyber-cyan/10 dark:text-cyber-cyan">
                    <Check size={18} />
                  </span>
                  <span className="text-sm font-semibold text-[color:var(--text-body)] dark:text-[color:var(--text-primary)]">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                onClick={() => handleScrollTo('#appointment')}
                className="inline-flex items-center justify-center rounded-full bg-dental-blue px-8 py-4 text-sm font-semibold text-white shadow-2xl shadow-dental-blue/20 transition duration-300 hover:-translate-y-0.5 hover:bg-dental-blue-dark dark:shadow-cyber-cyan/20"
              >
                <Calendar size={18} className="mr-2" />
                Book Appointment
              </button>
              <a
                href="tel:9862565250"
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--card-bg)] px-8 py-4 text-sm font-semibold text-[color:var(--text-primary)] transition duration-300 hover:-translate-y-0.5 hover:border-dental-blue hover:bg-dental-blue/5 dark:border-[color:var(--border)] dark:bg-[color:var(--card-bg)] dark:text-[color:var(--text-primary)] dark:hover:bg-cyber-cyan/10"
              >
                <Phone size={18} className="mr-2" />
                Call Now
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-dental-blue/10 via-transparent to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[color:var(--border)] bg-[color:var(--card-bg)] shadow-2xl dark:border-[color:var(--border)] dark:bg-[color:var(--card-bg)]">
              <img src={clinicImg} alt="Dental clinic reception" className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]" />
            </div>
            <div className="mt-10 w-full max-w-sm rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--card-bg)]/95 p-6 shadow-2xl dark:border-[color:var(--border)] dark:bg-[color:var(--card-bg)]/95 lg:absolute lg:-bottom-10 lg:right-0 lg:mt-0">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-soft)] dark:border-[color:var(--border)] dark:bg-[color:var(--page-surface)]">
                  <img src={doctorImg} alt="Dr. Aola Imcha" className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[color:var(--text-primary)] dark:text-white">Dr. Aola Imcha</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--text-secondary)] dark:text-[color:var(--text-muted)]">Chief Dentist</p>
                </div>
              </div>
              <div className="mt-4 rounded-3xl bg-[color:var(--surface-soft)] p-4 text-sm text-[color:var(--text-body)] dark:bg-[color:var(--page-surface)] dark:text-[color:var(--text-muted)]">
                <p className="font-semibold">Trusted by patients across Dimapur</p>
                <p className="mt-2 leading-6">Delivering gentle, premium care with personalized treatment plans.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
