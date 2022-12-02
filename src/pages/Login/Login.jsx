import { useContext } from "react";
import HeaderPage from "../../components/Header/HeaderPage";
import { userContext } from "../../context/UserContext";
import useInputRef from "../../hooks/useInputRef";
import useNavigation from "../../hooks/useNavigation";
import { setInitColorTitle } from "../../utils/Utilities";

const Login = () => {
  const { user } = useContext(userContext);
  const handleSignup = useNavigation("/signup");
  const handleHome = useNavigation("/home");
  setInitColorTitle("#191B2A", "Login");
  const { inputEmail, inputPassword } = useInputRef();
  const data = { ...user };
  const userStorage = JSON.parse(sessionStorage.getItem("user"));

  const handleSignupR = () => {
    handleSignup.handleNavigate();
  };

  const validateAccount = () => {
    if (
      data.email === inputEmail.current.value &&
      data.password === inputPassword.current.value
    ) {
      userStorage.isLogin = true;
      sessionStorage.setItem("user", JSON.stringify(userStorage));
      handleHome.handleNavigate();
    } else {
      userStorage.isLogin = false;
      alert("Wrong credentials");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateAccount();
  };

  return (
    <>
      <HeaderPage />
      <main className="w-full h-full flex flex-col px-4 py-2 lg:place-content-center lg:justify-center lg:items-center lg:-mt-28">
        <form className="px-4 py-4 lg:w-1/4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-lg font-medium text-text"
            >
              Email:
            </label>
            <input
              ref={inputEmail}
              type="email"
              id="email"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-md block w-full px-3 py-4"
              placeholder="example@email.com"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-lg font-medium text-text"
            >
              Password:
            </label>
            <input
              ref={inputPassword}
              type="password"
              id="password"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-md block w-full px-3 py-4"
              placeholder="Write your password here"
              required
            />
          </div>

          <button
            type="submit"
            className="text-text bg-secondary border-text border-[1.2px] font-medium rounded-sm text-xl w-full px-5 py-3 text-center mt-4"
          >
            Login
          </button>
        </form>
        <section className="px-4 py-4 lg:w-1/4 mt-4">
          <p className="text-white inline mr-5 font-bold">
            Dont have an account?
          </p>
          <button
            className="text-secondary font-bold text-lg"
            onClick={handleSignupR}
          >
            Signup
          </button>
        </section>
      </main>
    </>
  );
};

export default Login;
