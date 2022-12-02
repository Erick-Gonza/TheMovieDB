import { useNavigate } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import { setInitColorTitle } from "../../utils/Utilities";
import { isMobile } from "react-device-detect";
import HeaderPage from "../../components/Header/HeaderPage";

const SignupComplete = () => {
  const navigate = useNavigate();
  setInitColorTitle("#191B2A", "Complete");
  const handleComplete = () => {
    navigate("/login");
  };

  return (
    <>
      <HeaderPage />
      <main className="flex flex-grow flex-col px-4 py-2 items-center place-content-center -mt-28 lg:-mt-36">
        <h2 className="text-text font-bold text-4xl text-center mb-4">
          Account Created
        </h2>
        {isMobile ? (
          <AiFillCheckCircle className="text-secondary" size={200} />
        ) : (
          <AiFillCheckCircle className="text-secondary" size={150} />
        )}

        <button
          onClick={handleComplete}
          type="submit"
          className="text-text bg-secondary border-text border-[1.2px] font-medium rounded-sm text-lg  w-1/2 px-5 py-3 text-center mt-4 mb-4 lg:text-2xl lg:w-1/6 "
        >
          Continue
        </button>
      </main>
    </>
  );
};

export default SignupComplete;
