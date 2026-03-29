import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { Lock, EyeOff, Shield, Fingerprint, CheckCircle } from "lucide-react";

const features = [
  { icon: Lock, title: "Profile Visibility Control", desc: "Choose who can see your profile — only verified members, premium users, or specific community members.", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=70" },
  { icon: EyeOff, title: "Photo Privacy", desc: "Keep your photos private and share them only with matches you approve.", image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=600&q=70" },
  { icon: Shield, title: "Contact Protection", desc: "Your phone number and email are never shared without your explicit consent.", image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=70" },
  { icon: Fingerprint, title: "Data Security", desc: "All personal data is encrypted and stored securely following industry best practices.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=70" },
];

const commitments = [
  "End-to-end encryption for all messages",
  "No data shared with third parties",
  "GDPR compliant data handling",
  "Right to delete your data anytime",
  "Regular security audits",
  "Verified team access controls",
];

const PrivacySettings = () => (
  <div className="min-h-screen">
    <Header />
    <section className="relative flex items-center justify-center pt-16 overflow-hidden" style={{ height: '55vh', minHeight: '380px', background: 'hsl(var(--ink-900))' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 60%, hsla(40,52%,54%,0.08), transparent 70%)' }} />
      <img
        src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1920&q=60"
        alt="Privacy and security"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.1, filter: 'saturate(0.4)' }}
      />
      <div className="relative z-10 text-center px-4">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px]" style={{ background: 'hsl(var(--gold-500))' }} />
            <span className="eyebrow" style={{ color: 'hsl(var(--gold-500))' }}>YOUR SAFETY</span>
            <div className="w-8 h-[1px]" style={{ background: 'hsl(var(--gold-500))' }} />
          </div>
          <h1 className="font-display font-light text-white" style={{ fontSize: 'clamp(36px, 6vw, 72px)', letterSpacing: '-0.02em' }}>Privacy Settings</h1>
          <p className="font-accent text-[17px] mt-3" style={{ color: 'rgba(255,255,255,0.55)' }}>Your privacy is sacred — we protect it like family</p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding" style={{ background: 'hsl(var(--cream-50))' }}>
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="font-body font-light text-center max-w-2xl mx-auto mb-16" style={{ fontSize: '17px', lineHeight: 1.8, color: 'hsl(var(--ink-400))' }}>
            We understand the sensitivity of matrimonial searches. Our comprehensive privacy controls put you in charge of your information at every step.
          </p>
        </ScrollReveal>

        {/* Alternating feature rows with images */}
        <div className="space-y-10">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 100}>
              <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                <div className="w-full md:w-2/5 overflow-hidden" style={{ borderRadius: '24px' }}>
                  <img src={f.image} alt={f.title} className="w-full aspect-[4/3] object-cover" loading="lazy" />
                </div>
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

    {/* Commitments section */}
    <section className="section-padding" style={{ background: 'hsl(var(--ink-900))' }}>
      <div className="container mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <h2 className="font-display font-light text-white mb-10" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
            Our Privacy Commitments
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {commitments.map((c, i) => (
            <ScrollReveal key={c} delay={i * 60}>
              <div className="flex items-center gap-3 text-left p-4" style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(201,168,76,0.12)',
                borderRadius: '16px',
              }}>
                <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: 'hsl(var(--gold-500))' }} />
                <span className="font-body font-light text-[14px]" style={{ color: 'rgba(255,255,255,0.8)' }}>{c}</span>
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

export default PrivacySettings;
