import { OperationProps } from "../types/types";
//   da mapujem preko operations i renderujem sve Buttone u jedan div, a ispod samo ako je aktivan da renderujem ako nije nista

const Operation = ({ title, text, icon }:OperationProps) => {
  const Icon = icon
  return (
    <article className="w-[740px] mx-auto  border-black flex gap-5">
      <div>
      <Icon className="bg-fuchsia-300 w-12 h-12 p-3 rounded-full text-fuchsia-600" />
      </div>
      <div className="flex flex-col gap-4  border-black">
        <h3 className="font-bold text-xl pt-2">
        {title}
        </h3>
        <p className="leading-9 text-lg">
        {text}
        </p>
      </div>
    </article>
  );
};

export default Operation;
