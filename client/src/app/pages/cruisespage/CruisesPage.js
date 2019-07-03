import React from "react";
import "./cruisespage.css";
import PageWrapper from "../../components/PageWrapper";
import Slider from "../../components/Slider";
import Carousel from "../../components/Carousel";
import CruiseCard from "../../components/CruiseCard";
import cruises from "../../components/Cruises";
import logos from "../../assets/images/logos";
import cruiseLineLogos from "../../assets/images/logos/cruise_lines";
import backgrounds from "../../assets/images/bg";

const CruisesPage = () => {
  const sliderLogos = Object.values(cruiseLineLogos);
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
        <Slider logos={sliderLogos} component="cruises" />
      </div>
      <div className="center column padding-20">
        <img className="logo--medium" src={logos.mts_logo} alt="MTS Logo" />
      </div>
      <div className="featuredflightspage-container margin-bottom-50">
        <Carousel>
          {cruises.map((cruise, i) => {
            return <CruiseCard key={i} cruise={cruise} />;
          })}
        </Carousel>
      </div>
    </PageWrapper>
  );
};

export default CruisesPage;
