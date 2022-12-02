import { setInitColorTitle } from "../../utils/Utilities";
import Header from "../../components/Header/Header.jsx";
import FavContainerList from "../../components/Fav/FavContainerList";

const Fav = () => {
  setInitColorTitle("#191B2A", "Trends");

  return (
    <>
      <Header />
      <main className="w-full h-full">
        <h2 className="text-text text-center text-3xl font-bold">Favorites</h2>
        <section className="flex flex-row flex-wrap w-full px-2 py-2">
          <FavContainerList />
        </section>
      </main>
    </>
  );
};

export default Fav;
