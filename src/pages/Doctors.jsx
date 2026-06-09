import AboutDoctor from '../components/AboutDoctor';

const team = [
  {
    name: 'Dr. Aola Imcha',
    role: 'Chief Dentist',
    description: 'Expert in cosmetic dentistry, implants, and restorative care with a patient-first approach.',
  },
  {
    name: 'Dr. Maya N.',
    role: 'Orthodontist',
    description: 'Specializes in clear aligners and braces to create healthy, confident smiles.',
  },
  {
    name: 'Dr. Arun Patel',
    role: 'Laser Dentistry Specialist',
    description: 'Focused on advanced laser-powered treatments for gentle and precise dental care.',
  },
];

export default function Doctors() {
  return (
    <main className="min-h-screen overflow-hidden bg-[color:var(--page-bg)] dark:bg-[color:var(--page-bg)]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-dental-blue dark:text-cyber-cyan">Our Doctors</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-[color:var(--text-primary)] dark:text-white sm:text-5xl">The team behind your healthy smile.</h1>
          <p className="text-base leading-8 text-[color:var(--text-body)] dark:text-[color:var(--text-muted)] sm:text-lg">
            Meet the experienced specialists and support staff delivering modern dentistry with a gentle touch.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--card-bg)] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl dark:dark:border-[color:var(--border)] dark:bg-[color:var(--card-bg)]">
              <div className="mb-6 h-20 w-20 rounded-[1.75rem] bg-dental-blue/10 p-4 text-dental-blue dark:bg-cyber-cyan/10 dark:text-cyber-cyan">
                <span className="text-3xl font-semibold">{member.name.charAt(0)}</span>
              </div>
              <h2 className="text-2xl font-semibold text-[color:var(--text-primary)] dark:text-white">{member.name}</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-dental-blue dark:text-cyber-cyan">{member.role}</p>
              <p className="mt-4 text-sm leading-7 text-[color:var(--text-body)] dark:text-[color:var(--text-muted)]">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      <AboutDoctor />
    </main>
  );
}
