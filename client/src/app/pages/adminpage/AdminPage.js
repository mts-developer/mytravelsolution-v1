import React from "react";
import "./adminpage.css";
import DataTable from "./DataTable/";
import AddEditSection from "./AddEditSection/";
import LabelLinkButton from "../../components/Buttons/LabelLinkButton";
import logos from "../../assets/images/logos";

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
      <div className="adminpage padding-20">
        <div className="row space-between">
          <LabelLinkButton label="&#8592; Back to My Travel Solution" url="/" />
          <img
            className="logo--medium"
            src={logos.mts_logo_full}
            alt="MTS Logo"
          />
        </div>
        <h1 className="font--title primary-color bold center margin-none padding-20">
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
