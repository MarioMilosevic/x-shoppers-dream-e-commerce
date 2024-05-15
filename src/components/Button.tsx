import { ButtonProps } from "../types/types";
import { ButtonColors } from "../types/types";
const Button = ({ children, color, buttonHandler }: ButtonProps) => {
  const buttonColors: ButtonColors = {
    purple: "bg-fuchsia-600 text-fuchsia-50 hover:bg-fuchsia-700",
    white: "bg-white hover:bg-neutral-200",
    red: "bg-red-500 hover:bg-red-600",
  };

  return (
    <button
      className={`flex items-center font-semibold rounded-md px-4 py-2 text-sm lg:text-base lg:px-[1.40rem] lg:py-[0.6rem] transition-all duration-200 ${buttonColors[color]}`}
      onClick={buttonHandler}
    >
      {children}
    </button>
  );
};

export default Button;
