import tyron from "../assets/tyron mayers.jpg";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
const Slide = () => {
    
  return (
    <div className="px-12 relative flex flex-col gap-4 w-[75%] ">
      <BsArrowLeft className="absolute rounded-full top-[50%] -translate-y-[50%] -left-10 cursor-pointer w-8 h-8" />
      <BsArrowRight className="absolute rounded-full top-[50%] -translate-y-[50%] -right-10 cursor-pointer w-8 h-8" />
      <h2 className="font-medium text-2xl">
        You guys brought vision back to my life!
      </h2>
      <div className="w-full bg-fuchsia-600 h-[2px]"></div>

      <div className="flex flex-col gap-4">
        <p>
          I cannot speak highly enough of the quality of the products I received
          from this company. The attention to detail and craftsmanship is
          unparalleled. I am so grateful to have found such a reliable and
          professional source for my furniture needs.
        </p>
        <div className="rounded-full h-20 w-20 object-cover">
          <img src={tyron} alt={tyron} className="rounded-full" />
              </div>
              <div>
          <h3>Tyrone Myers</h3>
          <span>Los Angeles, USA</span>
              </div>
      </div>
    </div>
  );
};

export default Slide;
