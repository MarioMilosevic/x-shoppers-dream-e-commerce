import Button from "./Button";
import ColorButton from "./ColorButton";
import { useDispatch } from "react-redux";
import { clearFilters, setFilters } from "../redux/features/productsSlice";
import { useProductsSlice } from "../hooks/useProductsSlice";
import { useState } from "react";
import { calculateHighestNumber } from "../utils/helperFunctions";
import { useFiltersSlice } from "../hooks/useFiltersSlice";
import { useAppSlice } from "../hooks/useAppSlice";

const Sidebar = () => {
  const products = useProductsSlice();
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [activeColorIndex, setActiveColorIndex] = useState<number>(0);
  const filters = useFiltersSlice();
  const {isSidebarOpen } = useAppSlice()
  const dispatch = useDispatch();
  const categoriesSet = new Set(products.map((product) => product.category));
  const companiesSet = new Set(products.map((product) => product.company));
  const colorsSet = new Set(products.flatMap((product) => product.colors));

  const { price } = calculateHighestNumber(products);

  const categories = ["All", ...categoriesSet];
  const companies = ["All", ...companiesSet];
  const colors = ["All", ...colorsSet];

  const categoryHandler = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    dispatch(
      setFilters({
        key: "category",
        value: e.currentTarget.getAttribute("data-category"),
      }),
      setActiveCategoryIndex(index)
    );
  };

  const colorHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number,
    button: string
  ) => {
    e.preventDefault();
    setActiveColorIndex(index);
    dispatch(
      setFilters({
        key: "color",
        value: button,
      })
    );
  };

  const resetHandler = () => {
    dispatch(clearFilters());
    setActiveCategoryIndex(0);
    setActiveColorIndex(0);
  };

  const sidebar = isSidebarOpen ? "translate-x-0" : "-translate-x-[100%]"

  return (
    <aside className={`lg:relative absolute z-10 bg-neutral-100 lg:top-0 top-20 p-4 rounded-md lg:text-base text-sm lg:translate-x-0 lg:transition-none transition-all duration-700 ${sidebar}`}>
      <input
        type="text"
        id="search"
        placeholder="Search"
        value={filters.search}
        className="bg-fuchsia-50 border border-fuchsia-500 rounded-md px-2 py-1  w-full placeholder:tracking-wide"
        onChange={(e) =>
          dispatch(setFilters({ key: "search", value: e.target.value }))
        }
      />
      <h3 className="font-medium pt-4 pb-2">Category</h3>
      <ul className="flex flex-col gap-2">
        {categories.map((category, index) => {
          const active =
            activeCategoryIndex === index
              ? "underline underline-offset-[6px] decoration-fuchsia-500"
              : "";
          return (
            <li
              key={category}
              className={`font-light capitalize cursor-pointer ${active}`}
              data-category={category}
              value={filters.category}
              onClick={(e) => categoryHandler(e, index)}
            >
              {category}
            </li>
          );
        })}
      </ul>
      <h3 className="font-medium pt-4 pb-2">Company</h3>
      <select
        className="bg-fuchsia-50 rounded-md border border-fuchsia-500 px-1 capitalize"
        value={filters.company}
        onChange={(e) =>
          dispatch(setFilters({ key: "company", value: e.target.value }))
        }
      >
        {companies.map((company) => (
          <option key={company} value={company} className="capitalize">
            {company}
          </option>
        ))}
      </select>
      <h3 className="font-medium pt-4 pb-2">Color</h3>
      <ul className="flex items-center gap-2">
        {colors.map((button, index) => {
          const isActive = activeColorIndex === index ? "true" : "false";
          return (
            <ColorButton
              key={index}
              button={button}
              isActive={isActive}
              index={index}
              size="small"
              clickHandler={colorHandler}
            />
          );
        })}
      </ul>
      <h3 className="font-medium pt-4 pb-2">Price</h3>

      <div className="flex flex-col gap-1">
        <span className="text-fuchsia-500">
          {`$${(filters.price / 100).toLocaleString()}`}
        </span>
        <input
          type="range"
          className="bg-fuchsia-500 text-fuchsia-200"
          value={filters.price}
          min="0"
          max={price}
          onChange={(e) =>
            dispatch(setFilters({ key: "price", value: e.target.value }))
          }
        />
      </div>

      <div className="flex gap-2 items-center py-4">
        <h3 className="font-medium">Free shipping</h3>
        <input
          type="checkbox"
          id="shipping"
          className="w-3 h-3 accent-fuchsia-300 focus:ring-offset-1 focus:ring focus:ring-fuchsia-300"
          checked={filters.shipping}
          onChange={(e) =>
            dispatch(setFilters({ key: "shipping", value: e.target.checked }))
          }
        />
      </div>
      <Button color="red" buttonHandler={() => resetHandler()}>
        Clear filters
      </Button>
    </aside>
  );
};

export default Sidebar;
