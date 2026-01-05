import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/products/Products";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import SharedLayout from "./components/SharedLayout";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import { ErrorRoute } from "./components/ErrorRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
