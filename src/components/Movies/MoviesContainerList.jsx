import { useContext } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { RiStarSFill } from "react-icons/ri";
import Button from "../Button/button";
import { favContext } from "../../context/FavContext";

const MoviesContainerList = ({ isPreview }) => {
  const { addToFavs } = useContext(favContext);
  const baseUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key={API_KEY}&language=en-US&page=1`;
  const { data } = useFetch(baseUrl);
  const handleFav = (data) => {
    addToFavs(data);
  };

  return isPreview ? (
    <>
      {data?.results?.slice(0, 4).map((movie) => {
        return (
          <section key={movie?.id} className="relative">
            <Link
              to={`/movies/${movie.id}`}
              className="w-full lg:w-1/5 flex flex-col justify-center items-center mt-4 lg:m-2"
            >
              <section className="relative">
                <h2 className="text-left text-text font-semibold absolute bottom-1 left-1">
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
                "text-yellow-500 absolute right-2 top-2 px-1 py-1 rounded-full bg-main/50 z-20"
              }
              onClick={() => handleFav(movie)}
              text={<RiStarSFill className="text-xl" />}
            />
          </section>
        );
      })}
    </>
  ) : (
    <>
      {data?.results?.map((movie) => {
        return (
          <Link
            to={`/movies/${movie.id}`}
            className="w-full lg:w-1/5 flex flex-col justify-center items-center bg-gray-800 px-3 py-4 rounded-xl mt-4 lg:m-2 relative"
            key={movie?.id}
          >
            <section>
              <h2 className="text-left text-text font-semibold">
                {movie.title}
              </h2>
              <img
                src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
                className="rounded-lg"
              />
            </section>
            <Button
              className={
                "text-yellow-500 absolute right-5 top-7 px-1 py-1 rounded-full bg-white"
              }
              onClick={() => handleFav(movie)}
              text={<RiStarSFill className="text-3xl" />}
            />
          </Link>
        );
      })}
    </>
  );
};

export default MoviesContainerList;
