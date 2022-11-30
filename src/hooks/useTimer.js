import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useTimer = (data, to) => {
  const [time, setTime] = useState(null);
  const [url, setUrl] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setTime(data);
    setUrl(to);
    let redirectTimer = setTimeout(() => {
      navigate(url);
    }, time);
    return () => clearTimeout(redirectTimer);
  }, [time]);
  return { navigate };
};

export default useTimer;
