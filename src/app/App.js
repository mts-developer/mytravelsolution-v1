import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";
import { ThemeProvider } from "@material-ui/styles";
import mtsTheme from "./themes/mtsTheme";
import Home from "./home";
import Dialog from "./components/Dialog";
import FeaturedFlightsPage from "./featuredflightspage";
import PageNotFound from "./pagenotfound";
import ScrollToTop from "./components/ScrollToTop";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openBookingEngine: false };
  }

  componentDidMount() {
    // this.setTimeout(5);
  }

  clickBookingEngine = e => {
    e.preventDefault();
    this.setState({
      openBookingEngine: !this.state.openBookingEngine
    });
  };

  toggleBookingEngine = () => {
    return (
      <Dialog
        action={this.clickBookingEngine}
        open={this.state.openBookingEngine}
      >
        <div className="center padding-20">/ Sabre Booking Engine /</div>
      </Dialog>
    );
  };

  render() {
    const toggleBookingEngine = this.toggleBookingEngine;
    const clickBookingEngine = this.clickBookingEngine;

    return (
      <Router>
        <ScrollToTop>
          <div>
            {toggleBookingEngine()}
            <ThemeProvider theme={mtsTheme}>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Home {...props} clickBookingEngine={clickBookingEngine} />
                  )}
                />
                <Route
                  path="/featured-flights"
                  render={props => (
                    <FeaturedFlightsPage
                      {...props}
                      clickBookingEngine={clickBookingEngine}
                    />
                  )}
                />
                <Route path="*" component={PageNotFound} />
              </Switch>
            </ThemeProvider>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
