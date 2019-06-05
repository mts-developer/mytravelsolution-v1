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
