import { useRef, useState, useEffect, useCallback } from "react";
import { useIntersecting } from "../hooks/useIntersecting";
import Section from "./Section";
import { testimonials } from "../utils/constants";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slide from "./Slide";

const Testimonials = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const displayRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  useIntersecting(sectionRef);

  const resetDisplay = () => {
    displayRef.current
      ? ((displayRef.current.style.display = "none"),
        setTimeout(
          () =>
            displayRef.current && (displayRef.current.style.display = "block"),
          0
        ))
      : null;
  };

  const nextSlide = useCallback(() => {
    resetDisplay();
    if (currentSlideIndex === testimonials.length - 1) {
      setCurrentSlideIndex(0);
    } else {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  }, [currentSlideIndex]);

  const previousSlide = () => {
    resetDisplay();
    if (currentSlideIndex === 0) {
      setCurrentSlideIndex(testimonials.length - 1);
    } else {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <Section
      width="800"
      title=" Discover the stories of our delighted customers - thousands and
      counting!"
      subtitle="Testimonials"
      ref={sectionRef}
    >
      <div className="w-[800px] relative flex items-center justify-center overflow-hidden">
        <div className="flex justify-center">
          <div
            className="bg-neutral-50 opacity-80 flex items-center z-10 justify-center rounded-full p-3 absolute top-[25%] cursor-pointer left-0  w-14 h-14"
            onClick={previousSlide}
          >
            <BsArrowLeft className="w-6 h-6" />
          </div>

          <div className="relative w-[800px] h-[25rem]">
            {testimonials.map((el, index) => (
              <Slide
                {...el}
                key={index}
                currentSlideIndex={currentSlideIndex}
                index={index}
              />
            ))}
            <div className="w-[608px] absolute top-12 left-24" ref={displayRef}>
              <hr className="animate-[expand_5s_linear_infinite]  bg-fuchsia-600 h-[3px]" />
            </div>
          </div>
          <div
            className="bg-neutral-50 flex items-center opacity-80 justify-center rounded-full p-3 absolute top-[25%] cursor-pointer right-0 w-14 h-14"
            onClick={nextSlide}
          >
            <BsArrowRight className="w-6 h-6" />
          </div>
        </div>
      </div>
      {/* uz stejt direktno manipulisati ovim hr da li je hidden ili block tako nesto  */}
    </Section>
  );
};

export default Testimonials;
