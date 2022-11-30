import { useState, useEffect, createContext } from "react";

export const userContext = createContext();
const { Provider } = userContext;

export const UserContext = ({ children }) => {
  const [user, setUser] = useState({});

  const userIsntComplete = {
    name: "",
    lastName: "",
    email: "",
    password: "",
    isComplete: false,
    isLogin: false,
  };
  const setUserStatus = () => {
    setUser(JSON.parse(`${sessionStorage.getItem("user")}`));
  };

  useEffect(() => {
    if (!sessionStorage.getItem("user")) {
      sessionStorage.setItem("user", JSON.stringify(userIsntComplete));
    } else {
      setUserStatus();
    }
  }, []);

  const userSession = {
    user,
    setUserStatus,
  };

  return <Provider value={userSession}>{children}</Provider>;
};

export default UserContext;
