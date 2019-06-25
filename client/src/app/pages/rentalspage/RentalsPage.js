import React from "react";
import "./rentalspage.css";
import PageWrapper from "../../components/PageWrapper";
import PartnerCard from "../../components/PartnerCard";
import LabelLinkButton from "../../components/Buttons/LabelLinkButton";
import logos from "../../assets/images/logos";
import rentalAffiliates from "../../assets/images/logos/rentals";
import backgrounds from "../../assets/images/bg";

const RentalsPage = () => {
  const rentalLogos = Object.values(rentalAffiliates);
  return (
    <PageWrapper
      title="Car Hire"
      description="Explore a fleet of vehicles and pick up a great deal for your next road trip"
      backgroundImage={backgrounds.rentals_bg}
    >
      <div className="rentalspage row wrap middle center">
        <div className="rentalspage-info padding-20">
          <h2 className="font--large primary-color bold margin-none">
            MY TRAVEL SOLUTION PARTNER
          </h2>
          <h1 className="font--header dark-grey bold margin-none">Driveaway</h1>
          <p className="padding-top-20">
            Driveaway works with over 60 car hire suppliers in over 130
            countries worldwide, so whether you are travelling for pleasure or
            business, DriveAway can provide the best solution to suit your
            needs.
          </p>
          <div className="padding-top-50">
            <LabelLinkButton
              url="https://www.driveaway.com.au/affiliates/1011316"
              external
              label="EXPLORE DRIVEAWAY →"
            />
          </div>
        </div>
        <div className="center padding-20">
          <PartnerCard
            color="var(--red)"
            logo={logos.driveaway_logo}
            url="https://www.driveaway.com.au/affiliates/1011316"
            description="Driveaway offers domestic and international car hire, European
          Leasing and motorhomes worldwide, so you can discover the difference
          with DriveAway."
          />
        </div>
      </div>
      <div className="rentalspage-logos row wrap center">
        {rentalLogos.map((logo, i) => (
          <img
            key={i}
            className="logo--x-small padding-20"
            src={logo}
            alt="Rental Logo"
          />
        ))}
      </div>
    </PageWrapper>
  );
};

export default RentalsPage;
