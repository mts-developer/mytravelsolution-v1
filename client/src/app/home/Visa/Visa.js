import React from "react";
import "./visa.css";
import LabelLinkButton from "../../components/Buttons/LabelLinkButton";
import PartnerCard from "../../components/PartnerCard";
import logos from "../../assets/images/logos";
import icons from "../../assets/images/icons";

const visaLinkFacts = [
  {
    word: "Fast",
    description: "Visalink is the fastest way to get a travel visa or passport."
  },
  {
    word: "Easy",
    description:
      "Visalink can help. Visalink experts are available by phone or email."
  },
  {
    word: "Secure",
    description:
      "Visalink maintains the highest industry standard in data security."
  }
];

const Visa = () => {
  return (
    <div className="visa padding-20">
      <div className="center row wrap">
        <div className="visa-left column">
          <h2 className="font--large bold primary-color margin-none">
            MY TRAVEL SOLUTION PARTNER
          </h2>
          <h2 className="font--header bold margin-none">VisaLink</h2>
          <h2 className="font--large margin-none padding-bottom-20">
            Over 10 million travellers have used VisaLink
          </h2>
          {visaLinkFacts.map((fact, i) => {
            return (
              <div key={i} className="row middle">
                <img
                  className="icon--small margin-right-20"
                  src={icons.tick_grey_svg}
                  alt="Tick"
                />
                <div className="column padding-y-5">
                  <p className="font--medium bold">{`${fact.word}.`}</p>
                  <p className="font--small">{fact.description}</p>
                </div>
              </div>
            );
          })}

          <div className="margin-top-20 margin-bottom-50">
            <LabelLinkButton
              label="Enquire Now →"
              external
              url="https://visalink.com.au/?login=mytravelsolution"
            />
          </div>
        </div>
        <div className="visa-right middle">
          <PartnerCard
            url="https://visalink.com.au/?login=mytravelsolution"
            logo={logos.visalink_logo}
            color="var(--dark-grey)"
            description="VisaLink is the global leader in travel visas. Millions of
          international travellers have trusted VisaLink to secure their
          business visas or tourist visas."
          />
        </div>
      </div>
    </div>
  );
};

export default Visa;
