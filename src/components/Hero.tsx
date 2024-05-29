import heroImg from "../assets/heroImg.a885da91476b940bf532.png";
import Button from "./Button";
import { IoIosArrowRoundDown } from "react-icons/io";
import { useNavigate } from "react-router";
import { useRef } from "react";
const Hero = () => {
  const heroRef = useRef(null);
  const navigate = useNavigate();
  const scrollToDescription = () => {
    window.scrollTo({
      top: 1900,
      behavior: "smooth",
    });
  };
  return (
    <section
      className="flex flex-col sm:flex-row justify-between sm:max-w-[1200px] mx-auto py-12"
      ref={heroRef}
    >
      <div className="mx-auto py-16 sm:max-w-[50%] sm:mx-0 flex flex-col gap-7">
        <h1 className="text-3xl sm:text-5xl font-bold sm:leading-[4.2rem]">
          Furniture design to <br /> make you feel at home
        </h1>
        <h2 className="text-lg sm:text-2xl font-medium">
          Create your perfect space with our designs.
        </h2>
        <div className="flex gap-4">
          <Button buttonHandler={() => navigate("/Products")} color="purple">
            Explore products
          </Button>
          <Button buttonHandler={scrollToDescription} color="white">
            <span>Learn more</span>
            <IoIosArrowRoundDown />
          </Button>
        </div>
      </div>
      <div className="mx-auto max-w-[65%] sm:mx-0 flex flex-col sm:w-[41%]">
        <img src={heroImg} alt="Hero img" />
      </div>
    </section>
  );
};

export default Hero;
