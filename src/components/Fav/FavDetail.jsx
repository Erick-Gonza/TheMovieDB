import { useContext } from "react";
import { setInitColorTitle } from "../../utils/Utilities";
import Header from "../Header/Header.jsx";
import { favContext } from "../../context/FavContext";
import { useParams } from "react-router-dom";

const FavDetail = () => {
  const { id } = useParams();
  const { fav } = useContext(favContext);

  return (
    <>
      <Header />
      <main className="w-full h-screen dark:bg-white">
        {fav.map((e) => {
          if (e.id == id) {
            if (e.title) {
              setInitColorTitle("#191B2A", `${e?.title}`);
            } else {
              setInitColorTitle("#191B2A", `${e?.name}`);
            }
            return (
              <>
                <section
                  className="w-full h-96 lg:h-[38rem] bg-gradient-to-b from-[#ffffff8f] to-[#191B2A] relative dark:from-[#0808088f] dark:to-[#080808d5]"
                  key={e?.id}
                >
                  <img
                    src={`http://image.tmdb.org/t/p/w500/${e?.poster_path}`}
                    className="rounded-sm object-cover lg:object-contain w-full h-full mix-blend-overlay blur-[0.5px]"
                  />
                  <h2 className="absolute bottom-4 left-2 lg:left-96 text-2xl text-text font-bold tracking-wider dark:text-black">
                    {e?.title}
                  </h2>
                </section>
                <section className="text-text px-4 py-3 lg:px-96 lg:py-6 flex flex-col justify-center">
                  <section className="flex gap-4 mb-1 w-full">
                    <p className="text-text font-semibold dark:text-black">
                      {e?.release_date}
                    </p>
                    <p className="text-text font-semibold dark:text-black">
                      {(e?.vote_average * 10).toFixed(2)}
                    </p>
                  </section>

                  <section className="flex gap-4 mb-1 w-full">
                    {e?.genres?.map((e) => (
                      <p className="text-text dark:text-black" key={e.id}>
                        {e.name}
                      </p>
                    ))}
                  </section>

                  <section className="mb-1 w-full">
                    <p className="text-text font-bold mb-1 dark:text-black">
                      {e?.tagline}
                    </p>
                    <p className="text-text dark:text-black">{e?.overview}</p>
                  </section>
                </section>
              </>
            );
          }
        })}
      </main>
    </>
  );
};

export default FavDetail;
