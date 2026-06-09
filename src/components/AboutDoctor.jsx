import { Award, Compass, Heart } from 'lucide-react';
import doctorImg from '../assets/images/doctor/doctor.png';

const InstagramIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function AboutDoctor() {
  const highlights = [
    {
      icon: <Award size={24} className="text-dental-blue dark:text-cyber-cyan" />,
      title: '10+ Years Experience',
      description: 'Over a decade of clinical excellence delivering smile restorations in oral healthcare.',
    },
    {
      icon: <Compass size={24} className="text-dental-blue dark:text-cyber-cyan" />,
      title: 'Advanced Implants',
      description: 'Specialized in surgical implant placements and modern restorative dental crowns.',
    },
    {
      icon: <Heart size={24} className="text-dental-blue dark:text-cyber-cyan" />,
      title: 'Patient-Centered Care',
      description: 'Dedicated to providing modern, comfortable, and affordable dental care for all ages.',
    },
  ];

  return (
    <section id="about" className="bg-[color:var(--page-bg)] py-24 dark:bg-[color:var(--page-bg)] sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(255,255,255,0.7))] shadow-2xl dark:border-[color:var(--border)] dark:bg-[color:var(--card-bg)]/90">
            <img src={doctorImg} alt="Dr. Aola Imcha" className="h-full w-full object-cover" />
            <div className="absolute bottom-5 left-5 rounded-[1.75rem] border border-white/70 bg-[color:var(--card-bg)]/85 px-4 py-3 shadow-lg backdrop-blur-xl dark:border-[color:var(--border)]/80 dark:bg-[color:var(--page-bg)]/90">
              <p className="text-sm font-semibold text-[color:var(--text-primary)] dark:text-white">Follow on Instagram</p>
              <div className="mt-2 flex items-center gap-2 text-xs text-[color:var(--text-secondary)] dark:text-[color:var(--text-muted)]">
                <InstagramIcon />
                <span>@dr.aolaimcha</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="max-w-xl space-y-3">
              <p className="inline-flex rounded-full bg-dental-blue/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-dental-blue dark:bg-cyber-cyan/10 dark:text-cyber-cyan">
                Meet the Doctor
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[color:var(--text-primary)] dark:text-white sm:text-4xl">
                Dr. Aola Imcha
              </h2>
              <p className="max-w-xl text-base leading-8 text-[color:var(--text-body)] dark:text-[color:var(--text-muted)]">
                Dedicated to providing modern, comfortable, and affordable dental care for patients of all ages.
              </p>
            </div>

            <p className="max-w-xl text-base leading-8 text-[color:var(--text-body)] dark:text-[color:var(--text-muted)]">
              Dr. Aola Imcha leads the team at Perfect Smile Dental Care & Implant Centre with a commitment to excellence. Believing that dental visits should be stress-free, she utilizes the latest non-invasive technologies to ensure patient comfort. From preventive cleanings to full-mouth restorations, she ensures each clinical treatment plan is tailored to your unique lifestyle.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--card-bg)] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-[color:var(--border)] dark:bg-[color:var(--card-bg)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-dental-blue/10 text-dental-blue dark:bg-cyber-cyan/10 dark:text-cyber-cyan">
                    {item.icon}
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-[color:var(--text-primary)] dark:text-[color:var(--text-primary)]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--text-body)] dark:text-[color:var(--text-muted)]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
