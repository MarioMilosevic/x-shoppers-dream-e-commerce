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

const mario =
  "https://www.course-api.com/react-store-single-product?id=";

export const fetchSingleProduct = async (id) => {
  try {
    const response = await fetch(`${mario}${id}`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error("Error fetching the product:", error);
    throw error;
  }
};

// export const fetchSingleProduct = async (id:string) => {
//   try {
//     const response = await fetch(
//       `https://course-api.com/react-store-single-product?id=${id}`,
//       {
//         mode: "no-cors",
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     // With 'no-cors' mode, you can't access the response body, so this part will not work as expected
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching the product:", error);
//     throw error;
//   }
// };

// export const sortProductsUtil = (
//   products: productResponseType[],
//   sortKey: string
// ) => {
//   if (sortKey === "lowest") {
//     return products.sort((a, b) => a.price - b.price);
//   }
//   if (sortKey === "highest") {
//     return products.sort((a, b) => b.price - a.price);
//   }
//   if (sortKey === "a-z") {
//     return products.sort((a, b) => a.name.localeCompare(b.name));
//   }
//   if (sortKey === "z-a") {
//     return products.sort((a, b) => b.name.localeCompare(a.name));
//   } else {
//     return products;
//   }
// };

export const sortProductsUtil = (
  products: productResponseType[],
  sortKey: string
) => {
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
