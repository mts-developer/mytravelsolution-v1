import React from "react";
import "./pagenotfound.css";
import { Link } from "react-router-dom";
import logos from "../assets/images/logos";

const PageNotFound = () => {
  return (
    <div className="pagenotfound center column">
      <img
        className="logo--large padding-50"
        src={logos.mts_logo}
        alt="MTS Logo"
      />
      <h1 className="font--header white bold margin-none">Error 404</h1>
      <h2 className="font--large white bold middle">Page Not Found</h2>
      <Link className="white padding-50" to={"/"}>
        Return to MyTravelSolution
      </Link>
    </div>
  );
};

export default PageNotFound;
