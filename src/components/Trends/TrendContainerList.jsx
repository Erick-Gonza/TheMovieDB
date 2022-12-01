import { useContext } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { favContext } from "../../context/FavContext";
import Button from "../Button/button";
import { RiStarSFill } from "react-icons/ri";

const FavContainerList = ({ isPreview }) => {
  const { addToFavs } = useContext(favContext);
  const baseUrl = `https://api.themoviedb.org/3/trending/all/day?api_key={API_KEY}`;
  const { data } = useFetch(baseUrl);
  const handleFav = (data) => {
    addToFavs(data);
  };
  return isPreview ? (
    <>
      {data?.results?.slice(0, 4).map((trend) => {
        return (
          <section className="relative" key={trend?.id}>
            <Link
              to={`/trends/${trend.media_type}/${trend.id}`}
              className="w-full lg:w-1/5 flex flex-col justify-center items-center mt-4 lg:m-2"
            >
              <section className="relative">
                {trend?.media_type === "movie" ? (
                  <>
                    <h2 className="text-left text-text font-semibold absolute bottom-1 left-1">
                      {trend?.title}
                    </h2>
                  </>
                ) : (
                  <>
                    <h2 className="text-left text-text font-semibold absolute bottom-1 left-1">
                      {trend?.name}
                    </h2>
                  </>
                )}
                <img
                  src={`http://image.tmdb.org/t/p/w500/${trend.backdrop_path}`}
                  alt=""
                  className="rounded-lg"
                />
              </section>
            </Link>
            <Button
              className={
                "text-yellow-500 absolute right-2 top-2 px-1 py-1 rounded-full bg-main/50 z-20"
              }
              onClick={() => handleFav(trend)}
              text={<RiStarSFill className="text-xl" />}
            />
          </section>
        );
      })}
    </>
  ) : (
    <>
      {data?.results?.map((trend) => {
        return (
          <Link
            to={`/trends/${trend.media_type}/${trend.id}`}
            key={trend?.id}
            className="w-full lg:w-1/5 flex flex-col justify-center bg-gray-800 px-3 py-4 rounded-xl m-2"
          >
            <section>
              <img
                src={`http://image.tmdb.org/t/p/w500/${trend.poster_path}`}
                alt=""
                className="rounded-lg"
              />
              <h2 className="text-center">{trend?.title}</h2>
              <h2 className="text-center">{trend?.name}</h2>
            </section>
          </Link>
        );
      })}
    </>
  );
};

export default FavContainerList;
