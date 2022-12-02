import { useContext } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { RiStarSFill } from "react-icons/ri";
import Button from "../Button/Button.jsx";
import { favContext } from "../../context/FavContext";
import { isMobile } from "react-device-detect";

const MoviesContainerList = ({ isPreview }) => {
  const { addToFavs } = useContext(favContext);
  const baseUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key={API_KEY}&language=en-US&page=1`;
  const { data } = useFetch(baseUrl);
  const handleFav = (data) => {
    addToFavs(data);
  };

  return isPreview ? (
    <>
      <section className="flex flex-col lg:flex-row lg:justify-around">
        {data?.results?.slice(0, 4).map((movie) => {
          return (
            <section key={movie?.id} className="relative">
              <Link
                to={`/movies/${movie.id}`}
                className="w-full flex flex-col justify-center items-center mt-4 px-2 py-2"
              >
                <section className="relative lg:inline-flex">
                  <h2 className="text-left text-text font-semibold absolute bottom-1 left-1 dark:text-black">
                    {movie.title}
                  </h2>
                  <img
                    src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    alt=""
                    className="rounded-lg"
                  />
                </section>
              </Link>
              <Button
                className={
                  "text-yellow-500 absolute right-4 top-8 lg:right-4 lg:top-8 lg:px-2 lg:py-2 px-1 py-1 rounded-full bg-main/50 z-20"
                }
                onClick={() => handleFav(movie)}
                text={<RiStarSFill className="text-xl" />}
              />
            </section>
          );
        })}
      </section>
    </>
  ) : (
    <>
      <section className="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-4">
        {data?.results?.map((movie) => {
          return (
            <section className="relative" key={movie?.id}>
              <Link
                to={`/movies/${movie.id}`}
                className="w-full flex flex-col justify-center items-center mt-4 px-2 py-2"
              >
                <section className="relative">
                  <h2 className="text-left text-text font-semibold absolute bottom-1 left-1 dark:text-black">
                    {isMobile
                      ? `${movie.title.substring(0, 15)}...`
                      : movie.title}
                  </h2>
                  <img
                    src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt=""
                    className="rounded-lg lg:h-96"
                  />
                </section>
              </Link>
              <Button
                className={
                  "text-yellow-500 absolute right-4 top-8 lg:right-4 lg:top-8 lg:px-2 lg:py-2 px-1 py-1 rounded-full bg-main/50 z-20"
                }
                onClick={() => handleFav(movie)}
                text={<RiStarSFill className="text-xl" />}
              />
            </section>
          );
        })}
      </section>
    </>
  );
};

export default MoviesContainerList;
