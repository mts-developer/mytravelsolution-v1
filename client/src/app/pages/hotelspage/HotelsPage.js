import React from "react";
import "./hotelspage.css";
import SimpleEnquiryForm from "../../components/Forms/SimpleEnquiryForm";
import PageWrapper from "../../components/PageWrapper";
import backgrounds from "../../assets/images/bg";
import logos from "../../assets/images/logos";

class HotelsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PageWrapper
        title="Hotels"
        description="Book your stay from our range of budget to premium hotels"
        backgroundImage={backgrounds.hotels_bg}
      >
        <div className="hotelspage center column padding-20">
          <h1 className="font--large bold font--center">
            To make a booking or for more information on our range hotels and
            accommodation
          </h1>
          <a href="tel:0393146957" className="padding-20 column">
            <h1 className="center font--large font--center font--no-wrap bold primary-color margin-none">
              Call us now on 03 9314 6957
            </h1>
          </a>
          <img
            src={logos.mts_logo}
            className="logo--medium margin-50"
            alt="MTS Logo"
          />
          <h1 className="font--center font--large bold">
            Tired of waiting in line?
          </h1>
          <p className="font--center margin-20">
            Skip the service queue and get an emailed copy of all your enquiry
            details. Simply fill in the form below.
          </p>
          <SimpleEnquiryForm />
        </div>
      </PageWrapper>
    );
  }
}

export default HotelsPage;
