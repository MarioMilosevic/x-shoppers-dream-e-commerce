import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

export const useFilters = () => {
  const filters = useSelector(
    (state: RootState) => state.products.filters
  );
  return filters;
};
