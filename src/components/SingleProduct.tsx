import { useParams } from "react-router";
import { useProductsSlice } from "../hooks/useProductsSlice";
import { fetchSingleProduct } from "../utils/helperFunctions";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { mario2 } from "../utils/constants";
import Button from "./Button";
import { singleProductType } from "../types/types";
const SingleProduct = () => {
  const [activeImageIndex, setactiveImageIndex] = useState<number>(0);
  const products = useProductsSlice();
  const { productId } = useParams();
  const navigate = useNavigate();
  const [singleProduct, setSingleProduct] = useState<singleProductType>();
  useEffect(() => {
    // const getProduct = async () => {
    //   try {
    //     if (productId) {
    //       const fetchedProduct = await fetchSingleProduct(productId);
    //       setSingleProduct(fetchedProduct);
    //       console.log(fetchedProduct);
    //     }
    //   } catch (error) {
    //     console.error("Error fetching the product:", error);
    //   }
    // };
    // getProduct();
    setSingleProduct(mario2);
  }, []);
  // }, [productId]);

  if (!singleProduct) return;
  return (
    <div className="border border-black lg:max-w-[1300px] mx-auto py-16">
      <Button color="purple" buttonHandler={() => navigate("/products")}>
        Back to Products
      </Button>
      <div className="flex justify-between gap-2 border border-black py-8">
        <div className="w-[50%] flex flex-col gap-4 border border-black">
          <img
            src={`${singleProduct?.images[activeImageIndex].url}`}
            alt={`${singleProduct?.images[activeImageIndex].url}`}
            className="w-full h-[600px]"
          />
          <ul className="flex justify-between">
            {singleProduct.images.map((image, index) => {
              const decoration =
                activeImageIndex === index ? "border border-fuchsia-500" : "";

              return (
                <li
                  key={index}
                  className={`w-[80px] h-[80px] cursor-pointer rounded-md ${decoration}`}
                  onClick={() => setactiveImageIndex(index)}
                >
                  <img
                    src={image.url}
                    key={image.id}
                    className="h-full w-full object-cover rounded-md"
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-[50%] border border-black">drugi</div>
      </div>
    </div>
  );
};

export default SingleProduct;
