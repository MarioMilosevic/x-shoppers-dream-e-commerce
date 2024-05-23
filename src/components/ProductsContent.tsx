import Product from "./Product"
import { useFilteredProductsSlice } from "../hooks/useFilteredProductsSlice"
import { useAppSlice } from "../hooks/useAppSlice"
import { sortProducts } from "../redux/features/productsSlice"
import { useDispatch } from "react-redux"
import { BsLayoutTextSidebar } from "react-icons/bs";


const ProductsContent = () => {
  const filteredProducts = useFilteredProductsSlice()
  const { isSidebarOpen } = useAppSlice()
  console.log(isSidebarOpen)
  const dispatch = useDispatch()
  return (
    <div className="flex flex-col text-sm lg:px-0 px-4">
      <div className="flex justify-between items-center pb-6">
        <BsLayoutTextSidebar/>
        <p className="font-medium lg:text-base lg:w-[25%] text-sm">{filteredProducts?.length} products found</p>
        <hr className="bg-fuchsia-500 lg:w-[40%] w-[30%] h-[2px]" />
        <div className="flex text-md items-center justify-end lg:w-[25%] gap-1">
          <label htmlFor="sort">Sort by:</label>
          <select name="sort" id="sort" className="bg-fuchsia-50 rounded-md border border-fuchsia-500" onChange={(e) => dispatch(sortProducts(e.target.value))}>
            <option value="lowest">Price (Lowest)</option>
            <option value="highest">Price (Highest)</option>
            <option value="a-z">Name (A-Z)</option>
            <option value="z-a">Name (Z-A)</option>
          </select>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:gap-3 flex flex-col ">
      {filteredProducts?.map(product => {
        return <Product key={product.id} {...product} textSize="small" hover={"false"} imgSize="small"/>
      })}
      </div>
    </div>
  )
}

export default ProductsContent
