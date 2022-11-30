import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const SeriesContainerList = ({ isPreview }) => {
  const baseUrl = `https://api.themoviedb.org/3/tv/top_rated?api_key={API_KEY}&language=en-US&page=1`;
  const { data } = useFetch(baseUrl);

  return isPreview ? (
    <>
      {data?.results?.slice(0, 4).map((serie) => {
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
