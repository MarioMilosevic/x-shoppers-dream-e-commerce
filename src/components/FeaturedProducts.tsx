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
    <section className="grid grid-cols-3 w-[1250px] mx-auto gap-8 py-24">
      {products.map((product) => (
        <Product key={product.id} attributes={product.attributes} />
      ))}
    </section>
  );
};

export default FeaturedProducts;
