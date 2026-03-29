import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const galleryPreview = [
  { src: gallery1, alt: "Garland exchange ceremony", caption: "Garland Ceremony", span: "col-span-2 row-span-2" },
  { src: gallery2, alt: "Wedding reception dance", caption: "Reception Dance", span: "col-span-1 row-span-1" },
  { src: gallery3, alt: "Bridal mehendi art", caption: "Mehendi Art", span: "col-span-1 row-span-1" },
  { src: gallery4, alt: "Couple portrait at mandap", caption: "Couple Portrait", span: "col-span-2 row-span-1" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section className="section-padding" style={{ background: 'hsl(36 60% 96%)' }}>
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[1px]" style={{ background: 'hsl(28 20% 40%)' }} />
              <span className="eyebrow" style={{ color: 'hsl(28 20% 40%)' }}>Captured Moments</span>
              <div className="w-8 h-[1px]" style={{ background: 'hsl(28 20% 40%)' }} />
            </div>
            <h2 className="font-display font-light" style={{ fontSize: 'clamp(36px, 5vw, 64px)', color: 'hsl(30 50% 4%)' }}>
              Wedding Gallery
            </h2>
          </div>
        </ScrollReveal>

        {/* Modern masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[220px] gap-3 md:gap-4 max-w-5xl mx-auto">
          {galleryPreview.map((item, i) => (
            <ScrollReveal key={item.caption} delay={i * 80}>
              <div
                className={`group relative overflow-hidden w-full h-full cursor-pointer ${item.span}`}
                style={{ borderRadius: '20px' }}
                onClick={() => setLightbox(i)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Hover overlay with glassmorphism */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end"
                  style={{
                    background: 'linear-gradient(to top, rgba(15,10,5,0.85) 0%, rgba(15,10,5,0.3) 40%, transparent 70%)',
                  }}
                >
                  <div className="p-5 w-full">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-[1px]" style={{ background: 'hsl(var(--gold-500))' }} />
                      <span className="font-body font-medium text-[10px] tracking-[0.1em] uppercase" style={{ color: 'hsl(var(--gold-500))' }}>
                        View
                      </span>
                    </div>
                    <span className="text-white font-display font-semibold text-[18px]">{item.caption}</span>
                  </div>
                </div>
                {/* Subtle gold border on hover */}
                <div className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ border: '1px solid hsla(40,52%,54%,0.4)' }} />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ background: 'rgba(15,10,5,0.95)', backdropFilter: 'blur(20px)' }}
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={galleryPreview[lightbox].src}
              alt={galleryPreview[lightbox].alt}
              className="max-w-[90vw] max-h-[80vh] object-contain"
              style={{ borderRadius: '16px' }}
              onClick={e => e.stopPropagation()}
            />
            <p className="absolute bottom-8 left-1/2 -translate-x-1/2 font-display font-semibold text-white text-[20px]">
              {galleryPreview[lightbox].caption}
            </p>
          </div>
        )}

        <ScrollReveal delay={400}>
          <div className="text-center mt-10">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 font-body font-medium text-[13px] transition-all"
              style={{
                border: '1px solid hsl(40 52% 54%)',
                color: 'hsl(40 58% 38%)',
                padding: '12px 28px',
                borderRadius: '9999px',
                transitionDuration: 'var(--duration-fast)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'hsl(40 52% 54%)';
                e.currentTarget.style.color = 'hsl(30 50% 4%)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'hsl(40 58% 38%)';
              }}
            >
              View Full Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GallerySection;
