import { useState } from "react";
import { Check, Star, Lock, Shield, Sparkles, Crown, Gem } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const plans = [
  {
    name: "Regular",
    badge: "REGULAR",
    tagline: "Perfect for getting started",
    culturalHook: "Begin your search with dignity",
    price: "₹2,999",
    period: "3 Months",
    popular: false,
    elite: false,
    icon: Sparkles,
    proof: "Join 12,000+ members on this plan",
    features: ["View up to 50 contacts", "Send personalized interests", "Basic search filters", "Email & SMS alerts"],
  },
  {
    name: "Confidential",
    badge: "MOST POPULAR ★",
    tagline: "How most families find their match",
    culturalHook: "Your dedicated search, like a trusted family elder",
    price: "₹5,999",
    period: "6 Months",
    popular: true,
    elite: false,
    icon: Crown,
    proof: "★ Highest match success rate",
    features: ["View up to 150 contacts", "Hide photos from public view", "Advanced matchmaking filters", "Priority customer support", "Profile highlight badge"],
  },
  {
    name: "Super Elite",
    badge: "SUPER ELITE ◆",
    tagline: "For those who deserve the best",
    culturalHook: "White-glove service for discerning families",
    price: "₹14,999",
    period: "12 Months",
    popular: false,
    elite: true,
    icon: Gem,
    proof: "Dedicated RM contacts you within 4 hrs",
    features: ["Unlimited contact views", "Dedicated Relationship Manager", "Handpicked matches weekly", "Profile boosted in search", "VIP badge on profile", "Video call assistance"],
  },
];

