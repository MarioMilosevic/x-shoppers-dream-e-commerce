import { useEffect } from "react";
import { RefObject } from "react";

export const useIntersecting = (ref: RefObject<HTMLDivElement>) => {
  useEffect(() => {
    if (ref?.current) {
      const observer = new IntersectionObserver(
        ([entry], observer) => {
          if (entry.isIntersecting) {
            if (ref.current) {
              ref.current.classList.add("intersecting");
              observer.unobserve(entry.target);
            }
          }
        },
        {
          rootMargin: "-100px",
        }
      );
      observer.observe(ref.current);
    }
  }, [ref]);
};
