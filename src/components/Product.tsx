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
      />
      <div
        className={`mx-auto w-full flex justify-between ${textSizeOptions[textSize]}`}
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
