import React from "react";
import "./tourspage.css";
import PageWrapper from "../../components/PageWrapper";
import TourCard from "../../components/TourCard";
import backgrounds from "../../assets/images/bg";
import tours from "../../components/Tours";
import logos from "../../assets/images/logos";

const ToursPage = () => {
  return (
    <PageWrapper
      title="Tours & Packaged Deals"
      description="Save for your next trip and discover our menu of low-cost holiday packages"
      backgroundImage={backgrounds.tours_bg}
    >
      <div className="tourspage">
        <div className="center padding-20">
          <img className="logo--medium" src={logos.mts_logo} alt="MTS Logo" />
        </div>
        {tours.map((tour, i) => (
          <div key={i} className="padding-10">
            <TourCard tour={tour} />
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default ToursPage;
