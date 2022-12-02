import { Link } from "react-router-dom";

const HeaderPage = () => {
  return (
    <header className="h-32 bg-gradient-to-b to-main from-mainbg w-full flex items-center justify-center px-2 py-3 lg:h-32 ">
      <Link to={"/welcome"}>
        <h2 className="text-text text-5xl font-bold mt-4 lg:text-7xl">
          MOVIESDB
        </h2>
      </Link>
    </header>
  );
};

export default HeaderPage;
