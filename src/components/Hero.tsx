import heroImg from "../assets/heroImg.a885da91476b940bf532.png";
import Button from "./Button";
import { IoIosArrowRoundDown } from "react-icons/io";
import { OutletContext } from "../types/types"
import { useOutletContext } from "react-router";
const Hero = () => {
  const { isNavFixed } = useOutletContext() as OutletContext;

  const padding = isNavFixed ? "pt-[136px] pb-12" : "py-12"

  return (
    <header className={`flex flex-col lg:flex-row justify-between lg:w-[1200px] mx-auto ${padding}`}>
      <div className="mx-auto py-16 lg:w-[50%] lg:mx-0 flex flex-col gap-7">
        <h1 className="text-3xl lg:text-5xl font-bold lg:leading-[4.2rem]">
          Furniture design to <br /> make you feel at home
        </h1>
        <h2 className="text-lg lg:text-2xl font-medium">
          Create your perfect space with our designs.
        </h2>
        <div className="flex gap-4">
          <Button buttonHandler={() => console.log("kasnije")} color="Purple">Explore products</Button>
          <Button buttonHandler={() => console.log("kasnije")} color="Transparent">
            <span>Learn more</span>
            <IoIosArrowRoundDown />
          </Button>
        </div>
      </div>
      <div className="mx-auto w-[65%] lg:mx-0 flex flex-col lg:w-[41%]">
        <img src={heroImg} alt="Hero img" />
      </div>
    </header>
  );
};

export default Hero;
