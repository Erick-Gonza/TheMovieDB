import { useState, useEffect, createContext } from "react";

export const favContext = createContext();
const { Provider } = favContext;

export const FavContext = ({ children }) => {
  const [fav, setFav] = useState([]);

  const addToFavs = (data) => {
    let newFavs = [];
    fav.entries === 0 ? (newFavs = data) : (newFavs = [...fav, data]);
    setFav(newFavs);
  };

  const setItemsToLocalStorage = () => {
    sessionStorage.setItem("favs", JSON.stringify(fav));
  };
  useEffect(() => {
    if (fav.entries === 0) {
      JSON.parse(sessionStorage.getItem("favs") || "[]");
    }
    setItemsToLocalStorage(fav);
  }, [fav]);

  const favSession = {
    fav,
    addToFavs,
  };

  return <Provider value={favSession}>{children}</Provider>;
};

export default FavContext;
