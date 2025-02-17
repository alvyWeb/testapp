import { checkTournamentStatus } from "@/utils/checkLiveTornament";
import axios from "axios";
import { useEffect, useState } from "react";
import Api from "./api";

const useMatchStats = (arg) => {
  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // const isLive = checkLiveTournament(arg?.date);
  const status = checkTournamentStatus(arg?.date);

  const fetchData = async () => {
    try {
      if (arg?.id && status) {
        setIsLoading(true);
        setError(null);

        let url = `/stats/${arg?.id}?status=${status}`;
        const response = await Api.get(url);

        if (response.status === 200) {
          const resData = response?.data;
          setStats(resData);
        }
      }
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchData1 = async () => {
    try {
      if (arg?.id && status) {
        setIsLoading(true);
        setError(null);
        let url;
        if (status === "normal") {
          url = `https://goalserve.com/getfeed/2ef8ed40e1c74a4a194c08dc48166993/tennis_scores/${arg?.id}-stats?json=1`;
        } else if (status === "live") {
          url = `https://goalserve.com/getfeed/2ef8ed40e1c74a4a194c08dc48166993/tennis_scores/home_gamestats?json=1`;
        } else {
          url = `https://goalserve.com/getfeed/2ef8ed40e1c74a4a194c08dc48166993/tennis_scores/${status}_gamestats?json=1`;
        }

        const response = await axios.get(url);

        if (response.status === 200) {
          const resFinishedData = response?.data?.results?.tournament?.week;
          const resLiveData = response?.data?.statistics?.category;
          const tournamentData = resLiveData?.find((t) => t["@id"] === arg?.id);
          const resData =
            status === "normal" ? resFinishedData : tournamentData?.match;

          setStats(resData);
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
  }, [arg?.id, status]);

  return {
    stats,
    isLoading,
    error,
  };
};

export default useMatchStats;
