import { useAppSlice } from "../hooks/useAppSlice";
import { toggleisSidebarOpen } from "../redux/features/appSlice";
import { useDispatch } from "react-redux";
const Overlay = () => {
  const { isSidebarOpen } = useAppSlice();
  const dispatch = useDispatch();

  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full opacity-60 z-10 bg-neutral-800 lg:hidden"
          onClick={() => dispatch(toggleisSidebarOpen())}
        ></div>
      )}
    </>
  );
};

export default Overlay;
