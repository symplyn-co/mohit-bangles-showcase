import { useLocation } from "react-router-dom";
import { type ReactNode, useEffect, useState } from "react";

const PageTransition = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    // Small delay to ensure the opacity-0 class is applied before animating in
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setVisible(true);
      });
    });
    return () => cancelAnimationFrame(raf);
  }, [location.pathname]);

  return (
    <div
      className={`transition-opacity duration-400 ease-out ${visible ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </div>
  );
};

export default PageTransition;
