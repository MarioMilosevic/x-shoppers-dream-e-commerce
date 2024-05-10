import { HiOutlineSparkles } from "react-icons/hi";
import { FiEye } from "react-icons/fi";
import { GiSofa } from "react-icons/gi";
import Info from "./Info";
import { isVisible } from "../utils/helperFunctions";
import { useIntersecting } from "../hooks/useIntersecting";
const Description = () => {
  const { isIntersecting, ref } = useIntersecting();

  return (
    <section
      className={`w-[50%] py-custom-py lg:w-[1000px] mx-auto flex flex-col gap-24 transition-all duration-1000 ${isVisible(
        isIntersecting
      )}`}
      ref={ref}
    >
      <div className="w-full flex flex-col gap-2 mx-auto">
        <h3 className="text-fuchsia-600 text-base lg:text-[1.1rem]">
          CREEDS WE LIVE BY
        </h3>
        <h2 className="text-2xl lg:text-4xl font-medium leading-8 lg:leading-[3.2rem]">
          Elevate your home with our attitude of excellence and timeless style.
        </h2>
      </div>
      {/*  */}
      <div className="flex flex-col lg:flex-row gap-10 justify-between">
        <Info icon={HiOutlineSparkles} title={"Radiance"}>
          Our commitment to providing sparkling solutions ensures every customer
          enjoys a shining, glowing experience with unmatched quality.
        </Info>
        <Info icon={FiEye} title={"Clarity"}>
          With clear vision and keen insight, we guide customers down the path
          to lasting success with exceptional service and anticipation.
        </Info>
        <Info icon={GiSofa} title={"Heritage"}>
          As a trusted partner, we offer expert guidance, drawing on our deep
          wisdom and wealth of experience to ensure satisfaction and success.
        </Info>
      </div>
      {/* children */}
    </section>
  );
};

export default Description;
