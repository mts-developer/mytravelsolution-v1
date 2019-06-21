import React from "react";
import "./rentalspage.css";
import PageWrapper from "../../components/PageWrapper";
import backgrounds from "../../assets/images/bg";
import logos from "../../assets/images/logos";

const RentalsPage = () => {
  return (
    <PageWrapper
      title="Car Hire"
      description="Explore a fleet of vehicles and pick up a great deal for your next road trip"
      backgroundImage={backgrounds.rentals_bg}
    >
      <div className="rentalspage responsive-width padding-20">
        <h1 className="font--header primary-color bold margin-none">
          Search, Compare and Save with Driveaway
        </h1>
        <h2 className="font--large bold">
          Over 8,000 locations throughout 130 countries
        </h2>
        <div className="wrap">
          <img
            className="logo--large padding-20"
            src={logos.driveaway_logo}
            alt="Driveaway Logo"
          />
        </div>
        <p className="padding-y-20">
          Driveaway offers domestic and international car hire, European Leasing
          and motorhomes worldwide, so you can discover the difference with
          DriveAway.
        </p>
      </div>
    </PageWrapper>
  );
};

export default RentalsPage;
