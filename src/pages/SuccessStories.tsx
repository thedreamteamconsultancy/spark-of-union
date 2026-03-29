import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { Star, Heart } from "lucide-react";

const stories = [
  { names: "Lakshmi & Venkata", location: "Vijayawada", year: "2022", quote: "We were introduced through Kammavaari in December 2021. Ours was a perfect Telugu wedding. We are grateful forever.", image: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?auto=format&fit=crop&w=600&q=70" },
  { names: "Sujatha & Ravi", location: "Hyderabad", year: "2023", quote: "My parents were very particular about community and values. Kammavaari found us a match that honored both.", image: "https://images.unsplash.com/photo-1583939411023-14783179e581?auto=format&fit=crop&w=600&q=70" },
  { names: "Divya & Karthik", location: "Guntur", year: "2023", quote: "From the moment we connected, our families felt at ease. Our Muhurtham was on Akshaya Tritiya — auspicious in every way.", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=70" },
  { names: "Priya & Suresh", location: "Eluru", year: "2024", quote: "The dedicated RM understood exactly what our family was looking for. Within three months, we found our perfect match.", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=70" },
];

const SuccessStories = () => (
  <div className="min-h-screen">
    <Header />
    <section className="relative flex items-center justify-center pt-16 overflow-hidden" style={{ height: '50vh', minHeight: '340px', background: 'hsl(var(--ink-900))' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 60%, hsla(40,52%,54%,0.08), transparent 70%)' }} />
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

    <section className="section-padding" style={{ background: 'hsl(var(--cream-50))' }}>
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((s, i) => (
            <ScrollReveal key={s.names} delay={i * 100}>
              <div className="bg-white rounded-[24px] overflow-hidden" style={{ border: '1px solid hsla(40,52%,54%,0.12)', boxShadow: '0 4px 24px hsla(30,50%,4%,0.04)' }}>
                <div className="relative" style={{ height: '240px' }}>
                  <img src={s.image} alt={s.names} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,5,2,0.7), transparent 60%)' }} />
                  <div className="absolute top-4 left-4 flex gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: 'hsl(var(--gold-500))' }} />
                    ))}
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-2 mb-3">
                    <Heart className="w-4 h-4" style={{ color: 'hsl(var(--gold-500))' }} />
                    <span className="font-body text-[12px] tracking-[0.08em] uppercase" style={{ color: 'hsl(var(--gold-700))' }}>{s.location} · {s.year}</span>
                  </div>
                  <h3 className="font-display font-semibold text-[22px] mb-3" style={{ color: 'hsl(var(--ink-900))' }}>{s.names}</h3>
                  <p className="font-accent text-[15px] leading-[1.7]" style={{ color: 'hsl(var(--ink-400))', fontStyle: 'italic' }}>"{s.quote}"</p>
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
