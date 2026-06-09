import { useState } from 'react';
import receptionImg from '../assets/images/clinic/reception.png';
import treatmentImg from '../assets/images/clinic/treatment.png';
import equipmentImg from '../assets/images/clinic/equipment.png';
import beforeAfterImg from '../assets/images/clinic/before_after.png';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      image: receptionImg,
      title: 'Clinic Interior & Lounge',
      category: 'clinic',
      span: 'lg:col-span-2',
    },
    {
      id: 2,
      image: treatmentImg,
      title: 'Sterile Treatment Room',
      category: 'clinic',
      span: 'lg:col-span-1',
    },
    {
      id: 3,
      image: equipmentImg,
      title: 'Advanced Dental Technology',
      category: 'equipment',
      span: 'lg:col-span-1',
    },
    {
      id: 4,
      image: beforeAfterImg,
      title: 'Smile Makeover (Before / After)',
      category: 'before-after',
      span: 'lg:col-span-2',
    },
  ];

  const filters = [
    { name: 'All Photos', value: 'all' },
    { name: 'Clinic Spaces', value: 'clinic' },
    { name: 'Technology', value: 'equipment' },
    { name: 'Before & After', value: 'before-after' },
  ];

  const filteredItems = activeFilter === 'all' ? galleryItems : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="bg-[color:var(--page-bg)] py-24 dark:bg-[color:var(--page-bg)] sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-dental-blue dark:text-cyber-cyan">Gallery</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-[color:var(--text-primary)] dark:text-white sm:text-4xl">Inside Our Clinic</h2>
          <p className="text-base leading-8 text-[color:var(--text-body)] dark:text-[color:var(--text-muted)] sm:text-lg">
            Explore our calming treatment spaces, premium equipment, and real patient transformations in Dimapur.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                activeFilter === filter.value
                  ? 'bg-dental-blue text-white shadow-lg shadow-dental-blue/20 dark:bg-cyber-cyan dark:shadow-cyber-cyan/20'
                  : 'border border-[color:var(--border)] bg-[color:var(--card-bg)] text-[color:var(--text-body)] hover:bg-[color:var(--surface-soft)] dark:dark:border-[color:var(--border)] dark:bg-[color:var(--page-bg)] dark:text-[color:var(--text-muted)] dark:hover:bg-[color:var(--card-bg)]'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`${item.span} overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--surface-soft)] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-[color:var(--border)] dark:bg-[color:var(--page-surface)]`}
            >
              <div className="relative h-72 overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-0 transition duration-300 hover:opacity-100"></div>
              </div>
              <div className="space-y-2 p-5">
                <span className="block text-xs font-semibold uppercase tracking-[0.35em] text-dental-blue dark:text-cyber-cyan">{item.category.replace('-', ' ')}</span>
                <h3 className="text-lg font-semibold text-[color:var(--text-primary)] dark:text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
