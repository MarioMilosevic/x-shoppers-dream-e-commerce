import { useParams } from "react-router";
import { useProductsSlice } from "../hooks/useProductsSlice";
import { fetchSingleProduct } from "../utils/helperFunctions";
import { useEffect } from "react";
const SingleProduct = () => {
  const products = useProductsSlice();
  const {cartId} = useParams();
  console.log()
  useEffect(() => {
    const product = fetchSingleProduct(cartId);
    console.log(product);
  }, [cartId]);
  console.log(products);
  return <div>Single product</div>;
};

export default SingleProduct;
