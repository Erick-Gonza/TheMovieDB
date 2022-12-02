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
      <main className="w-full h-96 bg-gradient-to-b from-[#ffffff8f] to-[#191B2A]">
        {fav.map((e) => {
          if (e.id == id) {
            if (e.title) {
              setInitColorTitle("#191B2A", `${e?.title}`);
            } else {
              setInitColorTitle("#191B2A", `${e?.name}`);
            }
            return (
              <>
                <section className="w-full h-full relative">
                  <img
                    src={`http://image.tmdb.org/t/p/w500/${e?.poster_path}`}
                    className="rounded-sm object-cover w-full h-full mix-blend-overlay blur-[0.5px]"
                  />
                  <h2 className="absolute bottom-4 left-2 text-2xl text-text font-bold tracking-wider">
                    {e?.title}
                  </h2>
                </section>
                <section className="text-text px-4 py-3">
                  <section className="flex gap-4 mb-1">
                    <p className="text-text font-semibold ">
                      {e?.release_date}
                    </p>
                    <p className="text-text font-semibold ">
                      {(e?.vote_average * 10).toFixed(2)}
                    </p>
                  </section>

                  <section className="w-full flex gap-4 mb-1">
                    {e?.genres?.map((e) => (
                      <p className="text-text" key={e.id}>
                        {e.name}
                      </p>
                    ))}
                  </section>

                  <section className="">
                    <p className="text-text font-bold mb-1">{e?.tagline}</p>
                    <p className="text-text">{e?.overview}</p>
                  </section>
                </section>
              </>
            );
          }
        })}
      </main>
      {/* <main className="w-full h-96 bg-gradient-to-b from-[#ffffff8f] to-[#191B2A]">
        <section className="w-full h-full relative">
          <img
            src={`http://image.tmdb.org/t/p/w500/${data?.poster_path}`}
            className="rounded-sm object-cover w-full h-full mix-blend-overlay blur-[0.5px]"
          />
          <h2 className="absolute bottom-4 left-2 text-2xl text-text font-bold tracking-wider">
            {data?.title}
          </h2>
        </section>
        <section className="text-text px-4 py-3">
          <section className="flex gap-4 mb-1">
            <p className="text-text font-semibold ">{data?.release_date}</p>
            <p className="text-text font-semibold ">
              {(data?.vote_average * 10).toFixed(2)}
            </p>
          </section>

          <section className="w-full flex gap-4 mb-1">
            {data?.genres?.map((e) => (
              <p className="text-text" key={e.id}>
                {e.name}
              </p>
            ))}
          </section>

          <section className="">
            <p className="text-text font-bold mb-1">{data?.tagline}</p>
            <p className="text-text">{data?.overview}</p>
          </section>
        </section>
      </main> */}
    </>
  );
};

export default FavDetail;
