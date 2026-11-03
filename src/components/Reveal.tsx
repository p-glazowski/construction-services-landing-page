import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

type RevealProps = { children: ReactNode; index?: number; className?: string };

export function Reveal({ children, index = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-in' : ''} ${className}`.trim()}
      style={{ '--i': index } as CSSProperties}
    >
      {children}
    </div>
  );
}
