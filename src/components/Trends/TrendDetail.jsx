import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { setBgByMedia } from "../../utils/Utilities";
import Header from "../Header/Header.jsx";

const TrendDetail = () => {
  const [trend, setTrends] = useState();
  const API_KEY = import.meta.env.VITE_API_KEY;
  const { id, media_type } = useParams();
  let baseUrl = "";

  useEffect(() => {
    media_type === "tv"
      ? (baseUrl = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`)
      : (baseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
    const fetchData = async () => {
      const response = await fetch(baseUrl);
      const data = await response.json();
      setTrends(data);
      setBgByMedia(media_type, data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Header />
      {trend?.name ? (
        <main className="w-full h-96 bg-gradient-to-b from-[#ffffff8f] to-[#191B2A]">
          <section className="w-full h-full relative">
            <img
              src={`http://image.tmdb.org/t/p/w500/${trend?.poster_path}`}
              className="rounded-sm object-cover w-full h-full mix-blend-overlay blur-[0.5px]"
            />
            <h2 className="absolute bottom-4 left-2 text-2xl text-text font-bold tracking-wider">
              {trend?.title}
            </h2>
          </section>
          <section className="text-text px-4 py-3">
            <section className="flex gap-4 mb-1">
              <p className="text-text font-semibold ">{trend?.release_date}</p>
              <p className="text-text font-semibold ">
                {(trend?.vote_average * 10).toFixed(2)}
              </p>
            </section>

            <section className="w-full flex gap-4 mb-1">
              {trend?.genres?.map((e) => (
                <p className="text-text" key={e.id}>
                  {e.name}
                </p>
              ))}
            </section>

            <section className="">
              <p className="text-text font-bold mb-1">{trend?.tagline}</p>
              <p className="text-text">{trend?.overview}</p>
            </section>
          </section>
        </main>
      ) : (
        <main className="w-full h-96 bg-gradient-to-b from-[#ffffff8f] to-[#191B2A]">
          <section className="w-full h-full relative">
            <img
              src={`http://image.tmdb.org/t/p/w500/${trend?.poster_path}`}
              className="rounded-sm object-cover w-full h-full mix-blend-overlay blur-[0.5px]"
            />
            <h2 className="absolute bottom-4 left-2 text-2xl text-text font-bold tracking-wider">
              {trend?.name}
            </h2>
          </section>
          <section className="text-text px-4 py-3">
            <section className="flex gap-4 mb-1">
              <p className="text-text font-semibold ">
                {trend?.first_air_date}
              </p>
              <p className="text-text font-semibold ">
                {(trend?.vote_average * 10).toFixed(2)}
              </p>
            </section>

            <section className="w-full flex items-center gap-4 mb-1">
              {trend?.genres?.map((e) => (
                <p className="text-text" key={e.id}>
                  {e.name}
                </p>
              ))}
            </section>

            <section className="">
              <p className="text-text font-bold mb-1">{trend?.tagline}</p>
              <p className="text-text">{trend?.overview}</p>
            </section>
          </section>
        </main>
      )}
    </>
  );
};

export default TrendDetail;
