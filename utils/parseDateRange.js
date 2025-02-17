import moment from "moment";

export function parseDateRange(range) {
  let [start, end] = range.split(" - ");

  const startSplit = start.split(" ");
  const endSplit = end.split(" ");

  const startDay = startSplit[0];
  const startMonth = startSplit[1] ?? endSplit[1];
  const startYear = startSplit[2] ?? endSplit[2];
  const startDateFormat = `${startDay} ${startMonth} ${startYear}`;

  const startDate = moment(startDateFormat, "D MMMM, YYYY");
  const endDate = moment(end, "D MMMM, YYYY");

  return {
    startDate: startDate.format("YYYY-MM-DD"),
    endDate: endDate.format("YYYY-MM-DD"),
  };
}
