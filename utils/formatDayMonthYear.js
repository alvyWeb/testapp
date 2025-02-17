export function formatDayMonthYear(date) {
  let day = date.getDate().toString().padStart(2, "0");
  let month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is 0-based
  let year = date.getFullYear();
  return `${day}.${month}.${year}`;
}
