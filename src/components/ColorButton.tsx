import { colorButtonProps, colorButtonIsActive, colorButtonSizeOptions } from "../types/types";
const ColorButton = ({
  button,
  isActive,
  clickHandler,
  index,
  size
}: colorButtonProps) => {
  const styling = button === "All" ? "" : "rounded-full";

  const isActiveOptions: colorButtonIsActive = {
    true: `${
      button === "All"
        ? "underline underline-offset-[6px] opacity-100 decoration-fuchsia-500"
        : "opacity-100"
    }`,
    false: "opacity-40",
  };

  const sizeOptions:colorButtonSizeOptions = {
    small: "w-3 h-3",
    medium:"w-5 h-5"
  }

  return (
    <button
      className={`${styling} ${sizeOptions[size]} ${isActiveOptions[isActive]} flex items-center justify-center`}
      style={{ backgroundColor: `${button}` }}
      onClick={(e) => clickHandler(e, index, button)}
    >
      {button === "All" ? "All" : ""}
    </button>
  );
};

export default ColorButton;
