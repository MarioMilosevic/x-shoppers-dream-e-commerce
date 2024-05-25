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
      <div className="flex justify-between gap-2">
        <div className="w-[50%] border border-black">
          <img
            src={`${singleProduct?.images[activeImageIndex].url}`}
            alt="mario"
          />
          <div className="flex justify-between border border-black">
            {singleProduct.images.map((image) => (
              <div className="w-[85px] h-[85px]">
                <img src={image.url} key={image.id} className="h-full w-full object-cover rounded-md" />
              </div>
            ))}
          </div>
        </div>
        <div className="w-[50%] border border-black">drugi</div>
      </div>
    </div>
  );
};

export default SingleProduct;
