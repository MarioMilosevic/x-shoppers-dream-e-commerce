import { BsBag } from "react-icons/bs";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";
const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="hidden md:flex justify-between py-10 pr-1">
        <div className="flex items-center font-medium gap-2 text-lg">
          <BsBag className="text-xl" />
          <span className=" text-slate-700 font-semibold">
            X Shoppers Dream
          </span>
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
      <div className="md:hidden py-10 flex justify-end px-8">
        <GiHamburgerMenu
          className="w-10 h-10 cursor-pointer"
          onClick={toggleIsOpen}
        />
        {isOpen && (
          <div className="bg-neutral-50 fixed w-full h-full top-0 right-0 z-20 flex justify-center items-center">
            <FaWindowClose
              className="absolute h-10 w-10 top-12 right-12 cursor-pointer  text-fuchsia-600"
              onClick={toggleIsOpen}
            />
            <ul className="flex flex-col gap-16 text-lg font-medium text-slate-700">
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
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
