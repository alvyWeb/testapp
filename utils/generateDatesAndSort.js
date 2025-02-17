import moment from "moment";

export function generateDatesAndSort(games) {
  const allDates = [];

  games?.forEach((game) => {
    if (Array.isArray(game?.match)) {
      game.match.forEach((d) => allDates.push(d["@date"]));
    } else if (game?.match) {
      allDates.push(game.match["@date"]);
    }
  });

  const uniqueDates = [...new Set(allDates)];
  const momentDates = uniqueDates.map((date) => moment(date, "DD.MM.YYYY"));
  momentDates.sort((a, b) => a - b);
  const sortedDates = momentDates.map((date) => date.format("DD.MM.YYYY"));

  return sortedDates;
}
