import { useEffect, useState } from 'react';
import { Expand, X } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/salonData';
import { SalonImage } from './SalonImage';

type GalleryFilter = 'all' | GalleryItem['category'];

const GALLERY_FILTERS: { id: GalleryFilter; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'bridal', label: 'Bridal Artistry' },
  { id: 'hair', label: 'Hair & Color' },
  { id: 'skincare', label: 'Skincare & Spa' },
  { id: 'nails', label: 'Nail Studio' },
];

export function GallerySection() {
  const [filter, setFilter] = useState<GalleryFilter>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const visibleItems =
    filter === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === filter);

  useEffect(() => {
    if (!selectedItem) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedItem(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedItem]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#F3EFE9] border-b border-[#E7E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#8A6D43] mb-3">
              Studio Portfolio
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#181615] leading-[1.12] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Transformations &amp; Salon Ambiance
            </h2>
          </div>

          <div role="tablist" aria-label="Filter studio portfolio" className="flex flex-wrap gap-2">
            {GALLERY_FILTERS.map((tab) => {
              const active = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(tab.id)}
                  className={`px-3.5 py-2 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap border ${
                    active
                      ? 'bg-[#181615] text-[#FAF8F5] border-[#181615]'
                      : 'bg-[#FAF8F5] text-[#4A433C] border-[#DDD5C9] hover:border-[#9A7B4F]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {visibleItems.map((item) => (
            <figure
              key={item.id}
              className="group bg-[#FAF8F5] border border-[#E2DAD0] overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setSelectedItem(item)}
                aria-label={`Inspect ${item.title}`}
                className="relative block w-full aspect-[4/3] overflow-hidden bg-[#EAE3D7] cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A7B4F]"
              >
                <SalonImage
                  src={item.image}
                  alt={item.imageAlt}
                  fallbackTitle={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#181615]/80 text-[#FAF8F5] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Expand className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>View Detail</span>
                </span>
              </button>

              <figcaption className="p-5 sm:p-6">
                <p className="text-xs font-medium text-[#8A6D43] mb-1">{item.categoryLabel}</p>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#181615]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#554D45] mt-1.5 leading-relaxed">{item.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Interactive Lightbox Preview */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 bg-[#12100E]/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="bg-[#FAF8F5] max-w-3xl w-full border border-[#E2DAD0] overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#E7E2DA]">
              <div>
                <p className="text-xs font-medium text-[#8A6D43]">{selectedItem.categoryLabel}</p>
                <h3 className="font-display text-2xl font-semibold text-[#181615]">
                  {selectedItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                aria-label="Close image preview"
                className="inline-flex items-center justify-center w-10 h-10 text-[#181615] hover:bg-[#F3EFE9] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-[4/3] w-full bg-[#EAE3D7]">
              <SalonImage
                src={selectedItem.image}
                alt={selectedItem.imageAlt}
                fallbackTitle={selectedItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="px-5 py-4 text-sm text-[#4A433C]">{selectedItem.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}
