import { mario2 } from "../utils/constants";
import { useEffect, useState } from "react";
import { singleProductType } from "../types/types";
import { useNavigate } from "react-router";
import { useCartSlice } from "../hooks/useCartSlice";
import ChosenProduct from "../components/ChosenProduct";
import Button from "../components/Button";
const Cart = () => {
  const [singleProduct, setSingleProduct] = useState<singleProductType>();
  const {cart} = useCartSlice()
  const navigate = useNavigate();
  useEffect(() => {
    setSingleProduct(mario2);
  }, []);

  if (!singleProduct) return;
  console.log(cart)
  return (
    <div className="lg:max-w-[1200px] mx-auto pt-16 pb-32">
      <div className="flex justify-between border-b border-b-neutral-400 py-8">
        <div className="w-[250px] flex justify-center">
          <span>Item</span>
        </div>
        <div>Price</div>
        <div>Quantity</div>
        <div className="mr-32">Subtotal</div>
      </div>
      <ul className="border-b border-b-neutral-500 flex flex-col gap-8 py-16">
        {cart.map((product) => <ChosenProduct key={product.id} product={product}/>)}
      </ul>
      <div className="flex justify-between items-center pt-12 pb-16">
        <Button color="purple" buttonHandler={() => navigate("/products")}>
          Continue Shopping
        </Button>
        <Button color="red" buttonHandler={() => console.log("da ocisti kart")}>
          Clear Shopping Cart
        </Button>
      </div>
      <div className="flex flex-col items-end">
        <div className="p-8 flex flex-col gap-4 border border-neutral-400 rounded-md">
          <div className="grid grid-cols-[75%_auto] w-[400px] font-semibold">
            <h2>Subtotal:</h2>
            <span>$357.97</span>
          </div>
          <div className="grid grid-cols-[75%_auto] w-[400px] font-light">
            <h3>Shipping fee:</h3>
            <span>$2.97</span>
          </div>
          <div className="border-t border-t-neutral-400 pt-8 pb-6 grid grid-cols-[75%_auto] w-[400px] text-2xl font-semibold">
            <h2>Order Total:</h2>
            <span>$363.98</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
