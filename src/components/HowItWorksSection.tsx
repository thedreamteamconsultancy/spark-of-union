import { useState, useEffect, useRef } from "react";
import { UserPlus, Search, MessageCircle, Heart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  { number: "01", title: "Create Your Profile", subtitle: "Your story, told beautifully", description: "Begin your profile the way a shaadi invitation is crafted — with pride in your family and values.", Icon: UserPlus },
  { number: "02", title: "Discover Your Match", subtitle: "Curated just for you", description: "Browse profiles curated for the Kamma community — filtered by your family's preferences.", Icon: Search },
  { number: "03", title: "Connect & Converse", subtitle: "When hearts align", description: "Share your interest with all the dignity of an elder delivering a proposal — respectfully, privately.", Icon: MessageCircle },
  { number: "04", title: "Begin Forever", subtitle: "Your journey starts here", description: "From first hello to saptapadi — your forever starts here, with our family supporting yours.", Icon: Heart },
];

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(-1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveStep(0);
          let step = 0;
          timerRef.current = setInterval(() => {
            step += 1;
            setActiveStep(step);
            if (step >= steps.length - 1) clearInterval(timerRef.current);
          }, 900);
        } else {
          clearInterval(timerRef.current);
          setActiveStep(-1);
        }
      },
      { threshold: [0, 0.25], rootMargin: '0px 0px -10% 0px' }
    );
    observer.observe(section);
    return () => { observer.disconnect(); clearInterval(timerRef.current); };
  }, []);

  const isStepActive = (i: number) => activeStep >= 0 && i <= activeStep;

  return (
    <section ref={sectionRef} id="journey-section" className="section-padding" style={{ background: 'hsl(var(--cream-50))' }}>
      <div className="container mx-auto" style={{ maxWidth: '100%' }}>
        <ScrollReveal>
          <div className="text-center mb-14 md:mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-9 h-[1px]" style={{ background: 'hsl(var(--ink-400))' }} />
              <span className="eyebrow" style={{ color: 'hsl(var(--ink-400))' }}>YOUR JOURNEY</span>
              <div className="w-9 h-[1px]" style={{ background: 'hsl(var(--ink-400))' }} />
            </div>
            <h2 className="font-display font-light" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', color: 'hsl(var(--ink-900))', letterSpacing: '-0.02em' }}>
              The Path to Forever
            </h2>
            <p className="font-accent text-[20px] md:text-[22px]" style={{ color: 'hsl(var(--gold-700))' }}>
              begins with a single step
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop: horizontal roadmap */}
        <div className="hidden md:block max-w-5xl mx-auto relative" style={{ overflow: 'hidden' }}>
          {/* Connecting line — starts/ends at circle centers */}
          <svg className="absolute pointer-events-none" style={{ top: '32px', left: '12.5%', width: '75%', height: '8px', overflow: 'visible', zIndex: 1 }}>
            <line x1="0" y1="4" x2="100%" y2="4" stroke="hsla(40,52%,54%,0.15)" strokeWidth="1.5" strokeDasharray="6 6" />
            <line x1="0" y1="4" x2={`${activeStep >= 0 ? (activeStep / (steps.length - 1)) * 100 : 0}%`} y2="4" stroke="hsl(var(--gold-500))" strokeWidth="2" strokeLinecap="round" style={{ transition: 'all 0.8s cubic-bezier(0.25,0.1,0,1)' }} />
          </svg>

          <div className="flex justify-between">
            {steps.map((step, i) => {
              const active = isStepActive(i);
              return (
                <div key={step.number} style={{ flex: '1 1 0', minWidth: 0, padding: '0 16px' }} className="flex flex-col items-center text-center relative">
                  <div className="flex items-center justify-center relative" style={{
                    width: '64px', height: '64px', borderRadius: '50%', zIndex: 2,
                    background: active ? 'linear-gradient(135deg, hsl(var(--gold-500)), hsl(var(--gold-700)))' : 'white',
                    border: active ? 'none' : '1.5px solid hsla(40,52%,54%,0.25)',
                    boxShadow: active ? '0 8px 32px hsla(40,52%,54%,0.45), 0 0 0 8px hsla(40,52%,54%,0.1)' : '0 4px 16px hsla(30,50%,4%,0.06)',
                    transform: active ? 'scale(1.12)' : 'scale(1)',
                    transition: 'all 0.6s cubic-bezier(0.25,0.1,0,1)',
                  }}>
                    <span className="font-display" style={{
                      fontSize: '22px', fontWeight: 600,
                      color: active ? '#FFFDF8' : 'hsla(40,52%,54%,0.5)',
                      textShadow: active ? '0 1px 2px rgba(0,0,0,0.3)' : 'none',
                    }}>
                      {step.number}
                    </span>
                  </div>

                  <div className="mt-5 transition-all" style={{
                    background: active ? 'white' : 'transparent',
                    border: active ? '1px solid hsla(40,52%,54%,0.2)' : '1px solid transparent',
                    borderRadius: '20px',
                    padding: active ? '24px 20px 28px' : '24px 8px',
                    boxShadow: active ? '0 12px 48px hsla(30,50%,4%,0.1)' : 'none',
                    marginTop: active ? '12px' : '20px',
                    transitionDuration: '0.6s',
                  }}>
                    <h3 className="font-display" style={{ fontSize: '22px', fontWeight: active ? 600 : 400, color: active ? 'hsl(var(--ink-900))' : 'hsl(var(--gold-700))', transition: 'color 0.5s ease' }}>
                      {step.title}
                    </h3>
                    <p className="font-accent mt-1" style={{ fontSize: '14px', color: 'hsl(var(--gold-700))', opacity: active ? 1 : 0.5, transition: 'opacity 0.5s ease' }}>
                      {step.subtitle}
                    </p>
                    <p className="font-body font-light mt-3" style={{
                      fontSize: '14px', lineHeight: 1.7, color: 'hsl(var(--ink-400))',
                      maxHeight: active ? '120px' : '0', overflow: 'hidden', opacity: active ? 1 : 0,
                      transition: 'max-height 0.6s ease, opacity 0.5s ease', maxWidth: '200px', margin: '12px auto 0',
                    }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden max-w-md mx-auto">
          {steps.map((step, i) => {
            const active = isStepActive(i);
            return (
              <div key={step.number} className="flex gap-5 relative" style={{ paddingBottom: i < steps.length - 1 ? '28px' : '0' }}>
                {i < steps.length - 1 && (
                  <div className="absolute" style={{
                    left: '31px', top: '64px', bottom: '0', width: '2px',
                    background: active && i < activeStep ? 'hsl(var(--gold-500))' : 'hsla(40,52%,54%,0.15)',
                    transition: 'background 0.6s ease',
                  }} />
                )}
                <div className="flex-shrink-0 flex items-center justify-center" style={{
                  width: '64px', height: '64px', borderRadius: '50%', zIndex: 2,
                  background: active ? 'linear-gradient(135deg, hsl(var(--gold-500)), hsl(var(--gold-700)))' : 'white',
                  border: active ? 'none' : '1.5px solid hsla(40,52%,54%,0.25)',
                  boxShadow: active ? '0 8px 32px hsla(40,52%,54%,0.45), 0 0 0 8px hsla(40,52%,54%,0.1)' : '0 4px 16px hsla(30,50%,4%,0.06)',
                  transform: active ? 'scale(1.08)' : 'scale(1)',
                  transition: 'all 0.6s cubic-bezier(0.25,0.1,0,1)',
                }}>
                  <span className="font-display" style={{
                    fontSize: '22px', fontWeight: 600,
                    color: active ? '#FFFDF8' : 'hsla(40,52%,54%,0.5)',
                    textShadow: active ? '0 1px 2px rgba(0,0,0,0.3)' : 'none',
                  }}>
                    {step.number}
                  </span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-display" style={{ fontSize: '20px', fontWeight: active ? 600 : 400, color: active ? 'hsl(var(--ink-900))' : 'hsl(var(--gold-700))' }}>
                    {step.title}
                  </h3>
                  <p className="font-accent mt-1" style={{ fontSize: '14px', color: 'hsl(var(--gold-700))', opacity: active ? 1 : 0.5 }}>
                    {step.subtitle}
                  </p>
                  <p className="font-body font-light mt-2" style={{
                    fontSize: '14px', lineHeight: 1.7, color: 'hsl(var(--ink-400))',
                    maxHeight: active ? '120px' : '0', overflow: 'hidden', opacity: active ? 1 : 0,
                    transition: 'max-height 0.6s ease, opacity 0.5s ease',
                  }}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
