import { useEffect, useRef, useState } from "react";

const FadeInSection = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const fadeInRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && setVisible(true));
    });
    observer.observe(fadeInRef.current);
    return () => observer.unobserve(fadeInRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={fadeInRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
