import React from "react";
import "./tourspage.css";
import PageWrapper from "../../components/PageWrapper";
import TourCard from "../../components/TourCard";
import backgrounds from "../../assets/images/bg";

const ToursPage = () => {
  return (
    <PageWrapper
      title="Tours & Packaged Deals"
      description="Save for your next trip and discover our menu of low-cost holiday packages"
      backgroundImage={backgrounds.tours_bg}
    >
      <div className="responsive-width padding-20">
        <TourCard />
      </div>
    </PageWrapper>
  );
};

export default ToursPage;
