import { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const baseUrl = url.replace("{API_KEY}", API_KEY);

  useEffect(() => {
    setLoading(true);
    axios
      .get(baseUrl)
      .then((response) => setData(response.data))
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
