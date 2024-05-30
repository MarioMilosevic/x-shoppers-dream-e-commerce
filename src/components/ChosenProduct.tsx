import CartQuantityControl from "./CartQuantityControl";
import { useDispatch } from "react-redux";
import { LuTrash } from "react-icons/lu";
import { ChosenProductType } from "../types/types";
import {
  decrementCartQuantity,
  incrementCartQuantity,
  removeProduct,
} from "../redux/features/cartSlice";
const ChosenProduct = ({ product }: ChosenProductType) => {
  const dispatch = useDispatch();
  const subtotal = product.quantity * product.price;
  return (
    <li className="flex gap-10 lg:gap-0 sm:justify-between lg:justify-between items-center relative">
      <div className="flex gap-4 w-[250px]">
        <img
          src={product.images[0].url}
          alt={product.images[0].url}
          className="w-[100px] h-[80px] object-cover"
        />
        <div className="flex flex-col justify-center">
          <h3 className="capitalize font-semibold">{product.name}</h3>
          <div className="flex gap-2 items-center">
            <span className="font-light text-sm">Color:</span>
            <span
              className="flex justify-center items-center w-3 h-3 rounded-md"
              style={{ backgroundColor: `${product.selectedColor}` }}
            ></span>
          </div>
        </div>
      </div>
      <div className="hidden sm:block lg:block text-fuchsia-500">{`$${product.price / 100}`}</div>
      <div className="w-[100px]">
        <CartQuantityControl
          quantity={product.quantity}
          incrementProductQuantity={() =>
            dispatch(incrementCartQuantity(product.customId))
          }
          decrementProductQuantity={() =>
            dispatch(decrementCartQuantity(product.customId))
          }
        />
      </div>
      <div className="hidden sm:block lg:block text-neutral-500 mr-32">{`$${subtotal / 100}`}</div>
      <button className="bg-red-400 p-1 rounded-md absolute right-8">
        <LuTrash
          fill="white"
          onClick={() => dispatch(removeProduct(product.id))}
        />
      </button>
    </li>
  );
};

export default ChosenProduct;
