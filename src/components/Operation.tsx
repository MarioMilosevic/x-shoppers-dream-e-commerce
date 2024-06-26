import { OperationProps } from "../types/types";

const Operation = ({ title, text, icon }: OperationProps) => {
  const Icon = icon;
  return (
    <article className="w-full pl-6 flex gap-5">
      <div>
        <Icon className="bg-fuchsia-200  w-12 h-12 p-3 rounded-full text-fuchsia-500" />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-lg lg:text-xl pt-2">{title}</h3>
        <p className="leading-6 text-sm lg:leading-9 lg:text-lg">{text}</p>
      </div>
    </article>
  );
};

export default Operation;
