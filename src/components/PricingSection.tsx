import { useState } from "react";
import { Check, Star, Lock, Shield } from "lucide-react";
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
    proof: "Dedicated RM contacts you within 4 hrs",
    features: ["Unlimited contact views", "Dedicated Relationship Manager", "Handpicked matches weekly", "Profile boosted in search", "VIP badge on profile", "Video call assistance"],
  },
];

const PricingSection = () => {
  const [activePlan, setActivePlan] = useState(1);

  const isDark = (plan: typeof plans[0]) => plan.popular || plan.elite;

  const cardStyle = (plan: typeof plans[0]): React.CSSProperties => {
    if (plan.popular) return {
      background: 'linear-gradient(160deg, #3D1208 0%, #2D0A0A 60%, #1A0808 100%)',
      border: '1.5px solid rgba(201,168,76,0.45)',
      borderRadius: '20px',
      padding: '24px 20px',
      boxShadow: '0 16px 64px rgba(45,10,10,0.5), 0 0 0 1px rgba(201,168,76,0.1)',
      animation: 'borderGlow 3s ease-in-out infinite',
    };
    if (plan.elite) return {
      background: '#0F0A05',
      border: '1.5px solid rgba(201,168,76,0.3)',
      borderRadius: '20px',
      padding: '24px 20px',
      boxShadow: '0 8px 40px rgba(15,10,5,0.4)',
    };
    return {
      background: 'white',
      border: '1.5px solid rgba(201,168,76,0.2)',
      borderRadius: '20px',
      padding: '24px 20px',
      boxShadow: '0 8px 40px rgba(15,10,5,0.06)',
    };
  };

  const renderCard = (plan: typeof plans[0]) => (
    <div className="relative flex flex-col h-full transition-all hover-lift" style={cardStyle(plan)} key={plan.name}>
      {plan.popular ? (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 font-body font-semibold flex items-center gap-1" style={{
          fontSize: '9px', letterSpacing: '0.14em', textTransform: 'uppercase',
          background: 'linear-gradient(135deg, #C9A84C, #B8923A)', color: '#0F0A05',
          padding: '4px 14px', borderRadius: '9999px', boxShadow: '0 4px 16px rgba(201,168,76,0.4)',
          whiteSpace: 'nowrap',
        }}>
          <Star className="w-2.5 h-2.5 fill-current" /> Most Popular
        </div>
      ) : (
        <span className="font-body font-medium mb-1" style={{
          fontSize: '9px', letterSpacing: '0.16em', textTransform: 'uppercase',
          color: isDark(plan) ? 'rgba(201,168,76,0.7)' : '#9B7A2A',
          ...(plan.elite ? { display: 'inline-block', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '999px', padding: '2px 12px', width: 'fit-content' } : {}),
        }}>
          {plan.badge}
        </span>
      )}

      <h3 className="font-display font-light" style={{ fontSize: 'clamp(24px,3vw,32px)', color: isDark(plan) ? 'white' : '#2C1F10', marginTop: plan.popular ? '4px' : '0' }}>
        {plan.name}
      </h3>
      <p className="font-accent text-[12px] mt-0.5" style={{ color: isDark(plan) ? 'rgba(201,168,76,0.7)' : '#9B7A2A' }}>
        {plan.tagline}
      </p>

      <div className="mt-3 mb-0.5">
        <span className="font-display font-light" style={{ fontSize: 'clamp(36px,4vw,48px)', color: isDark(plan) ? '#C9A84C' : 'hsl(40 58% 38%)' }}>
          {plan.price}
        </span>
        <span className="font-body font-light text-[12px] ml-1" style={{ color: isDark(plan) ? 'rgba(255,255,255,0.5)' : '#7A6550' }}>
          / {plan.period}
        </span>
      </div>

      <p className="font-body text-[10px] mb-3" style={{ color: isDark(plan) ? 'hsla(40,52%,54%,0.65)' : '#9B7A2A', letterSpacing: '0.06em' }}>
        {plan.proof}
      </p>

      {plan.elite && (
        <div className="mb-3" style={{ background: 'rgba(201,168,76,0.07)', borderRadius: '10px', border: '1px solid rgba(201,168,76,0.15)', padding: '10px 12px' }}>
          <p className="font-body font-light text-[11px]" style={{ color: 'rgba(201,168,76,0.75)', fontStyle: 'italic' }}>
            Dedicated Relationship Manager contacts you within 4 hours
          </p>
        </div>
      )}

      <div className="my-3" style={{ height: '1px', background: isDark(plan) ? 'rgba(201,168,76,0.15)' : 'rgba(201,168,76,0.12)' }} />

      <ul className="space-y-1.5 flex-1 mb-4">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 font-body font-light text-[12px] leading-[1.5]" style={{ color: isDark(plan) ? 'rgba(255,255,255,0.8)' : '#5C4510' }}>
            <div className="w-[14px] h-[14px] rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'rgba(201,168,76,0.15)' }}>
              <Check className="w-2 h-2" style={{ color: '#C9A84C' }} />
            </div>
            {f}
          </li>
        ))}
      </ul>

      <button
        className="w-full font-body font-semibold text-[13px] transition-all"
        style={{
          height: '42px', borderRadius: '12px', cursor: 'pointer',
          background: plan.popular ? 'linear-gradient(135deg, #C9A84C, #B8923A)' : 'transparent',
          color: plan.popular ? '#0F0A05' : isDark(plan) ? '#C9A84C' : '#9B7A2A',
          border: plan.popular ? 'none' : `1.5px solid ${isDark(plan) ? 'rgba(201,168,76,0.45)' : '#C9A84C'}`,
          boxShadow: plan.popular ? '0 6px 24px rgba(201,168,76,0.4)' : 'none',
        }}
      >
        Choose Plan
      </button>
    </div>
  );

  return (
    <section style={{ background: 'hsl(40 100% 98%)', padding: 'clamp(40px,5vw,56px) clamp(16px,5vw,80px)' }}>
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-[1px]" style={{ background: 'hsl(28 20% 40%)' }} />
              <span className="eyebrow" style={{ color: 'hsl(28 20% 40%)' }}>Exclusive Membership</span>
              <div className="w-8 h-[1px]" style={{ background: 'hsl(28 20% 40%)' }} />
            </div>
            <h2 className="font-display font-light" style={{ fontSize: 'clamp(28px, 5vw, 56px)', color: 'hsl(30 50% 4%)' }}>
              Invest in Your Forever
            </h2>
            <p className="font-accent text-[15px] mt-2 mx-auto" style={{ color: 'hsl(40 58% 38%)', maxWidth: '520px', lineHeight: 1.75 }}>
              "The right match is not found by chance — it is found by intention."
            </p>
          </div>
        </ScrollReveal>

        {/* Trust Strip */}
        <ScrollReveal delay={50}>
          <div className="flex flex-row flex-wrap justify-center gap-1.5 mb-5" style={{ padding: '8px clamp(8px,3vw,40px)' }}>
            {[
              { icon: <Lock className="w-3 h-3" style={{ color: '#C9A84C' }} />, text: 'Secure Payments' },
              { icon: <Check className="w-3 h-3" style={{ color: '#C9A84C' }} />, text: 'Cancel Anytime' },
              { icon: <Star className="w-3 h-3" style={{ color: '#C9A84C' }} />, text: '50,000+ Members' },
              { icon: <Shield className="w-3 h-3" style={{ color: '#C9A84C' }} />, text: 'Privacy Protected' },
            ].map(item => (
              <span key={item.text} className="flex items-center gap-1 font-body text-[10px] whitespace-nowrap" style={{
                color: '#9B7A2A', padding: '4px 10px', borderRadius: '999px',
                background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.12)',
                flexShrink: 0,
              }}>
                {item.icon} {item.text}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Mobile Tab Switcher */}
        <div className="md:hidden flex justify-center mb-4">
          <div className="flex" style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '999px', padding: '3px' }}>
            {plans.map((plan, i) => (
              <button
                key={plan.name}
                onClick={() => setActivePlan(i)}
                className="font-body transition-all whitespace-nowrap"
                style={{
                  padding: '7px 14px', borderRadius: '999px', border: 'none', cursor: 'pointer',
                  fontSize: '12px', letterSpacing: '0.02em',
                  background: activePlan === i ? '#C9A84C' : 'transparent',
                  color: activePlan === i ? '#0F0A05' : '#9B7A2A',
                  fontWeight: activePlan === i ? 600 : 400,
                  boxShadow: activePlan === i ? '0 2px 8px rgba(201,168,76,0.3)' : 'none',
                }}
              >
                {plan.name}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: single card */}
        <div className="md:hidden max-w-xs mx-auto">
          <ScrollReveal>
            {renderCard(plans[activePlan])}
          </ScrollReveal>
        </div>

        {/* Desktop: 3 columns */}
        <div className="hidden md:grid grid-cols-3 gap-3 max-w-4xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 120}>
              {renderCard(plan)}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
