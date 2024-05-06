import { ButtonProps } from "../types/types";
const Button = ({ children, color }: ButtonProps) => {
  const description =
    color === "Purple"
      ? "bg-fuchsia-600 text-fuchsia-50 hover:bg-fuchsia-700"
      : "hover:bg-neutral-200";
  return (
    <button
      className={`${description} px-4 py-2 flex items-center gap-11 font-bold rounded-md lg:px-7 lg:py-3 transition-all duration-200`}
    >
      {children}
    </button>
  );
};

export default Button;
