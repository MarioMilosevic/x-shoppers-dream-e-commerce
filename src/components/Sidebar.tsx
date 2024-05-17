import Button from "./Button";
import { buttonColors } from "../utils/constants";
import ColorButton from "./ColorButton";
import { useProductsSlice } from "../hooks/useProductsSlice";
import { useDispatch } from "react-redux";
import { setFilters } from "../redux/features/productsSlice";

const Sidebar = () => {
  const products = useProductsSlice();
  console.log("svi produkti", products);
  const categoriesSet = new Set(products.map((product) => product.category));
  const companiesSet = new Set(products.map((product) => product.company));

  const categories = ["All", ...categoriesSet];
  const companies = ["All", ...companiesSet];

  const dispatch = useDispatch();

  const proba = (e) => {
    dispatch(setFilters({ company: "Ikea" }));
    console.log("radi");
  };

  return (
    <aside className="text-sm">
      <input
        type="text"
        placeholder="Search"
        className="bg-fuchsia-100 border border-fuchsia-500 px-2 py-1  w-full placeholder:tracking-wide"
      />
      <h3 className="font-medium pt-4 pb-2">Category</h3>
      <ul className="flex flex-col gap-2">
        {categories.map((category) => (
          <li
            key={category}
            className="font-light capitalize cursor-pointer"
            onClick={(e) => proba(e)}
          >
            {category}
          </li>
        ))}
      </ul>
      <h3 className="font-medium pt-4 pb-2">Company</h3>
      <select
        className="bg-fuchsia-100 border border-fuchsia-500 px-1 capitalize"
        name="company"
        onChange={(e) =>
          dispatch(
            setFilters({ category: e.target.name, company: e.target.value })
          )
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
