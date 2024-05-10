import { useEffect, useRef, useState } from "react";
import { isIntersectingFn, isVisible } from "../utils/constants";
const Testimonials = () => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    isIntersectingFn(testimonialsRef, setIsIntersecting);
  }, [testimonialsRef]);
  return (
    <section
      className={`py-custom-py border-t border-t-neutral-300 transition-all duration-1000 ${isVisible(
        isIntersecting
      )}`}
      ref={testimonialsRef}
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
