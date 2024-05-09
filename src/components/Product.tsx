import { ProductAttributes } from "../types/types";
const Product = ({ attributes }: { attributes: ProductAttributes }) => {
  const { image, title, price } = attributes;
  return (
    <article className="flex flex-col gap-12  w-[30%]">
      <img
        src={image}
        alt={title}
        className="w-[20%] mx-auto lg:w-full lg:h-[300px] object-cover rounded-lg cursor-pointer"
      />
      <div className="flex flex-col gap-4">
        <h2 className="capitalize text-medium font-medium lg:text-xl">
          {title}
        </h2>
        <span className="font-semibold text-xl text-fuchsia-500">${(parseFloat(price) / 100).toFixed(2)}</span>
      </div>
    </article>
  );
};

export default Product;
