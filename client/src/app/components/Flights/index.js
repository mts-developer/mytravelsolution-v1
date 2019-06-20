import featureImages from "../../assets/images/feature_images";
import logos from "../../assets/images/logos";

// https://www.world-airport-codes.com
// https://www.iata.org/publications/Pages/code-search.aspx

const flights = [
  {
    expiry: "2019-05-31",
    name: "Cebu Pacific Sale",
    featuredImage: featureImages.philippines_1,
    airline: {
      airlineName: "Cebu Pacific",
      airlineCode: "5J",
      airlineImage: logos.cebu_pacific_logo
    },
    region: "asia",
    origin: "MEL",
    destination: "MNL",
    returnFlight: true,
    price: 310,
    travelPeriods: [
      {
        from: "2019-07-01",
        to: "2019-11-30"
      },
      {
        from: "2020-01-13",
        to: "2020-02-29"
      }
    ],
    remarks: [
      "Base fare only",
      "SYD to MNL also available",
      "Subject to availability"
    ]
  },
  {
    expiry: "2019-06-08",
    name: "Midyear seat sale",
    featuredImage: featureImages.philippines_2,
    airline: {
      airlineName: "Philippine Airlines",
      airlineCode: "PR",
      airlineImage: logos.philippine_airlines_logo
    },
    region: "asia",
    origin: "MEL",
    destination: "MNL",
    returnFlight: true,
    price: 589,
    travelPeriods: [
      {
        from: "2019-07-07",
        to: "2019-11-30"
      }
    ],
    remarks: [
      "MNL & beyond also available",
      "SYD to MNL also available",
      "Black out periods apply"
    ]
  },
  {
    expiry: "2019-05-31",
    name: "Royal Brunei Special",
    featuredImage: featureImages.philippines_3,
    airline: {
      airlineName: "Royal Brunei Airlines",
      airlineCode: "BI",
      airlineImage: logos.royal_brunei_logo
    },
    region: "asia",
    origin: "MEL",
    destination: "MNL",
    returnFlight: true,
    price: 585,
    travelPeriods: [
      {
        from: "2019-08-30",
        to: "2019-11-30"
      }
    ],
    remarks: ["Subject to availability"]
  },
  {
    expiry: "2019-06-30",
    name: "Philippine Airlines Special",
    featuredImage: featureImages.philippines_4,
    airline: {
      airlineName: "Philippine Airlines",
      airlineCode: "PR",
      airlineImage: logos.philippine_airlines_logo
    },
    region: "asia",
    origin: "MEL",
    destination: "MNL",
    returnFlight: true,
    price: 545,
    travelPeriods: [
      {
        from: "2019-07-16",
        to: "2020-03-31"
      }
    ],
    remarks: [
      "DEC to JAN 2020 not available",
      "Blackout periods apply",
      "Subject to availability"
    ]
  }
];

export default flights;
