import { useContext } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { favContext } from "../../context/FavContext";
import Button from "../Button/button";
import { RiStarSFill } from "react-icons/ri";

const SeriesContainerList = ({ isPreview }) => {
  const { addToFavs } = useContext(favContext);
  const baseUrl = `https://api.themoviedb.org/3/tv/top_rated?api_key={API_KEY}&language=en-US&page=1`;
  const { data } = useFetch(baseUrl);
  const handleFav = (data) => {
    addToFavs(data);
  };

  return isPreview ? (
    <>
      {data?.results?.slice(0, 4).map((serie) => {
        return (
          <section className="relative" key={serie?.id}>
            <Link
              to={`/series/${serie.id}`}
              className="w-full lg:w-1/5 flex flex-col justify-center items-center mt-4 lg:m-2"
            >
              <section className="relative">
                <h2 className="text-left text-text font-semibold absolute bottom-1 left-1">
                  {serie.name}
                </h2>
                <img
                  src={`http://image.tmdb.org/t/p/w500/${serie.backdrop_path}`}
                  alt=""
                  className="rounded-lg"
                />
              </section>
            </Link>
            <Button
              className={
                "text-yellow-500 absolute right-2 top-2 px-1 py-1 rounded-full bg-main/50 z-20"
              }
              onClick={() => handleFav(serie)}
              text={<RiStarSFill className="text-xl" />}
            />
          </section>
        );
      })}
    </>
  ) : (
    <>
      {data?.results?.map((serie) => {
        return (
          <Link
            to={`/series/${serie.id}`}
            key={serie?.id}
            className="w-full lg:w-1/5 flex flex-col justify-center items-center bg-gray-800 px-3 py-4 rounded-xl mt-4 lg:m-2"
          >
            <section>
              <img
                src={`http://image.tmdb.org/t/p/w500/${serie.poster_path}`}
                alt=""
                className="rounded-lg"
              />
              <h2 className="text-center">{serie.name}</h2>
            </section>
          </Link>
        );
      })}
    </>
  );
};

export default SeriesContainerList;
