import { useState, useEffect, createContext } from "react";

export const favContext = createContext();
const { Provider } = favContext;

export const FavContext = ({ children }) => {
  const [fav, setFav] = useState(
    JSON.parse(sessionStorage.getItem("favs") || "[]")
  );

  const addToFavs = (data) => {
    let newFavs = [...fav];
    let isAlreadyOnFavs = fav.some((e) => e.id === data.id);

    if (isAlreadyOnFavs) {
      return newFavs;
    } else {
      newFavs = [...fav, data];
    }
    setFav(newFavs);
  };

  const removeFromFavs = (id) => {
    let newFavs = [...fav];
    setFav(newFavs.filter((obj) => obj.id !== id));
  };

  const setItemsToLocalStorage = () => {
    sessionStorage.setItem("favs", JSON.stringify(fav));
  };
  useEffect(() => {
    setItemsToLocalStorage(fav);
  }, [fav]);

  const favSession = {
    fav,
    addToFavs,
    removeFromFavs,
  };

  return <Provider value={favSession}>{children}</Provider>;
};

export default FavContext;
