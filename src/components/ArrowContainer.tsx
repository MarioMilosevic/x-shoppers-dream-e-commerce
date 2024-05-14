import { ArrowContainerProps, ArrowContainerOptions } from "../types/types";

const ArrowContainer = ({
  direction,
  clickHandler,
  children,
}: ArrowContainerProps) => {
  const position: ArrowContainerOptions = {
    left: "left-0",
    right: "right-0",
  };

  return (
    <div
      className={`bg-neutral-50 flex items-center opacity-80 justify-center z-10 rounded-full p-3 absolute top-[25%] cursor-pointer w-14 h-14 ${position[direction]}`}
      onClick={clickHandler}
    >
      {children}
    </div>
  );
};

export default ArrowContainer;
