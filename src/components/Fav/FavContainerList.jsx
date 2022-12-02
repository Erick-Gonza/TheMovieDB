import { useContext } from "react";
import { isMobile } from "react-device-detect";
import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { favContext } from "../../context/FavContext";
import Button from "../Button/button";

const FavContainerList = () => {
  const { fav, removeFromFavs } = useContext(favContext);
  const handleDeleteFav = (data) => {
    removeFromFavs(data);
  };
  return (
    <>
      {fav?.map((fav) => {
        return (
          <section className="relative w-1/2 max-h-1/2 px-2 py-1" key={fav?.id}>
            <Link
              to={`/favs/${fav.id}`}
              className="w-full lg:w-1/5 flex flex-col justify-center items-center mt-4 lg:m-2"
            >
              <section className="relative">
                <h2 className="text-center text-lg text-text font-semibold dark:text-black">
                  {isMobile
                    ? `${
                        fav?.title?.substring(0, 15) ||
                        fav?.name?.substring(0, 15)
                      }..`
                    : fav?.title || fav?.name}
                </h2>
                <img
                  src={`http://image.tmdb.org/t/p/w500/${fav.poster_path}`}
                  alt=""
                  className="rounded-lg"
                />
              </section>
            </Link>
            <Button
              className={
                "text-white absolute left-3 bottom-2 px-1 py-1 rounded-full bg-secondary z-20"
              }
              onClick={() => handleDeleteFav(fav.id)}
              text={<RiCloseFill className="text-xl" />}
            />
          </section>
        );
      })}
    </>
  );
};

export default FavContainerList;
