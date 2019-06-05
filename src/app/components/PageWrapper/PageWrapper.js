import React from "react";
import "./pagewrapper.css";
import Header from "../Header";
import Footer from "../Footer";

const PageWrapper = props => {
  let title = props.title;
  let description = props.description;

  return (
    <div>
      <div className="page-wrapper angled-bottom">
        <div className="padding-20">
          <Header />
          <div className="responsive-width">
            <div className="hero-title margin-none">
              <h1 className="white font--title bold">{title}</h1>
              <h2 className="white font--large thin">{description}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="responsive-height">
        <div className="responsive-height">{props.children}</div>
      </div>
      <Footer />
    </div>
  );
};

PageWrapper.defaultProps = {
  title: "Page Title",
  description: "Page description"
};

export default PageWrapper;
