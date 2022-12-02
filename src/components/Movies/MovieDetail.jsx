import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { setInitColorTitle } from "../../utils/Utilities";
import Header from "../Header/Header.jsx";

const MovieDetail = () => {
  const { id } = useParams();
  const baseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key={API_KEY}&language=en-US`;
  const { data } = useFetch(baseUrl);
  setInitColorTitle("#191B2A", `${data?.title}`);

  return (
    <>
      <Header />
      <main className="w-full h-screen dark:bg-white">
        <section className="w-full h-96 lg:h-[38rem] bg-gradient-to-b from-[#ffffff8f] to-[#191B2A] relative dark:from-[#0808088f] dark:to-[#080808d5]">
          <img
            src={`http://image.tmdb.org/t/p/w500/${data?.poster_path}`}
            className="rounded-sm object-cover lg:object-contain w-full h-full mix-blend-overlay blur-[0.5px]"
          />
          <h2 className="absolute bottom-4 left-2 lg:left-96 text-2xl text-text font-bold tracking-wider dark:text-black">
            {data?.title}
          </h2>
        </section>
        <section className="text-text px-4 py-3 lg:px-96 lg:py-6 flex flex-col justify-center">
          <section className="flex gap-4 mb-1 w-full">
            <p className="text-text font-semibold dark:text-black">
              {data?.release_date}
            </p>
            <p className="text-text font-semibold dark:text-black">
              {(data?.vote_average * 10).toFixed(2)}
            </p>
          </section>

          <section className="flex gap-4 mb-1 w-full">
            {data?.genres?.map((e) => (
              <p className="text-text dark:text-black" key={e.id}>
                {e.name}
              </p>
            ))}
          </section>

          <section className="mb-1 w-full">
            <p className="text-text font-bold mb-1 dark:text-black">
              {data?.tagline}
            </p>
            <p className="text-text dark:text-black">{data?.overview}</p>
          </section>
        </section>
      </main>
    </>
  );
};

export default MovieDetail;
