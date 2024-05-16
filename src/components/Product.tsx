import {
  ProductProps,
  textSizeOptions,
  ProductHoverOptions,
  imgSizeOptions,
} from "../types/types";

const Product = ({
  image,
  name,
  price,
  textSize,
  hover,
  imgSize,
}: ProductProps) => {
  const textSizeOptions: textSizeOptions = {
    large: "lg:text-xl ",
    medium: "lg:text-lg",
    small: "lg:text-md",
  };

  const imgSizeOptions: imgSizeOptions = {
    large: "lg:h-[250px]",
    small: "lg:h-[180px]",
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
        className={`w-[75%] mx-auto lg:w-full object-cover rounded-md cursor-pointer ${imgSizeOptions[imgSize]}`}
      />
      <div
        className={`w-[50%] mx-auto lg:w-full flex justify-between ${textSizeOptions[textSize]}`}
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
