import { createMuiTheme } from "@material-ui/core/styles";
import colors from "./colors";

const mtsTheme = createMuiTheme({
  typography: {
    fontFamily: ["Fira Sans Regular"].join(",")
  },
  palette: {
    primary: {
      main: colors.primaryColor,
      dark: colors.darkGrey,
      contrastText: colors.lightGrey
    }
  }
});

export default mtsTheme;
