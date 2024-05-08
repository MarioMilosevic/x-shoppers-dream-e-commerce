import { InfoProps } from "../types/types";
const Info = ({ icon, title, children }: InfoProps) => {
  const Icon = icon;

  return (
    <div className="flex flex-col gap-8">
      <Icon className="bg-fuchsia-300 w-12 h-12 p-3 rounded-full text-fuchsia-600" />
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-[15px] leading-7">{children}</p>
      </div>
    </div>
  );
};

export default Info;
