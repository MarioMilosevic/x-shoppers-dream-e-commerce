import { useParams } from "react-router";
import { useProductsSlice } from "../hooks/useProductsSlice";
import { fetchSingleProduct } from "../utils/helperFunctions";
import { IoIosArrowRoundDown } from "react-icons/io";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const SingleProduct = () => {
  const products = useProductsSlice();
  const { cartId } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        if (cartId) {
          const fetchedProduct = await fetchSingleProduct(cartId);
          console.log(fetchedProduct);
        }
      } catch (error) {
        console.error("Error fetching the product:", error);
      }
    };
    getProduct();
  }, [cartId]);

  console.log(products);
  return (
    <div className="border border-black lg:max-w-[1300px] mx-auto py-16">
      <div className="border border-black flex items-center text-sm text-fuchsia-500 underilne underline-offset-[6px] decoration-fuchsia-500">
        <Link to={"/products"}>Back to Products</Link>
        <IoIosArrowRoundDown />

      </div>
    </div>
  );
};

export default SingleProduct;
