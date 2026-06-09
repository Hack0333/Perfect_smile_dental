import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[color:var(--page-bg)] py-24 text-[color:var(--text-primary)] dark:bg-[color:var(--page-bg)] dark:text-[color:var(--text-muted)]">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-dental-blue dark:text-cyber-cyan">Page not found</p>
        <h1 className="mt-4 text-5xl font-extrabold tracking-tight">404</h1>
        <p className="mt-6 text-base leading-8 text-[color:var(--text-body)] dark:text-[color:var(--text-muted)]">
          We couldn’t find the page you were looking for. Return home or explore our services.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="rounded-full bg-dental-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-dental-blue-dark"
          >
            Back to Home
          </button>
          <button
            onClick={() => navigate('/services')}
            className="rounded-full border border-[color:var(--border)] bg-[color:var(--card-bg)] px-6 py-3 text-sm font-semibold text-[color:var(--text-primary)] transition hover:border-dental-blue hover:text-dental-blue dark:dark:border-[color:var(--border)] dark:bg-[color:var(--card-bg)] dark:text-[color:var(--text-muted)]"
          >
            View Services
          </button>
        </div>
      </div>
    </main>
  );
}
