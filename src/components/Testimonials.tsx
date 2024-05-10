import { useRef } from "react";
import { useIntersecting } from "../hooks/useIntersecting";
import Section from "./Section";
const Testimonials = () => {
  const sectionRef = useRef(null);
  useIntersecting(sectionRef);
  return (
    <>
      <span className="w-full border-t border-t-neutral-300"></span>

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
