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


export const calculateHighestNumber = (arr: productResponseType[]) => {
  return arr.reduce(
    (prev, current) => {
      return prev.price > current.price ? prev : current;
    },
    { price: 0 }
  );
};

export const sortProductsUtil = (products: productResponseType[], sortKey: string) => {
  switch (sortKey) {
    case "lowest":
      return products.sort((a, b) => a.price - b.price);
    case "highest":
      return products.sort((a, b) => b.price - a.price);
    case "a-z":
      return products.sort((a, b) => a.name.localeCompare(b.name));
    case "z-a":
      return products.sort((a, b) => b.name.localeCompare(a.name));
    default:
      return products;
  }
};