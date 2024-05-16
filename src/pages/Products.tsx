import Sidebar from "../components/Sidebar";
import ProductsContent from "../components/ProductsContent";
import Loading from "../components/Loading";
import { ProductState } from "../types/types";
import { useEffect, useState } from "react";
import { url } from "../utils/constants";

const Products = () => {
  const [products, setProducts] = useState<ProductState[]>();
  const [workingState, setWorkingState] = useState<ProductState[]>()
  // napravim jos jedan stejt, njemu dam vrijednost ovog products, proslijedim oba u sidebar
  // radim na prvom a vrijednosti dajem na drugom ili samo prikazujem drugi
  // u productscontent samo radim na ovom drugom kopija stejtu

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const dataResponse = await response.json();
        setProducts(dataResponse);
        setWorkingState(dataResponse)
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  // da napravim funkcije

  
  console.log('render')
  if (!products) return <Loading />;
  return (
    <div className="lg:w-[1200px] grid grid-cols-[15%,1fr] gap-12 mx-auto py-16">
      <Sidebar products={products} workingState={workingState}/>
      <ProductsContent workingState={workingState}/>
    </div>
  );
};

export default Products;
// klikom na all moram da prikazem sve proizvode = glavni stejt
// SIDEBAR klikom na office itd ja uzmem glavni stejt i u njemu nadjem sta cu da prikazem 
// CONTENT nema pristup