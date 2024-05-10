import { useEffect, useState, useRef } from "react";
import { url } from "../utils/constants";
import { ProductState } from "../types/types";
import Product from "./Product";
import { handleStickyNav } from "../utils/helperFunctions";
const FeaturedProducts = () => {
  const [products, setProducts] = useState<ProductState[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const dataResponse = await response.json();
        const { data } = dataResponse;
        setProducts(data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);
  const productsRef = useRef(null)

  useEffect(() => {
    const scrollHandler = () => {
      handleStickyNav(productsRef, "productsPadding");
    };
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <>
      <section className="w-full border-b border-b-neutral-300 py-custom-py" ref={ productsRef}>
        <div className="flex flex-col w-[90%] lg:items-center gap-4 lg:flex-row lg:justify-between lg:w-[1200px] mx-auto">
          {products.map((product) => (
            <Product key={product.id} attributes={product.attributes} />
          ))}
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
