import AboutDoctor from '../components/AboutDoctor';
import WhyChooseUs from '../components/WhyChooseUs';

export default function About() {
  return (
    <main className="min-h-screen overflow-hidden bg-[color:var(--page-bg)] dark:bg-[color:var(--page-bg)]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-dental-blue dark:text-cyber-cyan">About Us</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-[color:var(--text-primary)] dark:text-white sm:text-5xl">Modern dental care designed around you.</h1>
          <p className="text-base leading-8 text-[color:var(--text-body)] dark:text-[color:var(--text-muted)] sm:text-lg">
            Perfect Smile Dental Care & Implant Centre blends advanced dentistry, compassionate service, and a premium patient experience for lasting dental health.
          </p>
        </div>
      </div>

      <AboutDoctor />
      <WhyChooseUs />
    </main>
  );
}
