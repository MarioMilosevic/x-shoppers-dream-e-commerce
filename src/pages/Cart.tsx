import { mario2 } from "../utils/constants"
import { useEffect, useState } from "react"
import { singleProductType } from "../types/types";
const Cart = () => {
  const [singleProduct, setSingleProduct] = useState<singleProductType>();

  useEffect(() => {
    setSingleProduct(mario2)
  }, [])

  if (!singleProduct) return
  console.log(singleProduct)
  return (
    <div className="lg:max-w-[1200px] mx-auto py-16 border border-black">
      <div className="flex justify-around border-b border-b-fuchsia-400 py-8">
        <div>Item</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Subtotal</div>
      </div>
    </div>
  )
}

export default Cart
