import Sidebar from "../components/Sidebar";
import ProductsContent from "../components/ProductsContent";
import { ProductState } from "../types/types";
import { useEffect, useState } from "react";
import { url } from "../utils/constants";
import Loading from "../components/Loading";

const Products = () => {
  const [products, setProducts] = useState<ProductState[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const dataResponse = await response.json();
        setProducts(dataResponse);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);
  console.log('render')
  if (!products) return <Loading />;
  return (
    <div className="lg:w-[1200px] grid grid-cols-[15%,1fr] gap-12 mx-auto py-16 border border-black">
      <Sidebar products={products} />
      <ProductsContent products={products} />
    </div>
  );
};

export default Products;
// klikom na all moram da prikazem sve proizvode = glavni stejt
// SIDEBAR klikom na office itd ja uzmem glavni stejt i u njemu nadjem sta cu da prikazem 
// CONTENT nema pristup