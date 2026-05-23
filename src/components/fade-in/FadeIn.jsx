import { useEffect, useRef, useState } from "react";

const FadeInSection = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const fadeInRef = useRef();
  useEffect(() => {
    const node = fadeInRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && setVisible(true));
      },
      { threshold: "0.3" }
    );
    observer.observe(node);
    return () => observer.unobserve(node);
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
