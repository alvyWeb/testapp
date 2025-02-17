import moment from "moment";

export const formatDate = (date) => {
  const parsedDate = moment(date, "DD.MM.YYYY");

  return parsedDate.format("YYYY-MM-DD");
};

export const formatDateWithDot = (date) => {
  const parsedDate = moment(date, "DD.MM.YYYY");

  return parsedDate.format("DD.MM.YYYY");
};
