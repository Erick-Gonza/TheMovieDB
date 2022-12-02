import { useContext } from "react";
import { isMobile } from "react-device-detect";
import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { favContext } from "../../context/FavContext";
import Button from "../Button/Button.jsx";

const FavContainerList = () => {
  const { fav, removeFromFavs } = useContext(favContext);
  const handleDeleteFav = (data) => {
    removeFromFavs(data);
  };
  return (
    <>
      <section className="w-full flex flex-col lg:flex-row lg:flex-wrap justify-center gap-4">
        {fav?.map((fav) => {
          return (
            <section className="relative" key={fav?.id}>
              <Link
                to={`/favs/${fav.id}`}
                className="w-full flex flex-col justify-center items-center mt-4 px-2 py-2"
              >
                <section className="relative">
                  <h2 className="text-left text-text font-semibold absolute bottom-1 left-1 dark:text-black">
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
                    className="rounded-lg lg:h-96"
                  />
                </section>
              </Link>
              <Button
                className={
                  "text-red-700 absolute right-4 top-8 lg:right-4 lg:top-8 lg:px-2 lg:py-2 px-1 py-1 rounded-full bg-main/50 z-20"
                }
                onClick={() => handleDeleteFav(fav.id)}
                text={<RiCloseFill className="text-xl" />}
              />
            </section>
          );
        })}
      </section>
    </>
  );
};

export default FavContainerList;
