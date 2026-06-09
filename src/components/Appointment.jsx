import { useEffect } from 'react';

export default function Appointment() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="appointment" className="bg-[color:var(--surface-soft)] py-24 dark:bg-[color:var(--page-bg)] sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-dental-blue dark:text-cyber-cyan">Book Appointment</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-[color:var(--text-primary)] dark:text-white sm:text-4xl">Schedule your visit online</h2>
          <p className="text-base leading-8 text-[color:var(--text-body)] dark:text-[color:var(--text-muted)] sm:text-lg">
            Choose a convenient time slot, and our team will confirm your appointment immediately.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--card-bg)] shadow-2xl dark:dark:border-[color:var(--border)] dark:bg-[color:var(--card-bg)]">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/perfectsmiledental/30min?hide_event_type_details=1&hide_gdpr_banner=1"
            style={{ minWidth: '320px', height: '700px', borderRadius: '32px' }}
          />
        </div>
      </div>
    </section>
  );
}
