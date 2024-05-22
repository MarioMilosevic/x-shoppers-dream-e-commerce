import { ButtonProps } from "../types/types";
import { ButtonColors } from "../types/types";
const Button = ({ children, color, buttonHandler }: ButtonProps) => {
  const buttonColors: ButtonColors = {
    purple:
      "bg-fuchsia-500 text-fuchsia-50 lg:px-[1.40rem] lg:text-base lg:py-[0.6rem] hover:bg-fuchsia-600",
    white:
      "bg-white lg:px-[1.40rem] lg:py-[0.6rem] lg:text-base hover:bg-neutral-200",
    red: "bg-red-500 text-red-50 lg:px-[1rem] lg:py-[0.4rem] lg:text-sm hover:bg-red-600",
  };

  return (
    <button
      className={`flex items-center font-semibold rounded-md px-4 py-2 text-sm transition-all duration-300 ${buttonColors[color]}`}
      onClick={buttonHandler}
    >
      {children}
    </button>
  );
};

export default Button;
