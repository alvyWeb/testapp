import moment from "moment";

export function formatDateWithSlash(inputDate) {
  return moment(inputDate, "DD.MM.YYYY").format("DD/MM/YYYY");
}
