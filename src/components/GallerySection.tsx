import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const galleryPreview = [
  { src: gallery1, alt: "Garland exchange ceremony", caption: "Garland Ceremony" },
  { src: gallery2, alt: "Wedding reception dance", caption: "Reception Dance" },
  { src: gallery3, alt: "Bridal mehendi art", caption: "Mehendi Art" },
  { src: gallery4, alt: "Couple portrait at mandap", caption: "Couple Portrait" },
];

const GallerySection = () => {
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
          {galleryPreview.map((item, i) => (
            <ScrollReveal key={item.caption} delay={i * 80}>
              <div className="group relative overflow-hidden aspect-square w-full" style={{ borderRadius: '16px' }}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-body font-medium text-[13px]">{item.caption}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

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
