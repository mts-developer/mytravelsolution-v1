import featuredImages from "../../assets/images/featured_images";

// https://www.world-airport-codes.com
// https://www.iata.org/publications/Pages/code-search.aspx

const flights = [
  {
    expiry: "2019-06-09",
    name: "mid year seat sale",
    featuredImage: featuredImages.asia_jpg,
    airline: "PR",
    region: "asia",
    origin: "MEL",
    destination: "MNL",
    returnFlight: true,
    price: 509,
    travelPeriodFrom: "2019-07-07",
    travelPeriodTo: "2019-11-30"
  },
  {
    expiry: "2019-06-09",
    name: "some other sale",
    featuredImage: featuredImages.oceania_jpg,
    airline: "PR",
    region: "asia",
    origin: "MEL",
    destination: "MNL",
    returnFlight: true,
    price: 747,
    travelPeriodFrom: "2019-07-07",
    travelPeriodTo: "2019-11-30"
  },
  {
    expiry: "2019-06-09",
    name: "another one",
    featuredImage: featuredImages.africa_jpg,
    airline: "PR",
    region: "asia",
    origin: "MEL",
    destination: "MNL",
    returnFlight: true,
    price: 603,
    travelPeriodFrom: "2019-07-07",
    travelPeriodTo: "2019-11-30"
  }
];

/**
 * The following would be an example of updating a key value.
 * This file will be updated using the CMS.
 *
 * flights[].airline = "WHATEVER";
 * console.log(flights);
 *
 *
 * Actually.. we might need Firebase...
 *
 */

export default flights;
