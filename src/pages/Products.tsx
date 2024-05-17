import Sidebar from "../components/Sidebar";
import ProductsContent from "../components/ProductsContent";
import Loading from "../components/Loading";
import { useProductsSlice } from "../hooks/useProductsSlice";
import { useEffect } from "react";
import { url } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/features/productsSlice";

const Products = () => {
  const products = useProductsSlice();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const dataResponse = await response.json();
        console.log(dataResponse)
        dispatch(setProducts(dataResponse));
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, [dispatch]);

  if (!products) return <Loading />;
  return (
    <div className="lg:w-[1200px] grid grid-cols-[15%,1fr] gap-12 mx-auto py-16">
      <Sidebar />
      <ProductsContent />
    </div>
  );
};

export default Products;
