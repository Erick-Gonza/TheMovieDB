import { setInitColorTitle } from "../../utils/Utilities";
import Header from "../../components/Header/Header.jsx";
import MoviesContainerList from "../../components/Movies/MoviesContainerList";

const Movies = () => {
  setInitColorTitle("#191B2A", "Movies");
  return (
    <>
      <Header />
      <main className="w-full h-auto flex flex-col flex-grow dark:bg-white">
        <h2 className="text-text text-center text-3xl font-bold dark:text-black">
          Latest Movies
        </h2>
        <section className="flex flex-row flex-wrap w-full px-2 py-2">
          <MoviesContainerList isPreview={false} />
        </section>
      </main>
    </>
  );
};

export default Movies;
