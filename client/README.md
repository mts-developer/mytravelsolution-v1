# My Travel Solution
- https://mytravelsolution.com.au
- https://2ctheworldtravelandcruise.com.au

# Styleguide
See [MyTraveSolution Styleguide](./Styleguide.md)

# Libraries Used

## Front End
- React
- Material UI

# Starting the application

## Starting the application for the first time
`cd` to the `/client` directory and type `npm install`

## Running the application
`cd` to the `/client` directory and type `npm start`
The front-end runs on `localhost:3000`

# Code Principles
Each component must be separated into their own folders and contain proprietary `.css` and `.test.js` files.

```
MenuBar/
  menuBar.css
  MenuBar.js
  menuBar.test.js
  index.js
```

##  Imports
### Images
All images will be exported and indexed as a single object per folder. 

Images will be imported and used as such:
```javascript
import logos from '../../logos'

<img src={logos.logo_name} alt="Main Logo" />
```