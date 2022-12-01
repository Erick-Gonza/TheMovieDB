import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/button";
import { userContext } from "../../context/UserContext";
import { setInitColorTitle } from "../../utils/Utilities";
import HeaderPage from "../../components/Header/HeaderPage";
import Carousel from "../../components/Carousel/Carousel";

const Welcome = () => {
  setInitColorTitle("black", "Welcome");
  const { user } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    let redirectTimer = setTimeout(() => {
      if (user?.isLogin) {
        navigate("/home");
      }
    }, 1500);
  }, []);

  const hanldeSignup = () => {
    navigate("/signup");
  };

  const hanldeLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <HeaderPage />
      <main className="h-auto flex-grow relative">
        <Carousel
          className="-z-10"
          url={
            "https://api.themoviedb.org/3/trending/all/day?api_key={API_KEY}"
          }
        />
        <section className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-8 z-10">
          <Button
            className={
              "bg-red px-4 py-3 border-black border-[1px] rounded-sm text-white text-xl font-semibold w-64 tracking-wider"
            }
            onClick={hanldeSignup}
            text={"Signup"}
          />

          <Button
            className={
              "bg-red px-4 py-3 border-black border-[1px] rounded-sm text-white text-xl font-semibold w-64 tracking-wider"
            }
            onClick={hanldeLogin}
            text={"Login"}
          />
        </section>
      </main>
    </>
  );
};

export default Welcome;
