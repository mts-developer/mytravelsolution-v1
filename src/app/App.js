import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";
import { ThemeProvider } from "@material-ui/styles";
import mtsTheme from "./themes/mtsTheme";
import Home from "./home";
import FeaturedFlightsPage from "./featuredflightspage";
import PageNotFound from "./pagenotfound";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <div>
          <ThemeProvider theme={mtsTheme}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route
                path="/featured-flights/"
                component={FeaturedFlightsPage}
              />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </ThemeProvider>
        </div>
      </ScrollToTop>
    </Router>
  );
};

export default App;
