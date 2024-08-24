import Sidebar from "../components/Sidebar";
import ProductsContent from "../components/ProductsContent";
import Loading from "../components/Loading";
import { useEffect } from "react";
import { url } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/features/productsSlice";
import { useAppSlice } from "../hooks/useAppSlice";
import {
  setActivePageIndex,
  setError,
  setLoading,
} from "../redux/features/appSlice";
import ErrorFetch from "../components/ErrorFetch";
import Overlay from "../components/Overlay";

const Products = () => {
  const { loading, error } = useAppSlice();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setActivePageIndex(1));
        dispatch(setLoading(true));
        dispatch(setError(false));
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const dataResponse = await response.json();
        dispatch(setProducts(dataResponse));
      } catch (error) {
        dispatch(setError(true));
      } finally {
        dispatch(setLoading(false));
      }
    };
    fetchData();
  }, [dispatch]);


  if (loading) return <Loading />;
  if (error) return <ErrorFetch />;
  return (
    <div className="sm:max-w-[1200px] sm:grid sm:grid-cols-[20%,1fr] sm:gap-12 relative mx-auto sm:py-16 pt-8 pb-16">
      <Sidebar />
      <ProductsContent />
      <Overlay />
    </div>
  );
};

export default Products;
