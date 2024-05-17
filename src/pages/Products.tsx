import Sidebar from "../components/Sidebar";
import ProductsContent from "../components/ProductsContent";
import Loading from "../components/Loading";
import { useProductsSlice } from "../hooks/useProductsSlice";
import { useEffect } from "react";
import { url } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/features/productsSlice";
import { useAppSlice } from "../hooks/useAppSlice";
import { setError, setLoading } from "../redux/features/appSlice";
import ErrorFetch from "../components/ErrorFetch";

const Products = () => {
  const products = useProductsSlice();
  const {loading, error} = useAppSlice()
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true))
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const dataResponse = await response.json();
        dispatch(setProducts(dataResponse));
      } catch (error) {
        console.error("Error fetching data", error);
        dispatch(setError(true))
      } finally {
        dispatch(setLoading(false))
      }
    };
    fetchData();
  }, [dispatch]);

  if (loading) return <Loading />;
  if(error) return <ErrorFetch/>
  return (
    <div className="lg:w-[1200px] grid grid-cols-[15%,1fr] gap-12 mx-auto py-16">
      <Sidebar />
      <ProductsContent />
    </div>
  );
};

export default Products;
