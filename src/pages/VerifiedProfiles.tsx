import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { ShieldCheck, UserCheck, BadgeCheck, Eye } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Identity Verification", desc: "Every profile goes through Aadhaar & government ID verification to ensure authenticity." },
  { icon: UserCheck, title: "Family Background Check", desc: "Our team personally verifies family details, profession, and community standing." },
  { icon: BadgeCheck, title: "Photo Authenticity", desc: "All photos are reviewed by our team to ensure they are recent and genuine." },
  { icon: Eye, title: "Regular Audits", desc: "Profiles are periodically reviewed and inactive or suspicious accounts are removed." },
];

const VerifiedProfiles = () => (
  <div className="min-h-screen">
    <Header />
    <section className="relative flex items-center justify-center pt-16 overflow-hidden" style={{ height: '50vh', minHeight: '340px', background: 'hsl(var(--ink-900))' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 60%, hsla(40,52%,54%,0.08), transparent 70%)' }} />
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

    <section className="section-padding" style={{ background: 'hsl(var(--cream-50))' }}>
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="font-body font-light text-center max-w-2xl mx-auto mb-16" style={{ fontSize: '17px', lineHeight: 1.8, color: 'hsl(var(--ink-400))' }}>
            At Kammavaari Matrimony, every profile undergoes a rigorous multi-step verification process. We believe that trust is the foundation of every successful match.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 100}>
              <div className="bg-white rounded-[24px] p-8" style={{ border: '1px solid hsla(40,52%,54%,0.12)', boxShadow: '0 4px 24px hsla(30,50%,4%,0.04)' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: 'hsla(40,52%,54%,0.08)' }}>
                  <f.icon className="w-6 h-6" style={{ color: 'hsl(var(--gold-500))' }} />
                </div>
                <h3 className="font-display font-semibold text-[22px] mb-3" style={{ color: 'hsl(var(--ink-900))' }}>{f.title}</h3>
                <p className="font-body font-light text-[15px] leading-[1.7]" style={{ color: 'hsl(var(--ink-400))' }}>{f.desc}</p>
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
