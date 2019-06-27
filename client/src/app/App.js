import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";
import { ThemeProvider } from "@material-ui/styles";
import mtsTheme from "./themes/mtsTheme";
import AdminPage from "./pages/adminpage";
import Home from "./home";
import Dialog from "./components/Dialog";
import FeaturedFlightsPage from "./pages/featuredflightspage";
import HotelsPage from "./pages/hotelspage";
import RailPage from "./pages/railpage";
import RentalsPage from "./pages/rentalspage";
import ToursPage from "./pages/tourspage";
import InsurancePage from "./pages/insurancepage";
import PageNotFound from "./pages/pagenotfound";
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
    const { toggleBookingEngine, clickBookingEngine } = this;

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
                <Route path="/admin" component={AdminPage} />
                <Route
                  path="/featured-flights"
                  render={props => (
                    <FeaturedFlightsPage
                      {...props}
                      clickBookingEngine={clickBookingEngine}
                    />
                  )}
                />
                <Route path="/hotels" component={HotelsPage} />
                <Route path="/rail" component={RailPage} />
                <Route path="/rentals" component={RentalsPage} />
                <Route path="/tours" component={ToursPage} />
                <Route path="/insurance" component={InsurancePage} />
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
