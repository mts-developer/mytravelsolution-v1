import React from "react";
import "./cruisespage.css";
import PageWrapper from "../../components/PageWrapper";
import backgrounds from "../../assets/images/bg";

const CruisesPage = () => {
  return (
    <PageWrapper
      title="Cruises & Cruise Packages"
      description="Get onboard your next cruise holiday to your perfect getaway destinations"
      backgroundImage={backgrounds.cruises_bg}
    >
      <div className="responsive-width">
        <h1>Cruises</h1>
      </div>
    </PageWrapper>
  );
};

export default CruisesPage;
