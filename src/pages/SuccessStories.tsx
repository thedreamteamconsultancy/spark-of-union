import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { Star, Heart, Quote } from "lucide-react";

const stories = [
  { names: "Lakshmi & Venkata", location: "Vijayawada", year: "2022", quote: "We were introduced through Kammavaari in December 2021. Ours was a perfect Telugu wedding. We are grateful forever.", image: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?auto=format&fit=crop&w=800&q=70" },
  { names: "Sujatha & Ravi", location: "Hyderabad", year: "2023", quote: "My parents were very particular about community and values. Kammavaari found us a match that honored both.", image: "https://images.unsplash.com/photo-1583939411023-14783179e581?auto=format&fit=crop&w=800&q=70" },
  { names: "Divya & Karthik", location: "Guntur", year: "2023", quote: "From the moment we connected, our families felt at ease. Our Muhurtham was on Akshaya Tritiya — auspicious in every way.", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=70" },
  { names: "Priya & Suresh", location: "Eluru", year: "2024", quote: "The dedicated RM understood exactly what our family was looking for. Within three months, we found our perfect match.", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=70" },
];

const stats = [
  { value: "5,000+", label: "Happy Couples" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "4.9★", label: "Average Rating" },
];

const SuccessStories = () => (
  <div className="min-h-screen">
    <Header />
    <section className="relative flex items-center justify-center pt-16 overflow-hidden" style={{ height: '55vh', minHeight: '380px', background: 'hsl(var(--ink-900))' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 60%, hsla(40,52%,54%,0.08), transparent 70%)' }} />
      <img
        src="https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?auto=format&fit=crop&w=1920&q=60"
        alt="Happy couple"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.15, filter: 'saturate(0.6)' }}
      />
      <div className="relative z-10 text-center px-4">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px]" style={{ background: 'hsl(var(--gold-500))' }} />
            <span className="eyebrow" style={{ color: 'hsl(var(--gold-500))' }}>LOVE STORIES</span>
            <div className="w-8 h-[1px]" style={{ background: 'hsl(var(--gold-500))' }} />
          </div>
          <h1 className="font-display font-light text-white" style={{ fontSize: 'clamp(36px, 6vw, 72px)', letterSpacing: '-0.02em' }}>Success Stories</h1>
          <p className="font-accent text-[17px] mt-3" style={{ color: 'rgba(255,255,255,0.55)' }}>Every match is a celebration of tradition and love</p>
        </ScrollReveal>
      </div>
    </section>

    {/* Stats */}
    <section style={{ background: 'linear-gradient(135deg, hsl(var(--gold-700)), hsl(var(--gold-500)))' }}>
      <div className="container mx-auto max-w-3xl grid grid-cols-3 gap-4" style={{ padding: '28px 24px' }}>
        {stats.map(s => (
          <div key={s.label} className="text-center">
            <span className="font-display font-semibold text-[32px] block" style={{ color: 'hsl(var(--ink-900))' }}>{s.value}</span>
            <span className="font-body font-light text-[12px] tracking-[0.08em] uppercase" style={{ color: 'hsla(30,50%,4%,0.7)' }}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>

    <section className="section-padding" style={{ background: 'hsl(var(--cream-50))' }}>
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-10">
          {stories.map((s, i) => (
            <ScrollReveal key={s.names} delay={i * 100}>
              <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} overflow-hidden`} style={{
                background: 'white',
                borderRadius: '28px',
                border: '1px solid hsla(40,52%,54%,0.12)',
                boxShadow: '0 8px 40px hsla(30,50%,4%,0.06)',
              }}>
                <div className="relative w-full md:w-2/5" style={{ minHeight: '280px' }}>
                  <img src={s.image} alt={s.names} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,5,2,0.5), transparent 60%)' }} />
                  <div className="absolute top-5 left-5 flex gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: 'hsl(var(--gold-500))' }} />
                    ))}
                  </div>
                </div>
                <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <Heart className="w-4 h-4" style={{ color: 'hsl(var(--gold-500))' }} />
                    <span className="font-body text-[12px] tracking-[0.08em] uppercase" style={{ color: 'hsl(var(--gold-700))' }}>{s.location} · {s.year}</span>
                  </div>
                  <h3 className="font-display font-semibold text-[26px] mb-4" style={{ color: 'hsl(var(--ink-900))' }}>{s.names}</h3>
                  <div className="relative">
                    <Quote className="w-8 h-8 mb-2" style={{ color: 'hsla(40,52%,54%,0.2)' }} />
                    <p className="font-accent text-[16px] leading-[1.8]" style={{ color: 'hsl(var(--ink-400))', fontStyle: 'italic' }}>
                      {s.quote}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default SuccessStories;
