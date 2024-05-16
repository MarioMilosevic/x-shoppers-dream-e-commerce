import { ProductsContentProps } from "../types/types"
import Product from "./Product"
const ProductsContent = ({workingState}:ProductsContentProps) => {
  return (
    <div className="flex flex-col gap-g">
      <div className="flex border border-black justify-between items-center pb-6">
        <p>{workingState?.length} products found</p>
        <hr className="bg-fuchsia-600 w-[50%]  h-[3px] " />
        <div className="flex text-md">
          <label htmlFor="sort">Sort by</label>
          <select name="sort" id="sort">
            <option value="">Price (Lowest)</option>
            <option value="">Price (Highest)</option>
            <option value="">Name (A-Z)</option>
            <option value="">Name (Z-A)</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
      {workingState?.map(product => {
        return <Product key={product.id} {...product} size="small" hover={"false"}/>
      })}
      </div>
    </div>
  )
}

export default ProductsContent
