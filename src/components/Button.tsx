import { ButtonProps } from "../types/types";
import { ButtonColors } from "../types/types";
const Button = ({ children, color, buttonHandler }: ButtonProps) => {
  const buttonColors: ButtonColors = {
    purple:
      "bg-fuchsia-500 text-fuchsia-50 sm:px-[1.4rem] sm:text-base sm:py-[0.6rem] hover:bg-fuchsia-600",
    white:
      "bg-white sm:px-[1.40rem] sm:py-[0.6rem] sm:text-base hover:bg-neutral-200",
    red: "bg-red-500 text-red-50 sm:px-[1.4rem] sm:py-[0.6rem] sm:text-base hover:bg-red-600",
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
