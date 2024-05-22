import Button from "./Button";
import ColorButton from "./ColorButton";
import { useDispatch } from "react-redux";
import { setFilters } from "../redux/features/productsSlice";
import { useProductsSlice } from "../hooks/useProductsSlice";
import { useState } from "react";

const Sidebar = () => {
  const products = useProductsSlice();
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [activeColorIndex, setActiveColorIndex] = useState<number>(0);
console.log(products)
  const dispatch = useDispatch();
  const categoriesSet = new Set(products.map((product) => product.category));
  const companiesSet = new Set(products.map((product) => product.company));
  const colorsSet = new Set(products.flatMap((product) => product.colors));
  const {price} = products.reduce((prev, current) => {
    return (prev.price > current.price) ? prev : current
  }, 0)
  console.log(price)

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

  return (
    <aside className="text-sm">
      <input
        type="text"
        placeholder="Search"
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
        name="company"
        onChange={(e) =>
          dispatch(setFilters({ key: e.target.name, value: e.target.value }))
        }
      >
        {companies.map((company) => (
          <option key={company} value={company} className="capitalize">
            {company}
          </option>
        ))}
      </select>
      <h3 className="font-medium pt-4 pb-2">Color</h3>
      <ul className="flex items-center gap-1">
        {colors.map((button, index) => {
          const isActive = activeColorIndex === index ? "true" : "false";
          return (
            <ColorButton
              key={index}
              button={button}
              isActive={isActive}
              index={index}
              clickHandler={colorHandler}
            />
          );
        })}
      </ul>
      <h3 className="font-medium pt-4 pb-2">Price</h3>
      <span className="text-fuchsia-500">
        {`$${(price / 100).toLocaleString()}`}
      </span>
      <input type="range" className="bg-fuchsia-500 text-fuchsia-200" value={price} min={0} max={price} step={1}/>
      <div className="flex gap-2 items-center py-4">
        <h3 className="font-medium">Free shipping</h3>
        <input type="checkbox" />
      </div>
      <Button
        color="red"
        buttonHandler={() => console.log("da izbrise filtere")}
      >
        Clear filters
      </Button>
    </aside>
  );
};

export default Sidebar;
