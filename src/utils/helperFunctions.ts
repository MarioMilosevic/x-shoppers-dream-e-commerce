import { RefObject, Dispatch, SetStateAction } from "react";

export const handleStickyNav = (ref:RefObject<HTMLElement>, cls:string) => {
  if (ref.current) {
    if (window.scrollY > 1000) {
      ref.current.classList.add(cls);
    } else {
      ref.current.classList.remove(cls);
    }
  }
};

export const isVisible = (state: boolean) => {
  const visibility = state ? "opacity-1" : "opacity-0 translate-y-[15rem]";
  return visibility;
};

export const isIntersectingFn = <T extends HTMLElement>(
  ref: RefObject<T>,
  setStateFn: Dispatch<SetStateAction<boolean>>
) => {
  if (!ref?.current) return;
  const observer = new IntersectionObserver(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        setStateFn(true);
        observer.unobserve(entry.target);
      }
    },
    {
      rootMargin: "-100px",
    }
  );
  observer.observe(ref?.current);
};