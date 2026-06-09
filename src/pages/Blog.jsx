const posts = [
  {
    id: 'dental-health-tips',
    title: '5 Ways to Keep Your Teeth Healthy Between Visits',
    excerpt: 'Discover simple daily habits that support stronger enamel, fresher breath, and a brighter smile.',
    date: 'June 2026',
  },
  {
    id: 'understanding-implants',
    title: 'How Dental Implants Restore Confidence and Function',
    excerpt: 'Learn the implant process, recovery expectations, and why implants are a long-term solution.',
    date: 'May 2026',
  },
  {
    id: 'soft-tissue-safety',
    title: 'Why Laser Dentistry Is the Gentle Choice',
    excerpt: 'Explore the benefits of laser-assisted treatments for precise, comfortable cosmetic and restorative care.',
    date: 'April 2026',
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen overflow-hidden bg-[color:var(--page-bg)] dark:bg-[color:var(--page-bg)]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-dental-blue dark:text-cyber-cyan">Blog</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-[color:var(--text-primary)] dark:text-white sm:text-5xl">Dental wellness stories and expert tips.</h1>
          <p className="text-base leading-8 text-[color:var(--text-body)] dark:text-[color:var(--text-muted)] sm:text-lg">
            Stay informed with helpful articles, clinic updates, and expert advice from our dental team.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--card-bg)] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl dark:dark:border-[color:var(--border)] dark:bg-[color:var(--card-bg)]">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-dental-blue dark:text-cyber-cyan">{post.date}</p>
              <h2 className="mt-4 text-2xl font-semibold text-[color:var(--text-primary)] dark:text-white">{post.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[color:var(--text-body)] dark:text-[color:var(--text-muted)]">{post.excerpt}</p>
              <button className="mt-8 inline-flex items-center rounded-full bg-dental-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-dental-blue-dark">
                Read More
              </button>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
