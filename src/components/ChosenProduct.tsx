import ColorButton from "./ColorButton";
import CartQuantityControl from "./CartQuantityControl";
import { LuTrash } from "react-icons/lu";
const ChosenProduct = ({ product }) => {
  return (
    <li className="flex justify-between items-center relative">
      <div className="border border-black flex gap-2 w-[250px]">
        <img
          src={product.images[0].url}
          alt={product.images[0].url}
          className="w-[100px] h-[80px] object-cover"
        />
        <div className="flex flex-col justify-center">
          <h3 className="capitalize font-semibold text-base">{product.name}</h3>
          <div className="flex gap-2 items-center">
            <span>Color:</span>
            {product.colors.map((button, index) => {
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
      <div className="border border-black">{`$${product.price / 100}`}</div>
      <div className="border border-black w-[100px]">
        <CartQuantityControl />
      </div>
      {/* subtotal */}
      <div className="border border-black mr-32">{`$${product.price / 100}`}</div>
      <button className="bg-red-400 p-1 rounded-md absolute right-8">
        <LuTrash  fill="white"/>
      </button>
    </li>
  );
};

export default ChosenProduct;
