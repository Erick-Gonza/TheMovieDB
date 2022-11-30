import { setInitColorTitle } from "../../utils/Utilities";
import Header from "../../components/Header/Header";
import MoviesContainerList from "../../components/Movies/MoviesContainerList";
import SeriesContainerList from "../../components/Series/SeriesContainerList";
import TrendContainerList from "../../components/Trends/TrendContainerList";

const HomePage = () => {
  setInitColorTitle("black", "Home");

  return (
    <>
      <Header />
      <main className="flex flex-grow items-center flex-col gap-2 px-2 py-1 lg:gap-4 lg:px-4 lg:py-3 overflow-x-hidden">
        <section className="text-white">
          <h2 className="text-4xl font-bold shadow-md text-center">
            Latest Movies
          </h2>
          <section className="flex flex-col justify-center w-full px-2 py-2 lg:flex-row lg:justify-around lg:flex-wrap lg:gap-4 mt-2">
            <MoviesContainerList isPreview={true} />
          </section>
        </section>

        <section className="text-white">
          <h2 className="text-4xl font-bold shadow-md text-center">
            Latest Series
          </h2>
          <section className="flex flex-col justify-center w-full px-2 py-2 lg:flex-row lg:justify-around lg:flex-wrap lg:gap-4 mt-2">
            <SeriesContainerList isPreview={true} />
          </section>
        </section>

        <section className="text-white">
          <h2 className="text-4xl font-bold shadow-md text-center">
            Trend today
          </h2>
          <section className="flex flex-col justify-center w-full px-2 py-2 lg:flex-row lg:justify-around lg:flex-wrap lg:gap-4 mt-2">
            <TrendContainerList isPreview={true} />
          </section>
        </section>
      </main>
    </>
  );
};

export default HomePage;
