import { colorButtonProps, colorButtonIsActive } from "../types/types";
const ColorButton = ({
  button,
  isActive,
  clickHandler,
  index,
}: colorButtonProps) => {
  const styling =
    button === "All"
      ? ""
      : "w-3 h-3 rounded-full";
  
  const isActiveOptions: colorButtonIsActive = {
    true: `${button === "All" ? "underline underline-offset-[6px] opacity-100 decoration-fuchsia-500" : "opacity-100"}`,
    false: "opacity-50",
 
  };


  return (
    <button
      className={`${styling} ${isActiveOptions[isActive]}`}
      style={{ backgroundColor: `${button}` }}
      onClick={(e) => clickHandler(e, index, button)}
    >
      {button === "All" ? "All" : ""}
    </button>
  );
};

export default ColorButton;
