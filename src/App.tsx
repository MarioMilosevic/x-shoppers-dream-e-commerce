import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { url } from "./utils/constants";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import SharedLayout from "./components/SharedLayout";
import { setProducts } from "./redux/features/appSlice";
import { useProductsSlice } from "./hooks/useProductsSlice";
import { useDispatch } from "react-redux";
import Loading from "./components/Loading";
function App() {
  const products = useProductsSlice();
  const dispatch = useDispatch()
   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await fetch(url);
         if (!response.ok) {
           throw new Error("Network response was not ok");
         }
         const dataResponse = await response.json();
         console.log(dataResponse);
         dispatch(setProducts(dataResponse));
       } catch (error) {
         console.error("Error fetching data", error);
       }
     };
     fetchData();
   }, [dispatch]);

   console.log(products);
   if (products.length === 0) return <Loading />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
