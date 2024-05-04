import { BsBag } from "react-icons/bs";

const Header = () => {
  return (
    <header className="flex justify-between py-10 pr-1">
      <div className="flex items-center font-medium gap-2 text-lg">
        <BsBag className="text-xl" />
        <span className=" text-slate-700 font-semibold">X Shoppers Dream</span>
      </div>
      <nav>
        <ul className="flex gap-10 text-lg font-medium text-slate-700">
          <li className="underline underline-offset-[6px] decoration-fuchsia-600">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-2 text-lg relative">
        <span className="font-medium">Cart</span>
        <BsBag className="text-xl" />
        <span className="bg-fuchsia-600 text-fuchsia-50 text-xs px-1 rounded-full absolute top-2 -right-2">
          0
        </span>
      </div>
    </header>
  );
};

export default Header;
