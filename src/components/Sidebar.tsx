import { SidebarProps } from "../types/types";
import { useState } from "react";
import Button from "./Button";
import { buttonColors } from "../utils/constants";
import ColorButton from "./ColorButton";

const Sidebar = ({ products }: SidebarProps) => {
  const [sidebarProducts, setSidebarProducts] = useState(products);
  // moracu na njemu da radim
  const categories = new Set(
    sidebarProducts.map((product) => product.category)
  );
  const companies = new Set(sidebarProducts.map((product) => product.company));

  return (
    <aside className="text-sm">
      <input
        type="text"
        placeholder="Search"
        className="bg-fuchsia-100 border border-fuchsia-500 px-2 py-1  w-full placeholder:tracking-wide"
      />
      <h3 className="font-medium pt-4 pb-2">Category</h3>
      <ul className="flex flex-col gap-2">
        <li className="font-light capitalize">All</li>
        {[...categories].map((category) => (
          <li key={category} className="font-light capitalize">
            {category}
          </li>
        ))}
      </ul>
      <h3 className="font-medium pt-4 pb-2">Company</h3>
      <select className="bg-fuchsia-100 border border-fuchsia-500 px-1 capitalize">
        <option value="All">All</option>
        {[...companies].map((company) => (
          <option key={company} value={company} className="capitalize">
            {company}
          </option>
        ))}
      </select>
      <h3 className="font-medium pt-4 pb-2">Color</h3>
      <ul className="flex items-center gap-1">
        <li className="font-light">All</li>
        {buttonColors.map((button, index) => {
          return <ColorButton key={index} color={button} />;
        })}
      </ul>
      <h3 className="font-medium pt-4 pb-2">Price</h3>
      <span className="text-fuchsia-500">$3,099,99</span>
      <input type="range" />
      {/* value, min, max, step */}
      <div className="flex gap-2 items-center py-4">
        <h3 className="font-medium ">Free shipping</h3>
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


