import ChosenProduct from "./ChosenProduct";
import Button from "./Button";
import { useCartSlice } from "../hooks/useCartSlice";
import { useNavigate } from "react-router";
const FilledCart = () => {
  const { cart, totalPrice } = useCartSlice();
  const navigate = useNavigate();
  const shippingFee = 5.34;
  console.log(totalPrice);
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
        {cart.map((product) => (
          <ChosenProduct key={product.id} product={product} />
        ))}
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
            <span>{`$${totalPrice / 100}`}</span>
          </div>
          <div className="grid grid-cols-[75%_auto] w-[400px] font-light">
            <h3>Shipping fee:</h3>
            <span>{`$${shippingFee}`}</span>
          </div>
          <div className="border-t border-t-neutral-400 pt-8 pb-6 grid grid-cols-[75%_auto] w-[400px] text-2xl font-semibold">
            <h2>Order Total:</h2>
            <span>{`$${totalPrice / 100 + shippingFee}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilledCart;
