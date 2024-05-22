import { RefObject } from "react";
import { productResponseType } from "../types/types";

export const handleStickyNav = (ref: RefObject<HTMLElement>, cls: string) => {
  if (ref.current) {
    if (window.scrollY > 1050) {
      ref.current.classList.add(cls);
    } else {
      ref.current.classList.remove(cls);
    }
  }
};

// export const calculateHighestNumber = (arr: productResponseType[]) => {
//     arr.reduce((prev, current) => {
//       return prev.price > current.price ? prev : current;
//     }, 0);
//   }

export const calculateHighestNumber = (arr: productResponseType[]) => {
  return arr.reduce(
    (prev, current) => {
      return prev.price > current.price ? prev : current;
    },
    { price: 0 }
  );
};

