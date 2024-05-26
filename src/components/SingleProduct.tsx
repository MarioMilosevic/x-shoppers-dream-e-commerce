import { useParams } from "react-router";
import { useProductsSlice } from "../hooks/useProductsSlice";
import { fetchSingleProduct } from "../utils/helperFunctions";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { mario2 } from "../utils/constants";
import ColorButton from "./ColorButton";
import Button from "./Button";
import { singleProductType } from "../types/types";
const SingleProduct = () => {
  const [activeImageIndex, setactiveImageIndex] = useState<number>(0);
  const [activeColorIndex, setActiveColorIndex] = useState<number>(0)
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
  console.log(singleProduct);
  return (
    <div className="border border-black lg:max-w-[1300px] mx-auto py-16">
      <Button color="purple" buttonHandler={() => navigate("/products")}>
        Back to Products
      </Button>
      <div className="flex justify-between gap-2 border border-black py-8">
        <div className="w-[50%] flex flex-col gap-4 rounded-md">
          <img
            src={`${singleProduct?.images[activeImageIndex].url}`}
            alt={`${singleProduct?.images[activeImageIndex].url}`}
            className="w-full h-[600px] rounded-md"
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
        <div className="w-[45%] border border-black">
          <h2 className="capitalize font-semibold text-4xl">
            {singleProduct.name}
          </h2>
          <p>treba rejting odje</p>
          <span className="text-fuchsia-500 text-xl">{`$${
            singleProduct.price / 100
          }`}</span>
          <p className="leading-6">{singleProduct.description}</p>
          <div className="flex flex-col gap-4 py-8 border border-b-fuchsia-500">
            <div className="flex gap-4">
              <div className="font-semibold w-[15%]">Available:</div>
              <span>
                {`${singleProduct.stock > 0 ? "In stock" : "Out of stock"}`}
              </span>
            </div>
            <div className="flex gap-4">
              <div className="font-semibold w-[15%]">SKU:</div>
              <span className="capitalize">{singleProduct.id}</span>
            </div>
            <div className="flex gap-4">
              <div className="font-semibold w-[15%]">Brand:</div>
              <span className="capitalize">{singleProduct.company}</span>
            </div>
          </div>
          <div className="flex gap-4 border border-black">
            <div className="font-semibold w-[15%]">Colors:</div>
            <ul className="flex items-center gap-1">
              {singleProduct.colors.map((button, index) => {
                const isActive = activeColorIndex === index ? "true" : "false";
                return (
                  <ColorButton
                    key={index}
                    button={button}
                    isActive={isActive}
                    index={index}
                    size="medium"
                    clickHandler={() => setActiveColorIndex(index)}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
