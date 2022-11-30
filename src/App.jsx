import { Outlet } from "react-router-dom";
import FavContext from "./context/FavContext";
import ThemeContext from "./context/ThemeContext";
import UserContext from "./context/UserContext";

function App() {
  return (
    <UserContext>
      <ThemeContext>
        <FavContext>
          <Outlet />
        </FavContext>
      </ThemeContext>
    </UserContext>
  );
}

export default App;
