import { useRef, useState, useEffect } from "react";
import { useIntersecting } from "../hooks/useIntersecting";
import Section from "./Section";
import { testimonials } from "../utils/constants";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slide from "./Slide";

const Testimonials = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const sectionRef = useRef(null);
  useIntersecting(sectionRef);

  const nextSlide = () => {
    if (currentSlideIndex === testimonials.length - 1) {
      setCurrentSlideIndex(0);
    } else {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const previousSlide = () => {
    if (currentSlideIndex === 0) {
      setCurrentSlideIndex(testimonials.length - 1);
    } else {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

 useEffect(() => {
   const interval = setInterval(() => {
     if (currentSlideIndex < testimonials.length - 1) {
       setCurrentSlideIndex((prev) => prev + 1);
     } else {
       setCurrentSlideIndex(0);
     }
   }, 5000);

   return () => clearInterval(interval);
 }, [currentSlideIndex]);

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
        <div className="w-[800px] relative flex items-center justify-center overflow-hidden">
          <div className="flex justify-center">
            <div
              className="bg-neutral-50 flex items-center z-10 justify-center rounded-full p-3 absolute top-[50%] -translate-y-[50%] cursor-pointer left-0  w-14 h-14"
              onClick={previousSlide}
            >
              <BsArrowLeft className="w-6 h-6" />
            </div>
            <div className="relative w-[800px]  h-[25rem]">
              {testimonials.map((el, index) => (
                <Slide
                  {...el}
                  key={index}
                  translate={100 * (index - currentSlideIndex)}
                />
              ))}
            </div>
            <div
              className="bg-neutral-50 flex items-center justify-center rounded-full p-3 absolute top-[50%] -translate-y-[50%] cursor-pointer right-0 w-14 h-14"
              onClick={nextSlide}
            >
              <BsArrowRight className="w-6 h-6" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Testimonials;
