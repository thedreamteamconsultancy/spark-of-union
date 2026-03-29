import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { HeartHandshake, Phone, Calendar, Star, Users, MessageCircle } from "lucide-react";

const benefits = [
  { icon: HeartHandshake, title: "Personal Match Guidance", desc: "Your dedicated RM understands your family's values and preferences to find the ideal match." },
  { icon: Phone, title: "Always Available", desc: "Direct phone and WhatsApp access to your relationship manager for instant support." },
  { icon: Calendar, title: "Meeting Coordination", desc: "We arrange and coordinate meetings between families at your convenience." },
  { icon: Star, title: "Priority Matchmaking", desc: "Premium members get first access to new profiles and priority introductions." },
];

const process = [
  { step: "01", title: "Get Assigned", desc: "Within 4 hours of registration, a dedicated RM contacts you personally." },
  { step: "02", title: "Share Preferences", desc: "Discuss your family values, expectations, and partner preferences in detail." },
  { step: "03", title: "Receive Matches", desc: "Your RM handpicks compatible profiles and presents them weekly." },
  { step: "04", title: "Meet & Connect", desc: "We coordinate family meetings and guide you through every step." },
];

const DedicatedRM = () => (
  <div className="min-h-screen">
    <Header />
    <section className="relative flex items-center justify-center pt-16 overflow-hidden" style={{ height: '55vh', minHeight: '380px', background: 'hsl(var(--ink-900))' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 60%, hsla(40,52%,54%,0.08), transparent 70%)' }} />
      <img
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=60"
        alt="Dedicated relationship manager"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.12, filter: 'saturate(0.5)' }}
      />
      <div className="relative z-10 text-center px-4">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px]" style={{ background: 'hsl(var(--gold-500))' }} />
            <span className="eyebrow" style={{ color: 'hsl(var(--gold-500))' }}>PERSONAL TOUCH</span>
            <div className="w-8 h-[1px]" style={{ background: 'hsl(var(--gold-500))' }} />
          </div>
          <h1 className="font-display font-light text-white" style={{ fontSize: 'clamp(36px, 6vw, 72px)', letterSpacing: '-0.02em' }}>Dedicated Relationship Manager</h1>
          <p className="font-accent text-[17px] mt-3" style={{ color: 'rgba(255,255,255,0.55)' }}>A personal guide for your matrimonial journey</p>
        </ScrollReveal>
      </div>
    </section>

    {/* Intro + Image */}
    <section className="section-padding" style={{ background: 'hsl(var(--cream-50))' }}>
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row gap-10 items-center mb-20">
          <div className="w-full md:w-1/2">
            <ScrollReveal>
              <div className="overflow-hidden" style={{ borderRadius: '28px', boxShadow: '0 24px 60px hsla(30,50%,4%,0.12)' }}>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=70"
                  alt="Professional relationship manager"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
          <div className="w-full md:w-1/2">
            <ScrollReveal delay={100}>
              <p className="font-body font-light" style={{ fontSize: '17px', lineHeight: 1.9, color: 'hsl(var(--ink-400))' }}>
                Every premium member is assigned a dedicated Relationship Manager who personally guides the entire matchmaking process — from profile selection to family introductions. Think of them as a trusted family elder who understands both tradition and modern preferences.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Benefits Grid */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-display font-light" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: 'hsl(var(--ink-900))' }}>
              Why Choose a Dedicated RM?
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 100}>
              <div className="bg-white rounded-[24px] p-8 transition-all hover-lift" style={{ border: '1px solid hsla(40,52%,54%,0.12)', boxShadow: '0 4px 24px hsla(30,50%,4%,0.04)' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: 'hsla(40,52%,54%,0.08)' }}>
                  <b.icon className="w-6 h-6" style={{ color: 'hsl(var(--gold-500))' }} />
                </div>
                <h3 className="font-display font-semibold text-[22px] mb-3" style={{ color: 'hsl(var(--ink-900))' }}>{b.title}</h3>
                <p className="font-body font-light text-[15px] leading-[1.7]" style={{ color: 'hsl(var(--ink-400))' }}>{b.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Process Timeline */}
    <section className="section-padding" style={{ background: 'hsl(var(--ink-900))' }}>
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="font-display font-light text-white" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
              How It Works
            </h2>
            <p className="font-accent text-[16px] mt-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Four simple steps to your dedicated support
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {process.map((p, i) => (
            <ScrollReveal key={p.step} delay={i * 100}>
              <div className="flex gap-5 p-6" style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(201,168,76,0.12)',
                borderRadius: '20px',
              }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{
                  background: 'linear-gradient(135deg, hsl(var(--gold-500)), hsl(var(--gold-700)))',
                  boxShadow: '0 4px 16px hsla(40,52%,54%,0.3)',
                }}>
                  <span className="font-display font-semibold text-[16px]" style={{ color: '#FFFDF8' }}>{p.step}</span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-[20px] text-white mb-2">{p.title}</h3>
                  <p className="font-body font-light text-[14px] leading-[1.7]" style={{ color: 'rgba(255,255,255,0.6)' }}>{p.desc}</p>
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

export default DedicatedRM;
