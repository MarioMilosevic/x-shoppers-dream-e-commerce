import { HiOutlineSparkles } from "react-icons/hi";
import { FiEye } from "react-icons/fi";
import { GiSofa } from "react-icons/gi";
import Info from "./Info";
import { useIntersecting } from "../hooks/useIntersecting";
import Section from "./Section";
import { useRef } from "react";
const Description = () => {
  const sectionRef = useRef(null);
  useIntersecting(sectionRef);
  return (
    <Section
      option="medium"
      subtitle="Creeds we live by"
      title="Elevate your home with our attitude of excellence and timeless style."
      ref={ sectionRef}
    >
      <div className="flex flex-col lg:flex-row gap-10 justify-between">
        <Info icon={HiOutlineSparkles} title={"Radiance"}>
           Our commitment to providing sparkling solutions ensures every
          customer enjoys a shining, glowing experience with unmatched quality.{" "}
        </Info>
        <Info icon={FiEye} title={"Clarity"}>
          With clear vision and keen insight, we guide customers down the path
          to lasting success with exceptional service and anticipation. /{" "}
        </Info>
        <Info icon={GiSofa} title={"Heritage"}>
          As a trusted partner, we offer expert guidance, drawing on our deep
          wisdom and wealth of experience to ensure satisfaction and success.{" "}
        </Info>
      </div>
    </Section>
  );
};

export default Description;
