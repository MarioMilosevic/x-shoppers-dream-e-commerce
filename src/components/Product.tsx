import { ProductAttributes } from "../types/types";
const Product = ({ attributes }: { attributes: ProductAttributes }) => {
  const { image, title, price } = attributes;
  return (
    <article className="flex flex-col gap-4 text-center w-[30%]">
      <img
        src={image}
        alt={title}
        className="w-[60%] mx-auto lg:w-full lg:h-[75%] object-cover rounded-lg cursor-pointer"
      />
        <h2 className="capitalize text-medium font-medium lg:text-xl">
          {title}
        </h2>
        <span>${(parseFloat(price) / 100).toFixed(2)}</span>
    </article>
  );
};

export default Product;
