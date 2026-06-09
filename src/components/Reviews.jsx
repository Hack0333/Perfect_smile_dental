import { useState, useEffect } from 'react';
import { reviews } from '../data/reviews';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  const handleNext = () => setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const renderStars = (rating) =>
    Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={18}
        className={i < rating ? 'text-dental-blue dark:text-cyber-cyan' : 'text-[color:var(--text-muted)] dark:text-[color:var(--text-body)]'}
      />
    ));

  return (
    <section id="reviews" className="bg-[color:var(--page-bg)] py-24 dark:bg-[color:var(--page-bg)] sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-6 rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--card-bg)] p-6 shadow-xl dark:border-[color:var(--border)] dark:bg-[color:var(--card-bg)] sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-dental-blue dark:text-cyber-cyan">Trusted by patients</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[color:var(--text-primary)] dark:text-white sm:text-4xl">What our patients say about us</h2>
            <p className="max-w-xl text-base leading-8 text-[color:var(--text-body)] dark:text-[color:var(--text-muted)]">
              Personalized care, gentle treatments, and a premium experience make every visit feel reassuring and modern.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-[color:var(--border)] bg-[color:var(--surface-soft)] p-6 text-center dark:border-[color:var(--border)] dark:bg-[color:var(--page-surface)]/80">
              <p className="text-4xl font-extrabold tracking-tight text-[color:var(--text-primary)] dark:text-[color:var(--text-primary)]">4.8</p>
              <div className="mt-3 flex items-center justify-center gap-1 text-dental-blue dark:text-cyber-cyan">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={20} />
                ))}
              </div>
              <p className="mt-3 text-sm uppercase tracking-[0.35em] text-[color:var(--text-secondary)] dark:text-[color:var(--text-muted)]">Google Rating</p>
            </div>
            <div className="rounded-[1.75rem] border border-[color:var(--border)] bg-[color:var(--surface-soft)] p-6 text-center dark:border-[color:var(--border)] dark:bg-[color:var(--page-surface)]/80">
              <p className="text-4xl font-extrabold tracking-tight text-[color:var(--text-primary)] dark:text-[color:var(--text-primary)]">653+</p>
              <p className="mt-3 text-sm uppercase tracking-[0.35em] text-[color:var(--text-secondary)] dark:text-[color:var(--text-muted)]">Positive Reviews</p>
            </div>
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--card-bg)] p-8 shadow-2xl dark:border-[color:var(--border)] dark:bg-[color:var(--card-bg)] sm:p-10">
          <Quote className="absolute right-6 top-6 text-[color:var(--surface-soft)] dark:text-[color:var(--page-surface)]" size={120} />
          <div className="relative mx-auto max-w-3xl space-y-10">
            {reviews.map((review, idx) => (
              <div key={review.id} className={`${idx === activeIndex ? 'block' : 'hidden'} space-y-8`}>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-soft)] px-4 py-3 dark:border-[color:var(--border)] dark:bg-[color:var(--page-surface)]/80">
                    {renderStars(review.rating)}
                    <span className="ml-2 text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--text-secondary)] dark:text-[color:var(--text-muted)]">{review.rating}.0</span>
                  </div>
                  <div className="rounded-full bg-[color:var(--surface-soft)] px-4 py-2 text-sm font-semibold text-[color:var(--text-body)] dark:bg-[color:var(--page-surface)] dark:text-[color:var(--text-muted)]">{review.date}</div>
                </div>
                <div className="rounded-[1.75rem] border border-[color:var(--border)] bg-[color:var(--surface-soft)] p-8 text-[color:var(--text-body)] shadow-sm dark:border-[color:var(--border)] dark:bg-[color:var(--page-surface)] dark:text-[color:var(--text-primary)]">
                  <p className="text-xl leading-9">“{review.comment}”</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-dental-blue/10 text-dental-blue dark:bg-cyber-cyan/10 dark:text-cyber-cyan">{review.initials}</div>
                  <div>
                    <p className="text-base font-semibold text-[color:var(--text-primary)] dark:text-[color:var(--text-primary)]">{review.name}</p>
                    <p className="text-sm text-[color:var(--text-secondary)] dark:text-[color:var(--text-muted)]">Verified patient</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-between gap-4">
            <button
              onClick={handlePrev}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--card-bg)] text-[color:var(--text-secondary)] shadow-sm transition hover:border-dental-blue hover:text-dental-blue dark:border-[color:var(--border)] dark:bg-[color:var(--card-bg)] dark:text-[color:var(--text-secondary)] dark:hover:border-cyber-cyan dark:hover:text-cyber-cyan"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-3">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 w-2.5 rounded-full transition ${idx === activeIndex ? 'bg-dental-blue dark:bg-cyber-cyan' : 'bg-slate-300 dark:bg-slate-700'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--card-bg)] text-[color:var(--text-secondary)] shadow-sm transition hover:border-dental-blue hover:text-dental-blue dark:border-[color:var(--border)] dark:bg-[color:var(--card-bg)] dark:text-[color:var(--text-secondary)] dark:hover:border-cyber-cyan dark:hover:text-cyber-cyan"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
