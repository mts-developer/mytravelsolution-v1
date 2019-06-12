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
        <div className="center column padding-20">
          <h1 className="center font--header primary-color bold">
            Currently in development...
          </h1>
        </div>
      </PageWrapper>
    );
  }
}

export default HotelsPage;
