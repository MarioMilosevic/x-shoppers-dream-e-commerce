import Sidebar from "../components/Sidebar";
import ProductsContent from "../components/ProductsContent";
import Loading from "../components/Loading";
// import { useProductsSlice } from "../hooks/useProductsSlice";
import { useEffect } from "react";
import { url } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/features/productsSlice";
import { useAppSlice } from "../hooks/useAppSlice";
import { setError, setLoading } from "../redux/features/appSlice";
import ErrorFetch from "../components/ErrorFetch";
// test
import { mario } from "../utils/constants";

const Products = () => {
  // const products = useProductsSlice();
  const {loading, error} = useAppSlice()
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true))
        // const response = await fetch(url);
        // if (!response.ok) {
        //   throw new Error("Network response was not ok");
        // }
        // const dataResponse = await response.json();
        // console.log(dataResponse)
        // dispatch(setProducts(dataResponse));
        dispatch(setProducts(mario));
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
    <div className="sm:max-w-[1200px] sm:grid sm:grid-cols-[20%,1fr] sm:gap-12 relative mx-auto sm:py-16 pt-8 pb-16">
      <Sidebar />
      <ProductsContent />
    </div>
  );
};

export default Products;
