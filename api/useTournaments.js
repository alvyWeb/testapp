import { formatDate } from "@/utils/formatDate";
import { parseDateRange } from "@/utils/parseDateRange";
import moment from "moment";
import { useEffect, useState } from "react";
import Api from "./api";

const useTournaments = () => {
  const [tournaments, setTournaments] = useState([]);
  const [liveTournaments, setLiveTournaments] = useState([]);
  const [upcomingTournaments, setUpcomingTournaments] = useState([]);
  const [completedTournaments, setCompletedTournaments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [tournamentYear, setTournamentYear] = useState();
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await Api.get("/tournaments");

      if (response.status === 200) {
        const resData = response?.data?.scores?.tournament;
        const today = moment(new Date()).startOf("day");

        const filterLive = resData?.filter((tour) => {
          const startDate = formatDate(tour["@date_start"]);
          const endDate = formatDate(tour["@date_end"]);
          const startMoment = moment(startDate).startOf("day");
          const endMoment = moment(endDate).endOf("day");

          return (
            startMoment.isSameOrBefore(today) && endMoment.isSameOrAfter(today)
          );
        });

        const filterUpcoming = resData?.filter((tour) => {
          const startDate = formatDate(tour["@date_start"]);
          const startMoment = moment(startDate).startOf("day");

          return startMoment.isAfter(today);
        });

        const filterCompleted = resData?.filter((tour) => {
          const endDate = formatDate(tour["@date_end"]);
          const endMoment = moment(endDate).endOf("day");

          return endMoment.isBefore(today);
        });

        setTournaments(resData);
        setCompletedTournaments(filterCompleted);
        setUpcomingTournaments(filterUpcoming);
        setLiveTournaments(filterLive);
      }
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchDataUltimate = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await Api.get("/tournaments");

      if (response.status === 200) {
        const resData = response?.data?.Tournaments;
        const year = response?.data?.Year;
        const today = moment(new Date()).startOf("day");

        const filterLive = resData?.filter((tour) => {
          const tourDuration = parseDateRange(tour?.FormattedDate);
          const startMoment = moment(tourDuration?.startDate).startOf("day");
          const endMoment = moment(tourDuration?.endDate).endOf("day");

          return (
            startMoment.isSameOrBefore(today) && endMoment.isSameOrAfter(today)
          );
        });

        const filterUpcoming = resData?.filter((tour) => {
          const tourDuration = parseDateRange(tour?.FormattedDate);
          const startMoment = moment(tourDuration?.startDate).startOf("day");

          return startMoment.isAfter(today);
        });

        const filterCompleted = resData?.filter((tour) => {
          const tourDuration = parseDateRange(tour?.FormattedDate);
          const endMoment = moment(tourDuration?.endDate).endOf("day");

          return endMoment.isBefore(today);
        });

        setTournaments(resData);
        setCompletedTournaments(filterCompleted);
        setUpcomingTournaments(filterUpcoming);
        setLiveTournaments(filterLive);
        setTournamentYear(year);
      }
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    tournaments,
    upcomingTournaments,
    liveTournaments,
    completedTournaments,
    tournamentYear,
    isLoading,
    error,
  };
};

export default useTournaments;
