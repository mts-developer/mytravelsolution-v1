import React from "react";
import "./hotelspage.css";
import PageWrapper from "../../components/PageWrapper";
import ServiceEnquiry from "../../components/ServiceEnquiry";
import backgrounds from "../../assets/images/bg";

class HotelsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PageWrapper
        title="Hotels & Accommodation"
        description="Book your stay from our range of budget to premium hotels"
        backgroundImage={backgrounds.hotels_bg}
      >
        <ServiceEnquiry
          contactNumber="03 9314 6957"
          service="Hotels & Accommodation"
        />
      </PageWrapper>
    );
  }
}

export default HotelsPage;
