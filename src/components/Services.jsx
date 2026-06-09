import { services } from '../data/services';
import * as Icons from 'lucide-react';

export default function Services() {
  const handleScrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    const Icon = IconComponent || Icons.Activity;
    return <Icon className="text-dental-blue dark:text-cyber-cyan" size={26} />;
  };

  return (
    <section id="treatments" className="bg-[color:var(--page-bg)] py-24 dark:bg-[color:var(--page-bg)] sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-dental-blue dark:text-cyber-cyan">Our Treatments</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[color:var(--text-primary)] dark:text-[color:var(--text-primary)] sm:text-4xl">Comprehensive Dental Services</h2>
          <p className="mt-4 text-base leading-8 text-[color:var(--text-body)] dark:text-[color:var(--text-muted)] sm:text-lg">
            From preventive checkups to complex implant restorations, we deliver premium care in a comforting modern environment.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div key={service.id} className="group overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--card-bg)] p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-[color:var(--border)] dark:bg-[color:var(--card-bg)]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-3xl bg-dental-blue/10 text-dental-blue dark:bg-cyber-cyan/10 dark:text-cyber-cyan">
                {renderIcon(service.icon)}
              </div>
              <h3 className="text-xl font-semibold text-[color:var(--text-primary)] dark:text-[color:var(--text-primary)]">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--text-body)] dark:text-[color:var(--text-muted)]">{service.description}</p>

              <ul className="mt-6 space-y-3">
                {service.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-[color:var(--text-body)] dark:text-[color:var(--text-muted)]">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-dental-blue/10 text-dental-blue dark:bg-cyber-cyan/10 dark:text-cyber-cyan">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleScrollTo('#appointment')}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-dental-blue transition duration-300 hover:text-dental-blue-dark dark:text-cyber-cyan dark:hover:text-cyber-cyan-dark"
              >
                Book Consultation <span aria-hidden="true">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
