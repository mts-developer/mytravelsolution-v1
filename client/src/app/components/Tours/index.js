import featureImages from "../../assets/images/feature_images";

const tours = [
  {
    name: "Central Europe",
    region: "europe",
    price: 2965,
    description: "Explore a 15 Day Guided Tour from Frankfurt to Frankfurt",
    image: featureImages.europe_jpg,
    originCity: "frankfurt",
    destinationCity: "frankfurt",
    countriesVisited: [
      "germany",
      "poland",
      "slovakia",
      "hungary",
      "austria",
      "czech republic"
    ],
    citiesVisited: [
      "frankfurt",
      "weimar",
      "berlin",
      "poznan",
      "poland",
      "warsaw",
      "jasna gora",
      "auschwitz",
      "krakow",
      "budapest",
      "hungary",
      "vienna",
      "prague",
      "czech republic",
      "munich",
      "nordlingen",
      "rothenburg",
      "frankfurt"
    ],
    duration: {
      days: 13,
      nights: 12
    },
    remarks: [
      "3 to 4 star accommodation",
      "Max group size of 40",
      "Scenic/cultural trip style"
    ]
  },
  {
    name: "Journey Through Japan",
    region: "asia",
    price: 4317,
    description: "Explore a 12 Day Guided Tour from Tokyo to Osaka",
    image: featureImages.asia_jpg,
    originCity: "tokyo",
    destinationCity: "osaka",
    countriesVisited: ["japan"],
    citiesVisited: [
      "tokyo",
      "nikko",
      "utsunomiya",
      "matsumoto",
      "takayama",
      "kyoto",
      "matsue",
      "hiroshima",
      "osaka"
    ],
    duration: {
      days: 12,
      nights: 11
    },
    remarks: [
      "3 to 4 star accommodation",
      "Max group size of 50",
      "Guided tour trip style"
    ]
  },
  {
    name: "Great Canadian Rail Journey",
    region: "north america",
    price: 6239,
    description:
      "This breathtaking tour crosses Canada using the historic railroad",
    image: featureImages.canada_jpg,
    originCity: "toronto",
    destinationCity: "vancouver",
    countriesVisited: ["canada"],
    citiesVisited: [
      "toronto",
      "ontario",
      "manitoba",
      "saskatchewan",
      "jasper",
      "banff",
      "kelowna",
      "victoria",
      "vancouver"
    ],
    duration: {
      days: 13,
      nights: 12
    },
    remarks: [
      "Meals included",
      "Touring by private, air-conditioned motorcoach",
      "First-Class or Superior First-Class with private bath or shower"
    ]
  }
];

export default tours;
