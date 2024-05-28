import { mario2 } from "../utils/constants";
import { useEffect, useState } from "react";
import { singleProductType } from "../types/types";
import ColorButton from "../components/ColorButton";
import { FaRegTrashAlt } from "react-icons/fa";
import ChosenProduct from "../components/ChosenProduct";
import CartQuantityControl from "../components/CartQuantityControl";
import Button from "../components/Button";
import { useNavigate } from "react-router";
const Cart = () => {
  const [singleProduct, setSingleProduct] = useState<singleProductType>();
  const navigate = useNavigate();
  useEffect(() => {
    setSingleProduct(mario2);
  }, []);

  if (!singleProduct) return;
  console.log(singleProduct);
  return (
    <div className="lg:max-w-[1200px] mx-auto py-16">
      <div className="flex justify-around border-b border-b-neutral-400 py-8">
        <div>Item</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Subtotal</div>
      </div>
      <ul className="border-b border-b-neutral-500 flex flex-col gap-8 py-16">
        <ChosenProduct product={singleProduct} />
        <ChosenProduct product={singleProduct} />
        <ChosenProduct product={singleProduct} />
      </ul>
      <div className="flex justify-between items-center py-8">
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
