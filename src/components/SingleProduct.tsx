import { useParams } from "react-router";
import { useProductsSlice } from "../hooks/useProductsSlice";
import { fetchSingleProduct } from "../utils/helperFunctions";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Button from "./Button";
const SingleProduct = () => {
  const products = useProductsSlice();
  const { productId } = useParams();
  const navigate = useNavigate();
  const [singleProduct, setSingleProduct] = useState()
  useEffect(() => {
    const getProduct = async () => {
      try {
        if (productId) {
          const fetchedProduct = await fetchSingleProduct(productId);
          console.log(fetchedProduct);
        }
      } catch (error) {
        console.error("Error fetching the product:", error);
      }
    };
    getProduct();
  }, [productId]);

  console.log(products);
  return (
    <div className="border border-black lg:max-w-[1300px] mx-auto py-16">
      <Button color="purple" buttonHandler={() => navigate("/products")}>
        Back to Products
      </Button>
      <div className="flex justify-between gap-2">
        <div className="w-[50%]  border border-black">
        <img src="" alt="" />
        </div>
        <div className="w-[50%] border border-black">drugi</div>
      </div>
    </div>
  );
};

export default SingleProduct;
