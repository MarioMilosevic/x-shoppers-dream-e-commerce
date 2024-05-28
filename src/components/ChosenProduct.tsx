import CartQuantityControl from "./CartQuantityControl";
import { LuTrash } from "react-icons/lu";
import { ChosenProductType } from "../types/types";
const ChosenProduct = ({ product }: ChosenProductType) => {
  return (
    <li className="flex justify-between items-center relative">
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
            {product.colors.map((button, index) => {
              return (
                <span
                  key={index}
                  className="flex justify-center items-center w-3 h-3 rounded-md"
                  style={{ backgroundColor: `${button}` }}
                ></span>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-fuchsia-500 ">{`$${product.price / 100}`}</div>
      <div className="w-[100px]">
        <CartQuantityControl quantity={product.quantity}/>
      </div>
      {/* subtotal */}
      <div className="text-neutral-500 mr-32">{`$${product.price / 100}`}</div>
      <button className="bg-red-400 p-1 rounded-md absolute right-8">
        <LuTrash fill="white" />
      </button>
    </li>
  );
};

export default ChosenProduct;
