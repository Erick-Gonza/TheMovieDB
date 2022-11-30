import { useContext } from "react";
import { Link } from "react-router-dom";
import { favContext } from "../../context/FavContext";

const TrendContainerList = () => {
  const { fav } = useContext(favContext);

  return (
    <>
      {fav?.map((fav) => {
        return (
          <Link
            to={`/favs/${fav.id}`}
            key={fav?.id}
            className="w-full lg:w-1/5 flex flex-col justify-center bg-gray-800 px-3 py-4 rounded-xl m-2"
          >
            <section>
              <img
                src={`http://image.tmdb.org/t/p/w500/${fav.poster_path}`}
                alt=""
                className="rounded-lg"
              />
              <h2 className="text-center">{fav?.title}</h2>
              <h2 className="text-center">{fav?.name}</h2>
            </section>
          </Link>
        );
      })}
    </>
  );
};

export default TrendContainerList;
