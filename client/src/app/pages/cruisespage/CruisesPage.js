import React from "react";
import "./cruisespage.css";
import PageWrapper from "../../components/PageWrapper";
import Carousel from "../../components/Carousel";
import logos from "../../assets/images/logos";
import cruiselinerLogos from "../../assets/images/logos/cruiselines";
import backgrounds from "../../assets/images/bg";

const CruisesPage = () => {
  const carouselLogos = Object.values(cruiselinerLogos);
  return (
    <PageWrapper
      title="Cruises & Cruise Packages"
      description="Get onboard your next cruise holiday to your perfect getaway destinations"
      backgroundImage={backgrounds.cruises_bg}
    >
      <div className="padding-20">
        <h2 className="font--large font--center bold">
          Choose from My Travel Solution's preferred cruise partners
        </h2>
        <Carousel logos={carouselLogos} component="cruises" />
      </div>
      <div className="center column padding-20">
        <img className="logo--medium" src={logos.mts_logo} alt="MTS Logo" />
      </div>
      <div className="featuredflightspage-container center wrap margin-bottom-50">
        Cruises
      </div>
    </PageWrapper>
  );
};

export default CruisesPage;
