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
  const calculation = 100 * (index - currentSlideIndex);

  const translate =
    calculation > 0
      ? `translateX(${calculation}%)`
      : `translateX(-${Math.abs(calculation)}%)`;

  return (
    <div
      className={`absolute flex flex-col gap-4 px-24 top-0 py-2 w-full transition-all duration-700 mx-auto`}
      style={{ transform: translate }}
    >
      <h2 className="font-medium text-lg lg:text-2xl">{title}</h2>
      
      <div className="flex flex-col">
        <p className="leading-5 lg:leading-6">{text}</p>
        <div className="flex flex-col pt-4 lg:pt-12">
          <img
            src={img}
            alt={img}
            className="rounded-full w-[40px] h-[40px] lg:h-[50px] lg:w-[50px] object-cover"
          />
          <h3 className="lg:text-lg font-medium pt-2 lg:pt-4">{name}</h3>
          <span className="text-sm">{city}</span>
        </div>
      </div>
    </div>
  );
};

export default Slide;
