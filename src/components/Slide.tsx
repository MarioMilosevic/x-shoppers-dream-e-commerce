import { SlideProps } from "../types/types";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
const Slide = ({ title, text, img, name, city, translate }: SlideProps) => {
  console.log(translate);

  const translateBy =
    translate === 0
      ? "translate-x-[0%]"
      : translate === 100
      ? "translate-x-[100%]"
      : translate === 200
      ? "translate-x-[200%]"
      : translate === 300
      ? "translate-x-[300%]"
      : null;

  return (
    <div className={`flex flex-col gap-4 py-2 w-[600px] ${translateBy} border border-black`}>
      <div className="bg-neutral-50 flex items-center justify-center rounded-full p-3 absolute top-[50%] -translate-y-[50%] cursor-pointer -left-20  w-14 h-14">
        <BsArrowLeft className="w-6 h-6" />
      </div>
      <div className="bg-neutral-50 flex items-center justify-center rounded-full p-3 absolute top-[50%] -translate-y-[50%] cursor-pointer -right-20 w-14 h-14">
        <BsArrowRight className="w-6 h-6" />
      </div>
      <h2 className="font-medium text-2xl">{title}</h2>
      <div className="w-full bg-fuchsia-600 h-[2px]"></div>

      <div className="flex flex-col  ">
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
