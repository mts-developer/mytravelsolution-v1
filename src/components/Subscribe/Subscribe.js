import React from "react";
import "./subscribe.css";
import Input from "@material-ui/core/TextField";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Fira Sans Regular"].join(",")
  },
  palette: {
    primary: {
      main: "#777777",
      dark: "#777777",
      contrastText: "#777777"
    }
  }
});

class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="subscribe center column">
          <h1 className="font--large primary-color">Never miss a deal</h1>
          <p className="font--medium dark-grey">
            Subscribe to our mailing list!
          </p>
          <div className="padding-20">
            <Input
              className="textfield-width"
              label="Email address"
              inputProps={{
                "aria-label": "Email"
              }}
            />
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default Subscribe;
