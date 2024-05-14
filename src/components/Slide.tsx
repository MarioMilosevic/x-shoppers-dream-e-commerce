import { SlideProps } from "../types/types";
const Slide = ({
  title,
  text,
  img,
  name,
  city,
  currentSlideIndex,
  index,
}: SlideProps) => {
  
  const translate = `translate-x-[${100 * (index - currentSlideIndex)}%]`;

  // const translateBy =
  //   translate === 0
  //     ? "translate-x-[0%]"
  //     : translate === 100
  //     ? "translate-x-[100%]"
  //     : translate === 200
  //     ? "translate-x-[200%]"
  //     : translate === 300
  //     ? "translate-x-[300%]"
  //     : translate === -100
  //     ? "-translate-x-[100%]"
  //     : translate === -200
  //     ? "-translate-x-[200%]"
  //     : translate === -300
  //     ? "-translate-x-[300%]"
  //      : "";

  return (
    <div
      className={`absolute flex flex-col gap-4 px-24 top-0 py-2 w-[800px] transition-all duration-700 mx-auto ${translate}`}
    >
      <h2 className="font-medium text-2xl">{title}</h2>
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
