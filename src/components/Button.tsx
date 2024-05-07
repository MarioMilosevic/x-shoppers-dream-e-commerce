import { ButtonProps } from "../types/types";
const Button = ({ children, color }: ButtonProps) => {
  const description =
    color === "Purple"
      ? "bg-fuchsia-600 text-fuchsia-50 hover:bg-fuchsia-700"
      : "hover:bg-neutral-200";
  return (
    <button
      className={`${description} flex items-center font-semibold rounded-md px-4 py-2 text-base lg:px-[1.40rem] lg:py-[0.6rem] transition-all duration-200`}
    >
      {children}
    </button>
  );
};

export default Button;