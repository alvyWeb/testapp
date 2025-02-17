import { useEffect, useState } from "react";
import Api from "./api";

const useTournamentDraw = (arg) => {
  const [draw, setDraw] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      if (arg?.id) {
        setIsLoading(true);
        setError(null);
        const response = await Api.get(`tournaments/draw/${arg?.id}`);

        if (response.status === 200) {
          const resData = response?.data?.draw?.tournament;
          const isStageArray = Array.isArray(resData?.stage);
          const data = isStageArray ? resData?.stage[1] : resData?.stage;
          setDraw(data);
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
    draw,
    isLoading,
    error,
  };
};

export default useTournamentDraw;
