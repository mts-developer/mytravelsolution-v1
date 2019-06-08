import React from "react";
import "./pagewrapper.css";
import Header from "../Header";
import Angle from "../Angle";
import Footer from "../Footer";
import colors from "../../themes/colors";

const PageWrapper = props => {
  let title = props.title;
  let description = props.description;

  return (
    <div className="page-wrapper">
      <div className="page-wrapper-container">
        <div className="padding-20">
          <Header />
          <div className="responsive-width">
            <div className="hero-title margin-none">
              <h1 className="white font--title bold">{title}</h1>
              <h2 className="white font--large thin">{description}</h2>
            </div>
          </div>
        </div>
        <Angle fill={colors.white} />
      </div>
      {props.children}
      <Footer />
    </div>
  );
};

PageWrapper.defaultProps = {
  title: "Page Title",
  description: "Page description"
};

export default PageWrapper;
