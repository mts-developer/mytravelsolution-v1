import icons from "../../assets/images/icons";
import backgrounds from "../../assets/images/bg";

const services = [
  {
    label: "Airfares & Featured Flights",
    shortLabel: "Flights",
    description: "Find exclusive airfares to destinations all around the world",
    background: backgrounds.featuredFlights_bg,
    white: icons.flight_white_png,
    grey: icons.flight_grey_png,
    url: "featured-flights"
  },
  {
    label: "Hotels & Accommodation",
    shortLabel: "Hotels",
    description: "Book your stay from our range of budget to premium hotels",
    background: backgrounds.hotels_bg,
    white: icons.hotel_white_png,
    grey: icons.hotel_grey_png,
    url: "hotels"
  },
  {
    label: "Car Hire",
    shortLabel: "Rentals",
    description:
      "Explore a fleet of vehicles and pick up a great deal for your next road trip",
    background: backgrounds.rentals_bg,
    white: icons.car_white_png,
    grey: icons.car_grey_png,
    url: "rentals"
  },
  {
    label: "Cruise & Cruise Packages",
    shortLabel: "Cruises",
    description:
      "Get onboard your next cruise holiday to your perfect getaway destinations",
    background: backgrounds.cruises_bg,
    white: icons.cruise_white_png,
    grey: icons.cruise_grey_png,
    url: "http://localhost:3000"
  },
  {
    label: "Tours & Packaged Deals",
    shortLabel: "Tours",
    description:
      "Save for your next trip and discover our menu of low-cost holiday packages",
    background: backgrounds.tours_bg,
    white: icons.packaged_deals_white_png,
    grey: icons.packaged_deals_grey_png,
    url: "tours"
  },
  {
    label: "Travel Insurance",
    shortLabel: "Insurance",
    description:
      "Ensure peace of mind on your journey and get a quote from our travel insurance providers",
    background: backgrounds.insurance_bg,
    white: icons.insurance_white_png,
    grey: icons.insurance_grey_png,
    url: "insurance"
  },
  {
    label: "Rail Tickets",
    shortLabel: "Rail",
    description:
      "Book your rail passes and tickets for worldwide transit networks",
    background: backgrounds.rail_bg,
    white: icons.railway_white_png,
    grey: icons.railway_grey_png,
    url: "rail"
  }
];

export default services;
