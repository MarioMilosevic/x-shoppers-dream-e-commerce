import { ProductProps } from "../types/types";

const Product = ({ image, name, price }: ProductProps) => {
  return (
    <article className="flex flex-col gap-4 lg:gap-4 lg:w-full transition-all duration-700 hover:-translate-y-8">
      <img
        src={image}
        alt={name}
        className="w-[75%] mx-auto lg:w-full lg:h-[250px] object-cover rounded-md cursor-pointer"
      />
      <div className="w-[50%] mx-auto lg:w-full flex justify-between">
        <h2 className="capitalize text-medium font-medium lg:text-xl">
          {name}
        </h2>
        <span className="font-semibold text-xl text-fuchsia-500">${(price / 100).toFixed(2)}</span>
      </div>
      
    </article>
  );
};

export default Product;
