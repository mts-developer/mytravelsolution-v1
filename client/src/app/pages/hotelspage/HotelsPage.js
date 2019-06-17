import React from "react";
import "./hotelspage.css";
import PageWrapper from "../../components/PageWrapper";
import backgrounds from "../../assets/images/bg";

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
          <p className="font--center">
            To make a booking or for more information on our range hotels and
            accommodation
          </p>
          <a href="tel:0393146957" className="padding-20 column">
            <h1 className="center font--large font--center font--no-wrap bold margin-none">
              Call us now on 03 9314 6957
            </h1>
          </a>
          <p className="font--center font--large bold margin-top-20">
            Tired of waiting in line?
          </p>
          <p className="font--center margin-20">
            Skip the service queue and get an emailed copy of all your enquiry
            details, fill in the form below.
          </p>
        </div>
      </PageWrapper>
    );
  }
}

export default HotelsPage;
