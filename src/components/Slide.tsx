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
      className={`absolute flex flex-col gap-4 px-24 top-0 py-2 w-[800px] transition-all duration-700 mx-auto`}
      style={{ transform: translate }}
    >
      <h2 className="font-medium text-2xl">{title}</h2>
      <div className="flex flex-col">
        <p className="leading-6">{text}</p>
        <div className="flex flex-col pt-12">
          <img
            src={img}
            alt={img}
            className="rounded-full h-[50px] w-[50px] object-cover"
          />
          <h3 className="text-lg font-medium pt-4">{name}</h3>
          <span className="text-sm">{city}</span>
        </div>
      </div>
    </div>
  );
};

export default Slide;
