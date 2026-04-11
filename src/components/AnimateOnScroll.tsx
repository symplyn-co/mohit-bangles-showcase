import { useEffect, useRef, useState, type ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: string;
  delay?: string;
}

const AnimateOnScroll = ({
  children,
  className = "",
  animation = "animate-fade-up",
  delay = "",
}: AnimateOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${visible ? `${animation} ${delay}` : "opacity-0"}`}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
