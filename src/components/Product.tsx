import {
  ProductProps,
  textSizeOptions,
  ProductHoverOptions,
  imgSizeOptions,
} from "../types/types";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Product = ({
  id,
  image,
  name,
  price,
  description,
  textSize,
  hover,
  imgSize,
}: ProductProps) => {
  const navigate = useNavigate()
  const textSizeOptions: textSizeOptions = {
    large: "lg:text-xl ",
    medium: "lg:text-lg",
    small: "lg:text-md",
  };

  const imgSizeOptions: imgSizeOptions = {
    large: "h-[250px]",
    small: "h-[180px]",
  };

  const hoverOptions: ProductHoverOptions = {
    true: "hover:-translate-y-4",
    false: "",
  };

  return (
    <article
      className={`flex flex-col pb-2 gap-4 lg:gap-4 lg:w-full transition-all duration-700 ${hoverOptions[hover]}`}
    >
        <img
          src={image}
          alt={name}
          className={`mx-auto w-full object-cover rounded-md cursor-pointer ${imgSizeOptions[imgSize]}`}
          onClick={() => navigate(`/products/${id}`)}
        />
      <div
        className={`mx-auto w-full flex justify-between text-lg ${textSizeOptions[textSize]}`}
      >
        <h2 className="capitalize font-semibold">{name}</h2>
        <span className="font-semibold  text-fuchsia-500">
          ${(price / 100).toFixed(2)}
        </span>
      </div>
      <p className="sm:hidden lg:hidden text-xs">{description}</p>
      <div className="sm:hidden lg:hidden flex items-center justify-start">
        <Button
          color="purple"
          buttonHandler={() => navigate(`/products/${id}`)}
        >
          Details
        </Button>
      </div>
    </article>
  );
};

export default Product;
