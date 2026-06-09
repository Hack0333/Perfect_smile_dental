import { MapPin, Phone, Calendar, MessageSquare, Clock } from 'lucide-react';

export default function Contact() {
  const handleScrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="bg-[color:var(--page-surface)] py-24 text-[color:var(--text-primary)] sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyber-cyan">Get in Touch</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-[color:var(--text-primary)] sm:text-4xl">Contact & directions</h2>
          <p className="text-base leading-8 text-[color:var(--text-body)] sm:text-lg">
            Have questions or want to make an appointment? Reach out or visit our clinic for exceptional dental care.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--card-bg)] p-8 shadow-2xl shadow-[rgba(15,23,42,0.15)] backdrop-blur-xl">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-dental-blue">Perfect Smile Dental Care</p>
              <h3 className="text-2xl font-semibold text-[color:var(--text-primary)]">Clinic location & contact</h3>
              <p className="text-sm leading-7 text-[color:var(--text-secondary)]">
                Arcadia Building, Below Axis Bank, Next To Smart Bazaar, NST Colony, Dimapur, Nagaland - 797112
              </p>
            </div>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4 rounded-3xl bg-[color:var(--page-surface)]/90 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-dental-blue/10 text-dental-blue">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[color:var(--text-primary)]">Address</p>
                  <p className="mt-1 text-sm text-[color:var(--text-secondary)]">
                    Arcadia Building, Below Axis Bank, NST Colony, Dimapur
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-3xl bg-[color:var(--page-surface)]/90 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-cyber-cyan/10 text-cyber-cyan">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Phone</p>
                  <a href="tel:9862565250" className="mt-1 block text-sm text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]">
                    9862565250
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-3xl bg-[color:var(--page-surface)]/80 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-dental-blue/10 text-dental-blue">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Hours</p>
                  <p className="mt-1 text-sm text-[color:var(--text-muted)]">
                    Mon - Sat: 9:30 AM - 5:30 PM<br />Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Perfect+Smile+Dental+Care+Arcadia+Building+Dimapur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-dental-blue px-5 py-4 text-sm font-semibold text-white transition hover:bg-dental-blue-dark"
              >
                <MapPin size={18} />
                Directions
              </a>
              <a
                href="https://wa.me/919862565250"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--card-bg)] px-5 py-4 text-sm font-semibold text-[color:var(--text-primary)] transition hover:border-cyber-cyan hover:text-cyber-cyan"
              >
                <MessageSquare size={18} />
                WhatsApp Chat
              </a>
              <a
                href="tel:9862565250"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--card-bg)] px-5 py-4 text-sm font-semibold text-[color:var(--text-primary)] transition hover:border-dental-blue hover:text-dental-blue"
              >
                <Phone size={18} />
                Call Now
              </a>
              <button
                onClick={() => handleScrollTo('#appointment')}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--card-bg)] px-5 py-4 text-sm font-semibold text-[color:var(--text-primary)] transition hover:border-cyber-cyan hover:text-cyber-cyan"
              >
                <Calendar size={18} />
                Book Online
              </button>
            </div>
          </div>

          <div className="rounded-[2rem] overflow-hidden border border-[color:var(--border)] bg-[color:var(--card-bg)] shadow-2xl shadow-[rgba(15,23,42,0.1)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.490076295554!2d93.7250424!3d25.9023456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37463f64c1800001%3A0xe543c7b67876a9a0!2sPerfect+Smile+Dental+Care!5e0!3m2!1sen!2sin!4v1717904000000!5m2!1sen!2sin"
              className="h-full w-full min-h-[420px]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Perfect Smile Dental Care Map Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
