import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState<'enter' | 'exit'>('enter');

  useEffect(() => {
    if (children !== displayChildren) {
      setTransitionStage('exit');
      const timeout = setTimeout(() => {
        setDisplayChildren(children);
        setTransitionStage('enter');
        window.scrollTo(0, 0);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [children, displayChildren]);

  return (
    <div
      style={{
        opacity: transitionStage === 'enter' ? 1 : 0,
        transform: transitionStage === 'enter' ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.35s ease, transform 0.35s ease',
      }}
    >
      {displayChildren}
    </div>
  );
};

export default PageTransition;
