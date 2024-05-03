import { BsBag } from "react-icons/bs";

const Header = () => {
  return (
    <header className="border border-black flex justify-between py-12">
      <div className="flex items-center font-semibold gap-2 text-xl">
        <BsBag/>
        <span className=" text-slate-700">X Shoppers Dream</span>
      </div>
      <nav>
        <ul className="flex gap-8 text-xl font-medium text-slate-700">
          <li>
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
      <div className="border border-black flex items-center gap-2 text-xl">
        <span>Cart</span>
        <BsBag />
      </div>
    </header>
  );
};

export default Header;
