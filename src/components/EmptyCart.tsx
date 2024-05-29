import Button from "./Button";
import { useNavigate } from "react-router";
const EmptyCart = () => {
    const navigate = useNavigate()
  return (
    <div className="sm:max-w-[1200px] h-[80vh] flex flex-col justify-center items-center gap-8 mx-auto">
          <h1 className="text-4xl font-medium">Your cart is empty</h1>
          <Button color="purple" buttonHandler={() => navigate("/products")}>Fill it</Button>
    </div>
  );
}

export default EmptyCart
