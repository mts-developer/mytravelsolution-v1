import React from "react";
import "./insurancepage.css";
import PageWrapper from "../../components/PageWrapper";
import backgrounds from "../../assets/images/bg";

const InsurancePage = () => {
  return (
    <PageWrapper
      title="Travel Insurance"
      description="Ensure peace of mind on your journey and get a quote from our travel insurance providers"
      backgroundImage={backgrounds.insurance_bg}
    >
      <div className="insurancepage responsive-width center">
        <h1>/ COVERMORE /</h1>
      </div>
    </PageWrapper>
  );
};

export default InsurancePage;
