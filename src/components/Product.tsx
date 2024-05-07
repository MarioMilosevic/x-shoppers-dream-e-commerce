import { ProductAttributes } from "../types/types";
const Product = ({ attributes }: { attributes:ProductAttributes }) => {
    const {image, title, price} = attributes
    return (
      <article className="flex flex-col gap-4 text-center">
        <img
          src={image}
          alt={title}
          className="h-[60%] w-full object-cover rounded-lg"
        />
        <h2 className="capitalize font-medium text-xl">{title}</h2>
        <span>${(parseFloat(price) / 100).toFixed(2)}</span>
      </article>
    );
}

export default Product
