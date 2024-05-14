import techCrunchImg from "../assets/techCrunch.8e59ce33cdb22ba0b8dd.png";
import bussinessInsiderImg from "../assets/businessInsider.a50839ce9f675fc574e6.png";
import newYorkTImesImg from "../assets/newYorkTimes.1279b92266cf081e20a6.png";
import forbesImg from "../assets/forbes.c9d98237f5d5f000eaad.png";
import usaTodayImg from "../assets/usaToday.56382ee08e942ad7c93c.png";
import NewsImg from "./NewsImg";
import { handleStickyNav } from "../utils/helperFunctions";
import { useRef, useEffect } from "react";
const News = () => {
  const sectionRef = useRef(null);
   useEffect(() => {
     const scrollHandler = () => {
       handleStickyNav(sectionRef, "productsPadding");
     };
     window.addEventListener("scroll", scrollHandler);

     return () => {
       window.removeEventListener("scroll", scrollHandler);
     };
   }, []);


  return (
    <section className="flex flex-col gap-6 py-custom-py lg:w-[1300px] mx-auto" ref={sectionRef }>
      <h2 className="text-center text-sm tracking-wider contrast-0 font-semibold">
        AS FEATURED IN
      </h2>
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
        <NewsImg image={techCrunchImg} />
        <NewsImg image={bussinessInsiderImg} />
        <NewsImg image={newYorkTImesImg} />
        <NewsImg image={forbesImg} />
        <NewsImg image={usaTodayImg} />
      </div>
    </section>
  );
};

export default News;
