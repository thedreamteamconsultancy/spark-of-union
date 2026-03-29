import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { ShieldCheck, UserCheck, BadgeCheck, Eye, ArrowRight } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Identity Verification", desc: "Every profile goes through Aadhaar & government ID verification to ensure authenticity.", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=70" },
  { icon: UserCheck, title: "Family Background Check", desc: "Our team personally verifies family details, profession, and community standing.", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=70" },
  { icon: BadgeCheck, title: "Photo Authenticity", desc: "All photos are reviewed by our team to ensure they are recent and genuine.", image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=600&q=70" },
  { icon: Eye, title: "Regular Audits", desc: "Profiles are periodically reviewed and inactive or suspicious accounts are removed.", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=70" },
];

const stats = [
  { value: "100%", label: "Profiles Verified" },
  { value: "24hr", label: "Verification Time" },
  { value: "50K+", label: "Verified Members" },
  { value: "4.9★", label: "Trust Rating" },
];

const VerifiedProfiles = () => (
  <div className="min-h-screen">
    <Header />
    {/* Hero */}
    <section className="relative flex items-center justify-center pt-16 overflow-hidden" style={{ height: '55vh', minHeight: '380px', background: 'hsl(var(--ink-900))' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 60%, hsla(40,52%,54%,0.08), transparent 70%)' }} />
      <img
        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=60"
        alt="Verification process"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.15, filter: 'saturate(0.5)' }}
      />
      <div className="relative z-10 text-center px-4">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px]" style={{ background: 'hsl(var(--gold-500))' }} />
            <span className="eyebrow" style={{ color: 'hsl(var(--gold-500))' }}>OUR PROMISE</span>
            <div className="w-8 h-[1px]" style={{ background: 'hsl(var(--gold-500))' }} />
          </div>
          <h1 className="font-display font-light text-white" style={{ fontSize: 'clamp(36px, 6vw, 72px)', letterSpacing: '-0.02em' }}>Verified Profiles</h1>
          <p className="font-accent text-[17px] mt-3" style={{ color: 'rgba(255,255,255,0.55)' }}>Trust built on transparency, not just technology</p>
        </ScrollReveal>
      </div>
    </section>

    {/* Stats strip */}
    <section style={{ background: 'linear-gradient(135deg, hsl(var(--gold-700)), hsl(var(--gold-500)))' }}>
      <div className="container mx-auto max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4" style={{ padding: '28px 24px' }}>
        {stats.map(s => (
          <div key={s.label} className="text-center">
            <span className="font-display font-semibold text-[32px] block" style={{ color: 'hsl(var(--ink-900))' }}>{s.value}</span>
            <span className="font-body font-light text-[12px] tracking-[0.08em] uppercase" style={{ color: 'hsla(30,50%,4%,0.7)' }}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Features */}
    <section className="section-padding" style={{ background: 'hsl(var(--cream-50))' }}>
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="font-body font-light text-center max-w-2xl mx-auto mb-16" style={{ fontSize: '17px', lineHeight: 1.8, color: 'hsl(var(--ink-400))' }}>
            At Kammavaari Matrimony, every profile undergoes a rigorous multi-step verification process. We believe that trust is the foundation of every successful match.
          </p>
        </ScrollReveal>
        <div className="space-y-8">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 100}>
              <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-10 items-center`}>
                {/* Image */}
                <div className="w-full md:w-2/5 aspect-[4/3] overflow-hidden" style={{ borderRadius: '24px' }}>
                  <img src={f.image} alt={f.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                {/* Content */}
                <div className="w-full md:w-3/5">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: 'hsla(40,52%,54%,0.08)' }}>
                    <f.icon className="w-6 h-6" style={{ color: 'hsl(var(--gold-500))' }} />
                  </div>
                  <h3 className="font-display font-semibold text-[26px] mb-3" style={{ color: 'hsl(var(--ink-900))' }}>{f.title}</h3>
                  <p className="font-body font-light text-[15px] leading-[1.8]" style={{ color: 'hsl(var(--ink-400))' }}>{f.desc}</p>
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

export default VerifiedProfiles;
