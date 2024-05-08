import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";
import SharedLayout from "./components/SharedLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />} />
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
