import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { services } from '../data/services';

export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = useMemo(
    () => services.find((item) => item.id === slug),
    [slug]
  );

  if (!service) {
    return (
      <main className="min-h-screen bg-[color:var(--page-bg)] py-24 dark:bg-[color:var(--page-bg)]">
        <div className="mx-auto max-w-3xl px-5 text-center text-[color:var(--text-primary)] dark:text-[color:var(--text-muted)]">
          <p className="text-xl font-semibold">Service not found</p>
          <p className="mt-3 text-sm text-[color:var(--text-body)] dark:text-[color:var(--text-muted)]">Please choose a service from our services page.</p>
          <button
            onClick={() => navigate('/services')}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-dental-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-dental-blue-dark"
          >
            View All Services
          </button>
        </div>
      </main>
    );
  }

  const IconComponent = Icons[service.icon] || Icons.Activity;

  return (
    <main className="min-h-screen bg-[color:var(--page-bg)] py-20 dark:bg-[color:var(--page-bg)]">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-dental-blue/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-dental-blue shadow-sm dark:bg-cyber-cyan/10 dark:text-cyber-cyan">
              <IconComponent className="h-5 w-5" />
              Service Details
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[color:var(--text-primary)] dark:text-white sm:text-5xl">
              {service.title}
            </h1>
            <p className="text-lg leading-8 text-[color:var(--text-body)] dark:text-[color:var(--text-muted)]">
              {service.description}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {service.highlights.map((highlight) => (
                <div key={highlight} className="rounded-[1.75rem] border border-[color:var(--border)] bg-[color:var(--card-bg)] p-5 shadow-sm dark:dark:border-[color:var(--border)] dark:bg-[color:var(--card-bg)]">
                  <p className="text-sm font-semibold text-[color:var(--text-primary)] dark:text-white">{highlight}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => navigate('/appointment')}
                className="inline-flex items-center justify-center rounded-full bg-dental-blue px-8 py-4 text-sm font-semibold text-white transition hover:bg-dental-blue-dark"
              >
                Book Treatment
              </button>
              <button
                onClick={() => navigate('/services')}
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--card-bg)] px-8 py-4 text-sm font-semibold text-[color:var(--text-primary)] transition hover:border-dental-blue hover:text-dental-blue dark:dark:border-[color:var(--border)] dark:bg-[color:var(--card-bg)] dark:text-[color:var(--text-muted)] dark:hover:border-cyber-cyan dark:hover:text-cyber-cyan"
              >
                Back to Services
              </button>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[color:var(--card-bg)] p-8 shadow-2xl shadow-slate-200/30 dark:bg-[color:var(--card-bg)] dark:shadow-slate-950/30">
            <div className="flex h-full flex-col justify-between gap-6">
              <div>
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-dental-blue/10 text-dental-blue dark:bg-cyber-cyan/10 dark:text-cyber-cyan">
                  <IconComponent size={32} />
                </div>
                <h2 className="text-2xl font-semibold text-[color:var(--text-primary)] dark:text-white">What to expect</h2>
                <p className="mt-4 text-sm leading-7 text-[color:var(--text-body)] dark:text-[color:var(--text-muted)]">
                  Our team combines modern technology with gentle care so every appointment is efficient, comfortable, and personalized.
                </p>
              </div>
              <div className="space-y-4 rounded-[1.75rem] border border-[color:var(--border)] bg-[color:var(--page-bg)] p-6 dark:dark:border-[color:var(--border)] dark:bg-[color:var(--page-bg)]">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-dental-blue/10 text-dental-blue dark:bg-cyber-cyan/10 dark:text-cyber-cyan">✓</span>
                  <p className="text-sm text-[color:var(--text-body)] dark:text-[color:var(--text-muted)]">Personalized treatment plan</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-dental-blue/10 text-dental-blue dark:bg-cyber-cyan/10 dark:text-cyber-cyan">✓</span>
                  <p className="text-sm text-[color:var(--text-body)] dark:text-[color:var(--text-muted)]">Minimal downtime and strong results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
