import heroImg from "../assets/heroImg.a885da91476b940bf532.png";
import Button from "./Button";
import { IoIosArrowRoundDown } from "react-icons/io";
const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between py-12 w-[1280px] mx-auto">
      <div className="py-16 w-[50%] flex flex-col gap-7">
        <h1 className="text-3xl lg:text-[52px] font-bold leading-snug">
          Furniture design to <br /> make you feel at home
        </h1>
        <h2 className="text-lg lg:text-[26px] font-semibold">
          Create your perfect space with our designs.
        </h2>
        <div className="flex gap-4">
          <Button color="Purple">
            Explore products
          </Button>
          <Button color="Transparent">
            <span>Learn more</span>
            <IoIosArrowRoundDown />
          </Button>
        </div>
      </div>

      <div className="w-[40%]">
        <img src={heroImg} alt="Hero img" />
      </div>
    </section>
  );
};

export default HeroSection;
