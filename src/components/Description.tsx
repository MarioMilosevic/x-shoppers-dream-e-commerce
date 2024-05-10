import { HiOutlineSparkles } from "react-icons/hi";
import { FiEye } from "react-icons/fi";
import { GiSofa } from "react-icons/gi";
import Info from "./Info";
import { useState, useEffect, useRef } from "react";
import { isVisible, isIntersectingFn } from "../utils/constants";
const Description = () => {
  const descriptionRef = useRef(null)
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  useEffect(() => {
    isIntersectingFn(descriptionRef, setIsIntersecting);
  }, [descriptionRef]);

  return (
    <section
      className={`py-custom-py w-[1000px] mx-auto flex flex-col gap-24 transition-all duration-1000 ${isVisible(
        isIntersecting
      )}`}
      ref={descriptionRef}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-fuchsia-600 text-[1.1rem]">CREEDS WE LIVE BY</h3>
        <h2 className="text-4xl font-medium leading-[3.2rem]">
          Elevate your home with our attitude of excellence and timeless style.
        </h2>
      </div>
      <div className="flex gap-10 justify-between">
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
    </section>
  );
};

export default Description;
