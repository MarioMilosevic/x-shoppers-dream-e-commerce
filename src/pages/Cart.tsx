import { mario2 } from "../utils/constants";
import { useEffect, useState } from "react";
import { singleProductType } from "../types/types";
import ColorButton from "../components/ColorButton";
import { FaRegTrashAlt } from "react-icons/fa";
import ChosenProduct from "../components/ChosenProduct";
import CartQuantityControl from "../components/CartQuantityControl";
const Cart = () => {
  const [singleProduct, setSingleProduct] = useState<singleProductType>();

  useEffect(() => {
    setSingleProduct(mario2);
  }, []);

  if (!singleProduct) return;
  console.log(singleProduct);
  return (
    <div className="lg:max-w-[1200px] mx-auto py-16 border border-black">
      <div className="flex justify-around border-b border-b-fuchsia-400 py-8">
        <div>Item</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Subtotal</div>
      </div>
      <ul className="border border-black flex flex-col gap-4 py-4">
      <ChosenProduct product={singleProduct } />
      <ChosenProduct product={singleProduct } />
      <ChosenProduct product={singleProduct } />
      </ul>
    </div>
  );
};

export default Cart;


  /* <div className="flex justify-between items-center">
        <div className="border border-black flex gap-2">
          <img
            src={singleProduct.images[0].url}
            alt={singleProduct.images[0].url}
            className="w-[80px] h-[80px]"
          />
          <div className="flex flex-col justify-center">
            <h3 className="capitalize font-semibold text-base">
              {singleProduct.name}
            </h3>
            <div className="flex gap-2 items-center">
              <span>Color:</span>
              {singleProduct.colors.map((button, index) => {
                return (
                  <ColorButton
                    key={index}
                    button={button}
                    index={index}
                    size="small"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div>{`$${singleProduct.price / 100}`}</div>
        <CartQuantityControl />
        {/* subtotal 
        <div>{`$${singleProduct.price / 100}`}</div>
        <FaRegTrashAlt />
      </div>*/