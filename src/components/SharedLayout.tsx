import { BsBag } from "react-icons/bs";
import { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";
import ListItem from "./ListItem";
import { Outlet } from "react-router";
import { handleStickyNav } from "../utils/helperFunctions";
import { pages } from "../utils/constants";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
const SharedLayout = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const navRef = useRef<HTMLDivElement | null>(
    null
  ) as React.RefObject<HTMLElement>;

  useEffect(() => {
    const handleScroll = () => {
      handleStickyNav(navRef, "sticky");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-full" ref={navRef}>
        <div className="flex relative justify-between pr-3 py-8 lg:w-[1200px] mx-auto">
          <div
            className="hidden lg:flex items-center font-medium gap-[0.37rem] text-sm lg:text-base cursor-pointer"
            onClick={() => navigate("/")}
          >
            <BsBag className="text-[1.25rem]" />
            <span className=" text-slate-700">X Shoppers Dream</span>
          </div>
          <div className="hidden lg:flex">
            <ul className="flex gap-10 text-base font-medium text-slate-700">
              {pages.map((page) => (
                <ListItem key={page.id} {...page}>
                  {page.name}
                </ListItem>
              ))}
            </ul>
          </div>

          <Link
            to={"/Cart"}
            className="hidden lg:flex items-center gap-2 text-base relative cursor-pointer"
          >
            <span>Cart</span>
            <BsBag className="text-[1.25rem] self-start" />
            <span className="bg-fuchsia-600 text-fuchsia-50 text-sm w-[1.1rem] h-[1.1rem] flex items-center justify-center rounded-full absolute top-1 -right-3">
              0
            </span>
          </Link>

          <div className="lg:hidden flex px-8 w-full relative">
            <GiHamburgerMenu
              className="w-6 h-6 cursor-pointer absolute -top-2 right-4 lg:hidden"
              onClick={toggleIsOpen}
            />
            <div
              className={`bg-neutral-50 fixed w-full h-full transition-all duration-700 top-0 ${
                isOpen ? "left-0" : "left-full"
              } flex justify-center items-center lg:hidden`}
            >
              <FaWindowClose
                className="absolute h-6 w-6 top-12 right-12 cursor-pointer  text-fuchsia-600"
                onClick={toggleIsOpen}
              />
              <ul className="flex flex-col gap-16 text-lg font-medium text-slate-700">
                {pages.map((page) => (
                  <ListItem key={page.id} {...page}>
                    {page.name}
                  </ListItem>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
