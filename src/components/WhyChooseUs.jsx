import { Users, Cpu, ShieldCheck, DollarSign, Sparkles, UserCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const cards = [
    {
      icon: <Users size={24} className="text-dental-blue dark:text-cyber-cyan" />,
      title: '650+ Happy Patients',
      description: 'Over 650 smiles transformed and counting across Dimapur and neighboring regions.',
    },
    {
      icon: <Cpu size={24} className="text-dental-blue dark:text-cyber-cyan" />,
      title: 'Latest Dental Equipment',
      description: 'State-of-the-art facilities including digital radiography, autoclaves, and laser systems.',
    },
    {
      icon: <Sparkles size={24} className="text-dental-blue dark:text-cyber-cyan" />,
      title: 'Pain-Free Procedures',
      description: 'Gentle techniques, topical anesthetics, and friendly staff to minimize dental anxiety.',
    },
    {
      icon: <DollarSign size={24} className="text-dental-blue dark:text-cyber-cyan" />,
      title: 'Affordable Pricing',
      description: 'Transparent billing and accessible treatments without compromising on clinic quality.',
    },
    {
      icon: <ShieldCheck size={24} className="text-dental-blue dark:text-cyber-cyan" />,
      title: 'Clean & Hygienic Clinic',
      description: 'Strict multi-tier sterilization protocols ensuring the highest standards of safety.',
    },
    {
      icon: <UserCheck size={24} className="text-dental-blue dark:text-cyber-cyan" />,
      title: 'Experienced Professionals',
      description: 'Led by Dr. Aola Imcha with a dedicated care team committed to continuing education.',
    },
  ];

  return (
    <section className="bg-[color:var(--page-bg)] py-24 dark:bg-[color:var(--page-bg)] sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-dental-blue dark:text-cyber-cyan">Why Choose Us</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[color:var(--text-primary)] dark:text-white sm:text-4xl">
            Your Smile Is in Safe Hands
          </h2>
          <p className="mt-4 text-base leading-8 text-[color:var(--text-body)] dark:text-[color:var(--text-muted)] sm:text-lg">
            We deliver modern, compassionate, and reliable dental care at the heart of Dimapur.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <div key={card.title} className="group overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--card-bg)] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-[color:var(--border)] dark:bg-[color:var(--card-bg)]">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-dental-blue/10 text-dental-blue dark:bg-cyber-cyan/10 dark:text-cyber-cyan">
                {card.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[color:var(--text-primary)] dark:text-[color:var(--text-primary)]">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--text-body)] dark:text-[color:var(--text-muted)]">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
