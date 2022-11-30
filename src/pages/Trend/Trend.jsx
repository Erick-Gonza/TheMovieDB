import { setInitColorTitle } from "../../utils/Utilities";
import Header from "../../components/Header/Header.jsx";
import TrendContainerList from "../../components/Trends/TrendContainerList";

const Trend = () => {
  setInitColorTitle("black", "Trends");

  return (
    <>
      <Header />
      <main className="flex flex-grow flex-col px-4 py-3 overflow-x-hidden">
        <section className="text-white">
          <h2 className="text-4xl font-bold shadow-md text-center">
            Trends today
          </h2>
          <section className="flex flex-col justify-center w-full px-2 py-2 lg:flex-row lg:justify-around lg:flex-wrap lg:gap-4">
            <TrendContainerList isPreview={false} />
          </section>
        </section>
      </main>
    </>
  );
};

export default Trend;
