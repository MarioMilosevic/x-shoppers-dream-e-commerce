import { useRef } from "react";
import { useIntersecting } from "../hooks/useIntersecting";
import Section from "./Section";
import { testimonials } from "../utils/constants";

const Testimonials = () => {
  const sectionRef = useRef(null);
  useIntersecting(sectionRef);
  return (
    <>
      <div className="w-full border-t border-t-neutral-300"></div>

      <Section
        width="800"
        title=" Discover the stories of our delighted customers - thousands and
      counting!"
        subtitle="TESTIMONIALS"
        ref={sectionRef}
      >
        <div>marop</div>
      </Section>
    </>
  );
};

export default Testimonials;
