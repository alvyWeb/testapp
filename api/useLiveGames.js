import { useEffect, useState } from "react";
import Api from "./api";

const useLiveGames = (arg) => {
  const [liveGames, setLiveGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setError(null);
      const response = await Api.get("/tournaments/live");

      if (response.status === 200) {
        const resData = response?.data?.scores?.category;
        const liveGames = resData?.find((d) => d["@id"] === arg?.id);

        setLiveGames(liveGames);
      }
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const fetchDataInterval = setInterval(() => {
      fetchData();
    }, 30000);

    return () => clearInterval(fetchDataInterval);
  }, []);

  return {
    liveGames,
    isLoading,
    error,
  };
};

export default useLiveGames;
