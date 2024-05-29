import { useParams, useNavigate } from "react-router";
// import { useProductsSlice } from "../hooks/useProductsSlice";
import { fetchSingleProduct } from "../utils/helperFunctions";
import { FaStar } from "react-icons/fa";
import { useEffect, useState, useCallback } from "react";
import { FaRegStarHalfStroke, FaRegStar } from "react-icons/fa6";
import { mario2 } from "../utils/constants";
import ColorButton from "../components/ColorButton";
import Button from "../components/Button";
import { singleProductType } from "../types/types";
import CartQuantityControl from "../components/CartQuantityControl";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
const SingleProduct = () => {
  const [activeImageIndex, setactiveImageIndex] = useState<number>(0);
  const [activeColorIndex, setActiveColorIndex] = useState<number>(0);
  const dispatch = useDispatch();
  // const products = useProductsSlice();
  const { productId } = useParams();
  const navigate = useNavigate();
  const [singleProduct, setSingleProduct] = useState<singleProductType>();
  useEffect(() => {
    const getProduct = async () => {
      try {
        if (productId) {
          const fetchedProduct = await fetchSingleProduct(productId);
          setSingleProduct({
            ...fetchedProduct,
            quantity: 1,
            selectedColor: fetchedProduct.colors[0],
          });
        }
      } catch (error) {
        console.error("Error fetching the product:", error);
      }
    };
    getProduct();
  }, [productId]);
  //   setSingleProduct(mario2);
  // }, []);

  const createStarsArray = (stars: number) => {
    const starsArray = [];
    for (let i = 0; i < 5; i++) {
      const halfStar = i + 0.5;
      if (stars >= i + 1) starsArray.push(<FaStar color="orange" />);
      else if (stars >= halfStar) {
        starsArray.push(<FaRegStarHalfStroke color="orange" />);
      } else starsArray.push(<FaRegStar color="orange" />);
    }
    return starsArray;
  };

  const addToCartHandler = () => {
    if (singleProduct) {
      navigate("/cart");
      dispatch(addToCart(singleProduct));
    }
  };

  const colorHandler = (index: number) => {
    setActiveColorIndex(index);
    setSingleProduct((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        selectedColor: prev.colors[index],
      };
    });
  };

  const incrementProductQuantity = useCallback(() => {
    setSingleProduct((prev) =>
      prev && prev.quantity < prev.stock
        ? { ...prev, quantity: prev.quantity + 1 }
        : prev
    );
  }, []);

  const decrementProductQuantity = useCallback(() => {
    setSingleProduct((prev) =>
      prev && prev.quantity > 1
        ? { ...prev, quantity: prev.quantity - 1 }
        : prev
    );
  }, []);

  if (!singleProduct) return;

  return (
    <div className="lg:max-w-[1300px] mx-auto pt-16 pb-32">
      <Button color="purple" buttonHandler={() => navigate("/products")}>
        Back to Products
      </Button>
      <div className="flex justify-between gap-2 py-8">
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
                  className={`w-[120px] h-[80px] cursor-pointer rounded-md ${decoration}`}
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
        <div className="flex flex-col justify-between w-[45%]">
          <h2 className="capitalize font-semibold text-4xl">
            {singleProduct.name}
          </h2>
          <div className="flex items-center gap-2">
            <ul className="flex">
              {createStarsArray(singleProduct.stars).map((star, index) => (
                <li key={index}>{star}</li>
              ))}
            </ul>
            <div>{`(${singleProduct.reviews} customer reviews)`}</div>
          </div>
          <span className="text-fuchsia-500 text-xl">{`$${
            singleProduct.price / 100
          }`}</span>
          <p className="leading-6">{singleProduct.description}</p>
          <div className="flex flex-col gap-4 pb-8 border-b border-b-fuchsia-500">
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
          {/*  */}
          {singleProduct.stock > 0 && (
            <div className="flex flex-col gap-8">
              <div className="flex gap-4">
                <div className="font-semibold w-[15%]">Colors:</div>
                <ul className="flex items-center gap-2">
                  {singleProduct.colors.map((button, index) => {
                    const isActive =
                      activeColorIndex === index ? "true" : "false";
                    return (
                      <ColorButton
                        key={index}
                        button={button}
                        isActive={isActive}
                        index={index}
                        size="medium"
                        clickHandler={() => colorHandler(index)}
                      />
                    );
                  })}
                </ul>
              </div>
              <div className="w-[25%] flex flex-col gap-4">
                <CartQuantityControl
                  quantity={singleProduct.quantity}
                  incrementProductQuantity={incrementProductQuantity}
                  decrementProductQuantity={decrementProductQuantity}
                  id=""
                />
                <Button color="purple" buttonHandler={() => addToCartHandler()}>
                  Add to Cart
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
