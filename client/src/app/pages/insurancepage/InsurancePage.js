import React from "react";
import "./insurancepage.css";
import PageWrapper from "../../components/PageWrapper";
import ServiceEnquiry from "../../components/ServiceEnquiry";
import backgrounds from "../../assets/images/bg";

const InsurancePage = () => {
  return (
    <PageWrapper
      title="Travel Insurance"
      description="Ensure peace of mind on your journey and get a quote from our travel insurance providers"
      backgroundImage={backgrounds.insurance_bg}
    >
      <ServiceEnquiry
        contactNumber="03 9314 6957"
        service="Travel Insurance"
      />
    </PageWrapper>
  );
};

export default InsurancePage;
