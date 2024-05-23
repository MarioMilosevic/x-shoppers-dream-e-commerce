import { useParams } from "react-router"

const SingleProduct = () => {
    const productId = useParams()
  return (
    <div>
      Single product
    </div>
  )
}

export default SingleProduct