import { useContext } from "react";
import { userContext } from "../../context/UserContext";
import useInputRef from "../../hooks/useInputRef";
import { setInitColorTitle } from "../../utils/Utilities";
import HeaderPage from "../../components/Header/HeaderPage";
import useNavigation from "../../hooks/useNavigation";

const Signup = () => {
  const { setUserStatus } = useContext(userContext);
  const useComplete = useNavigation("/complete");
  const useLogin = useNavigation("/login");
  setInitColorTitle("black", "Signup");
  const {
    inputName,
    inputLastName,
    inputEmail,
    inputPassword,
    inputConfirmPassword,
    cleanRef,
  } = useInputRef();

  const setDataUser = () => {
    if (inputPassword.current.value === inputConfirmPassword.current.value) {
      sessionStorage.setItem(
        "user",
        JSON.stringify({
          name: inputName.current.value,
          lastName: inputLastName.current.value,
          email: inputEmail.current.value,
          password: inputPassword.current.value,
          isComplete: true,
          isLogin: false,
        })
      );
      setUserStatus();
    } else {
      return alert("Please confirm the passwords matchs.");
    }
    cleanRef();

    let redirectTimer = setTimeout(() => {
      useComplete.handleNavigate();
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataUser();
  };

  const handleLogin = () => {
    useLogin.handleNavigate();
  };

  return (
    <>
      <HeaderPage />
      <main className="w-full h-full flex flex-col px-4 py-2 lg:place-content-center lg:justify-center lg:items-center">
        <form className="px-2 py-3 lg:w-1/4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 text-lg font-medium text-white"
            >
              Name:
            </label>
            <input
              ref={inputName}
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full px-3 py-4"
              placeholder="Insert your name here"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block mb-2 text-lg font-medium text-white"
            >
              Last Name:
            </label>
            <input
              ref={inputLastName}
              type="text"
              id="lastName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full px-3 py-4"
              placeholder="Insert your last name here"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-lg font-medium text-white"
            >
              Email:
            </label>
            <input
              ref={inputEmail}
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full px-3 py-4"
              placeholder="example@email.com"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-lg font-medium text-white"
            >
              Password:
            </label>
            <input
              ref={inputPassword}
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full px-3 py-4"
              placeholder="Write your password here"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="passwordValidation"
              className="block mb-2 text-lg font-medium text-white"
            >
              Confirm Password:
            </label>
            <input
              ref={inputConfirmPassword}
              type="password"
              id="passwordValidation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full px-3 py-4"
              placeholder="Rewrite your password here"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-red font-medium rounded-lg text-lg w-full px-5 py-3 text-center mt-4"
          >
            Submit
          </button>

          <section className="mt-4">
            <p className="text-white inline mr-5 font-bold">Have an account?</p>
            <button className="text-red font-bold" onClick={handleLogin}>
              Login
            </button>
          </section>
        </form>
      </main>
    </>
  );
};
export default Signup;
