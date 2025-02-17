import moment from "moment";
import { formatDate } from "./formatDate";

export const checkLiveTournament = (date) => {
  const today = new Date();
  const formatToday = formatDate(today);
  const formatDay = formatDate(date);
  const isLive = formatDay > formatToday;

  return isLive;
};

export const checkTournamentStatus = (date) => {
  let status;
  const currentDate = moment();
  const inputDate = moment(date, "DD.MM.YYYY");
  const diffDay = currentDate.diff(inputDate, "days");

  if (diffDay === 0) {
    status = "live";
  } else if (diffDay === 1) {
    status = `d-1`;
  } else {
    status = "normal";
  }

  return status;
};
