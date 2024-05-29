import { images } from "../utils/constants";
import { handleStickyNav } from "../utils/helperFunctions";
import { useRef, useEffect } from "react";
import NewsImg from "./NewsImg";
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
    <section className="flex flex-col sm:flex-col gap-6 py-custom-py sm:max-w-[1300px] mx-auto" ref={sectionRef }>
      <h2 className="text-center text-sm tracking-wider contrast-0 font-semibold">
        AS FEATURED IN
      </h2>
      <div className="flex flex-col lg:flex-row items-center gap-10 sm:flex-col sm:gap-12 sm:items-center sm:justify-between">
        {images.map((img, index) => <NewsImg key={index} image={img } />)}
      </div>
    </section>
  );
};

export default News;
