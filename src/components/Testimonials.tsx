import { useRef } from "react";
import { useIntersecting } from "../hooks/useIntersecting";

const Testimonials = () => {
  const sectionRef = useRef(null);
  useIntersecting(sectionRef);
  return (
    <section
      className="py-custom-py border-t opacity-0 translate-y-[10rem] border-t-neutral-300 transition-all duration-1000"
      ref={sectionRef}
    >
      <div className="w-[800px] mx-auto flex flex-col gap-2 border border-black">
        <h2 className="text-fuchsia-600 tracking-wider font-medium">
          TESTIMONIALS
        </h2>
        <h1 className="text-[37px] font-medium leading-[3.2rem]">
          Discover the stories of our delighted customers - thousands and
          counting!
        </h1>
      </div>
    </section>
  );
};

export default Testimonials;
