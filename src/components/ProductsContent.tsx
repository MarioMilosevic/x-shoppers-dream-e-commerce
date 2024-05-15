import { ProductsContentProps } from "../types/types"
import Product from "./Product"
const ProductsContent = ({products ,workingState}:ProductsContentProps) => {
  // primim stejt a napravim interni stejt koji cu da prikazujem
  console.log(products)
  console.log(workingState)
  return (
    <div className="grid grid-cols-3">
      {workingState?.map(product => {
        return <Product key={product.id} {...product} />
      })}
    </div>
  )
}

export default ProductsContent
