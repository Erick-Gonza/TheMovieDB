import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
const useNavigation = (url) => {
  const [path, setPath] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setPath(url);
  }, [url]);

  const handleNavigate = () => {
    navigate(path);
  };
  return { path, handleNavigate };
};

export default useNavigation;
