import { createMuiTheme } from "@material-ui/core/styles";

let primaryColor = "#5800ff";
// let primaryColorLight = "#00cbff";
// let secondaryColor = "#b914cc";
// let secondaryColorLight = "#ff00f6";
let darkGrey = "#444444";
let lightGrey = "#777777";

const mtsTheme = createMuiTheme({
  typography: {
    fontFamily: ["Fira Sans Regular"].join(",")
  },
  palette: {
    primary: {
      main: primaryColor,
      dark: darkGrey,
      contrastText: lightGrey
    }
  }
});

export default mtsTheme;
