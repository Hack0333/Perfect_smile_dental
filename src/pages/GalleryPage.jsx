import Gallery from '../components/Gallery';

export default function GalleryPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[color:var(--page-bg)] dark:bg-[color:var(--page-bg)]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-dental-blue dark:text-cyber-cyan">Gallery</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-[color:var(--text-primary)] dark:text-white sm:text-5xl">Inside our clinic experience.</h1>
          <p className="text-base leading-8 text-[color:var(--text-body)] dark:text-[color:var(--text-muted)] sm:text-lg">
            Browse our photo collection to see the clean, modern environment and advanced dental technology that welcome every patient.
          </p>
        </div>
      </div>

      <Gallery />
    </main>
  );
}
