import React from "react";
import "./app.css";
import Home from "./home";
import Dialog from "../components/Dialog";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <Dialog />
        </div>
        <Home />
      </div>
    );
  }
}

export default App;
