import { useEffect, useState } from "react";
import Api from "./api";

const useRanks = (arg) => {
  const [ranks, setRanks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setError(null);
      const response = await Api.get(`/ranks/${arg?.rank}`);

      if (response.status === 200) {
        const resData = response?.data;
        setRanks(resData);
      }
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, [arg?.rank]);

  return {
    ranks,
    isLoading,
    error,
  };
};

export default useRanks;
