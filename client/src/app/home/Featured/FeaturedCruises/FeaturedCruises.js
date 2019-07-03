import React from "react";
import "./featuredcruises.css";
import CruiseCard from "../../../components/CruiseCard";
import LinkButton from "../../../components/Buttons/LinkButton";
import Carousel from "../../../components/Carousel";
import cruises from "../../../components/Cruises";

const FeaturedCruises = () => {
  return (
    <div className="featuredcruises">
      <Carousel>
        {cruises.map((cruise, i) => {
          return <CruiseCard key={i} cruise={cruise} />;
        })}
      </Carousel>
      <div className="center padding-20 margin-top-20">
        <LinkButton label="View More Cruises" url={"/cruises"} />
      </div>
    </div>
  );
};

export default FeaturedCruises;
