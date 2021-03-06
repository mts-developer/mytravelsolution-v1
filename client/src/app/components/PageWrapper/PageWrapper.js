import React from "react";
import "./pagewrapper.css";
import Header from "../Header";
import Angle from "../Angle";
import Footer from "../Footer";
import colors from "../../themes/colors";

const PageWrapper = props => {
  const { title, description, backgroundImage } = props;
  const style = {
    background: `linear-gradient(var(--black-transparent) 10%, var(--transparent) 50%), url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };

  return (
    <div className="page-wrapper">
      <div className="page-wrapper-container" style={style}>
        <div className="padding-20">
          <Header />
          <div className="responsive-width">
            <div className="hero-title margin-none">
              <h1 className="white font--title bold font-shadow margin-none padding-top-20">
                {title}
              </h1>
              <h2 className="page-wrapper__description white font--large thin margin-top-5 padding-5">
                {description}
              </h2>
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
