import React from "react";
import "./app.css";
import { ThemeProvider } from "@material-ui/styles";
import mtsTheme from "./themes/mtsTheme";
import Home from "./home";

const App = () => {
  return (
    <div>
      <ThemeProvider theme={mtsTheme}>
        <Home />
      </ThemeProvider>
    </div>
  );
};

export default App;
