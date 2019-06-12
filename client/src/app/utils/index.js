import moment from "moment";

export const toTitleCase = string => {
  return string
    .toLowerCase()
    .split(" ")
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
};

export const commaFormatNumbers = number => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const dateFormatLongMonthDay = date => {
  return moment(date).format("MMMM DD");
};

export const dateFormatShortDayMonth = date => {
  return moment(date).format("MMM DD");
};

export const dateFormatShortMonthDayYear = date => {
  return moment(date).format("MMM DD YYYY");
};

export const dateFormatShortDayMonthYearTime = date => {
  return moment(date).format("DD MMM YYYY HH:SS A");
};

export const pluraliseString = (string, data) => {
  return data.length > 1 ? string + "s" : string;
};
