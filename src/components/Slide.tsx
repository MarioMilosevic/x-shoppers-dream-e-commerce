import { SlideProps } from "../types/types";
import { useEffect, useState } from "react";
const Slide = ({ title, text, img, name, city, translate }: SlideProps) => {
  const [lineWidth, setLineWidth] = useState<number>(0);
  const translateBy =
    translate > 0
      ? `translate-x-[${translate}%]`
      : translate < 0
      ? `-translate-x-[${Math.abs(translate)}%]`
      : translate === -300
      ? "-translate-x-[300%]"
      : null;
  console.log(lineWidth);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (lineWidth < 100) {
  //       setLineWidth((prev) => prev + 20);
  //     } else {
  //       setLineWidth(0);
  //     }
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, [lineWidth]);

  return (
    <div
      className={`absolute flex flex-col gap-4 px-24 top-0 py-2 w-[800px] transition-all duration-700 mx-auto ${translateBy}`}
    >
      <h2 className="font-medium text-2xl">{title}</h2>
      <hr
        className={`bg-fuchsia-600 h-[2px] w-[${lineWidth}%] `}
      />

      <div className="flex flex-col">
        <p className="leading-6">{text}</p>
        <div className="flex flex-col pt-12">
          <img
            src={img}
            alt={img}
            className="rounded-full h-20 w-20 object-cover"
          />
          <h3 className="text-lg font-medium pt-4">{name}</h3>
          <span className="text-sm">{city}</span>
        </div>
      </div>
    </div>
  );
};

export default Slide;
