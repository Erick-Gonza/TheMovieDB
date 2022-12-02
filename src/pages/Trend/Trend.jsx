import { setInitColorTitle } from "../../utils/Utilities";
import Header from "../../components/Header/Header.jsx";
import TrendContainerList from "../../components/Trends/TrendContainerList";

const Trend = () => {
  setInitColorTitle("#191B2A", "Trends");

  return (
    <>
      <Header />
      <main className="w-full h-auto flex flex-col flex-grow dark:bg-white">
        <h2 className="text-text text-center text-3xl font-bold dark:text-black">
          Trends today
        </h2>
        <section className="flex flex-row flex-wrap w-full px-2 py-2">
          <TrendContainerList isPreview={false} />
        </section>
      </main>
    </>
  );
};

export default Trend;
