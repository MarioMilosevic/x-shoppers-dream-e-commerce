import { BsBag } from "react-icons/bs";
import { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";
import { Outlet } from "react-router";
import { handleStickyNav } from "../utils/helperFunctions";
import { pages } from "../utils/constants";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router";
import { getTotalCartQuantity } from "../redux/features/cartSlice";
import { useCartSlice } from "../hooks/useCartSlice";
import { useSelector } from "react-redux";
import ListItem from "./ListItem";
const SharedLayout = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activePageIndex, setActivePageIndex] = useState<number>(0);
  const totalQuantityMario = useSelector(getTotalCartQuantity);
  const { cart, totalQuantity } = useCartSlice();
  console.log("total quantity cart", totalQuantity);
  console.log("cart", cart);
  console.log("total quantity computed", totalQuantityMario);
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef<HTMLDivElement | null>(
    null
  ) as React.RefObject<HTMLElement>;
  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        handleStickyNav(navRef, "sticky");
      };
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [location.pathname]);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const clickHandler = (index: number) => {
    setIsOpen(false);
    setActivePageIndex(index);
  };

  return (
    <>
      <nav className="w-full" ref={navRef}>
        <div className="flex relative justify-between pr-3 py-8 lg:max-w-[1200px] mx-auto">
          <div
            className="hidden lg:flex items-center font-medium gap-[0.37rem] text-sm lg:text-base cursor-pointer"
            onClick={() => navigate("/")}
          >
            <BsBag className="text-[1.25rem]" />
            <span className=" text-slate-700">X Shoppers Dream</span>
          </div>
          <div className="hidden lg:flex">
            <ul className="flex gap-10 text-base font-medium text-slate-700">
              {pages.map((page, index) => (
                <ListItem
                  key={index}
                  {...page}
                  index={index}
                  clickHandler={clickHandler}
                  isActive={activePageIndex === index ? "true" : "false"}
                >
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
            <span className="bg-fuchsia-500 text-fuchsia-50 text-sm w-[1.1rem] h-[1.1rem] flex items-center justify-center rounded-full absolute top-1 -right-3">
              {totalQuantityMario}
            </span>
          </Link>

          <div className="lg:hidden flex px-8 w-full relative">
            <GiHamburgerMenu
              className="w-6 h-6 cursor-pointer absolute -top-2 right-4 lg:hidden"
              onClick={toggleIsOpen}
            />
            <div
              className={`bg-neutral-50  fixed w-full h-full z-10  transition-all duration-700 top-0 ${
                isOpen ? "left-0" : "left-full"
              } flex justify-center items-center lg:hidden`}
            >
              <FaWindowClose
                className="absolute h-6 w-6 top-12 right-12 cursor-pointer  text-fuchsia-500"
                onClick={toggleIsOpen}
              />
              <ul className="flex flex-col gap-16 text-lg font-medium text-slate-700">
                {pages.map((page, index) => (
                  <ListItem
                    key={index}
                    {...page}
                    index={index}
                    clickHandler={clickHandler}
                    isActive={activePageIndex === index ? "true" : "false"}
                  >
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
      <footer className="pb-12">
        <div className="flex justify-center gap-1">
          Copyright &copy; Mario Milošević
          <a href="https://github.com/MarioMilosevic" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="transition hover:scale-110 hover:rotate-[360deg] duration-700"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </footer>
    </>
  );
};

export default SharedLayout;
