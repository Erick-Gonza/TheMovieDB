import useTimer from "../../hooks/useTimer";
import Loader from "./Loader";

const Loading = () => {
  useTimer(2000, "/welcome");

  return (
    <main className="h-screen bg-red flex flex-col gap-10 justify-center items-center">
      <h2 className="text-white font-extrabold text-3xl">LOADING</h2>
      <Loader />
    </main>
  );
};

export default Loading;
