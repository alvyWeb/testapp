import moment from "moment";

export function convertTime(timeString) {
  const dates = timeString.split(" - ");

  const startDate = moment(dates[0], "D MMMM, YYYY");
  const endDate = moment(dates[1], "D MMMM, YYYY");

  return {
    startTime: startDate.format("YYYY-MM-DD"),
    endTime: endDate.format("YYYY-MM-DD"),
  };
}
