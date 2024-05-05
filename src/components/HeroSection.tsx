import heroImg from "../assets/heroImg.a885da91476b940bf532.png";
import { IoIosArrowRoundDown } from "react-icons/io";
const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between py-12 w-[1280px] mx-auto">
      <div className="py-16 w-[650px] flex flex-col gap-7">
        <h1 className="text-[52px] font-bold leading-snug">
          Furniture design to <br /> make you feel at home
        </h1>
        <h2 className="text-[26px] font-semibold">
          Create your perfect space with our designs.
        </h2>
        <div className="flex gap-4">
          <button className="bg-fuchsia-600 text-fuchsia-50 font-bold rounded-md px-7 py-3 transition-all duration-200  hover:bg-fuchsia-700">
            Explore products
          </button>
          <button className="font-bold flex items-center gap-1 px-7 py-3 rounded-md transition-all duration-300">
            <span>Learn more</span>
            <IoIosArrowRoundDown />
          </button>
        </div>
      </div>

      <div className="w-[515px]">
        <img src={heroImg} alt="Hero img" />
      </div>
    </section>
  );
};

export default HeroSection;
