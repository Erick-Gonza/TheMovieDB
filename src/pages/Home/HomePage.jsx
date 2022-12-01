import { setInitColorTitle } from "../../utils/Utilities";
import Header from "../../components/Header/Header";
import MoviesContainerList from "../../components/Movies/MoviesContainerList";
import SeriesContainerList from "../../components/Series/SeriesContainerList";
import TrendContainerList from "../../components/Trends/TrendContainerList";
import Carousel from "../../components/Carousel/Carousel";

const HomePage = () => {
  setInitColorTitle("#191B2A", "Home");

  return (
    <>
      <Header />
      <main className="px-4 py-3">
        <section className="w-full h-20">
          <Carousel
            className="-z-10"
            url={
              "https://api.themoviedb.org/3/trending/all/day?api_key={API_KEY}"
            }
            slides={3}
          />
        </section>

        <section className="px-2 py-3">
          <h2 className="text-left text-text text-2xl font-bold">
            Latest Movies
          </h2>
          <MoviesContainerList isPreview={true} />
        </section>

        <section className="px-2 py-3">
          <h2 className="text-left text-text text-2xl font-bold">
            Latest Series
          </h2>
          <SeriesContainerList isPreview={true} />
        </section>

        <section className="px-2 py-3">
          <h2 className="text-left text-text text-2xl font-bold">
            Trends today
          </h2>
          <TrendContainerList isPreview={true} />
        </section>
      </main>
    </>
  );
};

export default HomePage;
