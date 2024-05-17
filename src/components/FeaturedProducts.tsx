import { useEffect, useState, useRef } from "react";
import { url } from "../utils/constants";
import Product from "./Product";
import Section from "./Section";
import Button from "./Button";
import { useIntersecting } from "../hooks/useIntersecting";
import { useNavigate } from "react-router";
import { ProductState } from "../types/types";

const FeaturedProducts = () => {
  const [products, setProducts] = useState<ProductState[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const dataResponse = await response.json();
        setProducts(dataResponse.slice(3, 6));
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);
  const sectionRef = useRef(null);
  useIntersecting(sectionRef);
  const navigate = useNavigate();

  return (
    <Section
      option="large"
      subtitle="Featured products"
      title="The art of modern living unlocked."
      ref={sectionRef}
    >
      <div className="mx-auto w-[80%] flex flex-col lg:items-center gap-10 lg:w-[1200px]">
        <div className="flex flex-col lg:gap-4 lg:flex-row lg:w-full ">
          {products.map((product) => (
            <Product key={product.id} {...product} textSize='large' hover={"true"} imgSize="large"/>
          ))}
        </div>
        <div className="flex justify-center">
        <Button color="purple" buttonHandler={() => navigate("/Products")}>
          All Products
        </Button>
        </div>
      </div>
    </Section>
  );
};

export default FeaturedProducts;
