import React, { useState } from "react";
import { useContext } from "react";
import { themeContext } from "../../context/ThemeContext";
import {
  RiMenu3Fill,
  RiCloseLine,
  RiMoonClearFill,
  RiSunFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { theme, handleClick } = useContext(themeContext);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="flex bg-gradient-to-b to-main from-mainbg items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50">
      <div className="xl:w-1/6 text-center -mt-4">
        <Link to="/home" className="text-3xl font-bold relative p-1">
          <h2 className="text-text mt-4">MOVIESDB</h2>
        </Link>
      </div>
      <nav
        className={`fixed bg-gradient-to-b to-main from-mainbg w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
      >
        <Link to="/home" className="text-2xl font-bold text-text">
          Home
        </Link>

        <Link to="/movies" className="text-2xl font-bold text-text">
          Movies
        </Link>

        <Link to="/series" className="text-2xl font-bold text-text">
          Series
        </Link>

        <Link to="/trends" className="text-2xl font-bold text-text">
          Trends
        </Link>

        <Link to="/favs" className="text-2xl font-bold text-text">
          Favorites
        </Link>

        <Link to="/login" className="text-2xl font-bold text-text">
          Logout
        </Link>
      </nav>
      <button
        onClick={toggleMenu}
        className="xl:hidden text-4xl px-2 py-2 text-white fixed top-4 right-4"
      >
        {showMenu ? (
          <RiCloseLine className="text-red" />
        ) : (
          <RiMenu3Fill className="text-white" />
        )}
      </button>
      <button
        onClick={handleClick}
        className="text-white absolute bottom-4 right-4 px-3 py-3 rounded-full bg-red"
      >
        {theme === "dark" ? (
          <RiMoonClearFill className="text-2xl" />
        ) : (
          <RiSunFill className="text-2xl" />
        )}
      </button>
    </header>
  );
};

export default Header;
