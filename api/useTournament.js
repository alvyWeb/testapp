import { useEffect, useState } from "react";
import Api from "./api";

const useTournament = (arg) => {
  const [tournament, setTournament] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      if (arg?.id) {
        setIsLoading(true);
        setError(null);
        const response = await Api.get(`/tournaments/${arg?.id}`);

        if (response.status === 200) {
          const resData = response?.data?.results?.tournament;
          setTournament(resData);
        }
      }
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchDataUltimate = async () => {
    try {
      if (arg?.id) {
        setIsLoading(true);
        setError(null);
        const response = await Api.get(
          `/tournaments/details/?id=${arg?.id}&year=${arg?.year}`
        );

        if (response.status === 200) {
          const resData = response?.data?.data;
          setTournament(resData);
        }
      }
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [arg?.id]);

  return {
    tournament,
    isLoading,
    error,
  };
};

export default useTournament;
