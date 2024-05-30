import { useNavigate } from "react-router-dom";
import Button from "./Button";
export const ErrorRoute = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center pt-32 h-[80vh] text-xl gap-6">
      <span>Error 404</span>
      <span>The page you are looking for does not exist on this website</span>
      <Button color="purple" buttonHandler={() => navigate("/")}>
        Go back
      </Button>
    </div>
  );
};

export default Error;
