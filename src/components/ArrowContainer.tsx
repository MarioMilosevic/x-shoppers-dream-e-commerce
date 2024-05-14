import { ArrowContainerProps } from "../types/types";

const ArrowContainer = ({
  direction,
  clickHandler,
  children,
}: ArrowContainerProps) => {
  return (
    <div
      className={`bg-neutral-50 flex items-center opacity-80 justify-center z-10 rounded-full p-3 absolute top-[25%] cursor-pointer ${direction}-0 w-14 h-14`}
      onClick={clickHandler}
    >
      {children}
    </div>
  );
};

export default ArrowContainer;