const PricingSection = () => {
  const [activePlan, setActivePlan] = useState(1);
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  const isDark = (plan: typeof plans[0]) => plan.popular || plan.elite;

  const renderCard = (plan: typeof plans[0], idx: number) => {
    const isHovered = hoveredPlan === idx;

    return (
      <div
        className="relative flex flex-col h-full transition-all"
        style={{
          background: plan.popular
            ? 'linear-gradient(160deg, #3D1208 0%, #2D0A0A 60%, #1A0808 100%)'
            : plan.elite
              ? 'linear-gradient(160deg, #0F0A05 0%, #1A1208 100%)'
              : 'white',
          border: plan.popular
            ? '1.5px solid rgba(201,168,76,0.45)'
            : plan.elite
              ? '1.5px solid rgba(201,168,76,0.3)'
              : '1.5px solid rgba(201,168,76,0.2)',
          borderRadius: '28px',
          padding: '32px 24px',
          boxShadow: plan.popular
            ? '0 24px 80px rgba(45,10,10,0.5), 0 0 0 1px rgba(201,168,76,0.1)'
            : isHovered
              ? '0 24px 60px hsla(30,50%,4%,0.15)'
              : '0 8px 40px rgba(15,10,5,0.06)',
          transform: isHovered && !plan.popular ? 'translateY(-8px)' : plan.popular ? 'scale(1.03)' : 'none',
          transitionDuration: '0.4s',
          transitionTimingFunction: 'cubic-bezier(0.25,0.1,0,1)',
        }}
        key={plan.name}
        onMouseEnter={() => setHoveredPlan(idx)}
        onMouseLeave={() => setHoveredPlan(null)}
      >
        {/* Decorative top gradient line */}
        <div className="absolute top-0 left-[15%] right-[15%] h-[2px]" style={{
          background: plan.popular
            ? 'linear-gradient(90deg, transparent, hsl(var(--gold-500)), transparent)'
            : plan.elite
              ? 'linear-gradient(90deg, transparent, hsla(40,52%,54%,0.5), transparent)'
              : 'linear-gradient(90deg, transparent, hsla(40,52%,54%,0.25), transparent)',
          borderRadius: '0 0 4px 4px',
        }} />

        {plan.popular ? (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 font-body font-semibold flex items-center gap-1.5" style={{
            fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase',
            background: 'linear-gradient(135deg, #C9A84C, #B8923A)', color: '#0F0A05',
            padding: '6px 18px', borderRadius: '9999px', boxShadow: '0 4px 20px rgba(201,168,76,0.5)',
            whiteSpace: 'nowrap',
          }}>
            <Star className="w-3 h-3 fill-current" /> Most Popular
          </div>
        ) : (
          <span className="font-body font-medium mb-2" style={{
            fontSize: '9px', letterSpacing: '0.16em', textTransform: 'uppercase',
            color: isDark(plan) ? 'rgba(201,168,76,0.7)' : '#9B7A2A',
            ...(plan.elite ? { display: 'inline-block', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '999px', padding: '3px 14px', width: 'fit-content' } : {}),
          }}>
            {plan.badge}
          </span>
        )}

        {/* Icon */}
        <div className="flex items-center justify-center w-14 h-14 rounded-2xl mb-4 mt-2" style={{
          background: isDark(plan) ? 'rgba(201,168,76,0.08)' : 'hsla(40,52%,54%,0.06)',
          border: `1px solid ${isDark(plan) ? 'rgba(201,168,76,0.2)' : 'hsla(40,52%,54%,0.12)'}`,
        }}>
          <plan.icon className="w-6 h-6" style={{ color: 'hsl(var(--gold-500))' }} />
        </div>

        <h3 className="font-display font-light" style={{ fontSize: 'clamp(28px,3vw,36px)', color: isDark(plan) ? 'white' : '#2C1F10' }}>
          {plan.name}
        </h3>
        <p className="font-accent text-[13px] mt-1" style={{ color: isDark(plan) ? 'rgba(201,168,76,0.7)' : '#9B7A2A' }}>
          {plan.tagline}
        </p>

        <div className="mt-5 mb-1">
          <span className="font-display" style={{ fontSize: 'clamp(40px,4vw,52px)', fontWeight: 300, color: isDark(plan) ? '#C9A84C' : 'hsl(40 58% 38%)' }}>
            {plan.price}
          </span>
          <span className="font-body font-light text-[13px] ml-2" style={{ color: isDark(plan) ? 'rgba(255,255,255,0.5)' : '#7A6550' }}>
            / {plan.period}
          </span>
        </div>

        <p className="font-body text-[11px] mb-4" style={{ color: isDark(plan) ? 'hsla(40,52%,54%,0.65)' : '#9B7A2A', letterSpacing: '0.06em' }}>
          {plan.proof}
        </p>

        {plan.elite && (
          <div className="mb-4" style={{ background: 'rgba(201,168,76,0.07)', borderRadius: '14px', border: '1px solid rgba(201,168,76,0.15)', padding: '12px 14px' }}>
            <p className="font-body font-light text-[12px]" style={{ color: 'rgba(201,168,76,0.75)', fontStyle: 'italic' }}>
              Dedicated Relationship Manager contacts you within 4 hours
            </p>
          </div>
        )}

        <div className="my-4" style={{ height: '1px', background: isDark(plan) ? 'rgba(201,168,76,0.15)' : 'rgba(201,168,76,0.12)' }} />

        <ul className="space-y-2.5 flex-1 mb-6">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 font-body font-light text-[13px] leading-[1.6]" style={{ color: isDark(plan) ? 'rgba(255,255,255,0.8)' : '#5C4510' }}>
              <div className="w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{
                background: isDark(plan) ? 'rgba(201,168,76,0.12)' : 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.15)',
              }}>
                <Check className="w-2.5 h-2.5" style={{ color: '#C9A84C' }} />
              </div>
              {f}
            </li>
          ))}
        </ul>

        <button
          className="w-full font-body font-semibold text-[14px] transition-all"
          style={{
            height: '48px', borderRadius: '14px', cursor: 'pointer',
            background: plan.popular ? 'linear-gradient(135deg, #C9A84C, #B8923A)' : 'transparent',
            color: plan.popular ? '#0F0A05' : isDark(plan) ? '#C9A84C' : '#9B7A2A',
            border: plan.popular ? 'none' : `1.5px solid ${isDark(plan) ? 'rgba(201,168,76,0.45)' : '#C9A84C'}`,
            boxShadow: plan.popular ? '0 8px 28px rgba(201,168,76,0.45)' : 'none',
          }}
        >
          Choose Plan
        </button>
      </div>
    );
  };

  return (
    <section style={{ background: 'hsl(40 100% 98%)', padding: 'clamp(48px,6vw,72px) clamp(16px,5vw,80px)' }}>
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-[1px]" style={{ background: 'hsl(28 20% 40%)' }} />
              <span className="eyebrow" style={{ color: 'hsl(28 20% 40%)' }}>Exclusive Membership</span>
              <div className="w-8 h-[1px]" style={{ background: 'hsl(28 20% 40%)' }} />
            </div>
            <h2 className="font-display font-light" style={{ fontSize: 'clamp(32px, 5vw, 60px)', color: 'hsl(30 50% 4%)' }}>
              Invest in Your Forever
            </h2>
            <p className="font-accent text-[16px] mt-2 mx-auto" style={{ color: 'hsl(40 58% 38%)', maxWidth: '520px', lineHeight: 1.75 }}>
              "The right match is not found by chance — it is found by intention."
            </p>
          </div>
        </ScrollReveal>

        {/* Trust Strip */}
        <ScrollReveal delay={50}>
          <div className="flex flex-row flex-wrap justify-center gap-2 mb-8" style={{ padding: '8px clamp(8px,3vw,40px)' }}>
            {[
              { icon: <Lock className="w-3 h-3" style={{ color: '#C9A84C' }} />, text: 'Secure Payments' },
              { icon: <Check className="w-3 h-3" style={{ color: '#C9A84C' }} />, text: 'Cancel Anytime' },
              { icon: <Star className="w-3 h-3" style={{ color: '#C9A84C' }} />, text: '50,000+ Members' },
              { icon: <Shield className="w-3 h-3" style={{ color: '#C9A84C' }} />, text: 'Privacy Protected' },
            ].map(item => (
              <span key={item.text} className="flex items-center gap-1.5 font-body text-[11px] whitespace-nowrap" style={{
                color: '#9B7A2A', padding: '6px 14px', borderRadius: '999px',
                background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.12)',
              }}>
                {item.icon} {item.text}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Mobile Tab Switcher */}
        <div className="md:hidden flex justify-center mb-6">
          <div className="flex" style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '999px', padding: '4px' }}>
            {plans.map((plan, i) => (
              <button
                key={plan.name}
                onClick={() => setActivePlan(i)}
                className="font-body transition-all whitespace-nowrap"
                style={{
                  padding: '8px 16px', borderRadius: '999px', border: 'none', cursor: 'pointer',
                  fontSize: '12px', letterSpacing: '0.02em',
                  background: activePlan === i ? '#C9A84C' : 'transparent',
                  color: activePlan === i ? '#0F0A05' : '#9B7A2A',
                  fontWeight: activePlan === i ? 600 : 400,
                  boxShadow: activePlan === i ? '0 2px 12px rgba(201,168,76,0.4)' : 'none',
                }}
              >
                {plan.name}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: single card */}
        <div className="md:hidden max-w-sm mx-auto">
          <ScrollReveal>
            {renderCard(plans[activePlan], activePlan)}
          </ScrollReveal>
        </div>

        {/* Desktop: 3 columns */}
        <div className="hidden md:grid grid-cols-3 gap-5 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 120}>
              {renderCard(plan, i)}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
