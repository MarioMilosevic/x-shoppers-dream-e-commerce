import Product from "./Product"
import { useFilteredProductsSlice } from "../hooks/useFilteredProductsSlice"
import { sortProducts } from "../redux/features/productsSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
const ProductsContent = () => {
  const filteredProducts = useFilteredProductsSlice()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(sortProducts('lowest'))
  }, [dispatch])
  return (
    <div className="flex flex-col text-sm">
      <div className="flex justify-between items-center pb-6">
        <p className="font-medium">{filteredProducts?.length} products found</p>
        <hr className="bg-fuchsia-500 w-[60%]  h-[2px] " />
        <div className="flex text-md items-center gap-2">
          <label htmlFor="sort">Sort by:</label>
          <select name="sort" id="sort" className="bg-fuchsia-50 rounded-md border border-fuchsia-500" onChange={(e) => dispatch(sortProducts(e.target.value))}>
            <option value="lowest">Price (Lowest)</option>
            <option value="highest">Price (Highest)</option>
            <option value="a-z">Name (A-Z)</option>
            <option value="z-a">Name (Z-A)</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
      {filteredProducts?.map(product => {
        return <Product key={product.id} {...product} textSize="small" hover={"false"} imgSize="small"/>
      })}
      </div>
    </div>
  )
}

export default ProductsContent
