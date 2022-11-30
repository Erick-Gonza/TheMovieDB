import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const FavContainerList = ({ isPreview }) => {
  const baseUrl = `https://api.themoviedb.org/3/trending/all/day?api_key={API_KEY}`;
  const { data } = useFetch(baseUrl);

  return isPreview ? (
    <>
      {data?.results?.slice(0, 4).map((trend) => {
        return (
          <Link
            to={`/trends/${trend.media_type}/${trend.id}`}
            key={trend?.id}
            className="w-full lg:w-1/5 flex flex-col justify-center items-center bg-gray-800 px-3 py-4 rounded-xl mt-4 lg:m-2"
          >
            <section>
              <img
                src={`http://image.tmdb.org/t/p/w500/${trend.poster_path}`}
                alt=""
                className="rounded-lg"
              />
              {trend?.media_type === "movie" ? (
                <>
                  <h2 className="text-center">{trend?.title}</h2>
                </>
              ) : (
                <>
                  <h2 className="text-center">{trend?.name}</h2>
                </>
              )}
            </section>
          </Link>
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
