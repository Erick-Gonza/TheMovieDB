import { setInitColorTitle } from "../../utils/Utilities";
import Header from "../../components/Header/Header.jsx";
import FavContainerList from "../../components/Fav/FavContainerList";

const Fav = () => {
  setInitColorTitle("black", "Trends");

  return (
    <>
      <Header />
      <main className="flex flex-grow flex-col px-4 py-3 overflow-x-hidden">
        <section className="text-white">
          <h2 className="text-3xl font-bold shadow-md text-center">
            Favorites
          </h2>
          <section className="flex flex-col justify-center w-full px-2 py-2 lg:flex-row lg:justify-around lg:flex-wrap lg:gap-4">
            <FavContainerList />
          </section>
        </section>
      </main>
    </>
  );
};

export default Fav;
