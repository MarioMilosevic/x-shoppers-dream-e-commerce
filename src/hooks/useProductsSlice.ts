import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

export const useProductsSlice = () => {
    const products = useSelector((state: RootState) => state.app.products)
    return products
}

