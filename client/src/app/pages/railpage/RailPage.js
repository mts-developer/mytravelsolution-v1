import React from "react";
import "./railpage.css";
import PageWrapper from "../../components/PageWrapper";
import ServiceEnquiry from "../../components/ServiceEnquiry";
import backgrounds from "../../assets/images/bg";

const RailPage = () => {
  return (
    <PageWrapper
      title="Rail Tickets"
      description="Book your rail passes and tickets for worldwide transit networks."
      backgroundImage={backgrounds.rail_bg}
    >
      <ServiceEnquiry contactNumber="03 9314 6957" service="rail passes" />
    </PageWrapper>
  );
};

export default RailPage;
