import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { setInitColorTitle } from "../../utils/Utilities";
import Header from "../Header/Header.jsx";

const SerieDetail = () => {
  const { id } = useParams();
  const baseUrl = `https://api.themoviedb.org/3/tv/${id}?api_key={API_KEY}&language=en-US`;
  const { data } = useFetch(baseUrl);
  setInitColorTitle("black", `${data?.title}`);

  return (
    <>
      <Header />
      <main className="flex flex-col flex-grow justify-center items-center px-3 py-4 lg:overflow-x-hidden">
        <h2 className="text-center text-white text-4xl font-bold p-2">
          {data?.name}
        </h2>
        <section className="flex flex-col lg:flex-row px-4 py-2 bg-gray-700 rounded-xl w-3/4 lg:w-1/2">
          <img
            src={`http://image.tmdb.org/t/p/w500/${data?.poster_path}`}
            alt=""
            className="rounded-lg"
          />
          <section className="px-3 py-2 text-white text-xl flex flex-col items-center lg:items-start justify-evenly">
            <p>Score: {data?.vote_average}</p>
            <p>Status: {data?.status}</p>
            <p>Budget: {data?.budget}</p>
            <p>Release Date: {data?.release_date}</p>
            <p>Description: {data?.overview}</p>
          </section>
        </section>
      </main>
    </>
  );
};

export default SerieDetail;
