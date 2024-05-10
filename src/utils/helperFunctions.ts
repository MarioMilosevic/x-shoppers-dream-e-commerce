import { RefObject } from "react";

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
  const visibility = state ? "opacity-1" : "opacity-0 translate-y-[10rem]";
  return visibility;
};

