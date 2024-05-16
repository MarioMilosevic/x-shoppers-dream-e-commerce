import {
  ProductProps,
  sizeOptions,
  ProductHoverOptions,
} from "../types/types";

const Product = ({ image, name, price, size, hover }: ProductProps) => {
  const sizeOptions: sizeOptions = {
    large: "lg:text-xl ",
    medium: "lg:text-lg",
    small: "lg:text-md",
  };

  const hoverOptions: ProductHoverOptions = {
    true: "hover:-translate-y-4",
    false: "",
  };

  return (
    <article
      className={`flex flex-col gap-4 lg:gap-4 lg:w-full transition-all duration-700 ${hoverOptions[hover]}`}
    >
      <img
        src={image}
        alt={name}
        className="w-[75%] mx-auto lg:w-full lg:h-[250px] object-cover rounded-md cursor-pointer"
      />
      <div
        className={`w-[50%] mx-auto lg:w-full flex justify-between ${sizeOptions[size]}`}
      >
        <h2 className="capitalize text-medium font-medium">{name}</h2>
        <span className="font-semibold  text-fuchsia-500">
          ${(price / 100).toFixed(2)}
        </span>
      </div>
    </article>
  );
};

export default Product;
