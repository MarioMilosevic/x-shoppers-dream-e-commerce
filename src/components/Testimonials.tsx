import { useRef, useState, useEffect, useCallback } from "react";
import { useIntersecting } from "../hooks/useIntersecting";
import Section from "./Section";
import { testimonials } from "../utils/constants";
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";
import Slide from "./Slide";
import ArrowContainer from "./ArrowContainer";

const Testimonials = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const displayRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef(null);
  useIntersecting(sectionRef);

  const resetDisplay = () => {
    displayRefs.current.forEach((ref) => {
      if (ref) {
        ref.style.display = "none";
        setTimeout(() => {
          if (ref) {
            ref.style.display = "block";
          }
        }, 0);
      }
    });
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
      option="small"
      title=" Discover the stories of our delighted customers - thousands and
      counting!"
      subtitle="Testimonials"
      ref={sectionRef}
    >
      <div className="relative flex items-center justify-center overflow-hidden">
        <div className="flex justify-center w-full">
          <ArrowContainer direction={"left"} clickHandler={previousSlide}>
            <HiOutlineArrowLongLeft className="w-10 h-10" />
          </ArrowContainer>
          <div className="w-full relative h-[30rem] lg:h-[25rem]">
            {testimonials.map((el, index) => (
              <Slide
                {...el}
                key={index}
                currentSlideIndex={currentSlideIndex}
                index={index}
                ref={(el) => (displayRefs.current[index] = el)}
              />
            ))}
          </div>
          <ArrowContainer direction={"right"} clickHandler={nextSlide}>
            <HiOutlineArrowLongRight className="w-10 h-10" />
          </ArrowContainer>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
