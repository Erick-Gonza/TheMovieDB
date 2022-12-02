import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Loading from "../components/Loading/Loading";
import HomePage from "../pages/Home/HomePage";
import Login from "../pages/Login/Login";
import MovieDetail from "../components/Movies/MovieDetail";
import Movies from "../pages/Movies/Movies";
import Signup from "../pages/Signup/Signup";
import SignupComplete from "../pages/Signup/SignupComplete";
import Welcome from "../pages/Welcome/Welcome";
import Series from "../pages/Series/Series";
import SerieDetail from "../components/Series/SerieDetail";
import Trend from "../pages/Trend/Trend";
import TrendDetail from "../components/Trends/TrendDetail";
import Fav from "../pages/Fav/Fav";
import FavDetail from "../components/Fav/FavDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Loading />,
      },
      {
        path: "/welcome",
        element: <Welcome />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/complete",
        element: <SignupComplete />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movies/:id",
        element: <MovieDetail />,
      },
      {
        path: "/series",
        element: <Series />,
      },
      {
        path: "/series/:id",
        element: <SerieDetail />,
      },
      {
        path: "/trends",
        element: <Trend />,
      },
      {
        path: "/trends/:media_type/:id",
        element: <TrendDetail />,
      },
      {
        path: "/favs",
        element: <Fav />,
      },
      {
        path: "/favs/:id",
        element: <FavDetail />,
      },
    ],
  },
]);

export default router;
