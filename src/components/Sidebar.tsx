import { SidebarProps } from "../types/types";
import { useState } from "react";
import Button from "./Button";

const Sidebar = ({ products }: SidebarProps) => {
  const [sidebarProducts, setSidebarProducts] = useState(products)
  const categories = new Set(sidebarProducts.map((product) => product.category));
  const companies = new Set(sidebarProducts.map((product) => product.company))

  return (
    <aside className="text-sm">
      <input
        type="text"
        placeholder="Search"
        className="bg-fuchsia-100 border border-fuchsia-500 p-1  w-full"
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
      <select className="bg-fuchsia-100 border border-fuchsia-500 p-1 w-[100px] capitalize">
        <option value="All">All</option>
        {[...companies].map((company) => (
          <option key={company} value={company} className="capitalize">{company }</option>
        ))}
      </select>
      <h3 className="font-medium pt-4 pb-2">Color</h3>
      <ul className="flex items-center gap-1">
        <li className="font-light">All</li>
        <button className="w-3 h-3 rounded-full bg-red-500"></button>
        <button className="w-3 h-3 rounded-full bg-green-500"></button>
        <button className="w-3 h-3 rounded-full bg-blue-500"></button>
        <button className="w-3 h-3 rounded-full bg-neutral-500"></button>
        <button className="w-3 h-3 rounded-full bg-yellow-500"></button>
      </ul>
      <h3 className="font-medium pt-4 pb-2">Price</h3>
      <span className="text-fuchsia-500">$3,099,99</span>
      <input type="range" />
      {/* value, min, max, step */}
      <div className="flex gap-2 items-center pt-4 pb-2">
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
