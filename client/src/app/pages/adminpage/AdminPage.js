import React from "react";
import "./adminpage.css";
import DataTable from "./DataTable/";
import AddEditSection from "./AddEditSection/";

class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flights: [], selected: 0 };
  }

  componentDidMount() {
    this.fetchFlights();
  }

  fetchFlights = () => {
    fetch("http://localhost:7000/flights")
      .then(res => res.json())
      .then(flights => this.setState({ flights: flights }))
      .catch(err => console.log(err));
  };

  addFlight = flight => {
    this.setState(prevState => ({
      flights: [...prevState.flights, flight]
    }));
  };

  render() {
    const flights = this.state.flights;
    const addFlight = this.addFlight;

    return (
      <div className="adminpage center column">
        <h1 className="font--title primary-color bold center">
          Administration Dashboard
        </h1>
        <div className="adminpage-container column padding-20">
          <DataTable data={flights} />
          <AddEditSection data={flights} addFlight={addFlight} />
        </div>
      </div>
    );
  }
}

export default AdminPage;
