import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

export const useFilteredProductsSlice = () => {
  const filteredProducts = useSelector((state: RootState) => state.products.filteredProducts);
  return filteredProducts;
};
