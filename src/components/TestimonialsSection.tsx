import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    names: "Lakshmi & Venkata",
    detail: "Married · March 2022 · Vijayawada",
    initials: ["L", "V"],
    quote: "We were introduced through Kammavaari Matrimony in December 2021. Ours was a perfect Telugu wedding in Vijayawada. We are grateful forever.",
    image: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?auto=format&fit=crop&w=800&q=70",
  },
  {
    names: "Sujatha & Ravi",
    detail: "Married · June 2023 · Hyderabad",
    initials: ["S", "R"],
    quote: "My parents were very particular about community and values. Kammavaari found us a match that honored both. The horoscope matched perfectly too!",
    image: "https://images.unsplash.com/photo-1583939411023-14783179e581?auto=format&fit=crop&w=800&q=70",
  },
  {
    names: "Divya & Karthik",
    detail: "Married · May 2023 · Guntur",
    initials: ["D", "K"],
    quote: "From the moment we connected on this platform, our families felt at ease. Our Muhurtham was on Akshaya Tritiya — auspicious in every way.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=70",
  },
];

const FALLBACK_IMG = "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=70";

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0); // -1 left, 1 right

  const goTo = useCallback((index: number) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  }, [active]);

  const next = useCallback(() => {
    setDirection(1);
    setActive(prev => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActive(prev => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const getCardStyle = (index: number): React.CSSProperties => {
    const diff = index - active;
    const normalizedDiff = diff === 0 ? 0 : diff > 0 ? (diff > 1 ? -1 : 1) : (diff < -1 ? 1 : -1);
    // Handle wrapping
    const actualDiff = (() => {
      if (diff === 0) return 0;
      if (Math.abs(diff) === 1) return diff;
      if (diff === 2) return -1;
      if (diff === -2) return 1;
      return diff;
    })();

    if (actualDiff === 0) {
      return {
        transform: 'perspective(1200px) rotateY(0deg) scale(1) translateX(0)',
        opacity: 1,
        zIndex: 10,
        filter: 'brightness(1)',
      };
    }
    if (actualDiff === 1) {
      return {
        transform: 'perspective(1200px) rotateY(-35deg) scale(0.78) translateX(65%)',
        opacity: 0.5,
        zIndex: 5,
        filter: 'brightness(0.5)',
      };
    }
    if (actualDiff === -1) {
      return {
        transform: 'perspective(1200px) rotateY(35deg) scale(0.78) translateX(-65%)',
        opacity: 0.5,
        zIndex: 5,
        filter: 'brightness(0.5)',
      };
    }
    return {
      transform: 'perspective(1200px) rotateY(0deg) scale(0.6) translateX(0)',
      opacity: 0,
      zIndex: 0,
      filter: 'brightness(0.3)',
    };
  };

  return (
    <section className="relative overflow-hidden" style={{ background: 'hsl(var(--ink-900))' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at center, hsla(40,52%,54%,0.06) 0%, transparent 70%)' }} />

      <div className="relative text-center" style={{ padding: 'clamp(48px,8vw,80px) clamp(16px,5vw,24px) clamp(24px,4vw,40px)', zIndex: 1 }}>
        <ScrollReveal>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-9 h-[1px]" style={{ background: 'hsl(var(--gold-500))' }} />
            <span className="eyebrow" style={{ color: 'hsl(var(--gold-500))' }}>LOVE STORIES</span>
            <div className="w-9 h-[1px]" style={{ background: 'hsl(var(--gold-500))' }} />
          </div>
          <h2 className="font-display font-light text-white" style={{ fontSize: 'clamp(36px, 4.5vw, 60px)', letterSpacing: '-0.02em' }}>
            Stories That{" "}
            <span className="font-accent" style={{ color: 'hsl(var(--gold-500))' }}>Inspire</span>
          </h2>
          <p className="font-accent mt-2" style={{ fontSize: '17px', color: 'rgba(255,255,255,0.5)' }}>
            Real couples who found their forever with us
          </p>
        </ScrollReveal>
      </div>

      {/* 3D Carousel */}
      <div className="relative mx-auto flex items-center justify-center" style={{ maxWidth: '1000px', height: 'clamp(400px, 55vw, 520px)', perspective: '1200px', zIndex: 1 }}>
        {testimonials.map((t, i) => {
          const styles = getCardStyle(i);
          return (
            <div
              key={t.names}
              className="absolute overflow-hidden cursor-pointer"
              style={{
                width: 'clamp(300px, 70vw, 480px)',
                height: '100%',
                borderRadius: '24px',
                left: '50%',
                transform: 'translateX(-50%)',
                marginLeft: '0',
                transition: 'all 0.7s cubic-bezier(0.25, 0.1, 0, 1)',
                transformStyle: 'preserve-3d',
                ...styles,
              }}
              onClick={() => {
                if (i !== active) goTo(i);
              }}
            >
              <img
                src={t.image}
                alt={t.names}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: 'brightness(0.45) saturate(0.9)' }}
                loading="lazy"
                onError={(e) => {
                  const el = e.currentTarget;
                  if (!el.dataset.fallbackUsed) {
                    el.dataset.fallbackUsed = 'true';
                    el.src = FALLBACK_IMG;
                  }
                }}
              />

              {/* Top gradient */}
              <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ height: '45%', background: 'linear-gradient(to bottom, rgba(15,10,5,0.5), transparent)' }} />

              {/* Bottom gradient */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(10,5,2,0.98) 0%, rgba(10,5,2,0.8) 35%, rgba(10,5,2,0.3) 60%, transparent 80%)' }} />

              {/* Left gold accent */}
              <div className="absolute top-0 left-0 w-[3px] h-full pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, hsl(var(--gold-500)) 30%, hsl(var(--gold-500)) 70%, transparent)' }} />

              {/* Stars */}
              <div className="absolute top-6 left-6 flex gap-1" style={{ zIndex: 3 }}>
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-3 h-3 fill-current" style={{ color: 'hsl(var(--gold-500))' }} />
                ))}
              </div>

              {/* Top ornament */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-none" style={{ zIndex: 3 }}>
                <div className="w-6 h-[1px]" style={{ background: 'hsla(40,52%,54%,0.3)' }} />
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="hsla(40,52%,54%,0.35)" /></svg>
                <div className="w-6 h-[1px]" style={{ background: 'hsla(40,52%,54%,0.3)' }} />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: 2, padding: 'clamp(20px, 4vw, 36px) clamp(20px, 3vw, 32px)' }}>
                <span className="block font-display" style={{ fontSize: 'clamp(40px, 6vw, 64px)', color: 'hsla(40,52%,54%,0.25)', lineHeight: 0.9 }}>"</span>
                <p className="font-accent" style={{ fontSize: 'clamp(14px, 1.6vw, 18px)', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, marginTop: '-8px', fontStyle: 'italic' }}>
                  {t.quote}
                </p>

                <div className="flex items-center gap-3 mt-5">
                  <div className="flex -space-x-3">
                    {t.initials.map((init, idx) => (
                      <div key={idx} className="w-10 h-10 rounded-full flex items-center justify-center font-display text-[15px] font-semibold" style={{
                        background: idx === 0 ? 'linear-gradient(135deg, hsl(var(--maroon-700)), hsl(var(--maroon-900)))' : 'linear-gradient(135deg, hsl(var(--gold-700)), hsl(var(--gold-900)))',
                        border: '2px solid hsl(var(--gold-500))',
                        color: 'hsl(var(--gold-300))',
                      }}>
                        {init}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-[16px] text-white">{t.names}</p>
                    <p className="font-body font-light text-[11px]" style={{ letterSpacing: '0.06em', color: 'hsla(40,52%,54%,0.65)' }}>
                      {t.detail}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Nav arrows */}
        <button
          onClick={prev}
          className="absolute top-1/2 -translate-y-1/2 z-20 flex items-center justify-center transition-all"
          style={{
            left: 'clamp(8px, 3vw, 40px)', width: '44px', height: '44px',
            borderRadius: '50%', background: 'rgba(15,10,5,0.6)', border: '1px solid hsla(40,52%,54%,0.3)',
            backdropFilter: 'blur(8px)', cursor: 'pointer', color: '#C9A84C',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.15)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(15,10,5,0.6)'; }}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 -translate-y-1/2 z-20 flex items-center justify-center transition-all"
          style={{
            right: 'clamp(8px, 3vw, 40px)', width: '44px', height: '44px',
            borderRadius: '50%', background: 'rgba(15,10,5,0.6)', border: '1px solid hsla(40,52%,54%,0.3)',
            backdropFilter: 'blur(8px)', cursor: 'pointer', color: '#C9A84C',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.15)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(15,10,5,0.6)'; }}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2.5 relative" style={{ padding: '24px 0', zIndex: 1 }}>
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: active === i ? '28px' : '8px',
              height: '8px', borderRadius: '999px',
              background: active === i ? '#C9A84C' : 'rgba(201,168,76,0.25)',
              border: 'none', cursor: 'pointer', padding: 0,
              transition: 'all 300ms ease',
            }}
            aria-label={`Go to story ${i + 1}`}
          />
        ))}
      </div>

      <div className="text-center relative" style={{ padding: 'clamp(12px,3vw,32px) 24px clamp(40px,6vw,64px)', zIndex: 1 }}>
        <p className="font-body font-light mb-5" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)' }}>
          Join 50,000+ families who found their match
        </p>
        <a
          href="#"
          className="inline-block font-body transition-all"
          style={{ fontSize: '13px', fontWeight: 400, letterSpacing: '0.06em', color: 'hsl(var(--gold-500))', border: '1px solid hsla(40,52%,54%,0.35)', borderRadius: '999px', padding: '12px 32px' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'hsla(40,52%,54%,0.08)'; e.currentTarget.style.borderColor = 'hsl(var(--gold-500))'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'hsla(40,52%,54%,0.35)'; }}
        >
          Read More Success Stories →
        </a>
      </div>
    </section>
  );
};

export default TestimonialsSection;
