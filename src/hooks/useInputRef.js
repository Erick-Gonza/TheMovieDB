import { useRef } from "react";

const useInputRef = () => {
  const inputName = useRef();
  const inputLastName = useRef();
  const inputEmail = useRef();
  const inputPassword = useRef();
  const inputConfirmPassword = useRef();

  const cleanRef = () => {
    inputName.current.value = "";
    inputLastName.current.value = "";
    inputEmail.current.value = "";
    inputPassword.current.value = "";
    inputConfirmPassword.current.value = "";
  };

  return {
    inputName,
    inputLastName,
    inputEmail,
    inputPassword,
    inputConfirmPassword,
    cleanRef,
  };
};

export default useInputRef;
