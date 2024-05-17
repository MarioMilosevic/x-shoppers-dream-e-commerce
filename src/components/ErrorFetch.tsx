import { Link } from "react-router-dom";
const ErrorFetch = () => {
  return (
    <>
      <div className="w-[750px] mx-auto pt-20 text-center">
        <div className="mb-12">
          Oops! Looks like there was a problem connecting to the server.
        </div>
        <Link
          to={"/"}
          className="w-28 bg-fuchsia-400 text-center text-md text-fuchsia-100 rounded-full px-8 py-4 hover:bg-fuchsia-300 transition-all duration-300"
        >
          Go back
        </Link>
      </div>
    </>
  );
};

export default ErrorFetch;
