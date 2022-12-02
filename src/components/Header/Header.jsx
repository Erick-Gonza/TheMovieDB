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
    <header className="flex bg-gradient-to-b to-main from-mainbg items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50 dark:to-white dark:from-slate-200">
      <div className="xl:w-1/6 text-center -mt-4">
        <Link to="/home" className="text-3xl font-bold relative p-1">
          <h2 className="text-text mt-4 dark:text-black">MOVIESDB</h2>
        </Link>
      </div>
      <nav
        className={`fixed bg-gradient-to-b dark:to-text dark:from-[#fefefe] lg:bg-none w-[80%] lg:w-[50%] h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 lg:static flex-1 flex flex-col lg:flex-row items-center justify-center gap-6 transition-all duration-500 z-50`}
      >
        <Link
          to="/home"
          className="text-2xl font-bold text-text dark:text-slate-700 p-2"
        >
          Home
        </Link>

        <Link
          to="/movies"
          className="text-2xl font-bold text-text dark:text-slate-700 p-2"
        >
          Movies
        </Link>

        <Link
          to="/series"
          className="text-2xl font-bold text-text dark:text-slate-700 p-2"
        >
          Series
        </Link>

        <Link
          to="/trends"
          className="text-2xl font-bold text-text dark:text-slate-700 p-2"
        >
          Trends
        </Link>

        <Link
          to="/favs"
          className="text-2xl font-bold text-text dark:text-slate-700 p-2"
        >
          Favorites
        </Link>

        <Link
          to="/login"
          className="text-2xl font-bold text-text dark:text-slate-700 p-2"
        >
          Logout
        </Link>
      </nav>
      <button
        onClick={toggleMenu}
        className="xl:hidden text-4xl px-2 py-2 text-white fixed top-4 right-4 bg-main bg-gradient-to-b dark:to-white dark:from-slate-200 rounded-full"
      >
        {showMenu ? (
          <RiCloseLine className="text-red dark:text-black" />
        ) : (
          <RiMenu3Fill className="text-white dark:text-black" />
        )}
      </button>
      <button
        onClick={handleClick}
        className="absolute top-5 right-20 lg:top-3 lg:right-4 px-3 py-3 lg:px-4 lg:py-4 rounded-full"
      >
        {theme === "dark" ? (
          <RiMoonClearFill className="text-2xl lg:text-3xl text-black" />
        ) : (
          <RiSunFill className="text-2xl lg:text-3xl text-white" />
        )}
      </button>
    </header>
  );
};

export default Header;
