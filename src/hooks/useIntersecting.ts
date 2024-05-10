import { useRef, useEffect, useState } from "react";

export const useIntersecting = () => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const ref = useRef(null);
// da maknem stejt pa na osnovu refa koji proslijedim, ukoliko intersektuje da doda onu klasu a ako ne nista 
  useEffect(() => {
    if (ref?.current) {
      const observer = new IntersectionObserver(
        ([entry], observer) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observer.unobserve(entry.target);
          }
        },
        {
          rootMargin: "-100px",
        }
      );
      observer.observe(ref.current);
    }
  }, []);

  return { isIntersecting, ref };
};
