import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { setInitColorTitle } from "../../utils/Utilities";
import Header from "../Header/Header.jsx";

const TrendDetail = () => {
  const [trend, setTrends] = useState();
  const API_KEY = import.meta.env.VITE_API_KEY;
  const { id, type } = useParams();
  let baseUrl = "";

  useEffect(() => {
    type === "tv"
      ? (baseUrl = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`)
      : (baseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
    const fetchData = async () => {
      const response = await fetch(baseUrl);
      const data = await response.json();
      setTrends(data);
      type === "tv"
        ? setInitColorTitle("black", `${data.name}`)
        : setInitColorTitle("black", `${data.title}`);
    };
    fetchData();
  }, []);
  return (
    <>
      <Header />
      {trend?.name ? (
        <main className="flex flex-col flex-grow justify-center items-center px-3 py-4 lg:overflow-x-hidden">
          <h2 className="text-center text-white text-4xl font-bold p-2">
            {trend?.name}
          </h2>
          <section className="flex flex-col lg:flex-row px-4 py-2 bg-gray-700 rounded-xl w-3/4 lg:w-1/2">
            <img
              src={`http://image.tmdb.org/t/p/w500/${trend?.poster_path}`}
              alt=""
              className="rounded-lg"
            />
            <section className="px-3 py-2 text-white text-xl flex flex-col items-center lg:items-start justify-evenly">
              <p>Score: {trend?.vote_average}</p>
              <p>Status: {trend?.status}</p>
              <p>Budget: {trend?.budget}</p>
              <p>Release Date: {trend?.release_date}</p>
              <p>Description: {trend?.overview}</p>
            </section>
          </section>
        </main>
      ) : (
        <main className="flex flex-col flex-grow justify-center items-center px-3 py-4 lg:overflow-x-hidden">
          <h2 className="text-center text-white text-4xl font-bold p-2">
            {trend?.title}
          </h2>
          <section className="flex flex-col lg:flex-row px-4 py-2 bg-gray-700 rounded-xl w-3/4 lg:w-1/2">
            <img
              src={`http://image.tmdb.org/t/p/w500/${trend?.poster_path}`}
              alt=""
              className="rounded-lg"
            />
            <section className="px-3 py-2 text-white text-xl flex flex-col items-center lg:items-start justify-evenly">
              <p>Score: {trend?.vote_average}</p>
              <p>Status: {trend?.status}</p>
              <p>Budget: {trend?.budget}</p>
              <p>Release Date: {trend?.release_date}</p>
              <p>Description: {trend?.overview}</p>
            </section>
          </section>
        </main>
      )}
    </>
  );
};

export default TrendDetail;
