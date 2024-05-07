import { useEffect, useState } from "react";
import { url } from "../utils/constants";
import { ProductState } from "../types/types";
import Product from "./Product";
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

  return (
    <>
          <section className="w-full border-b border-b-neutral-300 pt-24 pb-12">
              <div className="flex flex-col lg:flex-row h-[550px] justify-evenly lg:w-[1250px] mx-auto">     
        {products.map((product) => (
            <Product key={product.id} attributes={product.attributes} />
        ))}
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
